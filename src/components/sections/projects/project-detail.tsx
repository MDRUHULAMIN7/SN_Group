import type { Project } from "@/types/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ProjectHero } from "./project-hero";
import { ProjectFacts } from "./project-facts";
import { ProjectGallery } from "./project-gallery";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <ProjectHero project={project} />
      <ProjectFacts project={project} />
      <section className="border-t border-slate-200 bg-white text-ink section-space">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-6 text-cobalt">Project approach</p>
            <h2 className="display-type text-5xl leading-[0.94] sm:text-7xl">Detail serving the bigger outcome.</h2>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {project.description.map((paragraph, index) => (
              <Reveal delay={index * 0.08} key={paragraph}>
                <p className="mb-7 text-base leading-8 text-ink/65 sm:text-lg sm:leading-9">{paragraph}</p>
              </Reveal>
            ))}
            <Reveal className="mt-10 border-t border-slate-200 pt-8" delay={0.16}>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-cobalt">Services delivered</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.services.map((service) => <li className="border-l-2 border-cobalt pl-4 text-sm font-semibold" key={service}>{service}</li>)}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
      <ProjectGallery project={project} />
    </>
  );
}
