"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { sisterConcerns } from "@/data/sister-concerns";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function SisterConcernShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);

  return (
    <section
      aria-label="Our Group Companies"
      className="blueprint-grid border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
      id="group-companies"
    >
      <Container>
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow mb-2.5 sm:mb-3 text-blue-400">Our Group Companies</p>
            <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Three Disciplines. One Shared Standard.
            </h2>
          </Reveal>
          <Reveal className="lg:justify-self-end" delay={0.1}>
            <p className="max-w-xl text-sm sm:text-base leading-7 sm:leading-8 text-ink/62">
              Each company brings specialized capability, industry leadership, and experienced execution. Together they provide comprehensive synergy across construction, international trade, and property development.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            className="mt-10 sm:mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-[0_22px_65px_rgba(15,23,42,0.09)]"
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col lg:flex-row gap-px">
              {sisterConcerns.map((concern, index) => {
                const isHovered = activeIndex === index;
                const isDimmed = activeIndex !== null && !isHovered;

                // Desktop flex distribution:
                // Balanced default: 1 : 1 : 1 (~33.3% each)
                // Hovered: 2.25 (~59% width)
                // Inactive/Dimmed: 0.78 (~20.5% width each)
                const flexGrow = isHovered ? 2.25 : isDimmed ? 0.78 : 1;

                return (
                  <div
                    aria-expanded={isHovered}
                    className={cn(
                      "concern-accordion-card group relative min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[580px] overflow-hidden bg-white select-none",
                      isDimmed && "opacity-90"
                    )}
                    key={concern.slug}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        handleMouseLeave();
                      }
                    }}
                    onFocus={() => handleMouseEnter(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    style={{
                      flexGrow,
                      flexShrink: 1,
                      flexBasis: "0%",
                    }}
                  >
                    {/* Top Glow Accent Bar */}
                    <div
                      aria-hidden="true"
                      className={cn(
                        "absolute top-0 inset-x-0 h-1 bg-cobalt transition-all duration-500 ease-out z-20 origin-left",
                        isHovered ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      )}
                    />

                    {/* Background Image with Smooth Slow Zoom */}
                    <Image
                      alt={concern.imageAlt}
                      className={cn(
                        "transform-gpu object-cover transition-all duration-1000 ease-out will-change-transform backface-hidden",
                        isHovered
                          ? "scale-108 opacity-95 brightness-[1.02]"
                          : isDimmed
                            ? "scale-100 opacity-65 grayscale-[15%]"
                            : "scale-100 opacity-85"
                      )}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      src={concern.image}
                    />

                    {/* Gradient Overlay for Crisp Text Legibility */}
                    <div
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-0 transition-opacity duration-700 ease-out",
                        isHovered
                          ? "bg-gradient-to-t from-white/98 via-white/80 via-45% to-white/10 opacity-95"
                          : isDimmed
                            ? "bg-gradient-to-t from-white/96 via-white/82 via-50% to-white/40 opacity-95"
                            : "bg-gradient-to-t from-white/94 via-white/60 via-48% to-transparent opacity-90"
                      )}
                    />

                    {/* Card Inner Content */}
                    <div
                      className={cn(
                        "relative z-10 flex h-full flex-col justify-between text-ink transition-all duration-500",
                        isHovered
                          ? "p-6 sm:p-8 lg:p-9"
                          : isDimmed
                            ? "p-5 sm:p-7 lg:p-6"
                            : "p-6 sm:p-8 lg:p-8"
                      )}
                    >
                      {/* Top Bar: Number, Live Indicator, and Circle Arrow Action */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "text-xs font-bold tabular-nums transition-colors duration-300",
                              isHovered ? "text-cobalt font-extrabold" : "text-cobalt/80"
                            )}
                          >
                            0{index + 1}
                          </span>
                          {isHovered && (
                            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-cobalt/10 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-cobalt transition-opacity duration-300">
                              <span className="size-1.5 rounded-full bg-cobalt animate-pulse" />
                              Active Concern
                            </span>
                          )}
                        </div>

                        <Link
                          aria-label={`Explore ${concern.name}`}
                          className={cn(
                            "grid size-10 sm:size-11 place-items-center rounded-full border shadow-sm backdrop-blur-sm transition-all duration-500 ease-out shrink-0",
                            isHovered
                              ? "border-cobalt bg-cobalt text-white shadow-[0_8px_24px_rgba(21,94,239,0.35)] scale-105"
                              : "border-cobalt/25 bg-white/92 text-ink hover:border-cobalt hover:bg-cobalt hover:text-white"
                          )}
                          href={`/sister-concerns/${concern.slug}`}
                        >
                          <ArrowUpRight
                            aria-hidden="true"
                            className={cn(
                              "size-4 sm:size-5 transition-transform duration-500 ease-out",
                              isHovered ? "rotate-45" : "rotate-0"
                            )}
                          />
                        </Link>
                      </div>

                      {/* Bottom Info Section */}
                      <div className="flex flex-col justify-end">
                        <p
                          className={cn(
                            "mb-1.5 sm:mb-2 text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-300",
                            isHovered ? "text-cobalt" : "text-cobalt/80"
                          )}
                        >
                          {concern.discipline}
                        </p>

                        <h3
                          className={cn(
                            "display-type font-bold leading-tight transition-all duration-500",
                            isHovered
                              ? "text-2xl sm:text-3xl lg:text-4xl text-ink"
                              : isDimmed
                                ? "text-xl sm:text-2xl lg:text-2.5xl text-ink/90"
                                : "text-2xl sm:text-3xl lg:text-3.5xl text-ink"
                          )}
                        >
                          <Link
                            className="hover:text-cobalt transition-colors inline-block"
                            href={`/sister-concerns/${concern.slug}`}
                          >
                            {concern.name}
                          </Link>
                        </h3>

                        <p
                          className={cn(
                            "mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold text-cobalt/85 transition-all duration-300",
                            isDimmed ? "line-clamp-1" : "line-clamp-2"
                          )}
                        >
                          {concern.headline}
                        </p>

                        <p
                          className={cn(
                            "mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-ink/75 transition-all duration-500",
                            isHovered
                              ? "line-clamp-4 lg:line-clamp-3"
                              : "line-clamp-2"
                          )}
                        >
                          {concern.description}
                        </p>

                        {/* Quick Capability Tags (Revealed on Hover/Expansion) */}
                        <div
                          className={cn(
                            "mt-4 flex flex-wrap gap-1.5 transition-all duration-500 overflow-hidden",
                            isHovered
                              ? "opacity-100 max-h-24 translate-y-0"
                              : "opacity-0 max-h-0 pointer-events-none translate-y-2"
                          )}
                        >
                          {concern.services.slice(0, 3).map((service) => (
                            <span
                              className="inline-flex items-center rounded-md bg-cobalt/8 px-2.5 py-1 text-[0.7rem] font-semibold text-cobalt border border-cobalt/15"
                              key={service}
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        {/* Interactive Action Row (Revealed on Hover/Expansion) */}
                        <div
                          className={cn(
                            "mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between transition-all duration-500 overflow-hidden",
                            isHovered
                              ? "opacity-100 max-h-16 translate-y-0"
                              : "opacity-0 max-h-0 pointer-events-none translate-y-2"
                          )}
                        >
                          <Link
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-cobalt hover:text-blue-700 transition-colors group/link"
                            href={`/sister-concerns/${concern.slug}`}
                          >
                            <span>Explore Company Profile</span>
                            <ArrowRight
                              aria-hidden="true"
                              className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                            />
                          </Link>

                          <Link
                            className="text-[0.72rem] font-bold text-ink/70 hover:text-cobalt transition-colors underline underline-offset-2 decoration-slate-300 hover:decoration-cobalt"
                            href="/contact#quotation-form"
                          >
                            Request Quotation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
