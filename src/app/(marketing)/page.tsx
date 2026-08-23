import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/hero-section";
import { GroupStorySection } from "@/components/sections/home/group-story-section";
import { SisterConcernShowcase } from "@/components/sections/home/sister-concern-showcase";
import { ProjectShowcase } from "@/components/sections/home/project-showcase";
import { GalleryPreview } from "@/components/sections/home/gallery-preview";
import { ContactCta } from "@/components/sections/home/contact-cta";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "S.N Group | Construction, Procurement & Holdings",
  description: "One coordinated group for construction delivery, project procurement, import and export, and long-term asset development across Bangladesh.",
  path: "/",
  image: "/images/hero-video-poster.webp",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GroupStorySection />
      <SisterConcernShowcase />
      <ProjectShowcase />
      <GalleryPreview />
      <ContactCta />
    </>
  );
}
