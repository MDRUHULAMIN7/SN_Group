"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductImageSliderProps = {
  images: readonly string[];
  title: string;
};

export function ProductImageSlider({ images, title }: ProductImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length < 2 || isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [images.length, isPaused]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div
      aria-label={`${title} image gallery`}
      className="group/slider relative aspect-[16/10] overflow-hidden bg-white"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
    >
      <span className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(115deg,transparent_25%,rgba(255,255,255,0.65)_48%,transparent_68%)] bg-[length:220%_100%] bg-[position:180%_0] opacity-0 transition-[background-position,opacity] duration-1000 group-hover/slider:bg-[position:-80%_0] group-hover/slider:opacity-100" />

      {images.map((src, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-[opacity,transform,filter] duration-700 ease-out ${
              isActive
                ? "z-10 scale-100 opacity-100 blur-0"
                : "z-0 scale-[1.06] opacity-0 blur-[2px]"
            }`}
            key={src}
          >
            <Image
              alt={`${title} package design ${index + 1}`}
              className="object-contain p-5 transition-transform duration-1000 ease-out group-hover/slider:scale-[1.035] sm:p-7"
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={src}
            />
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-transparent px-4 pb-4 pt-14">
        <div aria-label={`Slide ${activeIndex + 1} of ${images.length}`} className="flex items-center gap-1.5">
          {images.map((src, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={`Show product image ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                index === activeIndex ? "w-7 bg-white" : "w-2 bg-white/55 hover:bg-white/85"
              }`}
              key={src}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            aria-label="Previous product image"
            className="grid size-10 place-items-center rounded-full border border-white/40 bg-slate-950/30 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={showPrevious}
            type="button"
          >
            <ChevronLeft aria-hidden="true" className="size-4" />
          </button>
          <button
            aria-label="Next product image"
            className="grid size-10 place-items-center rounded-full border border-white/40 bg-slate-950/30 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={showNext}
            type="button"
          >
            <ChevronRight aria-hidden="true" className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
