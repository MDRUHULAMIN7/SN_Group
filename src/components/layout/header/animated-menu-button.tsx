"use client";

import { m } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedMenuButtonProps {
  open: boolean;
  onClick: () => void;
  className?: string;
  buttonRef?: React.Ref<HTMLButtonElement>;
}

export function AnimatedMenuButton({ open, onClick, className, buttonRef }: AnimatedMenuButtonProps) {
  return (
    <button
      ref={buttonRef}
      aria-controls="mobile-navigation"
      aria-expanded={open}
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      className={cn("relative grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-ink lg:hidden", className)}
      onClick={onClick}
      type="button"
    >
      <span className="relative block h-5 w-6">
        <m.span
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="absolute left-0 top-0 block h-0.5 w-6 bg-current"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
        <m.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          className="absolute left-0 top-2 block h-0.5 w-4 bg-current"
          transition={{ duration: 0.2 }}
        />
        <m.span
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="absolute bottom-0 left-0 block h-0.5 w-6 bg-current"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </span>
    </button>
  );
}
