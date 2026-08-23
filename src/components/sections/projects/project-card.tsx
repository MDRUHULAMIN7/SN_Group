import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={cn("group", featured && "lg:col-span-2")}>
      <Link className="block" href={`/projects/${project.slug}`}>
        <div className={cn("relative overflow-hidden bg-navy", featured ? "aspect-[16/9] lg:aspect-[16/7]" : "aspect-[4/3]")}>
          <Image alt={project.coverAlt} className="object-cover transition duration-700 group-hover:scale-[1.035]" fill sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"} src={project.coverImage} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent opacity-80" />
          <span className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white text-navy transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowUpRight aria-hidden="true" className="size-5" /></span>
        </div>
        <div className="grid gap-5 border-b border-white/14 py-6 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cobalt">{project.category} · {project.status}</p>
            <h3 className="display-type text-3xl leading-none sm:text-4xl">{project.title}</h3>
          </div>
          <div className="text-left text-xs leading-6 text-white/48 sm:text-right">
            <p>{project.location}</p>
            <p>{project.year}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
