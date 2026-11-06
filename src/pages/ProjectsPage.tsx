import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import {
  MANH_COMPANY_INFO,
  VERIFIED_PROJECTS,
} from '../data/verifiedCorporateData';
import { useApp } from '../i18n/LanguageContext';

export const ProjectsPage: React.FC = () => {
  const { language, navigate, pick } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    {
      id: 'all',
      label: { en: 'All Works (07)', el: 'Όλα τα Έργα (07)' },
    },
    {
      id: 'Ship Repairs & Maintenance',
      label: { en: 'Ship Repairs & Maintenance', el: 'Επισκευές & Συντήρηση' },
    },
    {
      id: 'Shipbuilding & Construction',
      label: { en: 'Shipbuilding & Construction', el: 'Κατασκευές & Μετασκευές' },
    },
    {
      id: 'Mechanical & Engineering Works',
      label: { en: 'Mechanical & Engineering', el: 'Μηχανολογικές Εργασίες' },
    },
    {
      id: 'Steel & Technical Works',
      label: { en: 'Steel & Technical Works', el: 'Ελασματουργικά & Τεχνικά' },
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? VERIFIED_PROJECTS
      : VERIFIED_PROJECTS.filter((p) => p.category.en === activeCategory);

  return (
    <div className="bg-[#F5F4F0] text-[#111820]">
      {/* 1. PAGE HEADER */}
      <section className="bg-[#111820] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.24em] text-[#B19A75]">
              <span className="w-8 h-[1px] bg-[#B19A75]" />
              <span>
                {language === 'el'
                  ? 'ΧΑΡΤΟΦΥΛΑΚΙΟ ΕΡΓΩΝ · MANH COMPANY'
                  : 'REFERENCE PORTFOLIO · MANH COMPANY'}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              {language === 'el'
                ? 'Έργα & Τεχνικές Αναφορές.'
                : 'Projects & Technical References.'}
            </h1>

            <p className="text-base sm:text-lg text-[#F5F4F0]/80 leading-relaxed max-w-3xl">
              {language === 'el'
                ? 'Παρουσίαση τεχνικών έργων της MANH Company στους τομείς των επισκευών πλοίων, των ελασματουργικών κατασκευών, των μετασκευών και των μηχανολογικών συστημάτων.'
                : 'Selected technical works executed by MANH Company across ship repairs, structural steel renewals, vessel conversions, and marine engineering systems.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. MARINE & INDUSTRIAL VERIFIED PROJECTS */}
      <section className="py-16 sm:py-24 border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Interactive Category Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 border-b border-[#111820]/15">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#65747F] block">
                {language === 'el'
                  ? 'Τομέας 01 · MANH Company'
                  : 'Sector 01 · MANH Company'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111820] mt-1">
                {language === 'el'
                  ? 'Ναυπηγοεπισκευαστικά & Βιομηχανικά Έργα'
                  : 'Marine & Industrial Engineering Works'}
              </h2>
            </div>

            <div
              role="group"
              aria-label={language === 'el' ? 'Φίλτρο κατηγορίας έργων' : 'Filter projects by category'}
              className="flex flex-wrap items-center gap-1.5"
            >
              {categories.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 text-xs font-mono transition-colors cursor-pointer whitespace-nowrap shrink-0 border ${
                      active
                        ? 'bg-[#111820] text-white border-[#111820]'
                        : 'bg-white text-[#111820] border-[#111820]/15 hover:border-[#B19A75]'
                    }`}
                  >
                    {pick(cat.label)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project List */}
          <div className="mt-12 space-y-12">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white border border-[#111820]/15 grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#111820]/15 flex flex-col">
                  <div className="flex-1 min-h-[280px] sm:min-h-[340px]">
                    <ResilientImage
                      src={project.image}
                      alt={pick(project.imageAlt)}
                      theme="dark"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 border-t border-[#111820]/15 bg-[#F5F4F0] divide-x divide-[#111820]/15">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-4">
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-[#65747F]">
                          {pick(m.label)}
                        </span>
                        <span className="block font-mono text-xs font-semibold text-[#111820] mt-0.5">
                          {pick(m.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#65747F]">
                      <span className="text-[#B19A75] font-semibold">
                        {project.index}
                      </span>
                      <span>·</span>
                      <span className="text-[#111820] font-medium">
                        {pick(project.category)}
                      </span>
                      <span>·</span>
                      <span>{pick(project.vesselType)}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111820]">
                      {pick(project.title)}
                    </h3>

                    <p className="text-sm sm:text-base text-[#111820]/85 leading-relaxed">
                      {pick(project.summary)}
                    </p>

                    <div className="pt-4 border-t border-[#111820]/10">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[#65747F] mb-3">
                        {language === 'el'
                          ? 'Εκτελεσθέν Τεχνικό Αντικείμενο'
                          : 'Executed Technical Scope'}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#111820]/80">
                        {project.technicalScope.map((item, i) => (
                          <li key={i} className="flex items-baseline gap-3">
                            <span className="font-mono text-xs text-[#B19A75] shrink-0">
                              0{i + 1}.
                            </span>
                            <span>{pick(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#111820]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                    <span className="text-[#65747F]">
                      {MANH_COMPANY_INFO.brandName} · Marine &amp; Industrial Services
                    </span>
                    <button
                      type="button"
                      onClick={() => navigate('/contact', { sectorPreset: 'marine' })}
                      className="text-[#111820] hover:text-[#B19A75] font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>
                        {language === 'el'
                          ? 'Ζητήστε Τεχνική Προσφορά'
                          : 'Request Similar Technical Scope'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B19A75]" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REAL ESTATE & ASSETS PORTFOLIO NOTE */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="border border-[#111820]/15 bg-[#F5F4F0] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#B19A75] font-semibold">
                {language === 'el'
                  ? 'Τομέας 02 · Ακίνητη Περιουσία & Διαχείριση'
                  : 'Sector 02 · Real Estate & Asset Management'}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111820]">
                {language === 'el'
                  ? 'Χαρτοφυλάκιο Ακινήτων — MANH Company'
                  : 'Real Estate Asset Portfolio — MANH Company'}
              </h2>
              <p className="text-sm sm:text-base text-[#65747F] leading-relaxed">
                {language === 'el'
                  ? 'Η MANH Company κατέχει, διαχειρίζεται, εκμισθώνει και αξιοποιεί ακίνητα κατοικίας και φιλοξενίας με μακροχρόνιο ορίζοντα. Η εταιρεία δεν δημοσιεύει δημόσιες μεσιτικές αγγελίες μεμονωμένων ακινήτων στον ιστότοπό της. Για πληροφορίες σχετικά με μισθώσεις ή αξιοποίηση ακινήτων, επικοινωνήστε απευθείας μαζί μας.'
                  : 'MANH Company owns, manages, leases, and utilizes residential and hospitality real estate assets with a long-term stewardship horizon. The company does not publish public brokerage listings or individual property catalogs online. For leasing or asset inquiries, please contact us directly.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <button
                type="button"
                onClick={() => navigate('/real-estate')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-display font-semibold uppercase tracking-wider bg-[#111820] text-white hover:bg-[#1d2836] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>
                  {language === 'el'
                    ? 'Υπηρεσίες Ακίνητης Περιουσίας'
                    : 'Explore Real Estate Sector'}
                </span>
                <ArrowRight className="w-4 h-4 text-[#B19A75]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
