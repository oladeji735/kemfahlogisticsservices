import type { ServicesData } from "@/types";

export const servicesData: ServicesData = {
  hero: {
    headline: "Logistics That Moves The World.",
    subheadline: "Road. Sea. Air. We connect your cargo to every corner — starting from Nigeria.",
    imageSrc: "/images/stock/services-hero.jpg",
  },

  serviceDetails: [
    {
      slug: "air-cargo",
      key: "international_air_cargo",
      title: "International Air Cargo",
      tagline: "Nigeria's link to global skies.",
      badge: "IATA-Aligned",
      description:
        "As an IATA-aligned logistics partner, Kemfah facilitates international air cargo bookings and freight documentation across major global corridors. Whether you are moving goods from Lagos to London, USA, or Canada — our team handles routing, documentation, and delivery coordination end to end.",
      heroImage: "/images/stock/service-air.jpg",
      features: [
        "IATA-aligned cargo booking and documentation support",
        "Active corridors: Lagos → London, Nigeria → USA & Canada",
        "End-to-end coordination — routing, customs, and delivery",
        "Handling of perishables, fragile, oversized, and high-value goods",
        "Transparent updates from origin to destination",
      ],
      stats: [
        { label: "Global Corridors", value: "3+" },
        { label: "Standard", value: "IATA" },
        { label: "Quote Turnaround", value: "24h" },
      ],
      routes: ["Lagos → London", "Nigeria → USA", "Nigeria → Canada"],
      cta: "Get an Air Cargo Quote",
    },
    {
      slug: "road-freight",
      key: "road_freight",
      title: "Road Freight & Haulage",
      tagline: "Every state. Every road. Every delivery.",
      description:
        "From Lagos to Kano, Port Harcourt to Abuja — our fleet handles your cargo with care and precision across all 36 states. Full-load and part-load haulage available, with real-time coordination and updates every step of the way.",
      heroImage: "/images/stock/service-road.jpg",
      features: [
        "Full-load (FTL) and part-load (LTL) haulage available",
        "Nationwide coverage across all 36 Nigerian states",
        "Refrigerated, flatbed, and general-purpose truck options",
        "Door-to-door delivery with last-mile capability",
        "Real-time tracking and status updates throughout transit",
      ],
      stats: [
        { label: "States Covered", value: "36" },
        { label: "Fleet Capacity", value: "15+" },
        { label: "On-Time Rate", value: "100%" },
      ],
      cta: "Get a Road Freight Quote",
    },
    {
      slug: "marine",
      key: "marine_transport",
      title: "Marine & Sea Freight",
      tagline: "Bulk cargo, port to port.",
      description:
        "For bulk cargo that moves by sea, Kemfah connects you to Nigeria's major ports. Barges, tugs, and lighter services — we manage every stage from origin to berth, ensuring your goods arrive safely and on schedule.",
      heroImage: "/images/stock/service-marine.jpg",
      features: [
        "Barge, tug, and lighter vessel coordination",
        "Access to major Nigerian ports: Apapa, Tincan, Warri, Onne",
        "Bulk commodity transport including oil, agro, and industrial goods",
        "Port-to-port and port-to-warehouse handoffs",
        "Cargo insurance support and documentation assistance",
      ],
      stats: [
        { label: "Key Ports", value: "4+" },
        { label: "Vessel Types", value: "3" },
        { label: "Experience", value: "10yr+" },
      ],
      cta: "Enquire About Marine Freight",
    },
    {
      slug: "clearing",
      key: "clearing_forwarding",
      title: "Clearing & Forwarding",
      tagline: "Customs stress-free. Goods on time.",
      description:
        "Import and export made simple. Our licensed clearing agents handle all customs documentation, port clearance, duty payments, and last-mile delivery so your goods arrive without surprises or delays.",
      heroImage: "/images/stock/service-clearing.jpg",
      features: [
        "Licensed customs brokerage for imports and exports",
        "Form M processing, SON certification, and NAFDAC support",
        "Duty computation and payment facilitation",
        "Port examination supervision and demurrage management",
        "Last-mile delivery from port to warehouse or customer",
      ],
      stats: [
        { label: "Licensed Agents", value: "CAC" },
        { label: "Port Clearance", value: "Fast" },
        { label: "Documentation", value: "100%" },
      ],
      cta: "Talk to a Clearing Agent",
    },
  ],

  serviceCards: [
    {
      key: "road_freight",
      slug: "road-freight",
      title: "Road Freight & Haulage",
      description:
        "Nationwide movement across all 36 states with dependable coordination and updates.",
      imageSrc: "/images/stock/service-road.jpg",
    },
    {
      key: "marine_transport",
      slug: "marine",
      title: "Marine & Sea Freight",
      description:
        "Support for port operations, barges, and bulk cargo movement through Nigeria's corridors.",
      imageSrc: "/images/stock/service-marine.jpg",
    },
    {
      key: "clearing_forwarding",
      slug: "clearing",
      title: "Clearing & Forwarding",
      description:
        "Customs documentation, port clearance, and last-mile delivery — handled end to end.",
      imageSrc: "/images/stock/service-clearing.jpg",
    },
  ],

  coverage: {
    nigeria: {
      label: "Nationwide Coverage (36 States)",
      note: "We coordinate pickup and delivery across all states in Nigeria — including major hubs like Ondo, Ogun, Ekiti, Akure, Ilorin, Kano, and Kaduna.",
      imageSrc: "/images/stock/nigeria-map.jpg",
    },
    internationalCorridors: ["London, UK", "USA", "Canada"],
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
