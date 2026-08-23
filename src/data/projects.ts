import type { Project } from "@/types/content";

export const projects = [
  {
    title: "Gulshan Commercial Annex",
    slug: "gulshan-commercial-annex",
    category: "Commercial",
    location: "Gulshan, Dhaka",
    year: "2025",
    status: "Completed",
    summary:
      "A climate-aware workplace defined by deep facade fins, durable material choices and a precise public frontage.",
    description: [
      "The brief called for a commercially efficient building with a calm civic presence. The facade strategy reduces direct solar gain while maintaining generous daylight and views.",
      "Construction sequencing, services coordination and interior readiness were managed as one delivery programme, allowing the client team to move from shell completion to occupation with minimal rework.",
    ],
    coverImage: "/images/project-commercial.webp",
    coverAlt: "Completed contemporary commercial building in Gulshan at blue hour",
    gallery: [
      {
        src: "/images/project-commercial.webp",
        alt: "Commercial building facade and landscaped street edge",
      },
      {
        src: "/images/team.webp",
        alt: "Engineering team reviewing construction drawings",
      },
      {
        src: "/images/hero-construction.webp",
        alt: "High-rise construction sequencing and structural frame",
      },
    ],
    services: ["General contracting", "Facade coordination", "MEP coordination", "Fit-out readiness"],
    client: "Private commercial developer",
    seo: {
      title: "Gulshan Commercial Annex | S.N Group Projects",
      description:
        "View the construction approach, project facts and delivery services for S.N Group’s Gulshan commercial project.",
    },
  },
  {
    title: "Eastern River Link",
    slug: "eastern-river-link",
    category: "Infrastructure",
    location: "Greater Dhaka",
    year: "2026",
    status: "In progress",
    summary:
      "A long-span mobility link coordinated around river conditions, access constraints and resilient concrete delivery.",
    description: [
      "This infrastructure programme combines repetitive pier construction with carefully planned deck operations. Logistics planning protects both productivity and the surrounding river environment.",
      "Digital coordination, hold-point inspections and supply-chain forecasting give the project team early visibility of programme risk and quality performance.",
    ],
    coverImage: "/images/project-infrastructure.webp",
    coverAlt: "Elevated concrete bridge under construction across a river corridor",
    gallery: [
      {
        src: "/images/project-infrastructure.webp",
        alt: "Bridge deck, engineered piers and crane operations",
      },
      {
        src: "/images/team.webp",
        alt: "Site engineers coordinating technical drawings",
      },
      {
        src: "/images/hero-construction.webp",
        alt: "Structural construction at metropolitan scale",
      },
    ],
    services: ["Civil works", "Temporary works", "Programme controls", "Quality assurance"],
    client: "Public infrastructure partner",
    seo: {
      title: "Eastern River Link | S.N Group Projects",
      description:
        "Explore the coordinated civil works and engineering approach behind S.N Group’s Eastern River Link project.",
    },
  },
  {
    title: "North Dhaka Business Tower",
    slug: "north-dhaka-business-tower",
    category: "High-rise",
    location: "Dhaka",
    year: "2026",
    status: "In progress",
    summary:
      "A high-rise concrete frame delivered through repeatable floor cycles, disciplined logistics and early facade coordination.",
    description: [
      "The tower’s dense urban site makes logistics as important as structure. Vertical movement, concrete windows and material laydown are planned floor by floor.",
      "A coordinated inspection regime links structural completion to facade and services release, keeping downstream trades productive while protecting quality.",
    ],
    coverImage: "/images/hero-construction.webp",
    coverAlt: "High-rise business tower under construction with multiple cranes",
    gallery: [
      {
        src: "/images/hero-construction.webp",
        alt: "Concrete high-rise frame and tower crane",
      },
      {
        src: "/images/team.webp",
        alt: "Construction professionals studying structural plans",
      },
      {
        src: "/images/project-commercial.webp",
        alt: "Reference view of a finished commercial facade",
      },
    ],
    services: ["Concrete frame", "Site logistics", "Facade interfaces", "Construction management"],
    client: "Institutional property owner",
    seo: {
      title: "North Dhaka Business Tower | S.N Group Projects",
      description:
        "See how S.N Group coordinates high-rise structure, logistics, facade interfaces and programme controls in Dhaka.",
    },
  },
  {
    title: "Savar Production Campus",
    slug: "savar-production-campus",
    category: "Industrial",
    location: "Savar, Dhaka",
    year: "2026",
    status: "Pre-construction",
    summary:
      "An adaptable production campus planned around safe flows, future expansion and dependable building services.",
    description: [
      "The campus plan separates people, materials and service traffic while keeping each production zone ready for future expansion.",
      "Early contractor involvement is being used to validate structure, utilities, fire strategy and procurement packages before work begins on site.",
    ],
    coverImage: "/images/team.webp",
    coverAlt: "Construction and engineering team reviewing plans at an active site",
    gallery: [
      {
        src: "/images/team.webp",
        alt: "Engineers reviewing plans for an industrial project",
      },
      {
        src: "/images/project-infrastructure.webp",
        alt: "Heavy civil operations and organized material staging",
      },
      {
        src: "/images/hero-construction.webp",
        alt: "Large-scale construction coordination",
      },
    ],
    services: ["Pre-construction", "Design coordination", "Cost planning", "Procurement strategy"],
    client: "Private manufacturing group",
    seo: {
      title: "Savar Production Campus | S.N Group Projects",
      description:
        "Review the pre-construction, design coordination and procurement strategy for S.N Group’s Savar industrial campus.",
    },
  },
] as const satisfies readonly Project[];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 2) {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}
