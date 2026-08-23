"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { m } from "motion/react";
import type { GalleryItem } from "@/types/content";

interface GalleryLightboxProps {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function GalleryLightbox({ item, index, total, onClose, onPrevious, onNext }: GalleryLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <m.div animate={{ opacity: 1 }} aria-label={`Image ${index + 1} of ${total}: ${item.caption}`} aria-modal="true" className="fixed inset-0 z-[90] grid place-items-center bg-navy/96 p-4 text-white sm:p-8" initial={{ opacity: 0 }} role="dialog">
      <button aria-label="Close gallery" className="absolute right-4 top-4 z-10 grid size-12 place-items-center rounded-full border border-white/20 bg-white/8 hover:bg-white hover:text-navy sm:right-8 sm:top-8" onClick={onClose} ref={closeRef} type="button"><X aria-hidden="true" className="size-5" /></button>
      <div className="relative size-full max-h-[78vh] max-w-6xl">
        <Image alt={item.alt} className="object-contain" fill loading="eager" sizes="100vw" src={item.src} />
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between sm:inset-x-8 sm:bottom-8">
        <button aria-label="Previous image" className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/8 hover:bg-white hover:text-navy" onClick={onPrevious} type="button"><ArrowLeft aria-hidden="true" className="size-5" /></button>
        <div className="text-center"><p className="text-sm font-bold">{item.caption}</p><p className="mt-1 text-xs text-white/45">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</p></div>
        <button aria-label="Next image" className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/8 hover:bg-white hover:text-navy" onClick={onNext} type="button"><ArrowRight aria-hidden="true" className="size-5" /></button>
      </div>
    </m.div>
  );
}
