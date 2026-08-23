"use client";

import { useEffect, useRef } from "react";

export function BlueprintParallax() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let disposed = false;
    let cleanup: () => void = () => undefined;

    async function setup() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/dist/ScrollTrigger"),
      ]);
      if (disposed || !rootRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.to("[data-blueprint-line]", {
          xPercent: 18,
          yPercent: -14,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }, rootRef);
      cleanup = () => context.revert();
    }

    void setup();
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden" ref={rootRef}>
      <span className="absolute -left-20 top-24 h-px w-2/3 rotate-[-8deg] bg-cobalt/25" data-blueprint-line />
      <span className="absolute left-1/3 top-1/2 h-px w-2/3 rotate-[12deg] bg-cobalt/20" data-blueprint-line />
      <span className="absolute bottom-16 right-10 size-56 rotate-12 border border-cobalt/20" data-blueprint-line />
    </div>
  );
}
