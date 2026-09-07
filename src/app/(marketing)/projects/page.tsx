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
      <PageHero breadcrumbs={[{ label: "Projects" }]} image="/images/project-infrastructure.webp" imageAlt="Major infrastructure and building construction in Bangladesh" title="Our Projects" />
      <section className="border-t border-slate-200 bg-white text-ink section-space">
        <Container><ProjectGrid projects={projects} /></Container>
      </section>
    </>
  );
}
