import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kemfah Logistics Services Limited",
  shortName: "Kemfah Logistics",
  tagline: "Your Cargo Moves. Globally. Reliably.",
  contact: {
    address: "123 Logistics Avenue, Lagos, Nigeria",
    phone: {
      primary: "+234 800 000 0000",
      secondary: "+234 800 000 0001",
    },
    email: "info@kemfahlogistics.com",
    whatsapp: "+234 800 000 0000",
    hours: {
      weekday: "Monday – Friday: 8:00am – 6:00pm",
      saturday: "Saturday: 9:00am – 2:00pm",
      sunday: "Sunday: Closed",
    },
  },
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
  seo: {
    titleTemplate: "%s | Kemfah Logistics",
    defaultDescription:
      "Professional logistics and freight services in Nigeria — road haulage, marine transport, international air cargo, and clearing & forwarding.",
  },
};
