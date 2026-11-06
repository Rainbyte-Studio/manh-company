import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { MANH_COMPANY_INFO } from '../data/verifiedCorporateData';
import { useApp } from '../i18n/LanguageContext';
import { RoutePath } from '../i18n/types';

export const Header: React.FC = () => {
  const { language, setLanguage, route, navigate, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dark hero routes where header can start transparent over dark imagery
  const hasDarkHero =
    route === '/' || route === '/marine-industrial' || route === '/about';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSectorsDropdownOpen(false);
  }, [route]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSectorsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setSectorsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const useLightText = hasDarkHero && !scrolled && !mobileMenuOpen;

  const isSectorActive =
    route === '/marine-industrial' || route === '/real-estate';

  const handleNavClick = (e: React.MouseEvent, target: RoutePath) => {
    e.preventDefault();
    navigate(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#111820]/95 backdrop-blur-md border-b border-white/10 text-white'
          : useLightText
          ? 'bg-gradient-to-b from-[#111820]/80 to-transparent border-b border-white/10 text-white'
          : 'bg-[#F5F4F0]/95 backdrop-blur-md border-b border-[#111820]/10 text-[#111820]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Clean Typography-Based Corporate Wordmark */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          aria-label="MANH Company — Home"
          className="group flex flex-col justify-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75]"
        >
          <span
            className={`font-display text-xl sm:text-2xl font-extrabold tracking-[0.14em] leading-none transition-colors ${
              scrolled || mobileMenuOpen || useLightText
                ? 'text-white'
                : 'text-[#111820]'
            }`}
          >
            MANH
          </span>
          <span
            className={`font-display text-[9px] sm:text-[10px] font-semibold tracking-[0.38em] uppercase mt-1 leading-none transition-colors ${
              scrolled || mobileMenuOpen || useLightText
                ? 'text-[#B19A75]'
                : 'text-[#65747F] group-hover:text-[#111820]'
            }`}
          >
            COMPANY
          </span>
        </a>

        {/* Zone 2: Primary Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 text-sm font-medium"
        >
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            aria-current={route === '/' ? 'page' : undefined}
            className={`py-1.5 border-b transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75] ${
              route === '/'
                ? 'border-[#B19A75] text-[#B19A75]'
                : scrolled || useLightText
                ? 'border-transparent text-white/85 hover:text-white hover:border-white/40'
                : 'border-transparent text-[#111820]/80 hover:text-[#111820] hover:border-[#111820]/40'
            }`}
          >
            {t.nav.home}
          </a>

          <a
            href="/about"
            onClick={(e) => handleNavClick(e, '/about')}
            aria-current={route === '/about' ? 'page' : undefined}
            className={`py-1.5 border-b transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75] ${
              route === '/about'
                ? 'border-[#B19A75] text-[#B19A75]'
                : scrolled || useLightText
                ? 'border-transparent text-white/85 hover:text-white hover:border-white/40'
                : 'border-transparent text-[#111820]/80 hover:text-[#111820] hover:border-[#111820]/40'
            }`}
          >
            {t.nav.about}
          </a>

          {/* Business Sectors Accessible Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setSectorsDropdownOpen(true)}
            onMouseLeave={() => setSectorsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSectorsDropdownOpen((prev) => !prev)}
              aria-expanded={sectorsDropdownOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1.5 py-1.5 border-b transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75] ${
                isSectorActive
                  ? 'border-[#B19A75] text-[#B19A75]'
                  : scrolled || useLightText
                  ? 'border-transparent text-white/85 hover:text-white hover:border-white/40'
                  : 'border-transparent text-[#111820]/80 hover:text-[#111820] hover:border-[#111820]/40'
              }`}
            >
              <span>{t.nav.sectors}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  sectorsDropdownOpen ? 'rotate-180 text-[#B19A75]' : ''
                }`}
              />
            </button>

            {sectorsDropdownOpen && (
              <div className="absolute left-0 top-full pt-3 w-80 z-50">
                <div className="bg-[#111820] border border-white/15 shadow-2xl p-2 text-white divide-y divide-white/10">
                  <a
                    href="/marine-industrial"
                    onClick={(e) => handleNavClick(e, '/marine-industrial')}
                    className={`block p-3.5 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#B19A75] ${
                      route === '/marine-industrial' ? 'bg-white/5' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-semibold text-white">
                        {t.nav.marine}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B19A75]" />
                    </div>
                    <p className="mt-1 text-xs text-[#F5F4F0]/65">
                      {language === 'el'
                        ? 'Επισκευές Πλοίων, Κατασκευές & Τεχνικές Εργασίες'
                        : 'Ship Repairs, Construction & Technical Works'}
                    </p>
                  </a>

                  <a
                    href="/real-estate"
                    onClick={(e) => handleNavClick(e, '/real-estate')}
                    className={`block p-3.5 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#B19A75] ${
                      route === '/real-estate' ? 'bg-white/5' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-semibold text-white">
                        {t.nav.realEstate}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B19A75]" />
                    </div>
                    <p className="mt-1 text-xs text-[#F5F4F0]/65">
                      {language === 'el'
                        ? 'Κατοχή, Διαχείριση, Εκμίσθωση & Αξιοποίηση Ακινήτων'
                        : 'Property Ownership, Management, Leasing & Utilization'}
                    </p>
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="/projects"
            onClick={(e) => handleNavClick(e, '/projects')}
            aria-current={route === '/projects' ? 'page' : undefined}
            className={`py-1.5 border-b transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75] ${
              route === '/projects'
                ? 'border-[#B19A75] text-[#B19A75]'
                : scrolled || useLightText
                ? 'border-transparent text-white/85 hover:text-white hover:border-white/40'
                : 'border-transparent text-[#111820]/80 hover:text-[#111820] hover:border-[#111820]/40'
            }`}
          >
            {t.nav.projects}
          </a>

          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, '/contact')}
            aria-current={route === '/contact' ? 'page' : undefined}
            className={`py-1.5 border-b transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75] ${
              route === '/contact'
                ? 'border-[#B19A75] text-[#B19A75]'
                : scrolled || useLightText
                ? 'border-transparent text-white/85 hover:text-white hover:border-white/40'
                : 'border-transparent text-[#111820]/80 hover:text-[#111820] hover:border-[#111820]/40'
            }`}
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: Language Switcher & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <div
            role="group"
            aria-label={t.nav.switchLanguage}
            className={`inline-flex items-center border text-xs font-mono tracking-wider ${
              scrolled || mobileMenuOpen || useLightText
                ? 'border-white/20 text-white'
                : 'border-[#111820]/20 text-[#111820]'
            }`}
          >
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`px-3 py-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B19A75] ${
                language === 'en'
                  ? 'bg-[#B19A75] text-[#111820] font-semibold'
                  : 'hover:text-[#B19A75]'
              }`}
            >
              EN
            </button>
            <span
              aria-hidden="true"
              className={`w-[1px] h-4 ${
                scrolled || mobileMenuOpen || useLightText
                  ? 'bg-white/20'
                  : 'bg-[#111820]/20'
              }`}
            />
            <button
              type="button"
              onClick={() => setLanguage('el')}
              aria-pressed={language === 'el'}
              className={`px-3 py-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#B19A75] ${
                language === 'el'
                  ? 'bg-[#B19A75] text-[#111820] font-semibold'
                  : 'hover:text-[#B19A75]'
              }`}
            >
              EL
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B19A75] ${
              scrolled || mobileMenuOpen || useLightText
                ? 'border-white/20 text-white hover:border-[#B19A75]'
                : 'border-[#111820]/20 text-[#111820] hover:border-[#B19A75]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full-Height Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#111820] text-white overflow-y-auto border-t border-white/10 z-50"
        >
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-8 flex flex-col justify-between min-h-full">
            <nav aria-label="Mobile Navigation" className="divide-y divide-white/10">
              <a
                href="/"
                onClick={(e) => handleNavClick(e, '/')}
                className={`block py-4 font-display text-xl font-semibold transition-colors ${
                  route === '/' ? 'text-[#B19A75]' : 'text-white hover:text-[#B19A75]'
                }`}
              >
                {t.nav.home}
              </a>

              <a
                href="/about"
                onClick={(e) => handleNavClick(e, '/about')}
                className={`block py-4 font-display text-xl font-semibold transition-colors ${
                  route === '/about' ? 'text-[#B19A75]' : 'text-white hover:text-[#B19A75]'
                }`}
              >
                {t.nav.about}
              </a>

              <div className="py-4 space-y-3">
                <span className="block text-xs font-mono uppercase tracking-[0.2em] text-[#B19A75]">
                  {t.nav.sectors}
                </span>
                <a
                  href="/marine-industrial"
                  onClick={(e) => handleNavClick(e, '/marine-industrial')}
                  className={`block py-2 pl-3 border-l border-white/20 font-display text-lg font-medium transition-colors ${
                    route === '/marine-industrial'
                      ? 'text-[#B19A75] border-[#B19A75]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {t.nav.marine}
                  <span className="block text-xs font-sans text-[#65747F] mt-0.5">
                    MANH Company
                  </span>
                </a>
                <a
                  href="/real-estate"
                  onClick={(e) => handleNavClick(e, '/real-estate')}
                  className={`block py-2 pl-3 border-l border-white/20 font-display text-lg font-medium transition-colors ${
                    route === '/real-estate'
                      ? 'text-[#B19A75] border-[#B19A75]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {t.nav.realEstate}
                  <span className="block text-xs font-sans text-[#65747F] mt-0.5">
                    MANH Company
                  </span>
                </a>
              </div>

              <a
                href="/projects"
                onClick={(e) => handleNavClick(e, '/projects')}
                className={`block py-4 font-display text-xl font-semibold transition-colors ${
                  route === '/projects'
                    ? 'text-[#B19A75]'
                    : 'text-white hover:text-[#B19A75]'
                }`}
              >
                {t.nav.projects}
              </a>

              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, '/contact')}
                className={`block py-4 font-display text-xl font-semibold transition-colors ${
                  route === '/contact'
                    ? 'text-[#B19A75]'
                    : 'text-white hover:text-[#B19A75]'
                }`}
              >
                {t.nav.contact}
              </a>
            </nav>

            <div className="pt-8 mt-8 border-t border-white/10 space-y-3 text-xs text-[#F5F4F0]/60">
              <p className="font-mono text-[#B19A75]">
                MANH Company · Engineering Excellence. Lasting Asset Value.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 font-mono">
                <span>
                  {language === 'el'
                    ? `Αριθμός Γ.Ε.ΜΗ.: ${MANH_COMPANY_INFO.gemi}`
                    : `General Commercial Registry (G.E.MI.) No.: ${MANH_COMPANY_INFO.gemi}`}
                </span>
                <span className="hidden sm:inline">·</span>
                <span>
                  {language === 'el'
                    ? `Αριθμός Φορολογικού Μητρώου: ${MANH_COMPANY_INFO.afm}`
                    : `Tax Identification Number (AFM): ${MANH_COMPANY_INFO.afm}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
