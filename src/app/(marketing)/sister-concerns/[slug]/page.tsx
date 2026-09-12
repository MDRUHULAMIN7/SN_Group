import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConcernDetail } from "@/components/sections/sister-concerns/concern-detail";
import { ImportExportDetail } from "@/components/sections/sister-concerns/import-export-detail";
import { JsonLd } from "@/components/ui/json-ld";
import { getSisterConcern, sisterConcerns } from "@/data/sister-concerns";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

interface ConcernPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return sisterConcerns.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ConcernPageProps): Promise<Metadata> {
  const { slug } = await params;
  const concern = getSisterConcern(slug);
  if (!concern) return {};
  return createMetadata({ title: concern.seo.title, description: concern.seo.description, path: `/sister-concerns/${concern.slug}`, image: concern.image });
}

export default async function ConcernPage({ params }: ConcernPageProps) {
  const { slug } = await params;
  const concern = getSisterConcern(slug);
  if (!concern) notFound();
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Sister concerns", item: absoluteUrl("/sister-concerns") },
      { "@type": "ListItem", position: 3, name: concern.name, item: absoluteUrl(`/sister-concerns/${concern.slug}`) },
    ],
  };
  const Detail = concern.slug === "sn-import-export" ? ImportExportDetail : ConcernDetail;
  return <><Detail concern={concern} /><JsonLd data={breadcrumb} /></>;
}
