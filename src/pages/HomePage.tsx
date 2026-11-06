import React from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import {
  GENERATED_IMAGES,
  MANH_COMPANY_INFO,
  MARINE_CAPABILITIES,
  REAL_ESTATE_ACTIVITIES,
} from '../data/verifiedCorporateData';
import { useApp } from '../i18n/LanguageContext';

export const HomePage: React.FC = () => {
  const { language, navigate, t, pick } = useApp();

  const scrollToSectors = () => {
    const el = document.getElementById('business-sectors');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F4F0] text-[#111820]">
      {/* SECTION 01: IMMERSIVE EDITORIAL HERO */}
      <section className="relative min-h-[92vh] bg-[#111820] text-white flex flex-col justify-between overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={GENERATED_IMAGES.heroShipyard}
            alt={
              language === 'el'
                ? 'Ναυπηγικές, βιομηχανικές υπηρεσίες και ακίνητη περιουσία — MANH Company'
                : 'Marine, industrial, and real estate services — MANH Company'
            }
            priority={true}
            theme="dark"
            className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-[#111820]/70 to-[#111820]/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111820]/85 via-[#111820]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-8 lg:px-12 my-auto py-16 lg:py-24">
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#B19A75]">
              <span className="w-8 h-[1px] bg-[#B19A75]" />
              <span>{t.hero.eyebrow}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.06] text-white text-balance">
              <span className="block">{t.hero.headlineLine1}</span>
              <span className="block text-[#F5F4F0]/90 mt-1">
                {t.hero.headlineLine2}
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#F5F4F0]/80 max-w-2xl leading-relaxed font-normal">
              {t.hero.supportingText}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToSectors}
                className="inline-flex items-center gap-3 px-7 py-4 text-xs sm:text-sm font-display font-semibold tracking-wider uppercase bg-[#B19A75] text-[#111820] hover:bg-[#c3ad88] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-3 px-7 py-4 text-xs sm:text-sm font-display font-semibold tracking-wider uppercase bg-transparent text-white border border-white/30 hover:border-[#B19A75] hover:text-[#B19A75] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75]"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Hero Bar with Sector Anchors & Scroll Indicator */}
        <div className="relative z-10 border-t border-white/15 bg-[#111820]/80 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#F5F4F0]/75">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <button
                type="button"
                onClick={() => navigate('/marine-industrial')}
                className="inline-flex items-center gap-2 hover:text-[#B19A75] transition-colors cursor-pointer text-left"
              >
                <span className="text-[#B19A75]">01</span>
                <span>{t.nav.marine}</span>
              </button>
              <span className="hidden md:inline text-white/25">·</span>
              <button
                type="button"
                onClick={() => navigate('/real-estate')}
                className="inline-flex items-center gap-2 hover:text-[#B19A75] transition-colors cursor-pointer text-left"
              >
                <span className="text-[#B19A75]">02</span>
                <span>{t.nav.realEstate}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={scrollToSectors}
              className="hidden sm:inline-flex items-center gap-2 text-[#B19A75] hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <span>{t.hero.scrollLabel}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 02: TWO BUSINESS SECTORS (PRIMARY NAVIGATION PANELS) */}
      <section
        id="business-sectors"
        className="py-20 sm:py-28 lg:py-32 bg-[#111820] text-white border-b border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-white/10 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-mono uppercase tracking-[0.22em] text-[#B19A75]">
                {t.homeSectors.sectionIndex} · {t.homeSectors.eyebrow}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                {t.homeSectors.heading}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#F5F4F0]/75 leading-relaxed">
                {t.homeSectors.intro}
              </p>
            </div>
          </div>

          {/* Equal-Prominence Edge-to-Edge Photographic Panels */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Panel A: Marine & Industrial */}
            <article
              onClick={() => navigate('/marine-industrial')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/marine-industrial');
                }
              }}
              tabIndex={0}
              role="link"
              aria-label={`${t.homeSectors.marineTitle} — MANH Company`}
              className="group relative min-h-[520px] sm:min-h-[600px] flex flex-col justify-between border border-white/15 overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75]"
            >
              <div className="absolute inset-0 z-0">
                <ResilientImage
                  src={GENERATED_IMAGES.marineWorkshop}
                  alt={t.homeSectors.marineTitle}
                  theme="dark"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-[#111820]/65 to-[#111820]/25 transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              <div className="relative z-10 p-7 sm:p-10 flex items-center justify-between border-b border-white/10 bg-[#111820]/40 backdrop-blur-[2px]">
                <span className="text-xs font-mono text-[#B19A75] tracking-wider">
                  {t.homeSectors.marineTag}
                </span>
                <span className="font-mono text-xs text-white/70">
                  {language === 'el' ? 'Ναυτιλία & Βιομηχανία' : 'Marine & Industrial'}
                </span>
              </div>

              <div className="relative z-10 p-7 sm:p-10 mt-auto space-y-5">
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {t.homeSectors.marineTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#F5F4F0]/80 leading-relaxed max-w-xl">
                  {t.homeSectors.marineDesc}
                </p>
                <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="font-display text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B19A75] group-hover:text-white transition-colors">
                    {t.homeSectors.marineCta}
                  </span>
                  <span className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#B19A75] group-hover:bg-[#B19A75] group-hover:text-[#111820] group-hover:border-[#B19A75] transition-all duration-200">
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </article>

            {/* Panel B: Real Estate & Assets */}
            <article
              onClick={() => navigate('/real-estate')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/real-estate');
                }
              }}
              tabIndex={0}
              role="link"
              aria-label={`${t.homeSectors.realEstateTitle} — MANH Company`}
              className="group relative min-h-[520px] sm:min-h-[600px] flex flex-col justify-between border border-white/15 overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B19A75]"
            >
              <div className="absolute inset-0 z-0">
                <ResilientImage
                  src={GENERATED_IMAGES.realEstateHero}
                  alt={t.homeSectors.realEstateTitle}
                  theme="dark"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111820] via-[#111820]/65 to-[#111820]/25 transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              <div className="relative z-10 p-7 sm:p-10 flex items-center justify-between border-b border-white/10 bg-[#111820]/40 backdrop-blur-[2px]">
                <span className="text-xs font-mono text-[#B19A75] tracking-wider">
                  {t.homeSectors.realEstateTag}
                </span>
                <span className="font-mono text-xs text-white/70">
                  {language === 'el' ? 'Ακίνητη Περιουσία' : 'Real Estate & Assets'}
                </span>
              </div>

              <div className="relative z-10 p-7 sm:p-10 mt-auto space-y-5">
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {t.homeSectors.realEstateTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#F5F4F0]/80 leading-relaxed max-w-xl">
                  {t.homeSectors.realEstateDesc}
                </p>
                <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="font-display text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B19A75] group-hover:text-white transition-colors">
                    {t.homeSectors.realEstateCta}
                  </span>
                  <span className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#B19A75] group-hover:bg-[#B19A75] group-hover:text-[#111820] group-hover:border-[#B19A75] transition-all duration-200">
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 03: ABOUT MANH COMPANY (SPLIT EDITORIAL LAYOUT) */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F5F4F0] text-[#111820] border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="text-xs font-mono uppercase tracking-[0.22em] text-[#65747F]">
                  {t.homeAbout.sectionIndex} · {t.homeAbout.eyebrow}
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[#111820] text-balance">
                  <span className="block">{t.homeAbout.headingLine1}</span>
                  <span className="block text-[#65747F] mt-1">
                    {t.homeAbout.headingLine2}
                  </span>
                </h2>

                <div className="space-y-4 pt-2 text-base sm:text-lg text-[#111820]/85 leading-relaxed">
                  <p>{t.homeAbout.p1}</p>
                  <p className="text-[#65747F] text-base">{t.homeAbout.p2}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#111820]/15 space-y-6">
                <p className="text-xs text-[#65747F] leading-relaxed font-mono">
                  {t.homeAbout.legalNote}
                </p>

                <div>
                  <button
                    type="button"
                    onClick={() => navigate('/about')}
                    className="inline-flex items-center gap-3 px-7 py-4 text-xs sm:text-sm font-display font-semibold tracking-wider uppercase bg-[#111820] text-white hover:bg-[#1d2836] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>{t.homeAbout.cta}</span>
                    <ArrowRight className="w-4 h-4 text-[#B19A75]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <div className="relative flex-1 min-h-[380px] sm:min-h-[480px] border border-[#111820]/15 overflow-hidden">
                <ResilientImage
                  src={GENERATED_IMAGES.corporateVision}
                  alt={
                    language === 'el'
                      ? 'Αρχιτεκτονική σύνθεση χάλυβα και πέτρας — MANH Company'
                      : 'Architectural synthesis of structural steel and natural stone — MANH Company'
                  }
                  theme="light"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 border-x border-b border-[#111820]/15 bg-white divide-x divide-[#111820]/15">
                <div className="p-5 sm:p-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#65747F] block">
                    {pick(MANH_COMPANY_INFO.gemiLabel)}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-[#111820] mt-1 block tabular-nums">
                    {MANH_COMPANY_INFO.gemi}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#65747F] block">
                    {pick(MANH_COMPANY_INFO.afmLabel)}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-[#111820] mt-1 block tabular-nums">
                    {MANH_COMPANY_INFO.afm}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: CONFIRMED EXPERTISE (NUMBERED EDITORIAL LISTS) */}
      <section className="py-20 sm:py-28 lg:py-36 bg-white text-[#111820] border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 pb-16">
            <div className="text-xs font-mono uppercase tracking-[0.22em] text-[#65747F]">
              {t.homeExpertise.sectionIndex} · {t.homeExpertise.eyebrow}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111820] text-balance">
              {t.homeExpertise.heading}
            </h2>
            <p className="text-base sm:text-lg text-[#65747F] leading-relaxed">
              {t.homeExpertise.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Marine & Industrial Services */}
            <div className="lg:col-span-6 flex flex-col justify-between border-t-2 border-[#111820] pt-8">
              <div>
                <div className="mb-8">
                  <span className="text-xs font-mono text-[#65747F] uppercase tracking-wider block">
                    {t.homeExpertise.marineColumnEntity}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111820] mt-1">
                    {t.homeExpertise.marineColumnTitle}
                  </h3>
                </div>

                <div className="divide-y divide-[#111820]/10 border-y border-[#111820]/10">
                  {MARINE_CAPABILITIES.map((cap) => (
                    <div
                      key={cap.id}
                      className="py-5 flex items-start justify-between gap-4 group"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs font-semibold text-[#B19A75] shrink-0">
                          {cap.index}.
                        </span>
                        <div>
                          <h4 className="font-display text-base sm:text-lg font-semibold text-[#111820]">
                            {pick(cap.title)}
                          </h4>
                          <p className="mt-1 text-sm text-[#65747F] leading-relaxed">
                            {pick(cap.summary)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => navigate('/marine-industrial')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider text-[#111820] hover:text-[#B19A75] transition-colors cursor-pointer"
                >
                  <span>{t.homeExpertise.viewAllMarine}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B19A75]" />
                </button>
              </div>
            </div>

            {/* Right Column: Real Estate & Asset Management */}
            <div className="lg:col-span-6 flex flex-col justify-between border-t-2 border-[#B19A75] pt-8">
              <div>
                <div className="mb-8">
                  <span className="text-xs font-mono text-[#65747F] uppercase tracking-wider block">
                    {t.homeExpertise.realEstateColumnEntity}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111820] mt-1">
                    {t.homeExpertise.realEstateColumnTitle}
                  </h3>
                </div>

                <div className="divide-y divide-[#111820]/10 border-y border-[#111820]/10">
                  {REAL_ESTATE_ACTIVITIES.map((act) => (
                    <div
                      key={act.id}
                      className="py-5 flex items-start justify-between gap-4"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs font-semibold text-[#B19A75] shrink-0">
                          {act.index}.
                        </span>
                        <div>
                          <h4 className="font-display text-base sm:text-lg font-semibold text-[#111820]">
                            {pick(act.title)}
                          </h4>
                          <p className="mt-1 text-sm text-[#65747F] leading-relaxed">
                            {pick(act.summary)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => navigate('/real-estate')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider text-[#111820] hover:text-[#B19A75] transition-colors cursor-pointer"
                >
                  <span>{t.homeExpertise.viewAllRealEstate}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B19A75]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: OUR APPROACH (EDITORIAL PRINCIPLES) */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F5F4F0] text-[#111820] border-b border-[#111820]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono uppercase tracking-[0.22em] text-[#65747F]">
                {t.homeApproach.sectionIndex} · {t.homeApproach.eyebrow}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111820] text-balance">
                {t.homeApproach.heading}
              </h2>
              <p className="text-base text-[#65747F] leading-relaxed">
                {t.homeApproach.intro}
              </p>

              <div className="pt-4">
                <div className="aspect-[4/3] border border-[#111820]/15 overflow-hidden">
                  <ResilientImage
                    src={GENERATED_IMAGES.interiorStewardship}
                    alt={
                      language === 'el'
                        ? 'Μακροχρόνια φροντίδα και διαχείριση ακινήτων — MANH Company'
                        : 'Long-term stewardship and asset preservation — MANH Company'
                    }
                    theme="light"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#111820]/15 border-y border-[#111820]/15">
              {t.homeApproach.principles.map((item) => (
                <div
                  key={item.num}
                  className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline"
                >
                  <div className="sm:col-span-2 font-mono text-sm font-semibold text-[#B19A75]">
                    {item.num}.
                  </div>
                  <div className="sm:col-span-10 space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111820]">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#65747F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: FINAL CONTACT CTA */}
      <section className="py-20 sm:py-28 bg-[#111820] text-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-mono uppercase tracking-[0.22em] text-[#B19A75]">
                {t.homeCta.eyebrow}
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
                {t.homeCta.heading}
              </h2>
              <p className="text-base sm:text-lg text-[#F5F4F0]/75 max-w-2xl leading-relaxed">
                {t.homeCta.supportingText}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider bg-[#B19A75] text-[#111820] hover:bg-[#c3ad88] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>{t.homeCta.primaryButton}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/projects')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider bg-transparent text-white border border-white/25 hover:border-[#B19A75] hover:text-[#B19A75] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>{t.homeCta.secondaryButton}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
