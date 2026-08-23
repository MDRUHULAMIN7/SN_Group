"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "motion/react";

const sessionKey = "sn-group-preloader-seen";
const skyline = [24, 38, 31, 58, 72, 42, 34, 64, 49, 82, 55, 44, 69, 37, 60, 76, 46, 29];

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const shouldShowRef = useRef<boolean | null>(null);

  useLayoutEffect(() => {
    shouldShowRef.current ??= document.documentElement.dataset.snPreloader === "show";
    const shouldShow = shouldShowRef.current;
    document.documentElement.setAttribute("data-sn-preloader", shouldShow ? "show" : "skip");
    if (!shouldShow) {
      setVisible(false);
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(reduce);
    try {
      window.sessionStorage.setItem(sessionKey, "true");
    } catch {
      // The preloader still works when storage is unavailable.
    }
    const timeout = window.setTimeout(() => setVisible(false), reduce ? 240 : 1_650);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence
      initial={false}
      onExitComplete={() => document.documentElement.setAttribute("data-sn-preloader", "done")}
    >
      {visible ? (
        <m.div
          animate={{ opacity: 1 }}
          aria-label="S.N Group is loading"
          aria-live="polite"
          className="site-preloader blueprint-grid fixed inset-0 z-[100] grid place-items-center bg-white text-ink"
          exit={{ opacity: 0, y: reducedMotion ? 0 : "-3%" }}
          initial={{ opacity: 0 }}
          role="status"
          transition={{ duration: reducedMotion ? 0.1 : 0.65, ease: [0.76, 0, 0.24, 1] }}
        >
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-28 items-end gap-1 opacity-[0.045] sm:h-36">
            {skyline.map((height, index) => <span className="flex-1 bg-ink" key={`${height}-${index}`} style={{ height: `${height}%` }} />)}
          </div>
          <m.div
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
            transition={{ delay: reducedMotion ? 0 : 0.18, duration: 0.65 }}
          >
            <Image alt="" className="size-28 object-contain sm:size-32" height={128} loading="eager" src="/images/sn-group-mark.webp" width={128} />
            <p className="display-type mt-4 text-4xl font-semibold tracking-[0.02em] text-cobalt sm:text-5xl">S.N Group</p>
            <div className="mt-4 text-center text-[0.58rem] font-extrabold uppercase leading-4 tracking-[0.12em] text-cobalt/75 sm:text-[0.66rem]">
              <p>S.N Int. Construction BD Ltd.</p>
              <p>S.N Import &amp; Export BD Ltd.</p>
              <p>Marrish Holdings Ltd.</p>
            </div>
            <span className="mt-8 h-px w-48 overflow-hidden bg-ink/10">
              <m.span
                animate={{ scaleX: 1 }}
                className="block h-full origin-left bg-cobalt"
                initial={{ scaleX: reducedMotion ? 1 : 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
