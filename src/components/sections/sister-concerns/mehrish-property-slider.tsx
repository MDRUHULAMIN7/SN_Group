"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Building2, MapPin } from "lucide-react";

interface PropertySlide {
  id: string;
  image: string;
  title: string;
  location: string;
  category: string;
  alt: string;
}

const PROPERTY_SLIDES: readonly PropertySlide[] = [
  {
    id: "crown-heights",
    image: "/images/hero-commercial-hd.webp",
    title: "Mehrish Crown Heights",
    location: "Gulshan-2, Dhaka",
    category: "Luxury Residences & Penthouses",
    alt: "Mehrish Crown Heights Luxury Residential High-Rise in Gulshan-2",
  },
  {
    id: "trade-center",
    image: "/images/hero-headquarters-silver-tower.jpg",
    title: "Mehrish Trade Center",
    location: "Banani Road 11, Dhaka",
    category: "Grade-A Commercial Tower",
    alt: "Mehrish Trade Center Corporate Commercial Tower in Banani",
  },
  {
    id: "lakefront-vista",
    image: "/images/project-commercial.webp",
    title: "Mehrish Lakefront Vista",
    location: "Dhanmondi Lake View, Dhaka",
    category: "Panoramic Lakefront Apartments",
    alt: "Mehrish Lakefront Vista Residential Suites in Dhanmondi",
  },
  {
    id: "signature-plaza",
    image: "/images/hero-modern-institutional-building-hd.jpg",
    title: "Mehrish Signature Plaza",
    location: "Uttara Sector 4, Dhaka",
    category: "Commercial & Lifestyle Complex",
    alt: "Mehrish Signature Plaza Corporate Hub in Uttara",
  },
];

export function MehrishPropertySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % PROPERTY_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PROPERTY_SLIDES.length) % PROPERTY_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PROPERTY_SLIDES.length);
  };

  return (
    <div
      aria-label="Mehrish Holdings Property Showcase Slider"
      className="group relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-2 sm:p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-slate-300 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Viewport */}
      <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900">
        {PROPERTY_SLIDES.map((slide, index) => {
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
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={slide.image}
              />
              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-20 text-white">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-cobalt/85 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  <Building2 className="size-3" />
                  {slide.category}
                </div>
                <h3 className="display-type mt-2 text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                  {slide.title}
                </h3>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
                  <MapPin className="size-3.5 text-cobalt-light" />
                  <span>{slide.location}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-2 z-30 flex items-center">
          <button
            aria-label="Previous property"
            className="grid size-9 place-items-center rounded-full border border-white/20 bg-slate-900/60 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cobalt focus-visible:outline-2 focus-visible:outline-cobalt"
            onClick={handlePrev}
            type="button"
          >
            <ChevronLeft className="size-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-2 z-30 flex items-center">
          <button
            aria-label="Next property"
            className="grid size-9 place-items-center rounded-full border border-white/20 bg-slate-900/60 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cobalt focus-visible:outline-2 focus-visible:outline-cobalt"
            onClick={handleNext}
            type="button"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 right-4 z-30 flex items-center gap-1.5">
          {PROPERTY_SLIDES.map((slide, idx) => (
            <button
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
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
