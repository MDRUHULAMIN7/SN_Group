import Image from "next/image";
import type { Project } from "@/types/content";
import { Container } from "@/components/ui/container";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-navy pb-16 pt-40 text-white sm:pb-20">
      <Image alt={project.coverAlt} className="object-cover" fill preload sizes="100vw" src={project.coverImage} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/35" />
      <Container className="relative z-10">
        <p className="eyebrow mb-7 text-blue-200">{project.category} · {project.status}</p>
        <h1 className="display-type max-w-[13ch] text-[clamp(4rem,9vw,9rem)] leading-[0.86]">{project.title}</h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{project.summary}</p>
      </Container>
    </section>
  );
}
