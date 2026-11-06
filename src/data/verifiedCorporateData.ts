import {
  MarineCapability,
  RealEstateActivity,
  VerifiedProject,
} from '../i18n/types';

export const GENERATED_IMAGES = {
  heroShipyard: '/src/assets/images/hero_marine_shipyard_1793960463092.jpg',
  marineWorkshop: '/src/assets/images/sector_marine_engineering_1793960463681.jpg',
  realEstateHero: '/src/assets/images/sector_real_estate_manh_1793960465124.jpg',
  corporateVision: '/src/assets/images/editorial_corporate_vision_1793960465049.jpg',
  interiorStewardship:
    '/src/assets/images/real_estate_interior_stewardship_1793960465417.jpg',
};

export const SECTOR_MEDIA = {
  marine: {
    aerial: '/assets/verified/marine/hero-shipyard-aerial.jpg',
    drydock1: '/assets/verified/marine/agios-nikolaos-1.jpg',
    drydock2: '/assets/verified/marine/agios-nikolaos-4.jpg',
    drydock3: '/assets/verified/marine/agios-nikolaos-8.jpg',
    sideShellCompleted: '/assets/verified/marine/side-shell-repair-completed.jpg',
    sideShellProgress: '/assets/verified/marine/side-shell-repair-progress.jpg',
    innerBottom: '/assets/verified/marine/inner-bottom-replacement.jpg',
    scrubberTank: '/assets/verified/marine/scrubber-process-tank.jpg',
    scrubberPumpRoom: '/assets/verified/marine/scrubber-pump-room.jpg',
    bwtsSystem: '/assets/verified/marine/bwts-system.jpg',
    grePiping: '/assets/verified/marine/gre-piping.jpg',
    drydockVessel: '/assets/verified/marine/drydock-vessel.jpg',
  },
  realEstate: {
    mainExterior: '/assets/verified/realestate/main_d2337de3.png',
    renovationConcept: '/assets/verified/realestate/after-renovation-concept_acf6c3a0.png',
    assetManagement:
      '/assets/verified/realestate/624055044_871007279154694_4368696126564045266_n_af4e5ea0.jpg',
    propertyLeasing:
      '/assets/verified/realestate/846611802_1083405971248156_2567974542760590870_n_79c1a0e4.jpg',
    hospitalitySuite:
      '/assets/verified/realestate/509427671_3864358570386036_3585112750288477697_n_3f937999.jpg',
    utilizationCare:
      '/assets/verified/realestate/510489873_3864358670386026_977655468589214762_n_e4b9cd51.jpg',
  },
};

export const MANH_COMPANY_INFO = {
  brandName: 'MANH Company',
  domainUrl: 'https://manhcompany.com',
  domainLabel: 'manhcompany.com',
  gemi: '197031307000',
  afm: '803444313',
  gemiLabel: {
    en: 'General Commercial Registry (G.E.MI.) No.',
    el: 'Αριθμός Γ.Ε.ΜΗ.',
  },
  afmLabel: {
    en: 'Tax Identification Number (AFM)',
    el: 'Αριθμός Φορολογικού Μητρώου',
  },
};

