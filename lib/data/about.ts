import type { AboutData } from "@/types";

export const aboutData: AboutData = {
  hero: {
    headline: "Built on a Mandate. Delivered Through Action.",
    subheadline: "A Nigerian logistics partner built for nationwide movement and global corridors.",
  },
  mandate: {
    paragraphs: [
      "Kemfah Logistics Services Limited was built with a clear mandate: to close the gaps in Nigeria's logistics and cargo movement infrastructure. We exist because businesses deserve a partner they can rely on — one that moves their goods with speed, care, and full accountability.",
      "From road freight across Nigeria to international cargo corridors and IATA-aligned air cargo facilitation, we have structured our operations around what our clients actually need — not what is convenient for us.",
      "We believe in radical transparency. You will always know where your cargo is, what it costs, and who is responsible for it. That is not a promise — it is how we operate.",
    ],
    imageSrc: "/images/stock/about-office.jpg",
  },
  mission:
    "To become the most trusted logistics and cargo movement partner in Nigeria — delivering on every commitment, for every client, across every route.",
  values: ["Accountability", "Reliability", "Global Thinking"],
  team: [
    {
      name: "Director Name",
      title: "Managing Director",
      imageSrc: "/images/stock/team-director.jpg",
    },
    {
      name: "Operations Lead",
      title: "Operations",
      imageSrc: "/images/stock/team-ops.jpg",
    },
    {
      name: "Customer Support",
      title: "Client Relations",
      imageSrc: "/images/stock/team-support.jpg",
    },
  ],
  credentials: {
    statement:
      "Kemfah Logistics Services Limited is a duly licensed private company, registered with the Corporate Affairs Commission of Nigeria. Our licensing documentation is available upon request.",
    cacNumber: "RC 9388224",
    sealImageSrc: "/images/stock/cac-seal.jpg",
  },
  ctaStrip: {
    headline: "Ready to work with us?",
    buttonLabel: "Get a Free Quote",
  },
};
