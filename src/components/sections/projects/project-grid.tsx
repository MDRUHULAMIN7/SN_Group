import type { Project } from "@/types/content";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  projects: readonly Project[];
  featureFirst?: boolean;
}

export function ProjectGrid({ projects, featureFirst = false }: ProjectGridProps) {
  return (
    <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal className={featureFirst && index === 0 ? "lg:col-span-2" : undefined} delay={(index % 3) * 0.06} key={project.slug}>
          <ProjectCard featured={featureFirst && index === 0} project={project} />
        </Reveal>
      ))}
    </div>
  );
}