export const MARINE_CAPABILITIES: MarineCapability[] = [
  {
    id: 'ship-repairs-maintenance',
    index: '01',
    title: {
      en: 'Ship Repairs & Maintenance',
      el: 'Επισκευές & Συντήρηση Πλοίων',
    },
    category: {
      en: 'Marine Repair Services',
      el: 'Ναυπηγοεπισκευαστικές Υπηρεσίες',
    },
    summary: {
      en: 'Comprehensive hull, structural, surface treatment, and general maintenance works executed in dry dock, alongside repair berths, or during voyage with minimal vessel downtime.',
      el: 'Ολοκληρωμένες εργασίες επισκευής γάστρας, επιφανειακής προστασίας και γενικής συντήρησης πλοίων σε δεξαμενή, σε προβλήτα επισκευής ή εν πλω με ελάχιστο χρόνο ακινησίας.',
    },
    overview: [
      {
        en: 'MANH Company executes ship repair and scheduled maintenance operations across commercial cargo vessels, bulk carriers, tankers, passenger ferries, and specialized marine craft.',
        el: 'Η MANH Company εκτελεί εργασίες επισκευής και προγραμματισμένης συντήρησης σε εμπορικά φορτηγά πλοία, bulk carriers, δεξαμενόπλοια, επιβατηγά-οχηματαγωγά και εξειδικευμένα σκάφη.',
      },
      {
        en: 'Our technical teams cover the full repair spectrum—from structural hull renewals, sea-chest grating and valve overhauls, and high-pressure hydroblasting to marine coating systems and accommodation refits.',
        el: 'Οι τεχνικές μας ομάδες καλύπτουν όλο το φάσμα επισκευών—από αποκαταστάσεις γάστρας, επιθεωρήσεις δικτύων sea-chest και επιστομίων, έως υδροβολή υψηλής πίεσης, ναυτιλιακές βαφές και ανακατασκευές χώρων ενδιαίτησης.',
      },
    ],
    services: [
      {
        en: 'Dry-docking hull preparation, high-pressure hydroblasting, grit-blasting, and marine coating application',
        el: 'Προετοιμασία γάστρας σε δεξαμενή, υδροβολή υψηλής πίεσης, αμμοβολή και εφαρμογή ναυτιλιακών βαφών',
      },
      {
        en: 'Tank cleaning, ballast tank protective coatings, and corrosion control treatments',
        el: 'Καθαρισμοί δεξαμενών, προστατευτικοί χρωματισμοί δεξαμενών έρματος και αντιδιαβρωτική προστασία',
      },
      {
        en: 'Overhaul of sea valves, overboard discharges, rudder clearances, and tailshaft systems',
        el: 'Επιθεώρηση και επισκευή επιστομίων θαλάσσης, εξαγωγών, πηδαλίων και τελικών αξόνων',
      },
      {
        en: 'Interior accommodation repair, refit, thermal insulation, and voyage repair support',
        el: 'Επισκευές χώρων ενδιαίτησης, θερμομονώσεις και τεχνική υποστήριξη επισκευών εν πλω',
      },
    ],
    technicalSpecs: [
      {
        label: { en: 'Execution Modes', el: 'Τρόποι Εκτέλεσης' },
        value: {
          en: 'Dry Dock · Repair Berth · On-Voyage',
          el: 'Δεξαμενή · Προβλήτα Επισκευής · Εν Πλω',
        },
      },
      {
        label: { en: 'Surface Preparation', el: 'Προετοιμασία Επιφανειών' },
        value: {
          en: 'High-Pressure Hydroblasting & Marine Coatings',
          el: 'Υδροβολή Υψηλής Πίεσης & Ναυτιλιακές Βαφές',
        },
      },
      {
        label: { en: 'Quality Assurance', el: 'Διασφάλιση Ποιότητας' },
        value: {
          en: 'Class-Compliant Inspection & NDT Testing',
          el: 'Επιθεώρηση Κλάσης & Έλεγχοι NDT',
        },
      },
    ],
    image: SECTOR_MEDIA.marine.drydock1,
    secondaryImage: SECTOR_MEDIA.marine.drydock2,
    imageAlt: {
      en: 'Commercial vessel dry-docking and maintenance by MANH Company',
      el: 'Δεξαμενισμός και συντήρηση εμπορικού πλοίου — MANH Company',
    },
  },
  {
    id: 'shipbuilding-construction',
    index: '02',
    title: {
      en: 'Shipbuilding & Construction',
      el: 'Ναυπηγικές Κατασκευές & Μετασκευές',
    },
    category: {
      en: 'Vessel Construction & Conversions',
      el: 'Κατασκευές & Μετασκευές Πλοίων',
    },
    summary: {
      en: 'Custom vessel construction, structural conversions, hull lengthening, new deck integrations, and major geometric modifications engineered to classification standards.',
      el: 'Ναυπηγικές κατασκευές, δομικές μετασκευές πλοίων, επιμηκύνσεις γάστρας, προσθήκες νέων καταστρωμάτων και εκτεταμένες τροποποιήσεις σύμφωνα με τις προδιαγραφές Νηογνωμόνων.',
    },
    overview: [
      {
        en: 'MANH Company undertakes specialized vessel construction projects, structural block fabrication, and complex ship conversions designed to extend vessel service life or adapt ships to new operational profiles.',
        el: 'Η MANH Company αναλαμβάνει εξειδικευμένα έργα ναυπηγικών κατασκευών, προκατασκευής χαλύβδινων τμημάτων (blocks) και σύνθετων μετασκευών πλοίων με στόχο την παράταση της επιχειρησιακής ζωής ή την αλλαγή χρήσης τους.',
      },
      {
        en: 'Our conversion and construction scope encompasses single-to-double hull upgrades, Ro-Ro to Ro-Pax transformations, mid-body hull extensions, and custom commercial vessel constructions.',
        el: 'Το αντικείμενο κατασκευών και μετασκευών περιλαμβάνει αναβαθμίσεις δεξαμενόπλοιων σε διπλού τοιχώματος, μετατροπές πλοίων Ro-Ro σε επιβατηγά Ro-Pax, επιμηκύνσεις γάστρας και κατασκευές εμπορικών σκαφών.',
      },
    ],
    services: [
      {
        en: 'Custom construction of commercial vessels, Ro-Ro ferries, coastal tankers, and workboats',
        el: 'Ναυπήγηση και κατασκευή εμπορικών πλοίων, πορθμείων Ro-Ro, δεξαμενόπλοιων και σκαφών εργασίας',
      },
      {
        en: 'Structural vessel conversions including single-hull to double-hull upgrades and Ro-Pax transformations',
        el: 'Δομικές μετασκευές πλοίων, αναβαθμίσεις διπλού τοιχώματος (double-hull) και μετατροπές Ro-Pax',
      },
      {
        en: 'Mid-body hull lengthening, new structural deck constructions, ramps, and superstructures',
        el: 'Επιμηκύνσεις μεσαίου τμήματος γάστρας, κατασκευές νέων καταστρωμάτων, καταπελτών και υπερκατασκευών',
      },
      {
        en: 'Naval architectural drafting, stability calculations, and classification society documentation',
        el: 'Ναυπηγική σχεδίαση, μελέτες ευστάθειας και πλήρης τεχνική τεκμηρίωση για Νηογνώμονες',
      },
    ],
    technicalSpecs: [
      {
        label: { en: 'Construction Scope', el: 'Αντικείμενο Κατασκευών' },
        value: {
          en: 'Newbuilds · Block Erection · Hull Conversions',
          el: 'Νέες Κατασκευές · Ανέγερση Blocks · Μετασκευές',
        },
      },
      {
        label: { en: 'Structural Modifications', el: 'Δομικές Τροποποιήσεις' },
        value: {
          en: 'Double-Hull · Ro-Pax · Lengthening',
          el: 'Διπλό Τοίχωμα · Ro-Pax · Επιμηκύνσεις',
        },
      },
      {
        label: { en: 'Engineering Support', el: 'Μελετητική Υποστήριξη' },
        value: {
          en: '2D/3D Naval Plans & Stability Analysis',
          el: 'Σχέδια 2D/3D & Μελέτες Ευστάθειας',
        },
      },
    ],
    image: SECTOR_MEDIA.marine.drydockVessel,
    secondaryImage: SECTOR_MEDIA.marine.drydock3,
    imageAlt: {
      en: 'Shipbuilding and structural vessel conversion by MANH Company',
      el: 'Ναυπηγικές κατασκευές και δομικές μετασκευές πλοίων — MANH Company',
    },
  },
  {
    id: 'mechanical-engineering-works',
    index: '03',
    title: {
      en: 'Mechanical & Engineering Works',
      el: 'Μηχανολογικές & Τεχνικές Εργασίες',
    },
    category: {
      en: 'Marine Mechanical & Environmental Engineering',
      el: 'Μηχανολογικές Εφαρμογές & Περιβαλλοντικά Συστήματα',
    },
    summary: {
      en: 'Marine mechanical overhauls, propulsion and pump room engineering, Exhaust Gas Cleaning Systems (EGCS / Scrubbers), and Ballast Water Treatment Systems (BWTS) installation and commissioning.',
      el: 'Μηχανολογικές επιθεωρήσεις, εργασίες μηχανοστασίων και αντλιοστασίων, καθώς και εγκατάσταση Συστημάτων Καθαρισμού Καυσαερίων (EGCS / Scrubbers) και Επεξεργασίας Θαλασσέρματος (BWTS).',
    },
    overview: [
      {
        en: 'MANH Company provides integrated mechanical and marine engineering solutions covering main and auxiliary machinery works, marine boilers, heat exchangers, and environmental compliance retrofits.',
        el: 'Η MANH Company παρέχει ολοκληρωμένες μηχανολογικές και ναυπηγικές λύσεις που καλύπτουν εργασίες κύριων και βοηθητικών μηχανημάτων, ναυτικών λεβήτων, εναλλακτών θερμότητας και περιβαλλοντικών αναβαθμίσεων.',
      },
      {
        en: 'We execute turnkey retrofits for Exhaust Gas Cleaning Systems (EGCS / Scrubbers) and Ballast Water Treatment Systems (BWTS), including 3D engine-room laser scanning, process tank fabrication, new pump room construction, and D-2 commissioning testing.',
        el: 'Εκτελούμε ολοκληρωμένες εγκαταστάσεις Συστημάτων Καθαρισμού Καυσαερίων (EGCS / Scrubbers) και Επεξεργασίας Θαλασσέρματος (BWTS), συμπεριλαμβανομένης της τρισδιάστατης σάρωσης (3D laser scanning), της κατασκευής δεξαμενών διεργασίας και αντλιοστασίων, καθώς και των δοκιμών παραλαβής D-2.',
      },
    ],
    services: [
      {
        en: 'Mechanical overhauls of marine engines, pumps, valves, marine boilers, and heat exchangers',
        el: 'Μηχανολογικές επιθεωρήσεις και επισκευές αντλιών, βαλβίδων, ναυτικών λεβήτων και εναλλακτών θερμότητας',
      },
      {
        en: 'Turnkey Exhaust Gas Cleaning System (EGCS / Scrubber) fabrication, funnel extensions, and pump rooms',
        el: 'Κατασκευή και εγκατάσταση συστημάτων EGCS Scrubber, επεκτάσεων τσιμινιέρας και νέων αντλιοστασίων',
      },
      {
        en: 'Ballast Water Treatment System (BWTS) engineering, sea-chest pump foundations, and IMO D-2 commissioning',
        el: 'Εγκατάσταση συστημάτων BWTS, κατασκευή βάσεων αντλιών sea-chest και δοκιμές παραλαβής IMO D-2',
      },
      {
        en: '3D laser scanning, feasibility studies, and complete as-built engineering documentation',
        el: 'Τρισδιάστατη σάρωση χώρων μηχανοστασίου, μελέτες σκοπιμότητας και πλήρης τεκμηρίωση as-built',
      },
    ],
    technicalSpecs: [
      {
        label: { en: 'Mechanical Scope', el: 'Μηχανολογικό Αντικείμενο' },
        value: {
          en: 'Machinery · Boilers · Pump Rooms · Shafting',
          el: 'Μηχανοστάσια · Λέβητες · Αντλιοστάσια · Άξονες',
        },
      },
      {
        label: { en: 'Environmental Systems', el: 'Περιβαλλοντικά Συστήματα' },
        value: {
          en: 'Turnkey EGCS Scrubbers & BWTS (IMO D-2)',
          el: 'Συστήματα EGCS Scrubbers & BWTS (IMO D-2)',
        },
      },
      {
        label: { en: 'Engineering Design', el: 'Μελετητικός Σχεδιασμός' },
        value: {
          en: '3D Laser Scanning & Isometric Spool Plans',
          el: '3D Σάρωση Laser & Ισομετρικά Σχέδια',
        },
      },
    ],
    image: SECTOR_MEDIA.marine.scrubberTank,
    secondaryImage: SECTOR_MEDIA.marine.bwtsSystem,
    imageAlt: {
      en: 'Marine mechanical and environmental engineering works by MANH Company',
      el: 'Μηχανολογικές εργασίες και περιβαλλοντικά συστήματα πλοίων — MANH Company',
    },
  },
  {
    id: 'steel-technical-works',
    index: '04',
    title: {
      en: 'Steel & Technical Works',
      el: 'Ελασματουργικές, Σωληνουργικές & Τεχνικές Εργασίες',
    },
    category: {
      en: 'Structural Steel & Specialized Piping',
      el: 'Χαλύβδινες Κατασκευές & Δίκτυα Σωληνώσεων',
    },
    summary: {
      en: 'Precision structural steel renewals, collision damage restoration, inner-bottom tank top replacements, and prefabrication of GRE, SMO alloy, stainless steel (Inox), and carbon steel piping.',
      el: 'Πιστοποιημένες αντικαταστάσεις ελασμάτων, αποκαταστάσεις ζημιών σύγκρουσης, αντικαταστάσεις διπυθμένων (inner-bottom) και προκατασκευή σωληνώσεων GRE, κραμάτων SMO, Inox και ανθρακοχάλυβα.',
    },
    overview: [
      {
        en: 'MANH Company delivers heavy structural steelworks and industrial piping fabrication using automated plate-cutting and certified welding procedures for marine and industrial applications.',
        el: 'Η MANH Company εκτελεί βαριές ελασματουργικές κατασκευές και προκατασκευή βιομηχανικών/ναυτιλιακών σωληνώσεων με αυτοματοποιημένη κοπή ελασμάτων και πιστοποιημένες διαδικασίες συγκόλλησης.',
      },
      {
        en: 'We process marine-grade structural steel as well as high-specification piping networks in Glass-Reinforced Epoxy (GRE), corrosion-resistant SMO 254 austenitic alloys, stainless steel (Inox), and heavy-wall DN200+ carbon steel.',
        el: 'Επεξεργαζόμαστε πιστοποιημένο ναυπηγικό χάλυβα καθώς και δίκτυα σωληνώσεων υψηλών προδιαγραφών από εποξειδικά υαλοενισχυμένα υλικά (GRE), αντιδιαβρωτικά κράματα SMO 254, ανοξείδωτο χάλυβα (Inox) και ανθρακοχάλυβα διαμέτρων DN200+.',
      },
    ],
    services: [
      {
        en: 'Side-shell collision steel renewals, longitudinal stiffener fabrication, and web frame repairs',
        el: 'Αποκαταστάσεις πλευρικών ελασμάτων γάστρας, κατασκευή διαμήκων ενισχυτικών και επισκευές νομέων',
      },
      {
        en: 'Double-bottom / inner-bottom tank top steel plate and cellular floor replacements',
        el: 'Αντικατάσταση ελασμάτων και εδρών διπυθμένων (inner-bottom / tank top) και δεξαμενών έρματος',
      },
      {
        en: 'Workshop prefabrication and onboard installation of GRE, SMO alloy, Inox, and carbon steel piping',
        el: 'Προκατασκευή και εγκατάσταση δικτύων σωληνώσεων GRE, κραμάτων SMO, Inox και ανθρακοχάλυβα',
      },
      {
        en: 'Full-penetration certified welding, hydrostatic pressure testing, and ultrasonic/magnetic NDT',
        el: 'Πιστοποιημένες συγκολλήσεις πλήρους διείσδυσης, υδροστατικές δοκιμές πίεσης και μη καταστροφικοί έλεγχοι (NDT)',
      },
    ],
    technicalSpecs: [
      {
        label: { en: 'Steel Fabrication', el: 'Κατασκευές Χάλυβα' },
        value: {
          en: 'Automated Plate Cutting & Certified Welding',
          el: 'Αυτοματοποιημένη Κοπή & Πιστοποιημένη Συγκόλληση',
        },
      },
      {
        label: { en: 'Piping Materials', el: 'Υλικά Σωληνώσεων' },
        value: {
          en: 'GRE · SMO 254 · Stainless Inox · Carbon Steel',
          el: 'GRE · SMO 254 · Ανοξείδωτο Inox · Ανθρακοχάλυβας',
        },
      },
      {
        label: { en: 'Testing & Inspection', el: 'Έλεγχοι & Δοκιμές' },
        value: {
          en: 'Vacuum Box · Hydrostatic · Ultrasonic NDT',
          el: 'Vacuum Box · Υδροστατικές Δοκιμές · Υπέρηχοι NDT',
        },
      },
    ],
    image: SECTOR_MEDIA.marine.sideShellCompleted,
    secondaryImage: SECTOR_MEDIA.marine.grePiping,
    imageAlt: {
      en: 'Structural steel repair and marine piping works by MANH Company',
      el: 'Ελασματουργικές και σωληνουργικές εργασίες — MANH Company',
    },
  },
  {
    id: 'electrical-installations',
    index: '05',
    title: {
      en: 'Electrical Installations',
      el: 'Ηλεκτρολογικές Εγκαταστάσεις & Συστήματα',
    },
    category: {
      en: 'Marine Electrical & Control Systems',
      el: 'Ναυτιλιακά Ηλεκτρολογικά & Συστήματα Ελέγχου',
    },
    summary: {
      en: 'Marine electrical workshop services, switchboard and power distribution integration, PLC control panels, automation wiring, and auxiliary electrical installations.',
      el: 'Ηλεκτρολογικές εργασίες πλοίων, εγκατάσταση πινάκων διανομής ισχύος, συστημάτων αυτοματισμού PLC, καλωδιώσεων ελέγχου και βοηθητικών ηλεκτρολογικών δικτύων.',
    },
    overview: [
      {
        en: 'MANH Company executes marine and industrial electrical installations supporting new vessel constructions, major structural conversions, routine ship repairs, and environmental system retrofits.',
        el: 'Η MANH Company εκτελεί ναυτιλιακές και βιομηχανικές ηλεκτρολογικές εγκαταστάσεις που υποστηρίζουν νέες κατασκευές, μετασκευές, επισκευές πλοίων και εγκαταστάσεις περιβαλλοντικών συστημάτων.',
      },
      {
        en: 'Our electrical teams handle power load integration, main and auxiliary switchboard modifications, PLC control cabinet installation, valve actuator wiring, and onboard electrical diagnostics.',
        el: 'Οι ηλεκτρολογικές μας ομάδες αναλαμβάνουν μελέτες ηλεκτρικού φορτίου, τροποποιήσεις κύριων και βοηθητικών πινάκων, εγκατάσταση πινάκων ελέγχου PLC, καλωδιώσεις ηλεκτροβανών και διαγνωστικούς ελέγχους.',
      },
    ],
    services: [
      {
        en: 'Marine electrical installations, cable routing, and power distribution panel integration',
        el: 'Ηλεκτρολογικές εγκαταστάσεις πλοίων, οδεύσεις καλωδίων και σύνδεση πινάκων διανομής ισχύος',
      },
      {
        en: 'PLC automation cabinet installation and control integration for EGCS and BWTS systems',
        el: 'Εγκατάσταση πινάκων αυτοματισμού PLC και συστημάτων ελέγχου για μονάδες EGCS και BWTS',
      },
      {
        en: 'Pump motor power supply, remote valve actuator wiring, and sensor network commissioning',
        el: 'Ηλεκτροδότηση αντλιών, καλωδίωση τηλεχειριζόμενων βανών και θέση σε λειτουργία δικτύων αισθητήρων',
      },
      {
        en: 'Accommodation lighting, auxiliary electrical refits, and onboard electrical troubleshooting',
        el: 'Φωτισμός χώρων ενδιαίτησης, αναβαθμίσεις βοηθητικών δικτύων και αποκατάσταση ηλεκτρολογικών βλαβών',
      },
    ],
    technicalSpecs: [
      {
        label: { en: 'Power Systems', el: 'Συστήματα Ισχύος' },
        value: {
          en: 'Switchboards · Power Load Integration · Cabling',
          el: 'Πίνακες Διανομής · Μελέτες Φορτίου · Καλωδιώσεις',
        },
      },
      {
        label: { en: 'Automation & Control', el: 'Αυτοματισμοί & Έλεγχος' },
        value: {
          en: 'PLC Control Panels · Actuators · Diagnostics',
          el: 'Πίνακες PLC · Ηλεκτροβάνες · Διαγνωστικοί Έλεγχοι',
        },
      },
      {
        label: { en: 'Applications', el: 'Εφαρμογές' },
        value: {
          en: 'Repairs · Conversions · Retrofits · Newbuilds',
          el: 'Επισκευές · Μετασκευές · Αναβαθμίσεις · Κατασκευές',
        },
      },
    ],
    image: SECTOR_MEDIA.marine.scrubberPumpRoom,
    secondaryImage: SECTOR_MEDIA.marine.bwtsSystem,
    imageAlt: {
      en: 'Marine electrical and automation control installations by MANH Company',
      el: 'Ηλεκτρολογικές εγκαταστάσεις και συστήματα ελέγχου — MANH Company',
    },
  },
];

