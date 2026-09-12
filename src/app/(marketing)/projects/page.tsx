import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ProjectGrid } from "@/components/sections/projects/project-grid";
import { ProjectPortfolioTable } from "@/components/sections/projects/project-portfolio-table";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Explore S.N Group's documented defense, aviation, institutional, industrial, utility, and infrastructure projects across Bangladesh.",
  path: "/projects",
  image: "/images/gallery/overhauling-hangar-216-mro.webp",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: "Projects" }]} image="/images/gallery/overhauling-hangar-216-mro.webp" imageAlt="S.N Eng Construction overhauling hangar project for the 216 MRO Unit" title="Our Projects" />
      <section className="border-t border-slate-200 bg-white text-ink section-space">
        <Container>
          <div className="mb-10 max-w-3xl sm:mb-14">
            <p className="eyebrow mb-3 text-cobalt">Selected Project Stories</p>
            <h2 className="display-type text-3xl font-extrabold tracking-tight sm:text-5xl">Built for nationally important operations.</h2>
          </div>
          <ProjectGrid projects={projects} />
        </Container>
      </section>
      <ProjectPortfolioTable />
    </>
  );
}
