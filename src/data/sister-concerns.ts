import type { SisterConcern } from "@/types/content";

export const sisterConcerns = [
  {
    name: "S.N Int. Construction BD Ltd.",
    shortName: "SN Construction",
    slug: "sn-int-construction-bd-ltd",
    discipline: "General construction",
    headline: "Disciplined delivery, from groundworks to handover.",
    description:
      "Our construction practice coordinates people, programme and procurement around one clear objective: build safely, precisely and with lasting value.",
    image: "/images/hero-construction.webp",
    imageAlt: "High-rise concrete construction with tower cranes above Dhaka",
    services: [
      "General contracting",
      "Civil and structural works",
      "Construction management",
      "Quality and safety control",
      "Renovation and fit-out",
    ],
    contact: {
      email: "info@sngroup.com",
      phone: "+88 01305-771144",
    },
    seo: {
      title: "S.N Int. Construction BD Ltd. | S.N Group",
      description:
        "Explore S.N Group’s general construction, civil works, site coordination and project delivery capabilities in Bangladesh.",
    },
  },
  {
    name: "S.N Import & Export BD Ltd.",
    shortName: "SN Import & Export",
    slug: "sn-import-export-bd-ltd",
    discipline: "Procurement and supply",
    headline: "Reliable sourcing for demanding project programmes.",
    description:
      "Our import, export and procurement team connects demanding project programmes with carefully qualified materials, equipment and supply partners.",
    image: "/images/project-infrastructure.webp",
    imageAlt: "Concrete infrastructure bridge under construction beside a river",
    services: [
      "Construction material sourcing",
      "Equipment procurement",
      "Import and export coordination",
      "Supplier qualification",
      "Logistics and delivery planning",
    ],
    contact: {
      email: "query@sngroup.com",
      phone: "+88 01783-216428",
    },
    seo: {
      title: "S.N Import & Export BD Ltd. | S.N Group",
      description:
        "Discover coordinated construction procurement, import, export and project supply services from S.N Group in Bangladesh.",
    },
  },
  {
    name: "Marrish Holdings Ltd.",
    shortName: "Marrish Holdings",
    slug: "marrish-holdings-ltd",
    discipline: "Holdings and development",
    headline: "Long-term thinking for enduring asset value.",
    description:
      "Marrish Holdings brings commercial judgement and construction knowledge together to shape efficient, climate-aware assets for people and business.",
    image: "/images/project-commercial.webp",
    imageAlt: "Contemporary commercial building in Dhaka at blue hour",
    services: [
      "Development management",
      "Feasibility and planning",
      "Design coordination",
      "Commercial and mixed-use assets",
      "Handover and asset readiness",
    ],
    contact: {
      email: "info@sngroup.com",
      phone: "+88 01305-771144",
    },
    seo: {
      title: "Marrish Holdings Ltd. | S.N Group",
      description:
        "Learn about S.N Group’s development management, planning and commercial asset delivery services in Bangladesh.",
    },
  },
] as const satisfies readonly SisterConcern[];

export function getSisterConcern(slug: string) {
  return sisterConcerns.find((concern) => concern.slug === slug);
}
