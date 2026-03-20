import type { ServicesData } from "@/types";

export const servicesData: ServicesData = {
  hero: {
    headline: "Logistics That Moves The World.",
    subheadline: "Road. Sea. Air. We connect your cargo to every corner — starting from Nigeria.",
    imageSrc: "/images/stock/services-hero.jpg",
  },
  internationalAirCargo: {
    headline: "International Air Cargo — IATA-Aligned",
    description:
      "As an IATA-aligned logistics partner, Kemfah facilitates international air cargo bookings and freight documentation across major global corridors. Whether you are moving goods from Lagos to London, Abuja to Dubai, or Kano to Hong Kong — our team handles routing, documentation, and delivery coordination end to end.",
    routes: ["Lagos → London", "Abuja → Dubai", "Kano → Hong Kong"],
  },
  serviceCards: [
    {
      key: "road_freight",
      title: "Road Freight & Haulage",
      description:
        "Nationwide movement across all 36 states with dependable coordination and updates.",
      imageSrc: "/images/stock/service-road.jpg",
    },
    {
      key: "marine_transport",
      title: "Marine & Sea Freight",
      description:
        "Support for port operations, barges, and bulk cargo movement through Nigeria's corridors.",
      imageSrc: "/images/stock/service-marine.jpg",
    },
    {
      key: "clearing_forwarding",
      title: "Clearing & Forwarding",
      description:
        "Customs documentation, port clearance, and last-mile delivery — handled end to end.",
      imageSrc: "/images/stock/service-clearing.jpg",
    },
    {
      key: "general_supplies",
      title: "General Supplies & Trading",
      description:
        "Sourcing and distribution of general goods, safety equipment, and bulk supplies.",
      imageSrc: "/images/stock/service-supplies.jpg",
    },
  ],
  coverage: {
    nigeria: {
      label: "Nationwide Coverage (36 States)",
      note: "We coordinate pickup and delivery across Nigeria — including remote routes and major commercial hubs.",
      imageSrc: "/images/stock/nigeria-map.jpg",
    },
    internationalCorridors: ["London", "Dubai", "Hong Kong", "Amsterdam", "New York"],
  },
  howItWorks: [
    {
      step: 1,
      title: "Request",
      description: "Tell us what you need to move — and where it needs to go.",
    },
    {
      step: 2,
      title: "Quote",
      description: "Receive a personalised quote within 24 hours.",
    },
    {
      step: 3,
      title: "Delivery",
      description: "We coordinate pickup, routing, and delivery with clear updates.",
    },
  ],
  ctaStrip: {
    headline: "Get a free quote in 24 hours",
    buttonLabel: "Request a Quote",
  },
};
