import type { HomepageData } from "@/types";

export const homepageData: HomepageData = {
  hero: {
    headline: "Your Cargo Moves. Globally. Reliably.",
    subheadline:
      "From road haulage across Nigeria to international air cargo and sea freight — Kemfah Logistics is built to move what matters, wherever it needs to go.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "Our Services",
    imageSrc: "/images/stock/hero-cargo.jpg",
  },
  stats: [
    { label: "States Covered", value: "36" },
    { label: "International Routes", value: "12+" },
    { label: "Fleet Size", value: "15", suffix: " Vehicles" },
    { label: "Successful Deliveries", value: "200+" },
  ],
  services: [
    {
      key: "road_freight",
      title: "Road Freight & Haulage",
      description:
        "Nationwide haulage across Nigeria with careful handling and consistent updates.",
      imageSrc: "/images/stock/service-road.jpg",
    },
    {
      key: "marine_transport",
      title: "Marine & Sea Freight",
      description:
        "Port-to-port support, lighter services, and coordination for bulk cargo moving by sea.",
      imageSrc: "/images/stock/service-marine.jpg",
    },
    {
      key: "international_air_cargo",
      title: "International Air Cargo",
      description:
        "IATA-aligned routing and documentation support across major international corridors.",
      imageSrc: "/images/stock/service-air.jpg",
    },
    {
      key: "clearing_forwarding",
      title: "Clearing & Forwarding",
      description:
        "Customs documentation, port clearance, and delivery coordination without surprises.",
      imageSrc: "/images/stock/service-clearing.jpg",
    },
  ],
  whyChooseUs: [
    {
      title: "Speed",
      description:
        "We understand that in logistics, time is cargo. Our operations are optimised to move your goods faster than the market average.",
    },
    {
      title: "Global Reach",
      description:
        "Through our IATA-aligned partnerships, we route your air cargo internationally and handle every document along the way.",
    },
    {
      title: "Full Accountability",
      description:
        "From pickup to delivery, you have visibility and a dedicated point of contact. We do not disappear after the handover.",
    },
  ],
  trustStrip: {
    items: [
      "IATA-Aligned Air Cargo",
      "CAC Licensed",
      "Road",
      "Sea",
      "Air",
      "Nationwide Coverage",
    ],
  },
  ctaStrip: {
    headline: "Ready to move your cargo?",
    subheadline:
      "Get a personalised quote in 24 hours — for road, sea, or international air freight.",
    buttonLabel: "Request a Quote",
  },
  faq: {
    heading: "Frequently Asked Questions",
    subheading: "Got questions? We have answers. If you do not find what you are looking for, contact us.",
    items: [
      {
        question: "What services does Kemfah Logistics offer?",
        answer:
          "We provide end-to-end logistics solutions including road freight and haulage across Nigeria, marine and sea freight transport, international air cargo (IATA-aligned), and customs clearing and forwarding services.",
      },
      {
        question: "Where do you provide services?",
        answer:
          "We provide nationwide coverage across all 36 states in Nigeria. Through our IATA-aligned partners, we also handle international shipments to major global destinations.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Click 'Get a Free Quote' on our website or contact us by phone, email, or WhatsApp. Provide your cargo details and we will get back to you within 24 hours.",
      },
      {
        question: "How long does delivery take within Nigeria?",
        answer:
          "Delivery times vary by distance. Lagos to southwest states takes 1-2 days. Northern states typically 3-5 days. We provide estimated times with every quote.",
      },
      {
        question: "What are your operating hours?",
        answer:
          "Our office is open Monday to Friday, 8:00 AM to 6:00 PM. We also respond to urgent inquiries outside these hours via WhatsApp.",
      },
      {
        question: "How can I contact you?",
        answer:
          "Reach us by phone, email, or WhatsApp. Use the floating WhatsApp button on the site for quick access. We have offices in Lagos and Ibadan.",
      },
    ],
  },
  testimonials: [
    {
      name: "Adeola Williams",
      quote:
        "We needed our shipment cleared through Apapa before the long weekend. Kemfah handled all the documentation and had our goods out in 48 hours — no unofficial charges, no stress. That kind of reliability is hard to find.",
      rating: 5,
    },
    {
      name: "Ibrahim Musa",
      quote:
        "I was skeptical about using a logistics company for international air cargo, but Kemfah routed our goods to Dubai with the proper paperwork sorted end-to-end. They followed up at every stage without me having to chase anyone.",
      rating: 5,
    },
    {
      name: "Chidinma Okafor",
      quote:
        "We've used three other logistics companies before Kemfah. None of them picked up the phone when things went sideways. Kemfah gave us one point of contact and kept us updated from Kano to our Lagos warehouse. We're not looking elsewhere.",
      rating: 5,
    },
  ],
};