export const REAL_ESTATE_ACTIVITIES: RealEstateActivity[] = [
  {
    id: 'property-ownership',
    index: '01',
    title: {
      en: 'Property Ownership',
      el: 'Κατοχή Ακινήτων',
    },
    summary: {
      en: 'Strategic ownership of residential and hospitality-oriented real estate assets selected for their architectural character and enduring value.',
      el: 'Κατοχή ακινήτων κατοικίας και φιλοξενίας με έμφαση στον αρχιτεκτονικό χαρακτήρα, τη λειτουργικότητα και τη διαχρονική αξία.',
    },
    details: {
      en: 'MANH Company holds and stewards proprietary real estate assets with a disciplined, long-term perspective, ensuring that every property in its portfolio is maintained to high structural and aesthetic standards.',
      el: 'Η MANH Company κατέχει και μεριμνά για την ακίνητη περιουσία της με μακροπρόθεσμο ορίζοντα, διασφαλίζοντας ότι κάθε ακίνητο διατηρείται σε υψηλό τεχνικό, λειτουργικό και αισθητικό επίπεδο.',
    },
    image: SECTOR_MEDIA.realEstate.mainExterior,
    imageAlt: {
      en: 'Property ownership — Architectural residential exterior by MANH Company',
      el: 'Κατοχή ακινήτων — Αρχιτεκτονική όψη ακινήτου της MANH Company',
    },
  },
  {
    id: 'property-management',
    index: '02',
    title: {
      en: 'Property Management',
      el: 'Διαχείριση Ακίνητης Περιουσίας',
    },
    summary: {
      en: 'Structured management of company properties, overseeing their organization, preventive maintenance, and smooth daily operation.',
      el: 'Οργανωμένη διαχείριση των ακινήτων της εταιρείας, με μέριμνα για την οργάνωση, την προληπτική συντήρηση και την εύρυθμη λειτουργία τους.',
    },
    details: {
      en: 'We manage our properties through systematic technical oversight, regular upkeep, and administrative continuity so that each space retains its quality and readiness in accordance with its intended purpose.',
      el: 'Διαχειριζόμαστε τα ακίνητά μας με συστηματική τεχνική παρακολούθηση, τακτική φροντίδα και διοικητική συνέπεια, ώστε κάθε χώρος να ανταποκρίνεται πλήρως στον προορισμό του.',
    },
    image: SECTOR_MEDIA.realEstate.assetManagement,
    imageAlt: {
      en: 'Property management — Residential property exterior by MANH Company',
      el: 'Διαχείριση ακίνητης περιουσίας — MANH Company',
    },
  },
  {
    id: 'property-leasing',
    index: '03',
    title: {
      en: 'Property Leasing',
      el: 'Εκμίσθωση Ακινήτων',
    },
    summary: {
      en: 'Leasing of properties for residential, hospitality, or other uses tailored to the characteristics and potential of each asset.',
      el: 'Εκμίσθωση ακινήτων για κατοικία, φιλοξενία ή άλλες χρήσεις, ανάλογα με τα χαρακτηριστικά και τις δυνατότητες κάθε ακινήτου.',
    },
    details: {
      en: 'We evaluate the layout, location, and architectural attributes of each property to establish reliable leasing arrangements that support stable, responsible occupancy.',
      el: 'Αξιολογούμε τη διαρρύθμιση, τη θέση και τα ιδιαίτερα χαρακτηριστικά κάθε ακινήτου, διαμορφώνοντας αξιόπιστες μισθωτικές συνεργασίες με έμφαση στη σταθερότητα και τη συνέπεια.',
    },
    image: SECTOR_MEDIA.realEstate.propertyLeasing,
    imageAlt: {
      en: 'Property leasing — Refined residential interior by MANH Company',
      el: 'Εκμίσθωση ακινήτων — Προσεγμένος εσωτερικός χώρος κατοικίας',
    },
  },
  {
    id: 'property-utilization',
    index: '04',
    title: {
      en: 'Property Utilization',
      el: 'Αξιοποίηση Ακινήτων',
    },
    summary: {
      en: 'Thoughtful utilization of residential and hospitality properties—including hotels and rental accommodations where applicable—aligned with each asset’s potential.',
      el: 'Μεθοδική αξιοποίηση ακινήτων κατοικίας και φιλοξενίας—συμπεριλαμβανομένων ξενοδοχειακών μονάδων και καταλυμάτων όπου εφαρμόζεται—σύμφωνα με τις δυνατότητες κάθε χώρου.',
    },
    details: {
      en: 'Proper utilization begins with understanding the specific needs and character of each space, ensuring that renovations, configurations, and operational uses keep the property functional and relevant over time.',
      el: 'Η σωστή αξιοποίηση ξεκινά από την κατανόηση των αναγκών και της ταυτότητας κάθε χώρου, ώστε κάθε αναβάθμιση και λειτουργική χρήση να διατηρεί το ακίνητο ενεργό και αποδοτικό στον χρόνο.',
    },
    image: SECTOR_MEDIA.realEstate.hospitalitySuite,
    imageAlt: {
      en: 'Property utilization — Stone and timber hospitality suite by MANH Company',
      el: 'Αξιοποίηση ακινήτων — Χώρος φιλοξενίας με φυσικά υλικά',
    },
  },
  {
    id: 'long-term-asset-management',
    index: '05',
    title: {
      en: 'Long-Term Asset Management',
      el: 'Μακροχρόνια Διαχείριση & Διατήρηση Αξίας',
    },
    summary: {
      en: 'Responsible, long-horizon stewardship centered on preserving structural quality, architectural integrity, and lasting asset value.',
      el: 'Υπεύθυνη μακροπρόθεσμη διαχείριση με επίκεντρο τη διατήρηση της κατασκευαστικής ποιότητας, της αρχιτεκτονικής ταυτότητας και της διαχρονικής αξίας.',
    },
    details: {
      en: 'Real estate requires steady care and careful planning. MANH Company pursues an organized, long-term approach to asset stewardship that safeguards both functional utility and enduring value.',
      el: 'Η ακίνητη περιουσία απαιτεί σταθερή φροντίδα και προσεκτικό σχεδιασμό. Η MANH Company εφαρμόζει μια οργανωμένη, μακροχρόνια προσέγγιση που προστατεύει τη λειτουργικότητα και τη διαχρονική αξία των ακινήτων της.',
    },
    image: SECTOR_MEDIA.realEstate.utilizationCare,
    imageAlt: {
      en: 'Long-term asset management — Interior space maintained by MANH Company',
      el: 'Μακροχρόνια διαχείριση ακινήτων — Προσεγμένος εσωτερικός χώρος',
    },
  },
];

