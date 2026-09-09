"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import type { GalleryItem } from "@/types/content";
import { cn } from "@/lib/utils";

const GalleryLightbox = dynamic(() => import("./gallery-lightbox").then((module) => module.GalleryLightbox), { ssr: false });

export function GalleryGrid({ items }: { items: readonly GalleryItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => set.add(item.category));
    return ["All", ...Array.from(set)];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const close = useCallback(() => {
    const index = activeIndex;
    setActiveIndex(null);
    if (index !== null) window.requestAnimationFrame(() => triggerRefs.current[index]?.focus());
  }, [activeIndex]);

  const previous = useCallback(() => {
    setActiveIndex((index) => (index === null ? null : (index - 1 + filteredItems.length) % filteredItems.length));
  }, [filteredItems.length]);

  const next = useCallback(() => {
    setActiveIndex((index) => (index === null ? null : (index + 1) % filteredItems.length));
  }, [filteredItems.length]);

  return (
    <>
      {/* Category Filter Navigation */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:mb-12">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          const count = category === "All" ? items.length : items.filter((i) => i.category === category).length;
          return (
            <button
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 sm:text-sm",
                isSelected
                  ? "bg-cobalt text-white shadow-[0_4px_16px_rgba(21,94,239,0.35)] scale-[1.02]"
                  : "border border-slate-200 bg-white text-ink/75 hover:border-cobalt/40 hover:text-cobalt hover:bg-blue-50/50",
              )}
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              <span>{category}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[0.65rem] font-bold leading-none",
                  isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-ink/60",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid auto-rows-[15rem] gap-4 sm:grid-cols-2 sm:auto-rows-[19rem] lg:grid-cols-12 lg:auto-rows-[16rem]">
        {filteredItems.map((item, index) => (
          <m.button
            animate={{ opacity: 1, scale: 1 }}
            aria-label={`Open image: ${item.caption}`}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-left shadow-[0_12px_36px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_16px_44px_rgba(21,94,239,0.18)] hover:border-cobalt/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt",
              item.aspect === "wide" && "sm:col-span-2 lg:col-span-8 lg:row-span-2",
              item.aspect === "portrait" && "lg:col-span-4 lg:row-span-2",
              item.aspect === "landscape" && "lg:col-span-4 lg:row-span-1",
            )}
            initial={{ opacity: 0, scale: 0.96 }}
            key={item.id}
            onClick={() => setActiveIndex(index)}
            ref={(element) => {
              triggerRefs.current[index] = element;
            }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            type="button"
          >
            <Image
              alt={item.alt}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
              src={item.src}
              style={{ objectPosition: item.objectPosition }}
            />
            {/* Subtle multi-stop gradient for readable text and clean contrast */}
            <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 via-45% to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

            {/* Caption & Category Overlay */}
            <span className="absolute inset-x-0 bottom-0 block p-5 text-white sm:p-6">
              <span className="inline-block rounded-md bg-cobalt/90 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white shadow-xs backdrop-blur-sm">
                {item.category}
              </span>
              <span className="display-type mt-2.5 block text-lg font-bold leading-snug sm:text-2xl text-white drop-shadow-sm line-clamp-2">
                {item.caption}
              </span>
            </span>
          </m.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && filteredItems[activeIndex] ? (
          <GalleryLightbox
            index={activeIndex}
            item={filteredItems[activeIndex]}
            key="gallery-lightbox"
            onClose={close}
            onNext={next}
            onPrevious={previous}
            total={filteredItems.length}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

