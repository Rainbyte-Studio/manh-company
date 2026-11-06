import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import {
  GENERATED_IMAGES,
  MANH_COMPANY_INFO,
  MARINE_CAPABILITIES,
  SECTOR_MEDIA,
  VERIFIED_PROJECTS,
} from '../data/verifiedCorporateData';
import { useApp } from '../i18n/LanguageContext';

export const MarineIndustrialPage: React.FC = () => {
  const { language, navigate, pick } = useApp();
  const [selectedCapId, setSelectedCapId] = useState<string>(
    MARINE_CAPABILITIES[0].id
  );

  const activeCap =
    MARINE_CAPABILITIES.find((c) => c.id === selectedCapId) ||
    MARINE_CAPABILITIES[0];

  const featuredMarineProjects = VERIFIED_PROJECTS.slice(0, 4);

  return (
    <div className="bg-[#111820] text-[#F5F4F0]">
      {/* 1. CINEMATIC INTRODUCTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={SECTOR_MEDIA.marine.aerial}
            alt={
              language === 'el'
                ? 'Ναυτιλιακές και Βιομηχανικές Υπηρεσίες — MANH Company'
                : 'Marine and Industrial Services — MANH Company'
            }
            priority={true}
            theme="dark"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-[#111820]/80 to-[#111820]/60" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#B19A75]">
              <span>01 · MARINE &amp; INDUSTRIAL SERVICES</span>
              <span>·</span>
              <span>MANH COMPANY</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              {language === 'el'
                ? 'Ναυπηγική Μηχανική, Επισκευές Πλοίων, Κατασκευές & Βιομηχανικές Εφαρμογές.'
                : 'Marine Engineering, Ship Repairs, Construction & Technical Works.'}
            </h1>

            <p className="text-base sm:text-xl text-[#F5F4F0]/80 leading-relaxed max-w-3xl">
              {language === 'el'
                ? 'Η MANH Company παρέχει εξειδικευμένες ναυτιλιακές και βιομηχανικές υπηρεσίες που καλύπτουν επισκευές και συντήρηση πλοίων, ναυπηγικές κατασκευές και μετασκευές, μηχανολογικές εργασίες, ελασματουργικές και σωληνουργικές εφαρμογές, καθώς και ηλεκτρολογικές εγκαταστάσεις.'
                : 'MANH Company delivers specialized marine and industrial services encompassing ship repairs and maintenance, vessel construction and conversions, mechanical and engineering works, structural steel and piping fabrication, and electrical installations.'}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact', { sectorPreset: 'marine' })}
                className="inline-flex items-center gap-3 px-7 py-4 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider bg-[#B19A75] text-[#111820] hover:bg-[#c3ad88] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {language === 'el'
                    ? 'Επικοινωνία για Ναυτιλιακά & Βιομηχανικά Έργα'
                    : 'Inquire About Marine & Industrial Services'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/projects')}
                className="inline-flex items-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-mono text-white border border-white/25 hover:border-[#B19A75] hover:text-[#B19A75] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {language === 'el' ? 'Τεχνικά Έργα Αναφοράς' : 'View Reference Works'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Core Capabilities Overview Strip */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-white/15 bg-[#111820]/90 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {MARINE_CAPABILITIES.map((cap) => (
              <div key={cap.id} className="p-5 space-y-1.5">
                <span className="font-mono text-xs text-[#B19A75] block">
                  {cap.index}
                </span>
                <span className="font-display text-sm font-bold text-white block">
                  {pick(cap.title)}
                </span>
                <p className="text-xs text-[#F5F4F0]/60 leading-relaxed">
                  {pick(cap.category)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BUSINESS SECTOR OVERVIEW */}
      <section className="py-20 sm:py-28 bg-[#F5F4F0] text-[#111820] border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#65747F]">
                  {language === 'el'
                    ? '01 · ΕΠΙΣΚΟΠΗΣΗ ΤΟΜΕΑ'
                    : '01 · SECTOR OVERVIEW'}
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111820] text-balance">
                  {language === 'el'
                    ? 'Τεχνική Ακρίβεια και Αξιοπιστία σε Ναυτιλιακές & Βιομηχανικές Εφαρμογές'
                    : 'Technical Precision and Reliability Across Marine & Industrial Operations'}
                </h2>
                <p className="text-base text-[#111820]/85 leading-relaxed">
                  {language === 'el'
                    ? 'Ο τομέας Ναυτιλιακών & Βιομηχανικών Υπηρεσιών της MANH Company καλύπτει το πλήρες φάσμα τεχνικών αναγκών εμπορικών πλοίων και βιομηχανικών εγκαταστάσεων: από δεξαμενισμούς, ελασματουργικές αποκαταστάσεις και εξειδικευμένα δίκτυα σωληνώσεων (GRE, SMO, Inox, ανθρακοχάλυβας) έως σύνθετες μετασκευές και περιβαλλοντικές αναβαθμίσεις (EGCS & BWTS).'
                    : 'The Marine & Industrial Services sector of MANH Company addresses the full technical lifecycle of commercial vessels and industrial installations: from dry-docking repairs, structural steel renewals, and specialized piping networks (GRE, SMO, Inox, carbon steel) to complex vessel conversions and environmental compliance retrofits (EGCS & BWTS).'}
                </p>
                <p className="text-sm sm:text-base text-[#65747F] leading-relaxed">
                  {language === 'el'
                    ? 'Κάθε έργο υποστηρίζεται από ναυπηγικό και μηχανολογικό σχεδιασμό, τρισδιάστατη αποτύπωση (3D laser scanning), πιστοποιημένες διαδικασίες συγκόλλησης και συνεχή ποιοτικό έλεγχο.'
                    : 'Every project is backed by naval architectural and mechanical planning, 3D laser scanning, certified welding procedures, and disciplined quality control from initial specification through final handover.'}
                </p>
              </div>

              <div className="p-6 bg-white border border-[#111820]/15 space-y-1.5 text-xs font-mono">
                <div className="font-display text-sm font-bold text-[#111820]">
                  {MANH_COMPANY_INFO.brandName}
                </div>
                <div className="text-[#111820]/80">
                  {language === 'el'
                    ? `Αριθμός Γ.Ε.ΜΗ.: ${MANH_COMPANY_INFO.gemi}`
                    : `General Commercial Registry (G.E.MI.) No.: ${MANH_COMPANY_INFO.gemi}`}
                </div>
                <div className="text-[#111820]/80">
                  {language === 'el'
                    ? `Αριθμός Φορολογικού Μητρώου: ${MANH_COMPANY_INFO.afm}`
                    : `Tax Identification Number (AFM): ${MANH_COMPANY_INFO.afm}`}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <div className="flex-1 min-h-[380px] border border-[#111820]/15 overflow-hidden">
                <ResilientImage
                  src={GENERATED_IMAGES.marineWorkshop}
                  alt={
                    language === 'el'
                      ? 'Ελασματουργικές και σωληνουργικές εργασίες — MANH Company'
                      : 'Structural steel and marine piping fabrication — MANH Company'
                  }
                  theme="dark"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERIFIED SERVICES & TECHNICAL SPECIFICATIONS */}
      <section className="py-20 sm:py-28 bg-[#111820] text-white border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-12">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#B19A75]">
              {language === 'el'
                ? '02 · ΥΠΗΡΕΣΙΕΣ & ΤΕΧΝΙΚΕΣ ΔΥΝΑΤΟΤΗΤΕΣ'
                : '02 · MARINE & INDUSTRIAL SERVICES'}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
              {language === 'el'
                ? 'Πέντε Βασικοί Τομείς Ναυπηγικών & Τεχνικών Εργασιών'
                : 'Five Core Marine & Industrial Service Areas'}
            </h2>
          </div>

          {/* Interactive Service Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-12">
            {MARINE_CAPABILITIES.map((cap) => {
              const isSelected = cap.id === activeCap.id;
              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setSelectedCapId(cap.id)}
                  className={`p-5 text-left border transition-colors cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-[#B19A75] text-[#111820] border-[#B19A75]'
                      : 'bg-white/[0.03] text-white border-white/15 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full text-xs font-mono">
                    <span className={isSelected ? 'text-[#111820]' : 'text-[#B19A75]'}>
                      {cap.index}
                    </span>
                  </div>
                  <div className="font-display text-sm sm:text-base font-bold leading-snug">
                    {pick(cap.title)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Capability Detailed Specification Panel */}
          <div className="border border-white/15 bg-white/[0.02] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono text-[#B19A75]">
                  <span>{activeCap.index}</span>
                  <span>·</span>
                  <span>{pick(activeCap.category)}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
                  {pick(activeCap.title)}
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-[#F5F4F0]/80 leading-relaxed">
                  {activeCap.overview.map((paragraph, i) => (
                    <p key={i}>{pick(paragraph)}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#B19A75] mb-4">
                    {language === 'el'
                      ? 'Αντικείμενο Εργασιών'
                      : 'Scope of Works'}
                  </h4>
                  <ul className="space-y-2.5 text-sm text-[#F5F4F0]/85">
                    {activeCap.services.map((srv, idx) => (
                      <li key={idx} className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-[#B19A75] shrink-0">
                          0{idx + 1}.
                        </span>
                        <span>{pick(srv)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="aspect-[16/10] border border-white/15 overflow-hidden">
                  <ResilientImage
                    src={activeCap.image}
                    alt={pick(activeCap.imageAlt)}
                    theme="dark"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="border border-white/15 divide-y divide-white/10">
                  <div className="px-5 py-3 bg-white/[0.04] font-mono text-xs uppercase tracking-wider text-[#B19A75]">
                    {language === 'el'
                      ? 'Τεχνικές Προδιαγραφές'
                      : 'Technical Specifications'}
                  </div>
                  {activeCap.technicalSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="px-5 py-3.5 flex items-center justify-between gap-4 text-xs"
                    >
                      <span className="text-[#F5F4F0]/65">{pick(spec.label)}</span>
                      <span className="font-mono font-semibold text-white text-right">
                        {pick(spec.value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPROACH TO QUALITY & PROFESSIONAL EXECUTION */}
      <section className="py-20 sm:py-28 bg-[#F5F4F0] text-[#111820] border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#65747F]">
              {language === 'el'
                ? '03 · ΠΟΙΟΤΗΤΑ & ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΕΚΤΕΛΕΣΗ'
                : '03 · QUALITY & PROFESSIONAL EXECUTION'}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111820] text-balance">
              {language === 'el'
                ? 'Μεθοδικός Σχεδιασμός, Πιστοποιημένες Εργασίες & Τεκμηρίωση'
                : 'Disciplined Engineering, Certified Fabrication & Full Documentation'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#111820]/15 p-8 space-y-3">
              <span className="font-mono text-xs text-[#B19A75] font-semibold">01</span>
              <h3 className="font-display text-xl font-bold text-[#111820]">
                {language === 'el'
                  ? 'Ακριβής Τεχνική Αποτύπωση'
                  : 'Precision Technical Assessment'}
              </h3>
              <p className="text-sm text-[#65747F] leading-relaxed">
                {language === 'el'
                  ? 'Χρήση τρισδιάστατης σάρωσης (3D laser scanning), ισομετρικών σχεδίων και ναυπηγικών μελετών 2D/3D για την ακριβή προετοιμασία κάθε επισκευής ή μετασκευής.'
                  : 'Utilization of 3D laser scanning, isometric piping plans, and 2D/3D naval engineering drawings to prepare every repair, conversion, or retrofit with precision.'}
              </p>
            </div>

            <div className="bg-white border border-[#111820]/15 p-8 space-y-3">
              <span className="font-mono text-xs text-[#B19A75] font-semibold">02</span>
              <h3 className="font-display text-xl font-bold text-[#111820]">
                {language === 'el'
                  ? 'Πιστοποιημένες Υλικές & Ελασματουργικές Εφαρμογές'
                  : 'Certified Materials & Welding Integrity'}
              </h3>
              <p className="text-sm text-[#65747F] leading-relaxed">
                {language === 'el'
                  ? 'Κατασκευή χαλύβδινων τμημάτων και δικτύων σωληνώσεων (GRE, SMO 254, Inox, ανθρακοχάλυβας) με μη καταστροφικούς ελέγχους (NDT) και υδροστατικές δοκιμές.'
                  : 'Fabrication of structural steel blocks and specialized piping networks (GRE, SMO 254, Inox, carbon steel) verified through non-destructive testing (NDT) and hydrostatic pressure tests.'}
              </p>
            </div>

            <div className="bg-white border border-[#111820]/15 p-8 space-y-3">
              <span className="font-mono text-xs text-[#B19A75] font-semibold">03</span>
              <h3 className="font-display text-xl font-bold text-[#111820]">
                {language === 'el'
                  ? 'Συνέπεια Χρονοδιαγράμματος & Κλάσης'
                  : 'Schedule & Classification Compliance'}
              </h3>
              <p className="text-sm text-[#65747F] leading-relaxed">
                {language === 'el'
                  ? 'Συνεχής παρακολούθηση προόδου εργασιών, πλήρης τεκμηρίωση as-built και συμμόρφωση με τους διεθνείς κανονισμούς και τις απαιτήσεις των Νηογνωμόνων.'
                  : 'Continuous work-progress reporting, complete as-built documentation packages, and strict adherence to international maritime conventions and Classification Society rules.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECT REFERENCES PREVIEW */}
      <section className="py-20 sm:py-28 bg-[#111820] text-white border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#B19A75]">
                {language === 'el'
                  ? '04 · ΕΡΓΑ ΑΝΑΦΟΡΑΣ'
                  : '04 · PROJECT REFERENCES'}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {language === 'el'
                  ? 'Ενδεικτικά Έργα Ναυπηγοεπισκευής & Τεχνικών Εφαρμογών'
                  : 'Selected Ship Repair, Conversion & Engineering Works'}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider text-[#B19A75] hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <span>
                {language === 'el'
                  ? 'Προβολή Όλων των Έργων (07)'
                  : 'View All Projects (07)'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredMarineProjects.map((proj) => (
              <article
                key={proj.id}
                className="border border-white/15 bg-white/[0.02] flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] border-b border-white/15 overflow-hidden">
                    <ResilientImage
                      src={proj.image}
                      alt={pick(proj.imageAlt)}
                      theme="dark"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#B19A75]">
                      <span>{proj.index}</span>
                      <span>·</span>
                      <span>{pick(proj.category)}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {pick(proj.title)}
                    </h3>
                    <p className="text-sm text-[#F5F4F0]/75 leading-relaxed">
                      {pick(proj.summary)}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                  <span>{pick(proj.vesselType)}</span>
                  <button
                    type="button"
                    onClick={() => navigate('/projects')}
                    className="text-[#B19A75] hover:underline cursor-pointer"
                  >
                    {language === 'el' ? 'Τεχνικές Λεπτομέρειες →' : 'Technical Scope →'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT CTA */}
      <section className="py-20 sm:py-24 bg-[#111820] text-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="border border-white/15 p-8 sm:p-12 bg-white/[0.02] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B19A75]">
                MANH COMPANY · MARINE &amp; INDUSTRIAL SERVICES
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                {language === 'el'
                  ? 'Συζητήστε τις Τεχνικές Προδιαγραφές του Έργου σας'
                  : 'Discuss Your Marine or Industrial Project Requirements'}
              </h2>
              <p className="text-sm sm:text-base text-[#F5F4F0]/75 leading-relaxed">
                {language === 'el'
                  ? 'Επικοινωνήστε με τη MANH Company για επισκευές πλοίων, ναυπηγικές κατασκευές, μηχανολογικές εργασίες, χαλύβδινες κατασκευές ή ηλεκτρολογικές εγκαταστάσεις.'
                  : 'Connect with MANH Company regarding ship repairs, vessel conversions, mechanical engineering works, steel fabrication, or electrical installations.'}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact', { sectorPreset: 'marine' })}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider bg-[#B19A75] text-[#111820] hover:bg-[#c3ad88] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {language === 'el' ? 'Φόρμα Επικοινωνίας' : 'Submit Marine Inquiry'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
