import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/projects/project-detail";
import { ProjectGrid } from "@/components/sections/projects/project-grid";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/ui/json-ld";
import { getProject, getRelatedProjects, projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({ title: project.seo.title, description: project.seo.description, path: `/projects/${project.slug}`, image: project.coverImage });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project.slug);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
      { "@type": "ListItem", position: 3, name: project.title, item: absoluteUrl(`/projects/${project.slug}`) },
    ],
  };
  return (
    <>
      <ProjectDetail project={project} />
      <section className="bg-black pb-[var(--section-space)] text-white">
        <Container>
          <p className="eyebrow mb-6 text-cobalt">Continue exploring</p>
          <h2 className="display-type mb-12 text-5xl sm:text-6xl">Related projects</h2>
          <ProjectGrid projects={related} />
        </Container>
      </section>
      <JsonLd data={breadcrumb} />
    </>
  );
}
