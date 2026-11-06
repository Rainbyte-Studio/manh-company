import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MANH_COMPANY_INFO } from '../data/verifiedCorporateData';
import { useApp } from '../i18n/LanguageContext';
import { RoutePath } from '../i18n/types';

export const Footer: React.FC = () => {
  const { language, navigate, t } = useApp();
  const currentYear = new Date().getFullYear();

  const handleLink = (e: React.MouseEvent, target: RoutePath) => {
    e.preventDefault();
    navigate(target);
  };

  return (
    <footer className="bg-[#111820] text-[#F5F4F0] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        {/* Top Row: Brand Identity + Navigation + Business Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Wordmark & Official Company Information */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              aria-label="MANH Company — Home"
              className="inline-flex flex-col focus-visible:outline-2 focus-visible:outline-[#B19A75]"
            >
              <span className="font-display text-2xl font-extrabold tracking-[0.14em] text-white leading-none">
                MANH
              </span>
              <span className="font-display text-[10px] font-semibold tracking-[0.38em] uppercase text-[#B19A75] mt-1.5 leading-none">
                COMPANY
              </span>
            </a>

            <p className="text-sm text-[#F5F4F0]/75 leading-relaxed max-w-md">
              {t.footer.description}
            </p>

            {/* Official Corporate Registry Block (Exact EN/EL Specification) */}
            <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs font-mono">
              <div className="font-display text-sm font-bold text-white tracking-wide">
                {MANH_COMPANY_INFO.brandName}
              </div>
              <div className="text-[#F5F4F0]/85">
                {language === 'el'
                  ? `Αριθμός Γ.Ε.ΜΗ.: ${MANH_COMPANY_INFO.gemi}`
                  : `General Commercial Registry (G.E.MI.) No.: ${MANH_COMPANY_INFO.gemi}`}
              </div>
              <div className="text-[#F5F4F0]/85">
                {language === 'el'
                  ? `Αριθμός Φορολογικού Μητρώου: ${MANH_COMPANY_INFO.afm}`
                  : `Tax Identification Number (AFM): ${MANH_COMPANY_INFO.afm}`}
              </div>
            </div>
          </div>

          {/* Col 2: Website Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-[#B19A75]">
              {t.footer.navigationTitle}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, '/')}
                  className="text-[#F5F4F0]/80 hover:text-white transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink(e, '/about')}
                  className="text-[#F5F4F0]/80 hover:text-white transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="/marine-industrial"
                  onClick={(e) => handleLink(e, '/marine-industrial')}
                  className="text-[#F5F4F0]/80 hover:text-white transition-colors"
                >
                  {t.nav.marine}
                </a>
              </li>
              <li>
                <a
                  href="/real-estate"
                  onClick={(e) => handleLink(e, '/real-estate')}
                  className="text-[#F5F4F0]/80 hover:text-white transition-colors"
                >
                  {t.nav.realEstate}
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={(e) => handleLink(e, '/projects')}
                  className="text-[#F5F4F0]/80 hover:text-white transition-colors"
                >
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink(e, '/contact')}
                  className="text-[#F5F4F0]/80 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleLink(e, '/privacy-policy')}
                  className="text-[#F5F4F0]/80 hover:text-white transition-colors"
                >
                  {t.footer.privacyPolicy}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Business Sectors */}
          <div className="lg:col-span-4 space-y-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-[#B19A75]">
              {t.footer.sectorsTitle}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <a
                href="/marine-industrial"
                onClick={(e) => handleLink(e, '/marine-industrial')}
                className="group border border-white/10 p-5 space-y-2 bg-white/[0.02] hover:border-[#B19A75]/60 transition-colors block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#B19A75]">
                    01 · MARINE &amp; INDUSTRIAL
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B19A75] transition-transform group-hover:translate-x-0.5" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {t.nav.marine}
                </h3>
                <p className="text-xs text-[#F5F4F0]/70 leading-relaxed">
                  {language === 'el'
                    ? 'Επισκευές πλοίων, κατασκευές, μηχανολογικές, ελασματουργικές και ηλεκτρολογικές εργασίες.'
                    : 'Ship repairs, construction, mechanical engineering, steelworks, and electrical installations.'}
                </p>
              </a>

              <a
                href="/real-estate"
                onClick={(e) => handleLink(e, '/real-estate')}
                className="group border border-white/10 p-5 space-y-2 bg-white/[0.02] hover:border-[#B19A75]/60 transition-colors block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#B19A75]">
                    02 · REAL ESTATE &amp; ASSETS
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B19A75] transition-transform group-hover:translate-x-0.5" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {t.nav.realEstate}
                </h3>
                <p className="text-xs text-[#F5F4F0]/70 leading-relaxed">
                  {language === 'el'
                    ? 'Κατοχή, διαχείριση, εκμίσθωση, αξιοποίηση και μακροχρόνια φροντίδα ακινήτων.'
                    : 'Property ownership, management, leasing, utilization, and long-term asset stewardship.'}
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Official Registry Summary & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#F5F4F0]/65 font-mono">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-white font-semibold">MANH Company</span>
            <span>·</span>
            <span>
              {language === 'el'
                ? `Αριθμός Γ.Ε.ΜΗ.: ${MANH_COMPANY_INFO.gemi}`
                : `General Commercial Registry (G.E.MI.) No.: ${MANH_COMPANY_INFO.gemi}`}
            </span>
            <span>·</span>
            <span>
              {language === 'el'
                ? `Αριθμός Φορολογικού Μητρώου: ${MANH_COMPANY_INFO.afm}`
                : `Tax Identification Number (AFM): ${MANH_COMPANY_INFO.afm}`}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLink(e, '/privacy-policy')}
              className="hover:text-[#B19A75] transition-colors"
            >
              {t.footer.privacyPolicy}
            </a>
            <span>·</span>
            <span>
              © {currentYear} MANH Company. {t.footer.rightsReserved}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
