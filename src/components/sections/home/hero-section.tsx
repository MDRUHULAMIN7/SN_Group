"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Building2, ChevronLeft, ChevronRight, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
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
    image: "/images/project-infrastructure.webp",
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

const AUTOPLAY_INTERVAL = 6500;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((targetIndex: number) => {
    setActiveIndex((current) => {
      if (current === targetIndex) return current;
      setDirection(targetIndex > current ? 1 : -1);
      return targetIndex;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      aria-label="S.N Group Hero Slider"
      aria-roledescription="carousel"
      className="relative flex min-h-[340px] xs:min-h-[360px] sm:min-h-[440px] md:min-h-[540px] lg:min-h-[640px] xl:min-h-[720px] h-[50svh] xs:h-[54svh] sm:h-[60svh] lg:h-[78svh] max-h-[760px] items-center overflow-hidden bg-white py-5 xs:py-6 sm:py-8 md:pt-24 md:pb-14 lg:py-20 text-ink"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onFocusCapture={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Background Images with Directional Right-to-Left Glide */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden bg-black/5">
        {heroSlides.map((slide, index) => {
          const isActive = activeIndex === index;
          return (
            <m.div
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? "0%" : direction >= 0 ? "-15%" : "15%",
                scale: isActive ? 1 : 0.98,
              }}
              className="absolute inset-0 size-full will-change-[transform,opacity]"
              initial={false}
              key={slide.id}
              transition={{
                x: { duration: 1.15, ease: [0.645, 0.045, 0.355, 1.0] as const },
                opacity: { duration: 0.65 },
                scale: { duration: 1.15 },
              }}
            >
              <Image
                alt=""
                className="size-full object-cover object-center saturate-[0.88]"
                fill
                priority={index === 0}
                sizes="100vw"
                src={slide.image}
              />
            </m.div>
          );
        })}

        {/* Light Gradient Overlays for perfect legibility */}
        <div className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-r from-white/96 via-white/86 via-55% to-white/30 sm:from-white/92 sm:via-white/65 sm:via-50% sm:to-white/10 lg:from-white/88 lg:via-white/50 lg:via-46% lg:to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-t from-white/60 via-transparent to-white/20 sm:from-white/40" />
        <div className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(circle_at_20%_40%,rgba(21,94,239,0.10),transparent_60%)]" />
      </div>

      {/* Content Container */}
      <Container className="relative z-10 flex flex-col justify-center py-2 sm:py-6">
        <div className="grid max-w-2xl sm:max-w-3xl grid-cols-1 grid-rows-1">
          {heroSlides.map((slide, index) => {
            const Icon = slide.badgeIcon;
            const isActive = activeIndex === index;

            return (
              <m.div
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : direction >= 0 ? -30 : 30,
                }}
                aria-hidden={!isActive}
                aria-label={`${index + 1} of ${heroSlides.length}`}
                aria-roledescription="slide"
                className={cn(
                  "col-start-1 row-start-1 flex flex-col justify-start will-change-[transform,opacity]",
                  isActive ? "pointer-events-auto" : "pointer-events-none",
                )}
                inert={!isActive}
                initial={false}
                key={slide.id}
                role="group"
                transition={{ duration: 0.65, ease: [0.645, 0.045, 0.355, 1.0] as const }}
              >
                {/* Badge */}
                <div className="mb-1.5 xs:mb-2 sm:mb-3 inline-flex w-fit items-center gap-1.5 sm:gap-2 rounded-full border border-cobalt/20 bg-white/90 px-2.5 py-0.5 sm:px-4 sm:py-1.5 shadow-xs backdrop-blur-md">
                  <Icon aria-hidden="true" className="size-3 sm:size-4 text-cobalt shrink-0" />
                  <span className="text-[0.62rem] xs:text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-cobalt">
                    {slide.badge}
                  </span>
                </div>

                {/* Slide Title */}
                <h1 className="display-type text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.12] sm:leading-[1.04]">
                  {slide.title}
                </h1>

                {/* Headline / Subtitle */}
                <p className="mt-1 xs:mt-1.5 sm:mt-3 text-xs xs:text-sm sm:text-lg md:text-xl font-bold text-cobalt leading-snug">
                  {slide.headline}
                </p>

                {/* Description */}
                <p className="mt-1.5 xs:mt-2 sm:mt-3 max-w-2xl text-[0.72rem] xs:text-xs sm:text-sm md:text-base leading-relaxed text-ink/75 line-clamp-2 sm:line-clamp-3">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="mt-3.5 xs:mt-4 sm:mt-6 flex flex-row items-center gap-2 xs:gap-3 sm:gap-4 flex-wrap">
                  <a
                    className="inline-flex min-h-8 xs:min-h-9 sm:min-h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-cobalt px-4 py-1.5 xs:px-5 xs:py-2 sm:px-6 sm:py-3 text-[0.7rem] xs:text-xs sm:text-sm font-bold text-white shadow-[0_4px_20px_rgba(21,94,239,0.4)] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_6px_28px_rgba(21,94,239,0.55)] active:scale-[0.98]"
                    href="/contact#quotation-form"
                  >
                    Request a Quotation
                    <ArrowUpRight aria-hidden="true" className="size-3.5 sm:size-4" />
                  </a>

                  <a
                    className="inline-flex min-h-8 xs:min-h-9 sm:min-h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-cobalt/25 bg-white/90 px-3.5 py-1.5 xs:px-4 xs:py-2 sm:px-6 sm:py-3 text-[0.7rem] xs:text-xs sm:text-sm font-bold text-ink shadow-xs backdrop-blur-md transition-all duration-300 hover:border-cobalt hover:text-cobalt active:scale-[0.98]"
                    href={slide.href}
                  >
                    {slide.linkLabel}
                  </a>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Bottom Bar: Interactive Dots + Arrow Controls */}
        <div className="mt-4 xs:mt-5 sm:mt-7 flex items-center justify-between gap-4">
          {/* Dot Navigation Indicators matching dpremiumhomes */}
          <div aria-label="Choose a hero slide" className="flex items-center gap-2" role="group">
            {heroSlides.map((slide, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  aria-label={`Show slide ${index + 1}: ${slide.title}`}
                  aria-pressed={isActive}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt",
                    isActive
                      ? "w-8 sm:w-10 bg-cobalt shadow-[0_2px_8px_rgba(21,94,239,0.35)]"
                      : "w-2 sm:w-2.5 bg-cobalt/25 hover:bg-cobalt/50 hover:w-4",
                  )}
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  type="button"
                />
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              aria-label="Previous slide"
              className="grid size-8 sm:size-9 place-items-center rounded-full border border-cobalt/20 bg-white/85 text-ink/80 shadow-xs backdrop-blur-md transition-all duration-200 hover:border-cobalt hover:bg-cobalt hover:text-white active:scale-95"
              onClick={prevSlide}
              type="button"
            >
              <ChevronLeft aria-hidden="true" className="size-4 sm:size-5" />
            </button>
            <button
              aria-label="Next slide"
              className="grid size-8 sm:size-9 place-items-center rounded-full border border-cobalt/20 bg-white/85 text-ink/80 shadow-xs backdrop-blur-md transition-all duration-200 hover:border-cobalt hover:bg-cobalt hover:text-white active:scale-95"
              onClick={nextSlide}
              type="button"
            >
              <ChevronRight aria-hidden="true" className="size-4 sm:size-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

