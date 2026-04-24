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
      slug: "road-freight",
      title: "Road Freight & Haulage",
      description:
        "Nationwide haulage across Nigeria with careful handling and consistent updates.",
      imageSrc: "/images/stock/service-road.jpg",
    },
    {
      key: "marine_transport",
      slug: "marine",
      title: "Marine & Sea Freight",
      description:
        "Port-to-port support, lighter services, and coordination for bulk cargo moving by sea.",
      imageSrc: "/images/stock/service-marine.jpg",
    },
    {
      key: "international_air_cargo",
      slug: "air-cargo",
      title: "International Air Cargo",
      description:
        "IATA-aligned routing and documentation support across major international corridors.",
      imageSrc: "/images/stock/service-air.jpg",
    },
    {
      key: "clearing_forwarding",
      slug: "clearing",
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
        question: "What regions and locations do you service?",
        answer:
          "We provide comprehensive logistics and freight services across all 36 states in Nigeria. Internationally, we frequently service locations in Canada, specifically across Manitoba, including Winnipeg, Brandon, Winkler, Dauphin, and surrounding environs.",
      },
      {
        question: "How can I track the status of my shipment?",
        answer:
          "Upon dispatch, you will be provided with a unique tracking number. You can use this tracking number on our website or our carrier partners' platforms to receive real-time updates regarding your shipment's transit status.",
      },
      {
        question: "Are there any prohibited items you do not transport?",
        answer:
          "For safety and regulatory compliance, we strictly prohibit the transportation of hazardous materials and dangerous goods. Additionally, certain specialized electronics may be restricted depending on the destination. Please contact our support team for a detailed compliance list prior to booking.",
      },
      {
        question: "What information is required to get a shipping quote?",
        answer:
          "To provide you with an accurate and competitive estimate, we require the following details: the total number of items, overall weight (in kg), the precise origin and destination addresses, and the specific nature of the cargo being transported.",
      },
      {
        question: "What is the difference between General Cargo and Special Cargo?",
        answer:
          "General Cargo consists of standard items that do not require any specialized handling or conditions during transit. Special Cargo includes items that demand specific environmental controls, careful handling, or specialized documentation—such as perishable goods, live animals, fragile equipment, or hazardous materials.",
      },
    ],
  },
  testimonials: [
    {
      name: "Adeola Williams",
      quote:
        "We had to get our shipment through Apapa before the long weekend started. Kemfah took care of the documentation and got our goods out in 48 hours, no 'extra' charges, no headaches. It’s rare to find that kind of reliability.",
      rating: 5,
    },
    {
      name: "Ibrahim Musa",
      quote:
        "I wasn't sure about hiring a company for international air cargo, but Kemfah got our stuff to winnipeg with all the paperwork sorted. They actually kept me in the loop at every step, so I wasn't the one doing the chasing for once.",
      rating: 5,
    },
    {
      name: "Chidinma Okafor",
      quote:
        "Before Kemfah, we tried three other logistics outfits. None of them would even pick up the phone if there was a hitch. With Kemfah, we had one person to talk to who kept us posted from Kano all the way to the Lagos warehouse. We’re sticking with them.",
      rating: 5,
    },
  ],
};
