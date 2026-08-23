import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ProjectGrid } from "@/components/sections/projects/project-grid";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Explore selected S.N Group commercial, infrastructure, high-rise and industrial projects across Bangladesh.",
  path: "/projects",
  image: "/images/project-infrastructure.webp",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero description="A selected view of commercial, infrastructure, high-rise and industrial work shaped by disciplined coordination." eyebrow="Selected work" image="/images/project-infrastructure.webp" imageAlt="Major concrete infrastructure construction across a river corridor" title="Built to keep performing." />
      <section className="border-t border-white/10 bg-black text-white section-space">
        <Container><ProjectGrid projects={projects} /></Container>
      </section>
    </>
  );
}
