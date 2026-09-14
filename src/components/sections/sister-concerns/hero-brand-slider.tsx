"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BrandSlide {
  id: string;
  image: string;
  alt: string;
}

const BRAND_SLIDES: readonly BrandSlide[] = [
  {
    id: "cassia",
    image: "/images/import-export/tiger-cinnamon-brand.jpg",
    alt: "Tiger Brand Mehris Premium Cassia 25 Kg Sack Design",
  },
  {
    id: "black-pepper",
    image: "/images/import-export/tiger-black-pepper-brand-secondary.jpg",
    alt: "Tiger Brand Mehris Premium Black Pepper 25 Kg Sack Design",
  },
];

export function HeroBrandSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % BRAND_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + BRAND_SLIDES.length) % BRAND_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % BRAND_SLIDES.length);
  };

  return (
    <div
      aria-label="Tiger Brand Product Showcase Slider"
      className="group relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-2 sm:p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-slate-300 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Viewport */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white">
        {BRAND_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? "z-10 opacity-100 scale-100 filter-none"
                  : "z-0 opacity-0 scale-105 blur-sm pointer-events-none"
              }`}
              key={slide.id}
            >
              <Image
                alt={slide.alt}
                className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={slide.image}
              />
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-2 z-20 flex items-center">
          <button
            aria-label="Previous image"
            className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt"
            onClick={handlePrev}
            type="button"
          >
            <ChevronLeft className="size-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-2 z-20 flex items-center">
          <button
            aria-label="Next image"
            className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-cobalt focus-visible:outline-2 focus-visible:outline-cobalt"
            onClick={handleNext}
            type="button"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Indicator Dots at the bottom of the image */}
        <div className="absolute inset-x-0 bottom-3 z-20 flex items-center justify-center gap-2">
          {BRAND_SLIDES.map((slide, idx) => (
            <button
              aria-current={idx === activeIndex ? "true" : undefined}
              aria-label={`Go to image ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-7 bg-slate-900 shadow-sm"
                  : "w-2 bg-slate-400/60 hover:bg-slate-700"
              }`}
              key={slide.id}
              onClick={() => setActiveIndex(idx)}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
