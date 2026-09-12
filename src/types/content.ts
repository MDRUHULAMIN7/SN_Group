export interface SeoFields {
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface SisterConcern {
  name: string;
  shortName: string;
  slug: string;
  discipline: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  services: readonly string[];
  contact: {
    email: string;
    phone: string;
  };
  seo: SeoFields;
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  location: string;
  year: string;
  status: "Completed" | "Completion not listed";
  summary: string;
  description: readonly string[];
  coverImage: string;
  coverAlt: string;
  gallery: readonly {
    src: string;
    alt: string;
  }[];
  services: readonly string[];
  client: string;
  agreementNo?: string;
  contractValue?: string;
  commencement?: string;
  completion?: string;
  seo: SeoFields;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  aspect: "landscape" | "portrait" | "wide";
  objectPosition?: string;
}
