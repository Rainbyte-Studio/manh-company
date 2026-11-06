import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import {
  GENERATED_IMAGES,
  MANH_COMPANY_INFO,
  MARINE_CAPABILITIES,
  REAL_ESTATE_ACTIVITIES,
} from '../data/verifiedCorporateData';
import { useApp } from '../i18n/LanguageContext';

export const AboutPage: React.FC = () => {
  const { language, navigate, t, pick } = useApp();

  return (
    <div className="bg-[#F5F4F0] text-[#111820]">
      {/* 1. INTRODUCTORY HERO */}
      <section className="bg-[#111820] text-white pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#B19A75]">
              <span className="w-8 h-[1px] bg-[#B19A75]" />
              <span>
                {language === 'el'
                  ? 'ΕΤΑΙΡΙΚΗ ΤΑΥΤΟΤΗΤΑ · MANH COMPANY'
                  : 'CORPORATE PRESENTATION · MANH COMPANY'}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              {language === 'el'
                ? 'Μηχανική Αρτιότητα. Διαχρονική Αξία Ακινήτων.'
                : 'Engineering Excellence. Lasting Asset Value.'}
            </h1>

            <p className="text-base sm:text-xl text-[#F5F4F0]/80 leading-relaxed max-w-3xl">
              {language === 'el'
                ? 'Η MANH Company δραστηριοποιείται στους τομείς των ναυτιλιακών, βιομηχανικών υπηρεσιών και της ακίνητης περιουσίας, προσφέροντας εξειδικευμένη τεχνική επάρκεια, επαγγελματική αξιοπιστία και υπεύθυνη διαχείριση παγίων.'
                : 'MANH Company operates across the marine, industrial, and real estate sectors, delivering specialized technical competence, professional reliability, and responsible asset management.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE IDENTITY & POSITIONING */}
      <section className="py-20 sm:py-28 border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#65747F]">
                  {language === 'el'
                    ? '01 · ΤΑΥΤΟΤΗΤΑ & ΦΙΛΟΣΟΦΙΑ'
                    : '01 · IDENTITY & POSITIONING'}
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111820] text-balance">
                  {language === 'el'
                    ? 'Εξειδικευμένη Τεχνογνωσία στη Ναυτιλία, τη Βιομηχανία και την Ακίνητη Περιουσία'
                    : 'Specialized Expertise Across Marine, Industrial, and Real Estate Services'}
                </h2>
                <p className="text-base text-[#111820]/85 leading-relaxed">
                  {language === 'el'
                    ? 'Η MANH Company αναπτύσσει τις δραστηριότητές της με γνώμονα την τεχνική ακρίβεια, την υπεύθυνη διαχείριση και τη μακροχρόνια αξία. Στον ναυτιλιακό και βιομηχανικό τομέα, εκτελεί απαιτητικά έργα επισκευής πλοίων, ναυπηγικών κατασκευών, μηχανολογικών συστημάτων, ελασματουργικών/σωληνουργικών εργασιών και ηλεκτρολογικών εγκαταστάσεων.'
                    : 'MANH Company is built around technical precision, responsible management, and long-term value. In the marine and industrial sector, the company executes ship repairs and maintenance, vessel construction and conversions, mechanical and engineering works, structural steel and piping fabrication, and electrical installations.'}
                </p>
                <p className="text-sm sm:text-base text-[#65747F] leading-relaxed">
                  {language === 'el'
                    ? 'Παράλληλα, στον τομέα της ακίνητης περιουσίας, η MANH Company εστιάζει στην κατοχή, τη διαχείριση, την εκμίσθωση και τη μεθοδική αξιοποίηση ακινήτων κατοικίας και φιλοξενίας, διασφαλίζοντας τη λειτουργικότητα και τη διατήρηση της αξίας τους στον χρόνο.'
                    : 'In the real estate sector, MANH Company focuses on property ownership, management, leasing, and utilization across residential and hospitality assets, ensuring their ongoing functionality and long-term value preservation.'}
                </p>
              </div>

              <div className="p-6 bg-white border border-[#111820]/15 space-y-2 text-xs font-mono">
                <span className="uppercase tracking-wider text-[#B19A75] font-semibold block">
                  {language === 'el'
                    ? 'Επίσημα Εταιρικά Στοιχεία'
                    : 'Official Corporate Information'}
                </span>
                <div className="font-display text-base font-bold text-[#111820]">
                  {MANH_COMPANY_INFO.brandName}
                </div>
                <div className="text-[#111820]/85">
                  {language === 'el'
                    ? `Αριθμός Γ.Ε.ΜΗ.: ${MANH_COMPANY_INFO.gemi}`
                    : `General Commercial Registry (G.E.MI.) No.: ${MANH_COMPANY_INFO.gemi}`}
                </div>
                <div className="text-[#111820]/85">
                  {language === 'el'
                    ? `Αριθμός Φορολογικού Μητρώου: ${MANH_COMPANY_INFO.afm}`
                    : `Tax Identification Number (AFM): ${MANH_COMPANY_INFO.afm}`}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <div className="flex-1 min-h-[380px] border border-[#111820]/15 overflow-hidden">
                <ResilientImage
                  src={GENERATED_IMAGES.corporateVision}
                  alt="MANH Company Corporate Architecture"
                  theme="light"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE AREAS OF ACTIVITY */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#65747F]">
              {language === 'el'
                ? '02 · ΤΟΜΕΙΣ ΔΡΑΣΤΗΡΙΟΤΗΤΑΣ'
                : '02 · CORE BUSINESS SECTORS'}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111820]">
              {language === 'el'
                ? 'Οι Δύο Τομείς Δραστηριότητας της MANH Company'
                : 'Two Core Sectors Under MANH Company'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sector A: Marine & Industrial Services */}
            <div className="border border-[#111820]/15 bg-[#F5F4F0] p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#111820]/15 pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B19A75] font-semibold">
                    {language === 'el'
                      ? 'ΤΟΜΕΑΣ 01 · ΝΑΥΤΙΛΙΑ & ΒΙΟΜΗΧΑΝΙΑ'
                      : 'SECTOR 01 · MARINE & INDUSTRIAL'}
                  </span>
                  <span className="font-mono text-xs text-[#65747F]">
                    MANH Company
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111820]">
                    {language === 'el'
                      ? 'Ναυτιλιακές & Βιομηχανικές Υπηρεσίες'
                      : 'Marine & Industrial Services'}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#111820]/85 leading-relaxed">
                  {language === 'el'
                    ? 'Η MANH Company παρέχει εξειδικευμένες τεχνικές και ναυπηγοεπισκευαστικές υπηρεσίες, καλύπτοντας επισκευές και συντήρηση πλοίων, ναυπηγικές κατασκευές και μετασκευές, μηχανολογικές εργασίες, ελασματουργικές/σωληνουργικές εφαρμογές και ηλεκτρολογικές εγκαταστάσεις.'
                    : 'MANH Company delivers specialized marine and industrial services encompassing ship repairs and maintenance, shipbuilding and conversions, mechanical and engineering works, structural steel and piping fabrication, and electrical installations.'}
                </p>

                <ul className="divide-y divide-[#111820]/10 border-y border-[#111820]/15 text-xs sm:text-sm">
                  {MARINE_CAPABILITIES.map((cap) => (
                    <li key={cap.id} className="py-3 flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#B19A75] font-semibold">
                        {cap.index}.
                      </span>
                      <span className="font-medium text-[#111820]">
                        {pick(cap.title)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => navigate('/marine-industrial')}
                className="inline-flex items-center justify-between w-full px-6 py-4 text-xs font-display font-semibold uppercase tracking-wider bg-[#111820] text-white hover:bg-[#1d2836] transition-colors cursor-pointer"
              >
                <span>
                  {language === 'el'
                    ? 'Μετάβαση στις Ναυτιλιακές & Βιομηχανικές Υπηρεσίες'
                    : 'Explore Marine & Industrial Services'}
                </span>
                <ArrowRight className="w-4 h-4 text-[#B19A75]" />
              </button>
            </div>

            {/* Sector B: Real Estate & Asset Management */}
            <div className="border border-[#111820]/15 bg-[#F5F4F0] p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#111820]/15 pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B19A75] font-semibold">
                    {language === 'el'
                      ? 'ΤΟΜΕΑΣ 02 · ΑΚΙΝΗΤΗ ΠΕΡΙΟΥΣΙΑ'
                      : 'SECTOR 02 · REAL ESTATE & ASSETS'}
                  </span>
                  <span className="font-mono text-xs text-[#65747F]">
                    MANH Company
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111820]">
                    {language === 'el'
                      ? 'Ακίνητη Περιουσία & Διαχείριση'
                      : 'Real Estate & Asset Management'}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#111820]/85 leading-relaxed">
                  {language === 'el'
                    ? 'Η MANH Company δραστηριοποιείται στην κατοχή, τη διαχείριση, την εκμίσθωση και την αξιοποίηση ακινήτων κατοικίας και φιλοξενίας, εφαρμόζοντας μια οργανωμένη, μακροχρόνια προσέγγιση που διαφυλάσσει τη λειτουργικότητα και την αξία κάθε ακινήτου.'
                    : 'MANH Company engages in the ownership, management, leasing, and utilization of residential and hospitality properties, applying an organized, long-term stewardship approach that preserves the functionality and value of every asset.'}
                </p>

                <ul className="divide-y divide-[#111820]/10 border-y border-[#111820]/15 text-xs sm:text-sm">
                  {REAL_ESTATE_ACTIVITIES.map((act) => (
                    <li key={act.id} className="py-3 flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#B19A75] font-semibold">
                        {act.index}.
                      </span>
                      <span className="font-medium text-[#111820]">
                        {pick(act.title)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => navigate('/real-estate')}
                className="inline-flex items-center justify-between w-full px-6 py-4 text-xs font-display font-semibold uppercase tracking-wider bg-[#111820] text-white hover:bg-[#1d2836] transition-colors cursor-pointer"
              >
                <span>
                  {language === 'el'
                    ? 'Μετάβαση στην Ακίνητη Περιουσία & Διαχείριση'
                    : 'Explore Real Estate & Asset Management'}
                </span>
                <ArrowRight className="w-4 h-4 text-[#B19A75]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPERATING PHILOSOPHY */}
      <section className="py-20 sm:py-28 bg-[#111820] text-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#B19A75]">
              {language === 'el'
                ? '03 · ΦΙΛΟΣΟΦΙΑ & ΑΡΧΕΣ ΛΕΙΤΟΥΡΓΙΑΣ'
                : '03 · OPERATING PHILOSOPHY'}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t.homeApproach.heading}
            </h2>
            <p className="text-base text-[#F5F4F0]/75 leading-relaxed">
              {t.homeApproach.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.homeApproach.principles.map((p) => (
              <div
                key={p.num}
                className="border border-white/15 bg-white/[0.02] p-6 space-y-3"
              >
                <span className="font-mono text-xs text-[#B19A75] block">
                  {p.num}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-[#F5F4F0]/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
