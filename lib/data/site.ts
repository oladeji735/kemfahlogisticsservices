import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kemfah Logistics Services Limited",
  shortName: "Kemfah Logistics",
  tagline: "Your Cargo Moves. Globally. Reliably.",
  contact: {
    offices: [
      {
        city: "Lagos",
        address: "5, Limpson Street off River Valley Extension, Ojodu Berger.",
      },
      {
        city: "Ibadan",
        address: "Dabiri Shoping Complex, Opposite Firstline Gas Station, Alakia, Adegbayi Area, Ibadan.",
      }
    ],
    phone: {
      lagos: "+234 9036420991",
      ibadan: "+234 706 473 5651",
    },
    email: "info@kemfahlogistics.com",
    whatsapp: "+234 9036420991",
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
