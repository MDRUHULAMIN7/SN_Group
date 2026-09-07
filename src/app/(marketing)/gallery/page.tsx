import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { GalleryGrid } from "@/components/sections/gallery/gallery-grid";
import { galleryItems } from "@/data/gallery";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description: "See construction progress, completed architecture, infrastructure and S.N Group teams at work across Bangladesh.",
  path: "/gallery",
  image: "/images/project-commercial.webp",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: "Gallery" }]} image="/images/project-commercial.webp" imageAlt="Completed contemporary architecture in Dhaka" title="Project Gallery" />
      <section className="border-t border-slate-200 bg-white text-ink section-space">
        <Container><GalleryGrid items={galleryItems} /></Container>
      </section>
    </>
  );
}
