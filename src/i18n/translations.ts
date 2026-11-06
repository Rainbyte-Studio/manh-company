import { Language, RoutePath } from './types';

export interface PageSeoMeta {
  title: string;
  description: string;
}

export const SEO_BY_ROUTE: Record<Language, Record<RoutePath, PageSeoMeta>> = {
  en: {
    '/': {
      title: 'MANH Company — Engineering Excellence. Lasting Asset Value.',
      description:
        'MANH Company delivers specialized expertise across marine, industrial, and real estate services: Marine & Industrial Services and Real Estate & Asset Management.',
    },
    '/about': {
      title: 'About MANH Company — Corporate Identity & Operating Philosophy',
      description:
        'Discover MANH Company, a unified corporate identity providing specialized expertise across marine, industrial, and real estate services.',
    },
    '/marine-industrial': {
      title: 'Marine & Industrial Services | MANH Company',
      description:
        'Ship repairs and maintenance, shipbuilding and construction, mechanical and engineering works, steel and technical works, and electrical installations by MANH Company.',
    },
    '/real-estate': {
      title: 'Real Estate & Asset Management | MANH Company',
      description:
        'Property ownership, property management, property leasing, property utilization, and long-term asset management by MANH Company.',
    },
    '/projects': {
      title: 'Projects & Technical References | MANH Company',
      description:
        'Explore marine, industrial, and technical reference works executed by MANH Company across ship repairs, structural steelworks, conversions, and engineering systems.',
    },
    '/contact': {
      title: 'Contact MANH Company — Marine & Industrial and Real Estate Services',
      description:
        'Connect directly with MANH Company regarding Marine & Industrial Services or Real Estate & Asset Management.',
    },
    '/privacy-policy': {
      title: 'Privacy Policy & Data Protection | MANH Company',
      description:
        'Information regarding personal data processing and GDPR compliance for MANH Company (G.E.MI. No.: 197031307000, AFM: 803444313).',
    },
  },
  el: {
    '/': {
      title: 'MANH Company — Μηχανική Αρτιότητα. Διαχρονική Αξία Ακινήτων.',
      description:
        'Η MANH Company προσφέρει εξειδικευμένη τεχνογνωσία σε ναυτιλιακές, βιομηχανικές υπηρεσίες και υπηρεσίες ακίνητης περιουσίας.',
    },
    '/about': {
      title: 'Σχετικά με τη MANH Company — Εταιρική Ταυτότητα & Φιλοσοφία',
      description:
        'Γνωρίστε τη MANH Company, μια ενιαία εταιρική ταυτότητα με εξειδικευμένη δραστηριότητα στους τομείς της ναυτιλίας, της βιομηχανίας και της ακίνητης περιουσίας.',
    },
    '/marine-industrial': {
      title: 'Ναυτιλιακές & Βιομηχανικές Υπηρεσίες | MANH Company',
      description:
        'Επισκευές και συντήρηση πλοίων, ναυπηγικές κατασκευές, μηχανολογικές εργασίες, ελασματουργικές/τεχνικές εργασίες και ηλεκτρολογικές εγκαταστάσεις από τη MANH Company.',
    },
    '/real-estate': {
      title: 'Ακίνητη Περιουσία & Διαχείριση | MANH Company',
      description:
        'Κατοχή ακινήτων, διαχείριση ακίνητης περιουσίας, εκμίσθωση, αξιοποίηση ακινήτων και μακροχρόνια διαχείριση από τη MANH Company.',
    },
    '/projects': {
      title: 'Έργα & Τεχνικές Αναφορές | MANH Company',
      description:
        'Παρουσίαση τεχνικών και ναυπηγοεπισκευαστικών έργων της MANH Company σε επισκευές πλοίων, ελασματουργικά, μετασκευές και μηχανολογικά συστήματα.',
    },
    '/contact': {
      title: 'Επικοινωνία | MANH Company — Ναυτιλιακές Υπηρεσίες & Ακίνητη Περιουσία',
      description:
        'Επικοινωνήστε με τη MANH Company για Ναυτιλιακές & Βιομηχανικές Υπηρεσίες ή για θέματα Ακίνητης Περιουσίας & Διαχείρισης.',
    },
    '/privacy-policy': {
      title: 'Πολιτική Απορρήτου & Προστασία Δεδομένων | MANH Company',
      description:
        'Πληροφορίες σχετικά με την επεξεργασία προσωπικών δεδομένων (GDPR) από τη MANH Company (Αριθμός Γ.Ε.ΜΗ.: 197031307000, Α.Φ.Μ.: 803444313).',
    },
  },
};