export const VERIFIED_PROJECTS: VerifiedProject[] = [
  {
    id: 'drydock-hull-overhaul',
    index: '01',
    title: {
      en: 'Commercial Vessel Dry-Docking, Hull Treatment & Mechanical Overhaul',
      el: 'Δεξαμενισμός Εμπορικού Πλοίου, Επεξεργασία Γάστρας & Μηχανολογική Επιθεώρηση',
    },
    sector: 'marine',
    category: { en: 'Ship Repairs & Maintenance', el: 'Επισκευές & Συντήρηση Πλοίων' },
    vesselType: { en: 'Commercial Bulk / Cargo Vessel', el: 'Εμπορικό Φορτηγό Πλοίο / Bulk Carrier' },
    summary: {
      en: 'Complete dry-docking overhaul in floating dock including high-pressure hydroblasting, anti-corrosion hull coating application, sea-chest grating & valve overhaul, and structural steel inspections.',
      el: 'Πλήρης δεξαμενισμός σε πλωτή δεξαμενή που περιελάμβανε υδροβολή υψηλής πίεσης, εφαρμογή αντιδιαβρωτικών ναυτιλιακών βαφών γάστρας, επιθεώρηση δικτύων sea-chest και βαλβίδων, καθώς και ελέγχους ελασμάτων.',
    },
    technicalScope: [
      {
        en: 'Full dry-docking blocks arrangement and hull surface preparation in floating dock',
        el: 'Διάταξη βάζων δεξαμενισμού και προετοιμασία επιφάνειας γάστρας σε πλωτή δεξαμενή',
      },
      {
        en: 'High-pressure hydroblasting, primer application, and anti-fouling marine coating system',
        el: 'Υδροβολή υψηλής πίεσης, εφαρμογή ασταριού (primer) και αντιρρυπαντικού συστήματος βαφής (anti-fouling)',
      },
      {
        en: 'Overhaul of sea valves, overboard discharges, rudder clearances, and tailshaft seals',
        el: 'Επιθεώρηση επιστομίων θαλάσσης, εξαγωγών, διακένων πηδαλίου και στεγανών τελικού άξονα',
      },
    ],
    metrics: [
      {
        label: { en: 'Service Area', el: 'Τομέας Εργασιών' },
        value: { en: 'Dry-Docking & Hull Treatment', el: 'Δεξαμενισμός & Βαφή Γάστρας' },
      },
      {
        label: { en: 'Technical Scope', el: 'Αντικείμενο' },
        value: { en: 'Coatings & Mechanical Overhaul', el: 'Βαφές & Μηχανολογική Επιθεώρηση' },
      },
    ],
    image: SECTOR_MEDIA.marine.drydock1,
    secondaryImage: SECTOR_MEDIA.marine.drydock2,
    imageAlt: {
      en: 'Commercial vessel in floating dry dock — MANH Company',
      el: 'Εμπορικό πλοίο σε πλωτή δεξαμενή — MANH Company',
    },
  },
  {
    id: 'side-shell-collision-repair',
    index: '02',
    title: {
      en: 'Side-Shell Structural Damage Renewal & Stiffener Fabrication',
      el: 'Αποκατάσταση Πλευρικού Περιβλήματος Γάστρας & Κατασκευή Ενισχυτικών',
    },
    sector: 'marine',
    category: { en: 'Steel & Technical Works', el: 'Ελασματουργικές & Τεχνικές Εργασίες' },
    vesselType: { en: 'Commercial Cargo Vessel', el: 'Εμπορικό Φορτηγό Πλοίο' },
    summary: {
      en: 'Precision cropping of damaged side-shell plating and internal longitudinal stiffeners, automated cutting of marine-grade replacement steel plates, and class-approved welding restoration.',
      el: 'Ακριβής αποκοπή παραμορφωμένων πλευρικών ελασμάτων και εσωτερικών διαμήκων ενισχυτικών, κοπή νέων πιστοποιημένων ναυπηγικών ελασμάτων και αποκατάσταση με εγκεκριμένες συγκολλήσεις.',
    },
    technicalScope: [
      {
        en: 'Cropping and removal of deformed side-shell hull plates and internal frame brackets',
        el: 'Αποκοπή και απομάκρυνση παραμορφωμένων πλευρικών ελασμάτων γάστρας και εσωτερικών νομέων',
      },
      {
        en: 'Automated plate cutting and prefabrication of new longitudinal stiffeners and web frames',
        el: 'Κοπή ελασμάτων και προκατασκευή νέων διαμήκων ενισχυτικών και ενισχυμένων νομέων',
      },
      {
        en: 'Full-penetration certified welding, NDT ultrasonic/magnetic particle inspection, and coating',
        el: 'Πιστοποιημένη συγκόλληση πλήρους διείσδυσης, μη καταστροφικοί έλεγχοι (NDT) και αντιδιαβρωτική βαφή',
      },
    ],
    metrics: [
      {
        label: { en: 'Execution Mode', el: 'Τρόπος Εκτέλεσης' },
        value: { en: 'In-Berth Structural Steel Renewal', el: 'Αποκατάσταση Χάλυβα σε Προβλήτα' },
      },
      {
        label: { en: 'Quality Standard', el: 'Πρότυπο Ποιότητας' },
        value: { en: 'Class Witnessed & NDT Verified', el: 'Έγκριση Κλάσης & Έλεγχος NDT' },
      },
    ],
    image: SECTOR_MEDIA.marine.sideShellCompleted,
    secondaryImage: SECTOR_MEDIA.marine.sideShellProgress,
    imageAlt: {
      en: 'Side-shell hull damage repair and stiffener steelwork — MANH Company',
      el: 'Ολοκληρωμένη αποκατάσταση πλευρικού ελάσματος και ενισχυτικών — MANH Company',
    },
  },
  {
    id: 'inner-bottom-tank-top-renewal',
    index: '03',
    title: {
      en: 'Double-Bottom / Inner-Bottom Steel Plate & Frame Replacement',
      el: 'Αντικατάσταση Ελασμάτων & Νομέων Διπυθμένων (Inner-Bottom / Tank Top)',
    },
    sector: 'marine',
    category: { en: 'Steel & Technical Works', el: 'Ελασματουργικές & Τεχνικές Εργασίες' },
    vesselType: { en: 'Commercial Carrier', el: 'Εμπορικό Φορτηγό Πλοίο' },
    summary: {
      en: 'Heavy internal structural steel renewal of corroded inner-bottom tank top plating and cellular double-bottom floors, executed with prefabricated steel blocks to minimize dry-dock stay.',
      el: 'Εκτεταμένη αντικατάσταση εσωτερικών χαλύβδινων κατασκευών και ελασμάτων οροφής διπυθμένων (tank top), εκτελεσμένη με προκατασκευασμένα τμήματα για ελαχιστοποίηση της παραμονής σε δεξαμενή.',
    },
    technicalScope: [
      {
        en: 'Gas-freeing, staging, and precision flame/plasma removal of worn inner-bottom plating',
        el: 'Έλεγχος gas-free, ικριώματα και ακριβής αποκοπή φθαρμένων ελασμάτων διπυθμένων',
      },
      {
        en: 'Workshop prefabrication of double-bottom floors, girders, and tank-top panels',
        el: 'Προκατασκευή εδρών διπυθμένων, σταθμών και πάνελ tank-top στο συνεργείο',
      },
      {
        en: 'Installation, vacuum box testing, hydrostatic tank testing, and protective ballast tank coating',
        el: 'Τοποθέτηση, δοκιμές στεγανότητας (vacuum box & υδροστατικές δοκιμές) και βαφή δεξαμενών έρματος',
      },
    ],
    metrics: [
      {
        label: { en: 'Structural Area', el: 'Περιοχή Επέμβασης' },
        value: { en: 'Inner-Bottom & Ballast Tank Top', el: 'Διπύθμενα & Δεξαμενές Έρματος' },
      },
      {
        label: { en: 'Verification', el: 'Επαλήθευση' },
        value: { en: 'Vacuum Box & Hydrostatic Tested', el: 'Δοκιμές Στεγανότητας & Κλάσης' },
      },
    ],
    image: SECTOR_MEDIA.marine.innerBottom,
    secondaryImage: SECTOR_MEDIA.marine.sideShellProgress,
    imageAlt: {
      en: 'Inner-bottom steel replacement inside vessel cargo hold — MANH Company',
      el: 'Εργασίες αντικατάστασης ελασμάτων διπυθμένων εντός κύτους πλοίου — MANH Company',
    },
  },
  {
    id: 'turnkey-egcs-scrubber-retrofit',
    index: '04',
    title: {
      en: 'Turnkey Exhaust Gas Cleaning System (EGCS) & New Pump Room Integration',
      el: 'Ολοκληρωμένη Εγκατάσταση Συστήματος EGCS Scrubber & Νέου Αντλιοστασίου',
    },
    sector: 'marine',
    category: { en: 'Mechanical & Engineering Works', el: 'Μηχανολογικές & Τεχνικές Εργασίες' },
    vesselType: { en: 'Ocean-Going Commercial Tanker / Bulk Carrier', el: 'Ποντοπόρο Δεξαμενόπλοιο / Bulk Carrier' },
    summary: {
      en: 'End-to-end SOx scrubber retrofit featuring manufacture of the scrubber process tank, construction of a new dedicated pump room, GRE/SMO alloy piping, and PLC electrical control panel integration.',
      el: 'Ολοκληρωμένη αναβάθμιση SOx scrubber που περιελάμβανε κατασκευή της δεξαμενής διεργασίας, κατασκευή νέου αντλιοστασίου, σωληνώσεις GRE/SMO και ενσωμάτωση ηλεκτρολογικών πινάκων αυτοματισμού PLC.',
    },
    technicalScope: [
      {
        en: '3D laser scanning of engine casing and funnel for clash-free retrofit modeling',
        el: 'Τρισδιάστατη σάρωση laser μηχανοστασίου και τσιμινιέρας για ακριβή μελέτη εγκατάστασης',
      },
      {
        en: 'Fabrication of scrubber tower body, process tank, and structural funnel extensions',
        el: 'Κατασκευή σώματος πύργου scrubber, δεξαμενής διεργασίας και μεταλλικών επεκτάσεων τσιμινιέρας',
      },
      {
        en: 'Construction of new scrubber pump room, heavy pump foundations, GRE/SMO piping, and electrical panels',
        el: 'Κατασκευή νέου αντλιοστασίου, βάσεων αντλιών, δικτύων GRE/SMO και ηλεκτρολογικών πινάκων',
      },
    ],
    metrics: [
      {
        label: { en: 'Compliance', el: 'Συμμόρφωση' },
        value: { en: 'IMO MARPOL Annex VI SOx', el: 'IMO MARPOL Annex VI SOx' },
      },
      {
        label: { en: 'Piping & Control', el: 'Σωληνώσεις & Έλεγχος' },
        value: { en: 'GRE / SMO Alloys & PLC Automation', el: 'Κράματα GRE / SMO & Αυτοματισμοί PLC' },
      },
    ],
    image: SECTOR_MEDIA.marine.scrubberTank,
    secondaryImage: SECTOR_MEDIA.marine.scrubberPumpRoom,
    imageAlt: {
      en: 'Turnkey EGCS scrubber process tank and new pump room installation — MANH Company',
      el: 'Δεξαμενή διεργασίας EGCS scrubber και εγκατάσταση νέου αντλιοστασίου — MANH Company',
    },
  },
  {
    id: 'bwts-retrofit-commissioning',
    index: '05',
    title: {
      en: 'Type-Approved BWTS Retrofit, Sea-Chest Foundation & D-2 Commissioning',
      el: 'Εγκατάσταση Εγκεκριμένου Συστήματος BWTS, Βάσεων Sea-Chest & Δοκιμές D-2',
    },
    sector: 'marine',
    category: { en: 'Mechanical & Engineering Works', el: 'Μηχανολογικές & Τεχνικές Εργασίες' },
    vesselType: { en: 'Commercial Fleet Retrofit', el: 'Αναβάθμιση Εμπορικού Στόλου' },
    summary: {
      en: 'Custom engine-room adaptation and installation of a Type-Approved Ballast Water Treatment System, including new sea-chest pump foundations, interconnecting piping, electrical integration, and IMO D-2 commissioning testing.',
      el: 'Προσαρμοσμένη μελέτη μηχανοστασίου και εγκατάσταση εγκεκριμένου Συστήματος Επεξεργασίας Θαλασσέρματος (BWTS), κατασκευή νέων βάσεων αντλιών sea-chest, δικτύων σωληνώσεων, ηλεκτρολογικών και δοκιμές παραλαβής IMO D-2.',
    },
    technicalScope: [
      {
        en: 'Construction and structural welding of new sea-chest pump foundations in the engine room',
        el: 'Κατασκευή και συγκόλληση νέων βάσεων αντλιών αναρρόφησης θαλάσσης (sea-chest) στο μηχανοστάσιο',
      },
      {
        en: 'Prefabrication and onboard fitting of filtration unit, treatment skid, and ballast line tie-ins',
        el: 'Προκατασκευή και τοποθέτηση μονάδας φίλτρων, μονάδας επεξεργασίας και συνδέσεων δικτύου έρματος',
      },
      {
        en: 'Electrical power supply, control cabinet integration, and onboard biological D-2 commissioning testing',
        el: 'Ηλεκτροδότηση, σύνδεση πινάκων ελέγχου και βιολογικές δοκιμές παραλαβής επί του πλοίου κατά IMO D-2',
      },
    ],
    metrics: [
      {
        label: { en: 'Regulatory Standard', el: 'Κανονιστικό Πρότυπο' },
        value: { en: 'IMO D-2 & BWM.2/Circ.70/Rev.1', el: 'IMO D-2 & BWM.2/Circ.70/Rev.1' },
      },
      {
        label: { en: 'Integration Scope', el: 'Αντικείμενο Ενσωμάτωσης' },
        value: { en: 'Mechanical · Piping · Electrical', el: 'Μηχανολογικά · Σωληνώσεις · Ηλεκτρολογικά' },
      },
    ],
    image: SECTOR_MEDIA.marine.bwtsSystem,
    secondaryImage: SECTOR_MEDIA.marine.grePiping,
    imageAlt: {
      en: 'Ballast Water Treatment System installation — MANH Company',
      el: 'Μονάδα επεξεργασίας θαλασσέρματος BWTS — MANH Company',
    },
  },
  {
    id: 'gre-smo-carbon-piping-networks',
    index: '06',
    title: {
      en: 'High-Specification GRE, SMO Alloy & DN200 Carbon Steel Piping Works',
      el: 'Δίκτυα Σωληνώσεων Υψηλών Προδιαγραφών GRE, Κραμάτων SMO & Ανθρακοχάλυβα DN200',
    },
    sector: 'marine',
    category: { en: 'Steel & Technical Works', el: 'Ελασματουργικές & Τεχνικές Εργασίες' },
    vesselType: { en: 'Tankers, Cargo Ships & Retrofit Vessels', el: 'Δεξαμενόπλοια & Φορτηγά Πλοία' },
    summary: {
      en: 'Workshop prefabrication and onboard installation of complex marine piping systems utilizing Glass-Reinforced Epoxy (GRE), SMO stainless alloys, and heavy-wall DN200 carbon steel spools.',
      el: 'Προκατασκευή στο συνεργείο και εγκατάσταση επί του πλοίου σύνθετων ναυτιλιακών δικτύων σωληνώσεων με χρήση GRE, ανοξείδωτων κραμάτων SMO και σωλήνων ανθρακοχάλυβα βαρέος τύπου DN200.',
    },
    technicalScope: [
      {
        en: 'Isometric spool drafting and precision pipe cutting and beveling',
        el: 'Ισομετρική σχεδίαση και ακριβής κοπή/λοξοτομή σωλήνων',
      },
      {
        en: 'Certified lamination and bonding of GRE marine pipes for corrosive scrubber and ballast lines',
        el: 'Πιστοποιημένη συγκόλληση και πλαστικοποίηση σωλήνων GRE για διαβρωτικά δίκτυα scrubber και έρματος',
      },
      {
        en: 'TIG/MIG welding of SMO/Inox alloys and high-pressure hydrostatic testing prior to onboard fitment',
        el: 'Συγκόλληση TIG/MIG κραμάτων SMO/Inox και υδροστατικές δοκιμές υψηλής πίεσης πριν την τοποθέτηση',
      },
    ],
    metrics: [
      {
        label: { en: 'Pipe Diameters', el: 'Διάμετροι Σωληνώσεων' },
        value: { en: 'Up to DN200+ Custom Spools', el: 'Έως DN200+ Ειδικά Τεμάχια' },
      },
      {
        label: { en: 'Materials Processed', el: 'Υλικά Κατασκευής' },
        value: { en: 'GRE · SMO · Inox · Carbon Steel', el: 'GRE · SMO · Inox · Ανθρακοχάλυβας' },
      },
    ],
    image: SECTOR_MEDIA.marine.grePiping,
    secondaryImage: SECTOR_MEDIA.marine.scrubberPumpRoom,
    imageAlt: {
      en: 'GRE and DN200 carbon steel piping prefabrication and installation — MANH Company',
      el: 'Προκατασκευή και εγκατάσταση σωληνώσεων GRE και ανθρακοχάλυβα DN200 — MANH Company',
    },
  },
  {
    id: 'major-vessel-conversions-portfolio',
    index: '07',
    title: {
      en: 'Single-to-Double Hull Tanker, Ro-Pax & Specialized Vessel Conversions',
      el: 'Μετασκευές Δεξαμενόπλοιων Διπλού Τοιχώματος, Ro-Pax & Εξειδικευμένων Πλοίων',
    },
    sector: 'marine',
    category: { en: 'Shipbuilding & Construction', el: 'Ναυπηγικές Κατασκευές & Μετασκευές' },
    vesselType: { en: 'Tankers, Ro-Ro Vessels & Commercial Ships', el: 'Δεξαμενόπλοια, Πλοία Ro-Ro & Εμπορικά Πλοία' },
    summary: {
      en: 'Structural vessel conversions and custom shipbuilding encompassing the transformation of cable-laying ships into pipe-laying vessels, single-hull to double-hull tankers, and Ro-Ro cargo carriers into Ro-Pax passenger vessels.',
      el: 'Δομικές μετασκευές και ναυπηγικές κατασκευές που περιλαμβάνουν τη μετατροπή πλοίων πόντισης καλωδίων σε πόντισης σωληνώσεων, δεξαμενόπλοιων μονού σε διπλού τοιχώματος, και φορτηγών Ro-Ro σε επιβατηγά Ro-Pax.',
    },
    technicalScope: [
      {
        en: 'Complete naval architectural redesign, stability calculations, and class approval drawings',
        el: 'Πλήρης ναυπηγικός επανασχεδιασμός, υπολογισμοί ευστάθειας και σχέδια έγκρισης Νηογνωμόνων',
      },
      {
        en: 'Mid-body hull lengthening, new structural deck constructions, and double-hull wing tank insertion',
        el: 'Επιμήκυνση μεσαίου τμήματος γάστρας, κατασκευή νέων καταστρωμάτων και πλευρικών δεξαμενών διπλού τοιχώματος',
      },
      {
        en: 'Integration of passenger accommodation modules, stern/bow ramps, and electrical/mechanical systems',
        el: 'Ενσωμάτωση χώρων ενδιαίτησης επιβατών, καταπελτών πρύμνης/πλώρης και ηλεκτρομηχανολογικών δικτύων',
      },
    ],
    metrics: [
      {
        label: { en: 'Conversion Types', el: 'Τύποι Μετασκευών' },
        value: { en: 'Double-Hull · Ro-Pax · Offshore', el: 'Διπλό Τοίχωμα · Ro-Pax · Υπεράκτια' },
      },
      {
        label: { en: 'Engineering Discipline', el: 'Μηχανική Εξειδίκευση' },
        value: { en: 'Full Structural & Outfitting Scope', el: 'Πλήρες Δομικό & Εξοπλιστικό Αντικείμενο' },
      },
    ],
    image: SECTOR_MEDIA.marine.drydockVessel,
    secondaryImage: SECTOR_MEDIA.marine.drydock3,
    imageAlt: {
      en: 'Vessels in dry dock undergoing structural conversion — MANH Company',
      el: 'Πλοία σε δεξαμενή κατά τη διάρκεια δομικής μετασκευής — MANH Company',
    },
  },
];
