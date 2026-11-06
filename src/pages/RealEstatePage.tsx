import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import {
  GENERATED_IMAGES,
  MANH_COMPANY_INFO,
  REAL_ESTATE_ACTIVITIES,
  SECTOR_MEDIA,
} from '../data/verifiedCorporateData';
import { useApp } from '../i18n/LanguageContext';

export const RealEstatePage: React.FC = () => {
  const { language, navigate, pick } = useApp();

  return (
    <div className="bg-[#F5F4F0] text-[#111820]">
      {/* 1. ARCHITECTURAL HERO */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-[#65747F]">
                  <span className="text-[#B19A75] font-semibold">
                    02 · REAL ESTATE &amp; ASSET MANAGEMENT
                  </span>
                  <span>·</span>
                  <span>MANH COMPANY</span>
                </div>

                <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#111820] leading-[1.08] text-balance">
                  {language === 'el'
                    ? 'Ακίνητα με Προοπτική, Οργάνωση και Φροντίδα.'
                    : 'Properties with Perspective, Structure, and Care.'}
                </h1>

                <p className="text-base sm:text-xl text-[#111820]/85 leading-relaxed">
                  {language === 'el'
                    ? 'Η MANH Company δραστηριοποιείται στον τομέα της ακίνητης περιουσίας με αντικείμενο την κατοχή, τη διαχείριση, την εκμίσθωση, την αξιοποίηση και τη μακροχρόνια διατήρηση της αξίας των ακινήτων της.'
                    : 'MANH Company operates in the real estate sector with a dedicated focus on property ownership, property management, property leasing, property utilization, and long-term asset management.'}
                </p>

                <p className="text-sm sm:text-base text-[#65747F] leading-relaxed">
                  {language === 'el'
                    ? 'Μέσα από μια μακροχρόνια προσέγγιση, μεριμνούμε για την ακίνητη περιουσία της εταιρείας, επιδιώκοντας την εύρυθμη αξιοποίηση και τη διαφύλαξη της λειτουργικότητάς της. Η δραστηριότητά μας περιλαμβάνει ακίνητα κατοικίας καθώς και ακίνητα που συνδέονται με τον χώρο της φιλοξενίας.'
                    : 'Through a disciplined, long-term approach, we care for our real estate assets, pursuing their proper utilization and the preservation of their value across residential and hospitality-oriented properties.'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#111820]/15 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/contact', { sectorPreset: 'real-estate' })}
                  className="inline-flex items-center gap-3 px-7 py-4 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider bg-[#111820] text-white hover:bg-[#1d2836] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>
                    {language === 'el'
                      ? 'Επικοινωνία για Θέματα Ακινήτων'
                      : 'Inquire About Real Estate & Assets'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#B19A75]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <div className="flex-1 min-h-[400px] sm:min-h-[500px] border border-[#111820]/15 overflow-hidden">
                <ResilientImage
                  src={GENERATED_IMAGES.realEstateHero}
                  alt={
                    language === 'el'
                      ? 'Αρχιτεκτονική ακινήτου με πέτρα και σύγχρονες γραμμές — MANH Company'
                      : 'Contemporary Mediterranean architectural property — MANH Company'
                  }
                  priority={true}
                  theme="light"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTOR OVERVIEW & OFFICIAL REGISTRY */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] border border-[#111820]/15 overflow-hidden">
                <ResilientImage
                  src={SECTOR_MEDIA.realEstate.mainExterior}
                  alt={
                    language === 'el'
                      ? 'Ακίνητο της MANH Company'
                      : 'Property managed by MANH Company'
                  }
                  theme="light"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#65747F]">
                {language === 'el' ? '01 · ΤΟΜΕΑΣ ΑΚΙΝΗΤΩΝ' : '01 · SECTOR OVERVIEW'}
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111820] text-balance">
                {language === 'el'
                  ? 'Κατοχή, Διαχείριση και Αξιοποίηση Ακίνητης Περιουσίας'
                  : 'Dedicated Ownership, Management & Utilization of Real Estate Assets'}
              </h2>

              <p className="text-base text-[#111820]/85 leading-relaxed">
                {language === 'el'
                  ? 'Η MANH Company έχει ως βασικό αντικείμενο στον τομέα των ακινήτων τη διαχείριση και την αξιοποίηση ακίνητης περιουσίας. Η εταιρεία ασχολείται με ακίνητα που προορίζονται για κατοικία, μίσθωση ή φιλοξενία, μεριμνώντας για την οργάνωση και την εύρυθμη λειτουργία τους.'
                  : 'MANH Company focuses on the structured management and utilization of real estate assets. We engage with properties intended for residence, leasing, or hospitality, ensuring their organization and smooth operation.'}
              </p>

              <p className="text-sm sm:text-base text-[#65747F] leading-relaxed">
                {language === 'el'
                  ? 'Προσεγγίζουμε κάθε ακίνητο με υπευθυνότητα και μακροχρόνια σκέψη. Στόχος μας είναι τα ακίνητα που διαχειριζόμαστε να διατηρούν τον χαρακτήρα και τη λειτουργικότητά τους, ενώ αξιοποιούνται με τρόπο που ανταποκρίνεται στις δυνατότητές τους.'
                  : 'We approach every property with responsibility and long-term thinking. Our goal is for the assets we manage to retain their character and functionality while being utilized in a manner that reflects their potential.'}
              </p>

              <div className="p-6 bg-[#F5F4F0] border border-[#111820]/15 space-y-2 text-xs font-mono">
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
          </div>
        </div>
      </section>

      {/* 3. VERIFIED BUSINESS ACTIVITIES (5 CORE REAL ESTATE AREAS) */}
      <section className="py-20 sm:py-28 bg-[#F5F4F0] border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#65747F]">
              {language === 'el'
                ? '02 · ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ ΑΚΙΝΗΤΗΣ ΠΕΡΙΟΥΣΙΑΣ'
                : '02 · REAL ESTATE & ASSET ACTIVITIES'}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111820] text-balance">
              {language === 'el'
                ? 'Πέντε Πυλώνες Διαχείρισης & Αξιοποίησης Ακινήτων'
                : 'Five Pillars of Real Estate Stewardship & Utilization'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REAL_ESTATE_ACTIVITIES.map((act) => (
              <article
                key={act.id}
                className="bg-white border border-[#111820]/15 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] border-b border-[#111820]/15 overflow-hidden">
                    <ResilientImage
                      src={act.image}
                      alt={pick(act.imageAlt)}
                      theme="light"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7 sm:p-8 space-y-3.5">
                    <div className="font-mono text-xs font-semibold text-[#B19A75]">
                      {act.index} · MANH COMPANY
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111820]">
                      {pick(act.title)}
                    </h3>
                    <p className="text-sm sm:text-base text-[#111820]/85 leading-relaxed">
                      {pick(act.summary)}
                    </p>
                    <p className="text-xs sm:text-sm text-[#65747F] leading-relaxed pt-3 border-t border-[#111820]/10">
                      {pick(act.details)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROPERTY MANAGEMENT APPROACH & 5. LONG-TERM VALUE PHILOSOPHY */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#65747F]">
                  {language === 'el'
                    ? '03 · Η ΠΡΟΣΕΓΓΙΣΗ ΜΑΣ ΣΤΗ ΔΙΑΧΕΙΡΙΣΗ'
                    : '03 · PROPERTY MANAGEMENT & VALUE PHILOSOPHY'}
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#111820] text-balance">
                  {language === 'el'
                    ? 'Σταθερή Φροντίδα, Οργάνωση και Μακροπρόθεσμη Αξία'
                    : 'Steady Care, Thoughtful Planning, and Long-Term Asset Value'}
                </h2>
                <p className="text-base text-[#111820]/85 leading-relaxed">
                  {language === 'el'
                    ? 'Για τη MANH Company, η ακίνητη περιουσία απαιτεί σταθερή φροντίδα και προσεκτικό σχεδιασμό. Κάθε ακίνητο έχει τα δικά του χαρακτηριστικά και τις δικές του δυνατότητες· γι’ αυτό η διαχείρισή του λαμβάνει υπόψη τη χρήση, τη λειτουργικότητα και τη μακροχρόνια αξία του.'
                    : 'At MANH Company, real estate requires steady care and careful planning. Every property has its own characteristics and potential; therefore, its management takes into account its use, functionality, and long-term value.'}
                </p>
                <p className="text-sm sm:text-base text-[#65747F] leading-relaxed">
                  {language === 'el'
                    ? 'Εφαρμόζουμε μια υπεύθυνη και οργανωμένη προσέγγιση, με επίκεντρο τη διατήρηση και την αξιοποίηση της ακίνητης περιουσίας μας.'
                    : 'We pursue a responsible and organized approach centered on preserving and utilizing our real estate assets.'}
                </p>
              </div>

              <div className="divide-y divide-[#111820]/10 border-y border-[#111820]/15">
                <div className="py-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#B19A75] font-semibold">01.</span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#111820]">
                      {language === 'el'
                        ? 'Διατήρηση Αρχιτεκτονικού Χαρακτήρα'
                        : 'Preservation of Architectural Character'}
                    </h3>
                    <p className="text-xs text-[#65747F] mt-0.5">
                      {language === 'el'
                        ? 'Σεβασμός στην τυπολογία, τα υλικά και την ταυτότητα κάθε χώρου.'
                        : 'Respecting the materials, layout, and intrinsic identity of each space.'}
                    </p>
                  </div>
                </div>
                <div className="py-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#B19A75] font-semibold">02.</span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#111820]">
                      {language === 'el'
                        ? 'Συστηματική Συντήρηση & Λειτουργικότητα'
                        : 'Consistent Upkeep & Operational Readiness'}
                    </h3>
                    <p className="text-xs text-[#65747F] mt-0.5">
                      {language === 'el'
                        ? 'Τακτική τεχνική παρακολούθηση ώστε κάθε ακίνητο να παραμένει λειτουργικό.'
                        : 'Ongoing technical oversight ensuring every asset remains functional over time.'}
                    </p>
                  </div>
                </div>
                <div className="py-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#B19A75] font-semibold">03.</span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#111820]">
                      {language === 'el'
                        ? 'Αξιοποίηση Σύμφωνα με τον Προορισμό του Ακινήτου'
                        : 'Purpose-Aligned Asset Utilization'}
                    </h3>
                    <p className="text-xs text-[#65747F] mt-0.5">
                      {language === 'el'
                        ? 'Επιλογή κατάλληλης χρήσης (κατοικία, εκμίσθωση ή φιλοξενία) με μακροχρόνιο ορίζοντα.'
                        : 'Matching residential, leasing, or hospitality uses to the real potential of each asset.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 gap-6">
              <div className="aspect-[16/10] border border-[#111820]/15 overflow-hidden">
                <ResilientImage
                  src={SECTOR_MEDIA.realEstate.renovationConcept}
                  alt={
                    language === 'el'
                      ? 'Αξιοποίηση και αναβάθμιση ακινήτου — MANH Company'
                      : 'Property utilization and architectural care — MANH Company'
                  }
                  theme="light"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/10] border border-[#111820]/15 overflow-hidden">
                <ResilientImage
                  src={GENERATED_IMAGES.interiorStewardship}
                  alt={
                    language === 'el'
                      ? 'Εσωτερικός χώρος κατοικίας — MANH Company'
                      : 'Refined Mediterranean residential interior — MANH Company'
                  }
                  theme="light"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT CTA */}
      <section className="py-20 sm:py-24 bg-[#111820] text-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B19A75]">
                MANH COMPANY · REAL ESTATE &amp; ASSET MANAGEMENT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {language === 'el'
                  ? 'Επικοινωνήστε για Θέματα Ακίνητης Περιουσίας'
                  : 'Connect Regarding Real Estate & Asset Management'}
              </h2>
              <p className="text-sm sm:text-base text-[#F5F4F0]/75 leading-relaxed max-w-2xl">
                {language === 'el'
                  ? 'Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία σχετικά με τη δραστηριότητα της MANH Company στον τομέα της ακίνητης περιουσίας.'
                  : 'We are at your disposal for any information regarding MANH Company and its real estate asset management activities.'}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact', { sectorPreset: 'real-estate' })}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider bg-[#B19A75] text-[#111820] hover:bg-[#c3ad88] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {language === 'el' ? 'Φόρμα Επικοινωνίας' : 'Submit Real Estate Inquiry'}
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