export const UI_TEXT = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      sectors: 'Business Sectors',
      marine: 'Marine & Industrial',
      realEstate: 'Real Estate & Assets',
      projects: 'Projects',
      contact: 'Contact',
      inquireCta: 'Direct Inquiry',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      switchLanguage: 'Switch language',
    },
    hero: {
      eyebrow: 'MANH COMPANY',
      headlineLine1: 'Engineering Excellence.',
      headlineLine2: 'Lasting Asset Value.',
      supportingText:
        'Specialized expertise across marine, industrial, and real estate services.',
      primaryCta: 'Explore Our Business Sectors',
      secondaryCta: 'About MANH Company',
      scrollLabel: 'Explore Sectors',
    },
    homeSectors: {
      sectionIndex: '01',
      eyebrow: 'Business Areas',
      heading: 'Specialized Expertise Across Core Sectors.',
      intro:
        'MANH Company operates across two core areas of professional activity—delivering technical marine and industrial engineering alongside disciplined real estate ownership, utilization, and asset management.',
      marineTag: 'Sector 01 · MANH Company',
      marineTitle: 'Marine & Industrial',
      marineDesc:
        'Comprehensive marine and industrial engineering services including ship repairs and maintenance, shipbuilding and conversions, mechanical and engineering works, structural steel and piping fabrication, and electrical installations.',
      marineCta: 'Explore Marine & Industrial',
      realEstateTag: 'Sector 02 · MANH Company',
      realEstateTitle: 'Real Estate & Assets',
      realEstateDesc:
        'Property ownership, management, leasing, and utilization—guided by responsible stewardship, preventive maintenance, and long-term preservation of asset value.',
      realEstateCta: 'Explore Real Estate & Assets',
    },
    homeAbout: {
      sectionIndex: '02',
      eyebrow: 'Corporate Identity',
      headingLine1: 'One Corporate Identity.',
      headingLine2: 'Multidisciplinary Precision.',
      p1: 'MANH Company brings together specialized capabilities in marine and industrial engineering with structured real estate ownership and asset management under one cohesive corporate standard.',
      p2: 'Across both areas of activity, our work is defined by technical competence, operational reliability, attentive upkeep of physical assets, and a consistent focus on long-term value.',
      legalNote:
        'MANH Company · General Commercial Registry (G.E.MI.) No.: 197031307000 · Tax Identification Number (AFM): 803444313',
      cta: 'Discover MANH Company',
    },
    homeExpertise: {
      sectionIndex: '03',
      eyebrow: 'Core Capabilities',
      heading: 'Confirmed Operational Scope Across Both Sectors',
      subtitle:
        'MANH Company provides focused, technically rigorous services across its Marine & Industrial and Real Estate & Asset Management operations.',
      marineColumnTitle: 'Marine & Industrial Services',
      marineColumnEntity: 'MANH Company · Marine & Industrial Sector',
      realEstateColumnTitle: 'Real Estate & Asset Management',
      realEstateColumnEntity: 'MANH Company · Real Estate & Assets Sector',
      viewAllMarine: 'Full Marine & Industrial Scope',
      viewAllRealEstate: 'Full Real Estate & Asset Scope',
    },
    homeApproach: {
      sectionIndex: '04',
      eyebrow: 'Operating Principles',
      heading: 'A Unified Standard of Stewardship & Execution',
      intro:
        'Whether executing structural steel and mechanical works on commercial vessels or managing the long-term upkeep of residential and hospitality real estate, MANH Company operates on five core principles.',
      principles: [
        {
          num: '01',
          title: 'Technical Responsibility',
          desc: 'Every marine engineering intervention and property maintenance decision is grounded in sound technical assessment, regulatory compliance, and documented execution.',
        },
        {
          num: '02',
          title: 'Attention to Quality',
          desc: 'From certified shipyard fabrication and marine piping works to attentive architectural care across our real estate assets, quality is built into daily operations.',
        },
        {
          num: '03',
          title: 'Professional Consistency',
          desc: 'Clear communication, realistic scheduling, and dependable follow-through across marine engineering deliverables and long-term property management alike.',
        },
        {
          num: '04',
          title: 'Responsible Asset Management',
          desc: 'Physical assets—whether commercial vessels or architectural properties—require continuous, preventive care to safeguard their operational integrity and utility.',
        },
        {
          num: '05',
          title: 'Long-Term Thinking',
          desc: 'We prioritize durability, lasting structural integrity, and sustainable utilization over short-term expediency.',
        },
      ],
    },
    homeCta: {
      eyebrow: 'Direct Corporate Access',
      heading: "Let's Build Long-Term Value.",
      supportingText:
        'Connect with MANH Company to discuss marine and industrial project requirements or real estate and asset management inquiries.',
      primaryButton: 'Contact MANH Company',
      secondaryButton: 'View Technical Projects',
    },
    footer: {
      description:
        'Specialized expertise across marine, industrial, and real estate services. Engineering Excellence. Lasting Asset Value.',
      navigationTitle: 'Navigation',
      sectorsTitle: 'Business Sectors',
      officialRegistryTitle: 'Official Corporate Information',
      companyTitle: 'MANH Company',
      gemiLine: 'General Commercial Registry (G.E.MI.) No.: 197031307000',
      afmLine: 'Tax Identification Number (AFM): 803444313',
      privacyPolicy: 'Privacy Policy',
      rightsReserved: 'All rights reserved.',
    },
  },
  el: {
    nav: {
      home: 'Αρχική',
      about: 'Η Εταιρεία',
      sectors: 'Τομείς Δραστηριότητας',
      marine: 'Ναυτιλία & Βιομηχανία',
      realEstate: 'Ακίνητη Περιουσία',
      projects: 'Έργα',
      contact: 'Επικοινωνία',
      inquireCta: 'Επικοινωνία',
      openMenu: 'Άνοιγμα μενού πλοήγησης',
      closeMenu: 'Κλείσιμο μενού πλοήγησης',
      switchLanguage: 'Αλλαγή γλώσσας',
    },
    hero: {
      eyebrow: 'MANH COMPANY',
      headlineLine1: 'Μηχανική Αρτιότητα.',
      headlineLine2: 'Διαχρονική Αξία Ακινήτων.',
      supportingText:
        'Εξειδικευμένη τεχνογνωσία σε ναυτιλιακές, βιομηχανικές υπηρεσίες και υπηρεσίες ακίνητης περιουσίας.',
      primaryCta: 'Εξερευνήστε τους Τομείς μας',
      secondaryCta: 'Σχετικά με τη MANH Company',
      scrollLabel: 'Τομείς Δραστηριότητας',
    },
    homeSectors: {
      sectionIndex: '01',
      eyebrow: 'Τομείς Δραστηριότητας',
      heading: 'Εξειδικευμένη Τεχνογνωσία σε Δύο Βασικούς Τομείς.',
      intro:
        'Η MANH Company δραστηριοποιείται σε δύο βασικούς τομείς—παρέχοντας εξειδικευμένες ναυπηγοεπισκευαστικές και βιομηχανικές υπηρεσίες παράλληλα με την οργανωμένη κατοχή, αξιοποίηση και διαχείριση ακίνητης περιουσίας.',
      marineTag: 'Τομέας 01 · MANH Company',
      marineTitle: 'Ναυτιλιακές & Βιομηχανικές Υπηρεσίες',
      marineDesc:
        'Ολοκληρωμένες ναυτιλιακές και βιομηχανικές υπηρεσίες που περιλαμβάνουν επισκευές και συντήρηση πλοίων, ναυπηγικές κατασκευές και μετασκευές, μηχανολογικές εργασίες, ελασματουργικές/σωληνουργικές εργασίες και ηλεκτρολογικές εγκαταστάσεις.',
      marineCta: 'Ναυτιλιακές & Βιομηχανικές Υπηρεσίες',
      realEstateTag: 'Τομέας 02 · MANH Company',
      realEstateTitle: 'Ακίνητη Περιουσία & Διαχείριση',
      realEstateDesc:
        'Κατοχή, διαχείριση, εκμίσθωση και αξιοποίηση ακινήτων—με γνώμονα την υπεύθυνη φροντίδα, την προληπτική συντήρηση και τη διατήρηση της μακροχρόνιας αξίας.',
      realEstateCta: 'Ακίνητη Περιουσία & Διαχείριση',
    },
    homeAbout: {
      sectionIndex: '02',
      eyebrow: 'Εταιρική Ταυτότητα',
      headingLine1: 'Μία Ενιαία Εταιρική Ταυτότητα.',
      headingLine2: 'Τεχνική Ακρίβεια & Συνέπεια.',
      p1: 'Η MANH Company συνδυάζει την εξειδικευμένη τεχνογνωσία στις ναυτιλιακές και βιομηχανικές εφαρμογές με την οργανωμένη κατοχή και διαχείριση ακίνητης περιουσίας κάτω από ένα ενιαίο εταιρικό πρότυπο.',
      p2: 'Και στους δύο τομείς δραστηριότητας, η λειτουργία μας καθορίζεται από την τεχνική επάρκεια, την επαγγελματική αξιοπιστία, τη συστηματική φροντίδα των παγίων και τον προσανατολισμό στη μακροχρόνια αξία.',
      legalNote:
        'MANH Company · Αριθμός Γ.Ε.ΜΗ.: 197031307000 · Αριθμός Φορολογικού Μητρώου: 803444313',
      cta: 'Γνωρίστε τη MANH Company',
    },
    homeExpertise: {
      sectionIndex: '03',
      eyebrow: 'Βασικές Δυνατότητες',
      heading: 'Αντικείμενο Εργασιών και στους Δύο Τομείς',
      subtitle:
        'Η MANH Company παρέχει εξειδικευμένες υπηρεσίες υψηλών προδιαγραφών τόσο στον τομέα των Ναυτιλιακών & Βιομηχανικών Υπηρεσιών όσο και στον τομέα της Ακίνητης Περιουσίας & Διαχείρισης.',
      marineColumnTitle: 'Ναυτιλιακές & Βιομηχανικές Υπηρεσίες',
      marineColumnEntity: 'MANH Company · Τομέας Ναυτιλίας & Βιομηχανίας',
      realEstateColumnTitle: 'Ακίνητη Περιουσία & Διαχείριση',
      realEstateColumnEntity: 'MANH Company · Τομέας Ακίνητης Περιουσίας',
      viewAllMarine: 'Αναλυτικές Ναυτιλιακές & Βιομηχανικές Υπηρεσίες',
      viewAllRealEstate: 'Αναλυτική Παρουσίαση Ακίνητης Περιουσίας',
    },
    homeApproach: {
      sectionIndex: '04',
      eyebrow: 'Αρχές Λειτουργίας',
      heading: 'Ενιαίο Πρότυπο Ευθύνης & Επαγγελματικής Εκτέλεσης',
      intro:
        'Είτε πρόκειται για απαιτητικές ελασματουργικές και μηχανολογικές εργασίες πλοίων είτε για τη μακροχρόνια φροντίδα ακινήτων κατοικίας και φιλοξενίας, η MANH Company λειτουργεί με βάση πέντε θεμελιώδεις αρχές.',
      principles: [
        {
          num: '01',
          title: 'Τεχνική Υπευθυνότητα',
          desc: 'Κάθε τεχνική επέμβαση στη ναυπηγοεπισκευή και κάθε απόφαση συντήρησης ακινήτου βασίζεται σε τεκμηριωμένη μελέτη, κανονιστική συμμόρφωση και υπεύθυνη εκτέλεση.',
        },
        {
          num: '02',
          title: 'Προσήλωση στην Ποιότητα',
          desc: 'Από τις πιστοποιημένες ναυπηγικές και σωληνουργικές εργασίες έως την προσεγμένη αρχιτεκτονική φροντίδα των ακινήτων μας, η ποιότητα αποτελεί καθημερινή πρακτική.',
        },
        {
          num: '03',
          title: 'Επαγγελματική Συνέπεια',
          desc: 'Σαφής επικοινωνία, ρεαλιστικός προγραμματισμός και αξιοπιστία τόσο στην παράδοση τεχνικών έργων όσο και στη διαχείριση ακίνητης περιουσίας.',
        },
        {
          num: '04',
          title: 'Υπεύθυνη Διαχείριση Παγίων',
          desc: 'Τα φυσικά πάγια—είτε εμπορικά πλοία είτε κτιριακές εγκαταστάσεις—απαιτούν συνεχή, προληπτική μέριμνα για τη διασφάλιση της λειτουργικότητάς τους.',
        },
        {
          num: '05',
          title: 'Μακροπρόθεσμη Προοπτική',
          desc: 'Δίνουμε προτεραιότητα στην αντοχή, τη δομική αρτιότητα και τη βιώσιμη αξιοποίηση σε βάθος χρόνου.',
        },
      ],
    },
    homeCta: {
      eyebrow: 'Άμεση Εταιρική Επικοινωνία',
      heading: 'Δημιουργούμε Διαχρονική Αξία.',
      supportingText:
        'Επικοινωνήστε με τη MANH Company για να συζητήσετε απαιτήσεις ναυτιλιακών και βιομηχανικών έργων ή θέματα διαχείρισης ακίνητης περιουσίας.',
      primaryButton: 'Επικοινωνήστε με τη MANH Company',
      secondaryButton: 'Δείτε Τεχνικά Έργα',
    },
    footer: {
      description:
        'Εξειδικευμένη τεχνογνωσία σε ναυτιλιακές, βιομηχανικές υπηρεσίες και υπηρεσίες ακίνητης περιουσίας. Μηχανική Αρτιότητα. Διαχρονική Αξία Ακινήτων.',
      navigationTitle: 'Πλοήγηση',
      sectorsTitle: 'Τομείς Δραστηριότητας',
      officialRegistryTitle: 'Επίσημα Εταιρικά Στοιχεία',
      companyTitle: 'MANH Company',
      gemiLine: 'Αριθμός Γ.Ε.ΜΗ.: 197031307000',
      afmLine: 'Αριθμός Φορολογικού Μητρώου: 803444313',
      privacyPolicy: 'Πολιτική Απορρήτου',
      rightsReserved: 'Με επιφύλαξη παντός δικαιώματος.',
    },
  },
};
