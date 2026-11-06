import React from 'react';
import { MANH_COMPANY_INFO } from '../data/verifiedCorporateData';
import { useApp } from '../i18n/LanguageContext';

export const PrivacyPolicyPage: React.FC = () => {
  const { language } = useApp();

  return (
    <div className="bg-[#F5F4F0] text-[#111820]">
      <section className="bg-[#111820] text-white pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-white/10">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#B19A75] mb-3">
            MANH COMPANY · GDPR &amp; DATA PROTECTION
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {language === 'el'
              ? 'Πολιτική Απορρήτου & Προστασίας Προσωπικών Δεδομένων'
              : 'Privacy Policy & Personal Data Protection'}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#F5F4F0]/75 leading-relaxed">
            {language === 'el'
              ? 'Ενημέρωση σχετικά με την επεξεργασία δεδομένων προσωπικού χαρακτήρα σύμφωνα με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (ΕΕ) 2016/679 (GDPR) και την ελληνική νομοθεσία.'
              : 'Information regarding the processing of personal data in accordance with Regulation (EU) 2016/679 (General Data Protection Regulation — GDPR) and applicable Greek law.'}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 space-y-10">
          <div className="bg-white border border-[#111820]/15 p-8 sm:p-12 space-y-8 text-sm sm:text-base leading-relaxed text-[#111820]/85">
            <div className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#111820]">
                {language === 'el'
                  ? '1. Στοιχεία Εταιρείας'
                  : '1. Corporate Identity'}
              </h2>
              <p>
                {language === 'el'
                  ? 'Ο παρών ιστότοπος (https://manhcompany.com) αποτελεί την επίσημη διαδικτυακή παρουσία της MANH Company:'
                  : 'This website (https://manhcompany.com) serves as the official corporate portal of MANH Company:'}
              </p>
              <div className="p-5 bg-[#F5F4F0] border border-[#111820]/15 space-y-1.5 text-xs font-mono">
                <div className="font-bold text-[#111820]">
                  {MANH_COMPANY_INFO.brandName}
                </div>
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
            </div>

            <div className="space-y-3 border-t border-[#111820]/10 pt-8">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#111820]">
                {language === 'el'
                  ? '2. Δεδομένα που Συλλέγουμε μέσω της Φόρμας Επικοινωνίας'
                  : '2. Personal Data Collected via the Contact Form'}
              </h2>
              <p>
                {language === 'el'
                  ? 'Όταν υποβάλλετε αίτημα μέσω της φόρμας επικοινωνίας, συλλέγουμε αποκλειστικά τα στοιχεία που μας παρέχετε οικειοθελώς: Ονοματεπώνυμο, Διεύθυνση Email, Επωνυμία Εταιρείας (προαιρετικά), Επιλεγμένο Τομέα Υπηρεσιών (Ναυτιλιακές & Βιομηχανικές Υπηρεσίες ή Ακίνητη Περιουσία & Διαχείριση), Θέμα και Περιεχόμενο Μηνύματος, καθώς και τεχνικά μεταδεδομένα ασφαλείας για την αποτροπή ανεπιθύμητης αλληλογραφίας (spam).'
                  : 'When you submit an inquiry through our contact form, we collect only the information you voluntarily provide: Full Name, Email Address, Company Name (optional), Selected Service Area (Marine & Industrial Services or Real Estate & Asset Management), Subject, and Message content, along with minimal technical rate-limiting metadata to prevent automated spam.'}
              </p>
            </div>

            <div className="space-y-3 border-t border-[#111820]/10 pt-8">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#111820]">
                {language === 'el'
                  ? '3. Σκοπός & Νομική Βάση Επεξεργασίας'
                  : '3. Purpose & Legal Basis of Processing'}
              </h2>
              <p>
                {language === 'el'
                  ? 'Τα δεδομένα χρησιμοποιούνται αποκλειστικά για την εξέταση του αιτήματός σας και την επικοινωνία μαζί σας από τη MANH Company (Άρθρο 6 παρ. 1 στοιχ. α΄ και β΄ του GDPR). Τα στοιχεία σας δεν πωλούνται, δεν εκμισθώνονται και δεν διαβιβάζονται σε τρίτους για εμπορικούς ή διαφημιστικούς σκοπούς.'
                  : 'Personal data is processed strictly by MANH Company to review and respond to your inquiry (Article 6(1)(a) and (b) of the GDPR). Your information is never sold, leased, or shared with third-party marketers.'}
              </p>
            </div>

            <div className="space-y-3 border-t border-[#111820]/10 pt-8">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#111820]">
                {language === 'el'
                  ? '4. Δικαιώματα Υποκειμένων των Δεδομένων'
                  : '4. Your Rights Under the GDPR'}
              </h2>
              <p>
                {language === 'el'
                  ? 'Σύμφωνα με τον Κανονισμό (ΕΕ) 2016/679, διατηρείτε το δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού της επεξεργασίας, εναντίωσης και ανάκλησης της συγκατάθεσής σας ανά πάσα στιγμή, καθώς και το δικαίωμα υποβολής αναφοράς στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (www.dpa.gr).'
                  : 'Under the GDPR, you have the right to request access to, rectification or erasure of your personal data, restriction of processing, or withdrawal of consent at any time, as well as the right to lodge a complaint with the Hellenic Data Protection Authority (www.dpa.gr).'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
