"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, m } from "motion/react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 240);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          animate={{ opacity: 1, scale: 1, y: 0 }}
          aria-label="Scroll to top of page"
          className="group fixed bottom-22 right-5 z-40 isolate grid size-12 sm:size-13 place-items-center rounded-full border border-white/40 bg-cobalt text-white shadow-[0_8px_24px_rgba(21,94,239,0.42)] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_12px_30px_rgba(21,94,239,0.6)] hover:-translate-y-1 active:scale-95 sm:bottom-25 sm:right-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          onClick={scrollToTop}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          type="button"
        >
          <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
            Back to top
          </span>
          <ArrowUp aria-hidden="true" className="size-5 sm:size-6 stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-0.5" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
