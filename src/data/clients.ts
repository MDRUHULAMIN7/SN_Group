export interface ClientItem {
  name: string;
  category: string;
  logo: string;
  logoAlt: string;
  detail: string;
}

export const clients: readonly ClientItem[] = [
  {
    name: "Bangladesh Army",
    category: "Defense & Strategic Infrastructure",
    logo: "/images/clients/bangladesh-army.png",
    logoAlt: "Bangladesh Army official emblem",
    detail: "Defense accommodation, structural works, and institutional facilities.",
  },
  {
    name: "Bangladesh Navy",
    category: "Naval & Marine Infrastructure",
    logo: "/images/clients/bangladesh-navy.png",
    logoAlt: "Bangladesh Navy official emblem",
    detail: "Naval facilities, administrative buildings, and structural engineering.",
  },
  {
    name: "Bangladesh Air Force",
    category: "Aviation Infrastructure",
    logo: "/images/clients/bangladesh-air-force.png",
    logoAlt: "Bangladesh Air Force official emblem",
    detail: "Hangar, operations wing, briefing, and air movement facilities.",
  },
  {
    name: "Border Guard Bangladesh (BGB)",
    category: "Public Sector Works",
    logo: "/images/clients/bgb.svg",
    logoAlt: "Border Guard Bangladesh official emblem",
    detail: "Construction and related public-sector infrastructure services.",
  },
  {
    name: "Public Works Department (PWD)",
    category: "Public Sector Infrastructure",
    logo: "/images/clients/pwd.jpg",
    logoAlt: "Public Works Department official emblem",
    detail: "Government building and institutional infrastructure works.",
  },
  {
    name: "Roads & Highways Department (RHD)",
    category: "Civil Connectivity Works",
    logo: "/images/clients/rhd.png",
    logoAlt: "Government of Bangladesh official emblem used by RHD",
    detail: "Civil works, road corridors, and structural logistics projects.",
  },
  {
    name: "Local Government Engineering Department (LGED)",
    category: "Local Infrastructure",
    logo: "/images/clients/lged.png",
    logoAlt: "Local Government Engineering Department official emblem",
    detail: "Road, drainage, and local infrastructure development works.",
  },
  {
    name: "Department of Public Health Engineering (DPHE)",
    category: "Water Infrastructure",
    logo: "/images/clients/dphe.jpg",
    logoAlt: "Department of Public Health Engineering official emblem",
    detail: "Water supply and public utility infrastructure works.",
  },
] as const;
