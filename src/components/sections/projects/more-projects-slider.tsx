"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Building2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import {
  additionalProjects,
  type AdditionalProject,
} from "@/data/additional-projects";

export function MoreProjectsSlider() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array for a completely seamless, continuous infinite loop
  const duplicatedProjects = [...additionalProjects, ...additionalProjects];

  return (
    <section
      aria-label="Additional Documented Site Projects"
      className="border-t border-slate-200 bg-slate-50/60 py-12 sm:py-16 lg:py-20 text-ink overflow-hidden"
    >
      <Container>
        {/* Section Header: Clean title only, without eyebrow or subtext */}
        <div className="mb-8 sm:mb-12">
          <Reveal>
            <h2 className="display-type text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
              More Documented Projects &amp; Work Orders
            </h2>
          </Reveal>
        </div>
      </Container>

      {/* Automatic Continuous Scrolling Slider */}
      <div
        aria-label="Automatic Project Cards Slider"
        className="project-cards-slider group relative py-2 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchEnd={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
      >
        {/* Left and Right Subtle Fade Masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent"
        />

        {/* Marquee Track */}
        <div
          className="project-cards-track flex items-stretch gap-5 sm:gap-6 pl-4"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedProjects.map((project: AdditionalProject, index) => (
            <article
              className="group/card flex-none w-[300px] sm:w-[340px] md:w-[370px] rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-cobalt/40 hover:shadow-[0_20px_45px_rgba(21,94,239,0.14)] flex flex-col overflow-hidden select-none"
              key={`${project.id}-${index}`}
            >
              {/* Clean Card Image: No badges or text overlaid on top */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  alt={project.imageAlt || project.title}
                  className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 300px, 370px"
                  src={project.image}
                />
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Meta row: Category & Location */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-cobalt tracking-wide uppercase text-[11px]">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-ink/60 font-semibold text-[11px] truncate">
                    <MapPin className="size-3 text-cobalt shrink-0" />
                    {project.location}
                  </span>
                </div>

                {/* Title */}
                <h3 className="display-type mt-2.5 text-lg sm:text-xl font-bold leading-snug text-ink transition-colors duration-300 group-hover/card:text-cobalt line-clamp-1">
                  {project.title}
                </h3>

                {/* Client / Authority */}
                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-ink/75">
                  <Building2 className="size-3 text-cobalt shrink-0" />
                  <span className="truncate">{project.client}</span>
                </div>

                {/* Scope Summary */}
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/65 line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
