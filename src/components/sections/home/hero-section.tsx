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
    title: "S.N Engineering & Construction",
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
    title: "S.N Import & Export",
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
    title: "Mehrish Holdings",
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
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
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
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-white pb-16 pt-24 text-ink sm:pb-20 sm:pt-28"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onFocusCapture={() => setIsPaused(true)}
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <m.div
            animate={{ opacity: activeIndex === index ? 1 : 0 }}
            className="absolute inset-0 will-change-[opacity]"
            initial={false}
            key={slide.id}
            transition={{ duration: 1.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image
              alt=""
              className="size-full object-cover object-center saturate-[0.88]"
              fill
              sizes="100vw"
              src={slide.image}
              {...(index === 0 ? { preload: true } : { loading: "eager" as const })}
            />
          </m.div>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/94 via-52% to-white/15" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/5 to-white/70" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(21,94,239,0.12),transparent_58%)]" />
      </div>

      <Container className="relative z-10 flex flex-col justify-center py-6 sm:py-10">
        <div className="grid max-w-3xl grid-cols-1 grid-rows-1">
          {heroSlides.map((slide, index) => {
            const Icon = slide.badgeIcon;
            const isActive = activeIndex === index;

            return (
              <m.div
                animate={{ opacity: isActive ? 1 : 0 }}
                aria-hidden={!isActive}
                aria-label={`${index + 1} of ${heroSlides.length}`}
                aria-roledescription="slide"
                className={cn(
                  "col-start-1 row-start-1 flex flex-col justify-start will-change-[opacity]",
                  isActive ? "pointer-events-auto" : "pointer-events-none",
                )}
                inert={!isActive}
                initial={false}
                key={slide.id}
                role="group"
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-cobalt/20 bg-white/84 px-4 py-1.5 shadow-sm backdrop-blur-md">
                  <Icon aria-hidden="true" className="size-4 text-cobalt" />
                  <span className="text-xs font-bold uppercase tracking-wider text-cobalt">
                    {slide.badge}
                  </span>
                </div>

                <h1 className="display-type text-4xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-[5.25rem] xl:leading-[0.95]">
                  {slide.title}
                </h1>

                <p className="mt-4 text-lg font-bold text-cobalt sm:text-2xl lg:text-3xl">
                  {slide.headline}
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink/72 sm:text-lg sm:leading-8">
                  {slide.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                  <a
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-cobalt px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_24px_rgba(21,94,239,0.45)] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_6px_32px_rgba(21,94,239,0.65)] active:scale-[0.98]"
                    href="/contact#quotation-form"
                  >
                    Request a Quotation
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>

                  <a
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-cobalt/25 bg-white/84 px-7 py-3.5 text-sm font-bold text-ink shadow-sm backdrop-blur-md transition-all duration-300 hover:border-cobalt hover:text-cobalt active:scale-[0.98]"
                    href={slide.href}
                  >
                    {slide.linkLabel}
                  </a>
                </div>
              </m.div>
            );
          })}
        </div>

        <div aria-label="Choose a hero slide" className="mt-8 flex items-center gap-2" role="group">
          {heroSlides.map((slide, index) => (
            <button
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-pressed={activeIndex === index}
              className={cn(
                "h-1.5 rounded-full transition-[width,background-color] duration-500",
                activeIndex === index ? "w-10 bg-cobalt" : "w-5 bg-cobalt/20 hover:bg-cobalt/45",
              )}
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
