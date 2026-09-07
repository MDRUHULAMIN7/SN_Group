import type { Project } from "@/types/content";
import { PageHero } from "@/components/ui/page-hero";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <PageHero
      breadcrumbs={[
        { label: "Projects", href: "/projects" },
        { label: project.title },
      ]}
      image={project.coverImage}
      imageAlt={project.coverAlt}
      title={project.title}
    />
  );
}
