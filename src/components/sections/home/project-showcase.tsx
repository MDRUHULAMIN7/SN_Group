import { projects } from "@/data/projects";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/sections/projects/project-grid";
import { Reveal } from "@/components/motion/reveal";

export function ProjectShowcase() {
  return (
    <section className="border-t border-white/10 bg-black text-white section-space">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal><SectionHeading eyebrow="Selected projects" inverse title="Work measured in use, not just handover." /></Reveal>
          <Reveal delay={0.1}><ButtonLink href="/projects" showArrow variant="outline">View all projects</ButtonLink></Reveal>
        </div>
        <div className="mt-16"><ProjectGrid featureFirst projects={projects.slice(0, 3)} /></div>
      </Container>
    </section>
  );
}
