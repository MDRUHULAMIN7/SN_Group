"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Building2, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { m } from "motion/react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  id: string;
  badge: string;
  badgeIcon: typeof Building2;
  title: string;
  headline: string;
  description: string;
  image: string;
  href: string;
  linkLabel: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "sn-group",
    badge: "20+ Years of Experience",
    badgeIcon: ShieldCheck,
    title: "S.N Group",
    headline: "Building Trust. Delivering Excellence.",
    description:
      "A diversified Bangladeshi business group with more than 20 years of experience in construction and business operations, built on a foundation of integrity, quality, reliability, and long-term relationships.",
    image: "/images/team.webp",
    href: "#about-group",
    linkLabel: "Discover S.N Group",
  },
  {
    id: "sn-construction",
    badge: "Sister Concern · Construction",
    badgeIcon: Building2,
    title: "S.N Eng Construction BD Ltd.",
    headline: "Building with Experience. Delivering with Responsibility.",
    description:
      "Specializing in government, defense, institutional, and infrastructure projects with extensive experience working with Bangladesh Army, Bangladesh Navy, and premier institutions.",
    image: "/images/hero-construction.webp",
    href: "#group-companies",
    linkLabel: "Explore Construction",
  },
  {
    id: "sn-import-export",
    badge: "Sister Concern · Global Trade",
    badgeIcon: Globe,
    title: "S.N Import & Export BD Ltd.",
    headline: "Connecting Bangladesh with Global Markets.",
    description:
      "International trading arm sourcing agricultural commodities, food products, industrial chemicals, machinery, and equipment, while advancing export of Bangladeshi resources worldwide.",
    image: "/images/sn-import-export.webp",
    href: "#group-companies",
    linkLabel: "Explore Global Trade",
  },
  {
    id: "mehrish-holdings",
    badge: "Sister Concern · Real Estate",
    badgeIcon: Sparkles,
    title: "Mehrish Holdings Ltd.",
    headline: "Creating Value Through Real Estate.",
    description:
      "Developing high-quality residential and commercial properties in prime and strategically selected locations across Dhaka including Dhanmondi, Gulshan, Banani, and Uttara.",
    image: "/images/project-commercial.webp",
    href: "#group-companies",
    linkLabel: "Explore Real Estate",
  },
];

