"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { sisterConcerns } from "@/data/sister-concerns";
import { Container } from "@/components/ui/container";
import { HeroVideo } from "./hero-video";

const slides = sisterConcerns.map((concern) => ({
  eyebrow: concern.discipline,
  title: concern.headline,
  description: concern.description,
  href: `/sister-concerns/${concern.slug}`,
  linkLabel: `Explore ${concern.name}`,
}));

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6_500);
    return () => window.clearInterval(interval);
  }, []);

  const slide = slides[activeIndex];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="S.N Group sister concerns"
      className="image-noise relative flex h-[82svh] min-h-[36rem] max-h-[46rem] overflow-hidden bg-navy text-white md:h-auto md:min-h-[100svh] md:max-h-none"
    >
      <HeroVideo />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/85 via-black/60 to-transparent sm:w-4/5 md:w-[62%] md:from-black/90 md:via-black/70 md:to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(22,94,239,.12),transparent_38%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/65 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent" />
      <Container className="relative z-10 flex h-full min-h-0 flex-col justify-center pb-8 pt-20 sm:pb-12 sm:pt-24 md:min-h-[100svh] md:pb-16 md:pt-24 lg:pb-20">
        <div>
          <div aria-live="polite" className="relative h-[23rem] max-w-5xl border-l border-white/20 pl-5 sm:pl-7 md:h-[25rem] md:pl-9">
            <AnimatePresence initial={false} mode="sync">
              <m.div
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-x-0 top-0 pl-5 sm:pl-7 md:pl-9"
                exit={{ opacity: 0, y: -14 }}
                initial={{ opacity: 0, y: 18 }}
                key={activeIndex}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="eyebrow mb-2.5 text-blue-200 drop-shadow-lg md:mb-3.5">{slide.eyebrow}</p>
                <h1 className="display-type max-w-[17ch] text-[clamp(2.5rem,10.5vw,3.75rem)] leading-[0.92] text-balance drop-shadow-[0_12px_34px_rgba(0,0,0,0.38)] md:text-[clamp(3.25rem,5.3vw,5.7rem)]">{slide.title}</h1>
                <p className="mt-3.5 max-w-2xl text-sm leading-6 text-white/72 sm:text-base sm:leading-7 md:mt-4.5 md:text-lg md:leading-8">{slide.description}</p>
                <Link className="group mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 bg-white/8 px-5 py-3 text-sm font-bold backdrop-blur transition-colors hover:bg-white hover:text-navy md:mt-6" href={slide.href}>
                  {slide.linkLabel}
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
