import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { SEO_BY_ROUTE, UI_TEXT } from './translations';
import { BilingualText, Language, RoutePath } from './types';

const PRIMARY_DOMAIN = 'https://manhcompany.com';

const VALID_ROUTES: RoutePath[] = [
  '/',
  '/about',
  '/marine-industrial',
  '/real-estate',
  '/projects',
  '/contact',
  '/privacy-policy',
];

function normalizeRoute(pathname: string): RoutePath {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  if ((VALID_ROUTES as string[]).includes(cleaned)) {
    return cleaned as RoutePath;
  }
  return '/';
}

interface AppContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  route: RoutePath;
  navigate: (to: RoutePath, options?: { sectorPreset?: 'marine' | 'real-estate' }) => void;
  contactSectorPreset: 'marine' | 'real-estate';
  setContactSectorPreset: (sector: 'marine' | 'real-estate') => void;
  t: typeof UI_TEXT['en'];
  pick: (bilingual: BilingualText) => string;
}

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'el' || urlLang === 'en') {
      return urlLang;
    }
    const stored = window.localStorage.getItem('manh_company_lang');
    if (stored === 'el' || stored === 'en') {
      return stored;
    }
    return 'en';
  });

  const [route, setRoute] = useState<RoutePath>(() => {
    if (typeof window === 'undefined') return '/';
    return normalizeRoute(window.location.pathname);
  });

  const [contactSectorPreset, setContactSectorPreset] = useState<
    'marine' | 'real-estate'
  >('marine');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('manh_company_lang', lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  const navigate = useCallback(
    (to: RoutePath, options?: { sectorPreset?: 'marine' | 'real-estate' }) => {
      if (options?.sectorPreset) {
        setContactSectorPreset(options.sectorPreset);
      }
      setRoute(to);
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.origin + to);
        if (language === 'el') {
          url.searchParams.set('lang', 'el');
        }
        window.history.pushState({}, '', url.toString());
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [language]
  );

  useEffect(() => {
    const handlePopState = () => {
      setRoute(normalizeRoute(window.location.pathname));
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'el' || urlLang === 'en') {
        setLanguageState(urlLang);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize HTML lang attribute and SEO meta tags on route or language change
  useEffect(() => {
    document.documentElement.lang = language;
    const seo = SEO_BY_ROUTE[language][route] || SEO_BY_ROUTE[language]['/'];
    document.title = seo.title;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    const canonicalUrl = `${PRIMARY_DOMAIN}${route === '/' ? '/' : route}`;

    setMeta('meta[name="description"]', seo.description);
    setMeta('meta[property="og:title"]', seo.title);
    setMeta('meta[property="og:description"]', seo.description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', seo.title);
    setMeta('meta[name="twitter:description"]', seo.description);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', canonicalUrl);

    const hreflangEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
    if (hreflangEn) hreflangEn.setAttribute('href', `${canonicalUrl}?lang=en`);

    const hreflangEl = document.querySelector('link[rel="alternate"][hreflang="el"]');
    if (hreflangEl) hreflangEl.setAttribute('href', `${canonicalUrl}?lang=el`);

    const hreflangDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (hreflangDefault) hreflangDefault.setAttribute('href', canonicalUrl);
  }, [language, route]);

  const pick = useCallback(
    (bilingual: BilingualText) => {
      return language === 'el' ? bilingual.el : bilingual.en;
    },
    [language]
  );

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        route,
        navigate,
        contactSectorPreset,
        setContactSectorPreset,
        t: UI_TEXT[language],
        pick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return ctx;
}
