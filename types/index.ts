export type NavItem = {
  label: string;
  href: string;
};

export type ServiceKey =
  | "road_freight"
  | "marine_transport"
  | "international_air_cargo"
  | "clearing_forwarding"
  | "general_supplies"
  | "other";

export type SiteContact = {
  address: string;
  phone: {
    primary: string;
    secondary: string;
  };
  email: string;
  whatsapp: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
};

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  contact: SiteContact;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  seo: {
    titleTemplate: string;
    defaultDescription: string;
  };
};

export type StatItem = {
  label: string;
  value: string;
  suffix?: string;
};

export type ServiceCard = {
  key: ServiceKey;
  title: string;
  description: string;
  imageSrc: string;
};

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type HomepageData = {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageSrc: string;
  };
  stats: StatItem[];
  services: ServiceCard[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  trustStrip: {
    items: string[];
  };
  ctaStrip: {
    headline: string;
    subheadline: string;
    buttonLabel: string;
  };
  testimonials: Testimonial[];
};

export type AboutData = {
  hero: {
    headline: string;
    subheadline: string;
  };
  mandate: {
    paragraphs: string[];
    imageSrc: string;
  };
  mission: string;
  values: string[];
  team: {
    name: string;
    title: string;
    imageSrc: string;
  }[];
  credentials: {
    statement: string;
    cacNumber: string;
    sealImageSrc: string;
  };
  ctaStrip: {
    headline: string;
    buttonLabel: string;
  };
};

export type ServicesData = {
  hero: {
    headline: string;
    subheadline: string;
    imageSrc: string;
  };
  internationalAirCargo: {
    headline: string;
    description: string;
    routes: string[];
  };
  serviceCards: ServiceCard[];
  coverage: {
    nigeria: {
      label: string;
      note: string;
      imageSrc: string;
    };
    internationalCorridors: string[];
  };
  howItWorks: {
    step: 1 | 2 | 3;
    title: string;
    description: string;
  }[];
  ctaStrip: {
    headline: string;
    buttonLabel: string;
  };
};

export type ContactData = {
  hero: {
    headline: string;
    subheadline: string;
  };
  whatsappCtaLabel: string;
  forms: {
    contact: {
      submitLabel: string;
    };
    quote: {
      headline: string;
      submitLabel: string;
      confirmationMessage: string;
    };
  };
};
