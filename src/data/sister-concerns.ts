import type { SisterConcern } from "@/types/content";

export const sisterConcerns = [
  {
    name: "S.N Engineering & Construction",
    shortName: "S.N Construction",
    slug: "sn-engineering-construction",
    discipline: "Engineering & Construction",
    headline: "Building with Experience. Delivering with Responsibility.",
    description:
      "With more than two decades of experience in the construction industry, S.N Engineering & Construction has established itself as a trusted construction and engineering company in Bangladesh, specializing in government, defense, institutional, and civil infrastructure projects.",
    image: "/images/hero-construction.webp",
    imageAlt: "S.N Engineering & Construction infrastructure and building site in Bangladesh",
    services: [
      "Government construction projects",
      "Bangladesh Army & defense-related construction",
      "Bangladesh Navy & naval infrastructure",
      "Institutional & administrative buildings",
      "Residential & accommodation facilities",
      "Civil & structural works",
      "Infrastructure & roads development",
      "Project management & construction supervision",
    ],
    contact: {
      email: "info@sngroup.com",
      phone: "+88 01305-771144",
    },
    seo: {
      title: "S.N Engineering & Construction | S.N Group",
      description:
        "Specializing in government, defense, institutional, and infrastructure projects associated with Bangladesh Army, Navy, and key institutions.",
    },
  },
  {
    name: "S.N Import & Export",
    shortName: "S.N Import & Export",
    slug: "sn-import-export",
    discipline: "Global Sourcing & Trade",
    headline: "Connecting Bangladesh with Global Markets.",
    description:
      "The international trading arm of S.N Group engaged in the sourcing, import, export, and distribution of agricultural commodities, food products, industrial chemicals, machinery, and equipment, as well as export of Bangladeshi products.",
    image: "/images/project-infrastructure.webp",
    imageAlt: "S.N Import & Export global trade and logistics operations",
    services: [
      "Agricultural commodities & pulses import",
      "Food ingredients, dairy & edible oils",
      "Industrial & commercial chemicals",
      "Construction machinery & equipment",
      "Export of soil, stone & construction materials",
      "Agro-based export & international distribution",
    ],
    contact: {
      email: "query@sngroup.com",
      phone: "+88 01783-216428",
    },
    seo: {
      title: "S.N Import & Export | S.N Group",
      description:
        "Connecting Bangladesh with international markets through agricultural commodities, food products, industrial chemicals, and equipment trading.",
    },
  },
  {
    name: "Mehrish Holdings",
    shortName: "Mehrish Holdings",
    slug: "mehrish-holdings",
    discipline: "Real Estate & Development",
    headline: "Creating Value Through Real Estate.",
    description:
      "The real estate and property development arm of S.N Group, focused on developing high-quality residential and commercial properties in prime and strategically selected locations across Dhaka.",
    image: "/images/project-commercial.webp",
    imageAlt: "Mehrish Holdings luxury contemporary architecture in Dhaka",
    services: [
      "Residential property development",
      "Premium apartment projects",
      "Commercial property development",
      "Multi-storey building development",
      "Property acquisition & development",
      "Strategic real estate investment",
    ],
    contact: {
      email: "info@sngroup.com",
      phone: "+88 01305-771144",
    },
    seo: {
      title: "Mehrish Holdings | S.N Group",
      description:
        "Developing premium residential and commercial properties in prime Dhaka locations including Dhanmondi, Gulshan, Banani, and Uttara.",
    },
  },
] as const satisfies readonly SisterConcern[];

export function getSisterConcern(slug: string) {
  return sisterConcerns.find((concern) => concern.slug === slug);
}
