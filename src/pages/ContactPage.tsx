import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { MANH_COMPANY_INFO } from '../data/verifiedCorporateData';
import { useApp } from '../i18n/LanguageContext';

interface SubmissionReceipt {
  referenceId: string;
  submittedAt: string;
  recipientEntity: string;
}

export const ContactPage: React.FC = () => {
  const { language, contactSectorPreset, navigate } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [sector, setSector] = useState<'marine' | 'real-estate'>(
    contactSectorPreset || 'marine'
  );
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [websiteHoneypot, setWebsiteHoneypot] = useState('');

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<SubmissionReceipt | null>(null);

  useEffect(() => {
    if (contactSectorPreset) {
      setSector(contactSectorPreset);
    }
  }, [contactSectorPreset]);

  const validateClient = () => {
    const errs: Record<string, string> = {};
    if (fullName.trim().length < 2) {
      errs.fullName =
        language === 'el'
          ? 'Παρακαλούμε συμπληρώστε το ονοματεπώνυμό σας.'
          : 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      errs.email =
        language === 'el'
          ? 'Παρακαλούμε συμπληρώστε έγκυρη διεύθυνση email.'
          : 'Please enter a valid email address.';
    }
    if (subject.trim().length < 3) {
      errs.subject =
        language === 'el'
          ? 'Παρακαλούμε συμπληρώστε θέμα (τουλάχιστον 3 χαρακτήρες).'
          : 'Please enter a subject (at least 3 characters).';
    }
    if (message.trim().length < 10) {
      errs.message =
        language === 'el'
          ? 'Παρακαλούμε συμπληρώστε το μήνυμά σας (τουλάχιστον 10 χαρακτήρες).'
          : 'Please enter your message (at least 10 characters).';
    }
    if (!privacyConsent) {
      errs.privacyConsent =
        language === 'el'
          ? 'Απαιτείται η αποδοχή της Πολιτικής Απορρήτου.'
          : 'You must agree to the Privacy Policy before submitting.';
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validateClient()) return;

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          company: company.trim(),
          sector,
          subject: subject.trim(),
          message: message.trim(),
          privacyConsent,
          language,
          websiteHoneypot,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        setServerError(
          data.error ||
            (language === 'el'
              ? 'Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος.'
              : 'An error occurred while submitting your inquiry.')
        );
        return;
      }

      setReceipt({
        referenceId: data.referenceId,
        submittedAt: data.submittedAt,
        recipientEntity: data.recipientEntity,
      });
    } catch {
      setServerError(
        language === 'el'
          ? 'Αδυναμία σύνδεσης με τον διακομιστή. Παρακαλούμε δοκιμάστε ξανά.'
          : 'Unable to reach the server. Please check your connection and try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setReceipt(null);
    setFullName('');
    setEmail('');
    setCompany('');
    setSubject('');
    setMessage('');
    setPrivacyConsent(false);
    setFieldErrors({});
    setServerError(null);
  };

  return (
    <div className="bg-[#F5F4F0] text-[#111820]">
      {/* PAGE HEADER */}
      <section className="bg-[#111820] text-white pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.24em] text-[#B19A75]">
              <span className="w-8 h-[1px] bg-[#B19A75]" />
              <span>
                {language === 'el'
                  ? 'ΕΠΙΚΟΙΝΩΝΙΑ · MANH COMPANY'
                  : 'CORPORATE CONTACT · MANH COMPANY'}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              {language === 'el'
                ? 'Επικοινωνήστε με τη MANH Company.'
                : 'Connect with MANH Company.'}
            </h1>

            <p className="text-base sm:text-lg text-[#F5F4F0]/80 leading-relaxed max-w-2xl">
              {language === 'el'
                ? 'Συμπληρώστε την ενιαία φόρμα επικοινωνίας επιλέγοντας τον τομέα υπηρεσιών που σας ενδιαφέρει: Ναυτιλιακές & Βιομηχανικές Υπηρεσίες ή Ακίνητη Περιουσία & Διαχείριση.'
                : 'Complete the unified inquiry form below and select the relevant service area: Marine & Industrial Services or Real Estate & Asset Management.'}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: OFFICIAL CORPORATE INFO + UNIFIED CONTACT FORM */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN: MANH COMPANY OVERVIEW & SECTORS */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#111820] text-white border border-[#111820] p-7 sm:p-9 space-y-6">
                <div className="border-b border-white/15 pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B19A75]">
                    {language === 'el'
                      ? 'ΕΤΑΙΡΙΚΑ ΣΤΟΙΧΕΙΑ'
                      : 'OFFICIAL CORPORATE INFORMATION'}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white mt-1">
                    {MANH_COMPANY_INFO.brandName}
                  </h2>
                </div>

                <div className="space-y-2 text-xs font-mono text-[#F5F4F0]/85">
                  <div>
                    {language === 'el'
                      ? `Αριθμός Γ.Ε.ΜΗ.: ${MANH_COMPANY_INFO.gemi}`
                      : `General Commercial Registry (G.E.MI.) No.: ${MANH_COMPANY_INFO.gemi}`}
                  </div>
                  <div>
                    {language === 'el'
                      ? `Αριθμός Φορολογικού Μητρώου: ${MANH_COMPANY_INFO.afm}`
                      : `Tax Identification Number (AFM): ${MANH_COMPANY_INFO.afm}`}
                  </div>
                </div>

                <div className="border-t border-white/15 pt-5 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B19A75] block">
                    {language === 'el'
                      ? 'ΤΟΜΕΙΣ ΕΞΥΠΗΡΕΤΗΣΗΣ'
                      : 'SERVICE AREAS'}
                  </span>

                  <div className="space-y-3 text-xs">
                    <div className="p-4 bg-white/[0.03] border border-white/10 space-y-1">
                      <div className="font-display text-sm font-semibold text-white">
                        {language === 'el'
                          ? '01. Ναυτιλιακές & Βιομηχανικές Υπηρεσίες'
                          : '01. Marine & Industrial Services'}
                      </div>
                      <p className="text-[#F5F4F0]/70 leading-relaxed">
                        {language === 'el'
                          ? 'Επισκευές & συντήρηση πλοίων, ναυπηγικές κατασκευές, μηχανολογικές εργασίες, χαλύβδινες/τεχνικές εργασίες και ηλεκτρολογικές εγκαταστάσεις.'
                          : 'Ship repairs & maintenance, shipbuilding & construction, mechanical & engineering works, steel & technical works, and electrical installations.'}
                      </p>
                    </div>

                    <div className="p-4 bg-white/[0.03] border border-white/10 space-y-1">
                      <div className="font-display text-sm font-semibold text-white">
                        {language === 'el'
                          ? '02. Ακίνητη Περιουσία & Διαχείριση'
                          : '02. Real Estate & Asset Management'}
                      </div>
                      <p className="text-[#F5F4F0]/70 leading-relaxed">
                        {language === 'el'
                          ? 'Κατοχή ακινήτων, διαχείριση ακίνητης περιουσίας, εκμίσθωση, αξιοποίηση και μακροχρόνια διαχείριση.'
                          : 'Property ownership, property management, property leasing, property utilization, and long-term asset management.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: SINGLE UNIFIED CONTACT FORM */}
            <div className="lg:col-span-7 bg-white border border-[#111820]/15 p-7 sm:p-11">
              {receipt ? (
                <div className="py-10 space-y-6">
                  <div className="w-12 h-12 bg-[#111820] text-[#B19A75] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#B19A75] font-semibold">
                      {language === 'el'
                        ? 'ΕΠΙΒΕΒΑΙΩΣΗ ΚΑΤΑΧΩΡΗΣΗΣ ΑΙΤΗΜΑΤΟΣ'
                        : 'INQUIRY RECORDED'}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111820]">
                      {language === 'el'
                        ? 'Το μήνυμά σας καταχωρήθηκε επιτυχώς.'
                        : 'Your inquiry has been recorded.'}
                    </h2>
                    <p className="text-sm text-[#65747F] leading-relaxed">
                      {language === 'el'
                        ? 'Το αίτημά σας αποθηκεύτηκε στο σύστημα επικοινωνίας της MANH Company.'
                        : 'Your message has been validated and logged by MANH Company.'}
                    </p>
                  </div>

                  <dl className="border border-[#111820]/15 bg-[#F5F4F0] p-5 space-y-3 text-xs font-mono">
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#65747F]">
                        {language === 'el' ? 'Κωδικός Αναφοράς' : 'Reference ID'}
                      </dt>
                      <dd className="font-semibold text-[#111820]">
                        {receipt.referenceId}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#65747F]">
                        {language === 'el' ? 'Τομέας Υπηρεσιών' : 'Service Area'}
                      </dt>
                      <dd className="text-[#111820] text-right">
                        {receipt.recipientEntity}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#65747F]">
                        {language === 'el' ? 'Χρονοσφραγίδα' : 'Timestamp'}
                      </dt>
                      <dd className="text-[#111820]">
                        {new Date(receipt.submittedAt).toLocaleString(
                          language === 'el' ? 'el-GR' : 'en-GB'
                        )}
                      </dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3.5 text-xs font-display font-semibold uppercase tracking-wider bg-[#111820] text-white hover:bg-[#1d2836] transition-colors cursor-pointer"
                  >
                    {language === 'el'
                      ? 'Αποστολή Νέου Μηνύματος'
                      : 'Submit Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-[#111820]/10 pb-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#B19A75] font-semibold">
                      {language === 'el'
                        ? 'ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ · MANH COMPANY'
                        : 'UNIFIED INQUIRY FORM · MANH COMPANY'}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111820] mt-1">
                      {language === 'el'
                        ? 'Αποστολή Μηνύματος'
                        : 'Send a Message'}
                    </h2>
                  </div>

                  {serverError && (
                    <div
                      role="alert"
                      className="p-4 bg-red-50 border border-red-300 text-xs text-red-800 flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Honeypot field hidden from screen readers and human users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website-honeypot">Website</label>
                    <input
                      id="website-honeypot"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={websiteHoneypot}
                      onChange={(e) => setWebsiteHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="contact-fullname"
                        className="block text-xs font-mono uppercase tracking-wider text-[#111820] mb-2"
                      >
                        {language === 'el' ? 'Ονοματεπώνυμο *' : 'Full Name *'}
                      </label>
                      <input
                        id="contact-fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        aria-invalid={!!fieldErrors.fullName}
                        className="w-full px-4 py-3 text-sm bg-[#F5F4F0] border border-[#111820]/20 text-[#111820] focus:outline-none focus:border-[#B19A75]"
                      />
                      {fieldErrors.fullName && (
                        <p className="mt-1.5 text-xs text-red-700">
                          {fieldErrors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase tracking-wider text-[#111820] mb-2"
                      >
                        {language === 'el' ? 'Διεύθυνση Email *' : 'Email Address *'}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={!!fieldErrors.email}
                        className="w-full px-4 py-3 text-sm bg-[#F5F4F0] border border-[#111820]/20 text-[#111820] focus:outline-none focus:border-[#B19A75]"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1.5 text-xs text-red-700">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Company (Optional) */}
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-mono uppercase tracking-wider text-[#65747F] mb-2"
                      >
                        {language === 'el'
                          ? 'Εταιρεία (Προαιρετικό)'
                          : 'Company (Optional)'}
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-[#F5F4F0] border border-[#111820]/20 text-[#111820] focus:outline-none focus:border-[#B19A75]"
                      />
                    </div>

                    {/* Service Selection Field */}
                    <div>
                      <label
                        htmlFor="contact-sector"
                        className="block text-xs font-mono uppercase tracking-wider text-[#111820] mb-2"
                      >
                        {language === 'el'
                          ? 'Τομέας Υπηρεσιών *'
                          : 'Service Selection *'}
                      </label>
                      <select
                        id="contact-sector"
                        value={sector}
                        onChange={(e) =>
                          setSector(e.target.value as 'marine' | 'real-estate')
                        }
                        className="w-full px-4 py-3 text-sm bg-[#F5F4F0] border border-[#111820]/20 text-[#111820] focus:outline-none focus:border-[#B19A75]"
                      >
                        <option value="marine">
                          {language === 'el'
                            ? 'Ναυτιλιακές & Βιομηχανικές Υπηρεσίες'
                            : 'Marine & Industrial Services'}
                        </option>
                        <option value="real-estate">
                          {language === 'el'
                            ? 'Ακίνητη Περιουσία & Διαχείριση'
                            : 'Real Estate & Asset Management'}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono uppercase tracking-wider text-[#111820] mb-2"
                    >
                      {language === 'el' ? 'Θέμα *' : 'Subject *'}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      aria-invalid={!!fieldErrors.subject}
                      className="w-full px-4 py-3 text-sm bg-[#F5F4F0] border border-[#111820]/20 text-[#111820] focus:outline-none focus:border-[#B19A75]"
                    />
                    {fieldErrors.subject && (
                      <p className="mt-1.5 text-xs text-red-700">
                        {fieldErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#111820] mb-2"
                    >
                      {language === 'el' ? 'Μήνυμα *' : 'Message *'}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      aria-invalid={!!fieldErrors.message}
                      className="w-full px-4 py-3 text-sm bg-[#F5F4F0] border border-[#111820]/20 text-[#111820] focus:outline-none focus:border-[#B19A75]"
                    />
                    {fieldErrors.message && (
                      <p className="mt-1.5 text-xs text-red-700">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Consent */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 accent-[#111820]"
                      />
                      <span className="text-xs text-[#65747F] leading-relaxed">
                        {language === 'el' ? (
                          <>
                            Έχω διαβάσει και αποδέχομαι την{' '}
                            <button
                              type="button"
                              onClick={() => navigate('/privacy-policy')}
                              className="text-[#111820] underline hover:text-[#B19A75] cursor-pointer"
                            >
                              Πολιτική Απορρήτου
                            </button>{' '}
                            σχετικά με την επεξεργασία των στοιχείων επικοινωνίας μου για την απάντηση στο παρόν αίτημα. *
                          </>
                        ) : (
                          <>
                            I have read and agree to the{' '}
                            <button
                              type="button"
                              onClick={() => navigate('/privacy-policy')}
                              className="text-[#111820] underline hover:text-[#B19A75] cursor-pointer"
                            >
                              Privacy Policy
                            </button>{' '}
                            regarding the processing of my personal data for the purpose of responding to this inquiry. *
                          </>
                        )}
                      </span>
                    </label>
                    {fieldErrors.privacyConsent && (
                      <p className="mt-1.5 text-xs text-red-700">
                        {fieldErrors.privacyConsent}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-display font-semibold uppercase tracking-wider bg-[#111820] text-white hover:bg-[#1d2836] disabled:opacity-50 transition-colors cursor-pointer"
                    >
                      {submitting
                        ? language === 'el'
                          ? 'Αποστολή σε εξέλιξη...'
                          : 'Submitting Inquiry...'
                        : language === 'el'
                        ? 'Αποστολή Μηνύματος'
                        : 'Send Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
