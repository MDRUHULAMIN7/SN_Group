"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import type { GalleryItem } from "@/types/content";
import { cn } from "@/lib/utils";

const GalleryLightbox = dynamic(() => import("./gallery-lightbox").then((module) => module.GalleryLightbox), { ssr: false });

export function GalleryGrid({ items }: { items: readonly GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const close = useCallback(() => {
    const index = activeIndex;
    setActiveIndex(null);
    if (index !== null) window.requestAnimationFrame(() => triggerRefs.current[index]?.focus());
  }, [activeIndex]);
  const previous = useCallback(() => setActiveIndex((index) => index === null ? null : (index - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setActiveIndex((index) => index === null ? null : (index + 1) % items.length), [items.length]);

  return (
    <>
      <div className="grid auto-rows-[14rem] gap-4 sm:grid-cols-2 sm:auto-rows-[18rem] lg:grid-cols-12 lg:auto-rows-[15rem]">
        {items.map((item, index) => (
          <button
            aria-label={`Open image: ${item.caption}`}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-[0_14px_40px_rgba(15,23,42,0.08)]",
              item.aspect === "wide" && "sm:col-span-2 lg:col-span-8 lg:row-span-2",
              item.aspect === "portrait" && "lg:col-span-4 lg:row-span-2",
              item.aspect === "landscape" && "lg:col-span-4 lg:row-span-1",
            )}
            key={item.id}
            onClick={() => setActiveIndex(index)}
            ref={(element) => { triggerRefs.current[index] = element; }}
            type="button"
          >
            <Image alt={item.alt} className="object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw" src={item.src} style={{ objectPosition: item.objectPosition }} />
            <span className="absolute inset-0 bg-gradient-to-t from-white/96 via-white/15 to-transparent opacity-85 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-0 block p-5 text-ink"><span className="block text-[0.62rem] font-bold uppercase tracking-[0.15em] text-cobalt">{item.category}</span><span className="display-type mt-2 block text-2xl">{item.caption}</span></span>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {activeIndex !== null ? <GalleryLightbox index={activeIndex} item={items[activeIndex]} key="gallery-lightbox" onClose={close} onNext={next} onPrevious={previous} total={items.length} /> : null}
      </AnimatePresence>
    </>
  );
}
