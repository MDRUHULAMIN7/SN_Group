"use client";

import Image from "next/image";
import { useState } from "react";

export interface ClientItem {
  name: string;
  category: string;
  logo: string;
  logoAlt: string;
  detail: string;
}

interface ClientLogoSliderProps {
  clients: readonly ClientItem[] | ClientItem[];
}

export function ClientLogoSlider({ clients }: ClientLogoSliderProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Repeat clients list 3 times for completely seamless, gap-free infinite scrolling
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div
      aria-label="Institutional Clients Logo Slider"
      className="client-logo-slider group relative mt-10 sm:mt-14 py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchEnd={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      {/* Left Edge Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent"
      />

      {/* Right Edge Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent"
      />

      {/* Marquee Track */}
      <div
        className="client-logo-track flex items-center gap-4 sm:gap-6"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            className="group/item relative flex h-24 w-44 shrink-0 sm:h-28 sm:w-56 md:w-60 items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-[0_12px_28px_rgba(21,94,239,0.12)] select-none"
            key={`${client.name}-${index}`}
            title={client.name}
          >
            <div className="relative h-14 w-full max-w-[82%] flex items-center justify-center">
              <Image
                alt={client.logoAlt || client.name}
                className="object-contain p-1 filter transition-transform duration-300 group-hover/item:scale-108 group-hover/item:brightness-105"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 140px, 200px"
                src={client.logo}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
