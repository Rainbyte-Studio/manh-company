export type Language = 'en' | 'el';

export type RoutePath =
  | '/'
  | '/about'
  | '/marine-industrial'
  | '/real-estate'
  | '/projects'
  | '/contact'
  | '/privacy-policy';

export interface BilingualText {
  en: string;
  el: string;
}

export interface VerifiedSpec {
  label: BilingualText;
  value: BilingualText;
}

export interface MarineCapability {
  id: string;
  index: string;
  title: BilingualText;
  category: BilingualText;
  summary: BilingualText;
  overview: BilingualText[];
  services: BilingualText[];
  technicalSpecs: VerifiedSpec[];
  image: string;
  secondaryImage: string;
  imageAlt: BilingualText;
}

export interface RealEstateActivity {
  id: string;
  index: string;
  title: BilingualText;
  summary: BilingualText;
  details: BilingualText;
  image: string;
  imageAlt: BilingualText;
}

export interface VerifiedProject {
  id: string;
  index: string;
  title: BilingualText;
  sector: 'marine';
  category: BilingualText;
  vesselType: BilingualText;
  summary: BilingualText;
  technicalScope: BilingualText[];
  metrics: VerifiedSpec[];
  image: string;
  secondaryImage: string;
  imageAlt: BilingualText;
}