const AUTOPLAY_INTERVAL = 5500;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => {
      const next = (current + 1) % heroSlides.length;
      setPrevIndex(current);
      return next;
    });
  }, []);

  const goToSlide = useCallback((targetIndex: number) => {
    setActiveIndex((current) => {
      if (current === targetIndex) return current;
      setPrevIndex(current);
      return targetIndex;
    });
  }, []);

  useEffect(() => {
    if (prevIndex === null) return;
    const timer = window.setTimeout(() => {
      setPrevIndex(null);
    }, 1250);
    return () => window.clearTimeout(timer);
  }, [prevIndex]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      aria-label="S.N Group Hero Slider"
      aria-roledescription="carousel"
      className="relative flex min-h-[420px] xs:min-h-[460px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[720px] xl:min-h-[820px] 2xl:min-h-[880px] h-auto lg:h-[85svh] items-center overflow-hidden bg-slate-900 pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 lg:py-24 xl:py-28 text-ink"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onFocusCapture={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Background Images with Smooth Right-to-Left Slide-Over Transition */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
        {heroSlides.map((slide, index) => {
          const isCurrent = index === activeIndex;
          const isPrev = index === prevIndex;

          if (!isCurrent && !isPrev) {
            return null;
          }

          return (
            <m.div
              animate={{
                x: isCurrent ? "0%" : "-15%",
              }}
              className="absolute inset-0 size-full overflow-hidden will-change-transform"
              initial={isCurrent && prevIndex !== null ? { x: "100%" } : { x: "0%" }}
              key={slide.id}
              style={{
                zIndex: isCurrent ? 2 : 1,
              }}
              transition={{
                x: { duration: 1.1, ease: [0.25, 1, 0.5, 1] as const },
              }}
            >
              <Image
                alt=""
                className="size-full object-cover object-center saturate-[0.92]"
                fill
                priority={index === 0}
                sizes="100vw"
                src={slide.image}
              />
            </m.div>
          );
        })}
      </div>

      {/* Fixed Gradient Overlays over Sliding Images to Ensure Rock-Solid Legibility & Zero White Flashing */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-white/96 via-white/88 via-55% to-white/35 sm:from-white/92 sm:via-white/70 sm:via-52% sm:to-white/15 lg:from-white/92 lg:via-white/55 lg:via-48% lg:to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-white/60 via-transparent to-white/20 sm:from-white/40" />

      {/* Content Container */}
      <Container className="relative z-10 flex flex-col justify-center py-2 sm:py-6">
        <div className="grid max-w-3xl lg:max-w-4xl xl:max-w-5xl grid-cols-1 grid-rows-1">
          {heroSlides.map((slide, index) => {
            const Icon = slide.badgeIcon;
            const isActive = activeIndex === index;

            return (
              <div
                aria-hidden={!isActive}
                aria-label={`${index + 1} of ${heroSlides.length}`}
                aria-roledescription="slide"
                className={cn(
                  "col-start-1 row-start-1 flex flex-col justify-start transition-opacity duration-300",
                  isActive ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                )}
                inert={!isActive}
                key={slide.id}
                role="group"
              >
                {/* Badge with Smooth Rise Animation */}
                <m.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 16,
                  }}
                  className="mb-2 sm:mb-3 lg:mb-4 inline-flex w-fit items-center gap-1.5 sm:gap-2 rounded-full border border-cobalt/20 bg-white/90 px-3 py-1 sm:px-4 sm:py-1.5 shadow-xs backdrop-blur-md will-change-[transform,opacity]"
                  initial={false}
                  transition={{
                    duration: 0.65,
                    delay: isActive ? 0.60 : 0,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <Icon aria-hidden="true" className="size-3.5 sm:size-4 lg:size-4.5 text-cobalt shrink-0" />
                  <span className="text-[0.68rem] sm:text-xs lg:text-sm font-bold uppercase tracking-wider text-cobalt">
                    {slide.badge}
                  </span>
                </m.div>

                {/* Slide Title with Staggered Rise */}
                <m.h1
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 22,
                  }}
                  className="display-type text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-[5.5rem] font-extrabold tracking-tight text-ink leading-[1.08] sm:leading-[1] lg:leading-[0.96] will-change-[transform,opacity]"
                  initial={false}
                  transition={{
                    duration: 0.7,
                    delay: isActive ? 0.70 : 0,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  {slide.title}
                </m.h1>

                {/* Headline / Subtitle with Staggered Rise */}
                <m.p
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 18,
                  }}
                  className="mt-1.5 xs:mt-2 sm:mt-3 lg:mt-4 text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.25rem] font-bold text-cobalt leading-tight will-change-[transform,opacity]"
                  initial={false}
                  transition={{
                    duration: 0.7,
                    delay: isActive ? 0.80 : 0,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  {slide.headline}
                </m.p>

                {/* Description with Staggered Rise */}
                <m.p
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 16,
                  }}
                  className="mt-2 xs:mt-2.5 sm:mt-4 lg:mt-5 max-w-2xl sm:max-w-3xl lg:max-w-4xl text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.35rem] leading-relaxed lg:leading-8 xl:leading-9 text-ink/75 line-clamp-3 sm:line-clamp-none will-change-[transform,opacity]"
                  initial={false}
                  transition={{
                    duration: 0.7,
                    delay: isActive ? 0.90 : 0,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  {slide.description}
                </m.p>

                {/* CTA Buttons with Staggered Rise */}
                <m.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 14,
                  }}
                  className="mt-4 xs:mt-5 sm:mt-7 lg:mt-8 flex flex-row items-center gap-3 sm:gap-4 lg:gap-5 flex-wrap will-change-[transform,opacity]"
                  initial={false}
                  transition={{
                    duration: 0.7,
                    delay: isActive ? 1.00 : 0,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                >
                  <a
                    className="inline-flex min-h-9 sm:min-h-12 lg:min-h-14 items-center justify-center gap-2 rounded-full bg-cobalt px-5 py-2 sm:px-7 sm:py-3.5 lg:px-9 lg:py-4 text-xs sm:text-sm lg:text-base font-bold text-white shadow-[0_4px_24px_rgba(21,94,239,0.45)] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_6px_32px_rgba(21,94,239,0.65)] active:scale-[0.98]"
                    href="/contact#quotation-form"
                  >
                    Request a Quotation
                    <ArrowUpRight aria-hidden="true" className="size-4 lg:size-5" />
                  </a>

                  <a
                    className="inline-flex min-h-9 sm:min-h-12 lg:min-h-14 items-center justify-center gap-2 rounded-full border border-cobalt/25 bg-white/90 px-4 py-2 sm:px-7 sm:py-3.5 lg:px-9 lg:py-4 text-xs sm:text-sm lg:text-base font-bold text-ink shadow-xs backdrop-blur-md transition-all duration-300 hover:border-cobalt hover:text-cobalt active:scale-[0.98]"
                    href={slide.href}
                  >
                    {slide.linkLabel}
                  </a>
                </m.div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar: Dot Navigation Indicators (No Arrow Buttons) */}
        <div className="mt-5 sm:mt-8 lg:mt-10 flex items-center gap-2 sm:gap-3" role="group">
          {heroSlides.map((slide, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                aria-label={`Show slide ${index + 1}: ${slide.title}`}
                aria-pressed={isActive}
                className={cn(
                  "h-2 sm:h-2.5 rounded-full transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt",
                  isActive
                    ? "w-8 sm:w-12 bg-cobalt shadow-[0_2px_8px_rgba(21,94,239,0.35)]"
                    : "w-2.5 sm:w-3 bg-cobalt/25 hover:bg-cobalt/50 hover:w-5",
                )}
                key={slide.id}
                onClick={() => goToSlide(index)}
                type="button"
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

