"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { sisterConcerns } from "@/data/sister-concerns";
import { cn } from "@/lib/utils";

interface SisterConcernMenuProps {
  active: boolean;
}

export function SisterConcernMenu({ active }: SisterConcernMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  function openMenu() {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    setOpen(true);
  }

  function scheduleClose() {
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 120);
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose} ref={rootRef}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "group relative flex min-h-10 items-center gap-1.5 px-3 text-sm font-semibold transition-colors hover:text-blue-300 xl:px-3.5",
          active && "text-blue-300",
        )}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
            window.requestAnimationFrame(() => firstItemRef.current?.focus());
          }
        }}
        type="button"
      >
        Sister concerns
        <ChevronDown
          aria-hidden="true"
          className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
        />
        <span className={cn("absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100", active && "scale-x-100")} />
      </button>
      <AnimatePresence>
        {open ? (
          <m.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute left-1/2 top-[calc(100%+0.45rem)] w-80 -translate-x-1/2 overflow-hidden rounded-xl border border-white/12 bg-black/90 p-2 text-white shadow-2xl backdrop-blur-2xl"
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            role="menu"
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {sisterConcerns.map((concern, index) => (
              <Link
                ref={index === 0 ? firstItemRef : undefined}
                className="group/item flex min-h-12 items-center gap-3 border-b border-white/10 px-3 py-2.5 transition-colors last:border-b-0 hover:text-blue-300 focus:text-blue-300"
                href={`/sister-concerns/${concern.slug}`}
                key={concern.slug}
                onClick={() => setOpen(false)}
                role="menuitem"
              >
                <span className="text-[0.7rem] font-bold tabular-nums text-blue-300">0{index + 1}</span>
                <span className="flex-1 text-sm font-semibold">{concern.name}</span>
                <ArrowUpRight aria-hidden="true" className="size-4 opacity-45 transition-all group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:opacity-100" />
              </Link>
            ))}
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
