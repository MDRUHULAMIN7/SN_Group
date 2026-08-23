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
      <PageHero description="Structure, craft and coordination—details from active sites, completed places and the people behind the work." eyebrow="Gallery" image="/images/project-commercial.webp" imageAlt="Completed contemporary commercial architecture in Dhaka" title="The work, up close." />
      <section className="border-t border-white/10 bg-black text-white section-space">
        <Container><GalleryGrid items={galleryItems} /></Container>
      </section>
    </>
  );
}
