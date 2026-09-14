"use client";

import { useState } from "react";
import { ChevronDown, Compass, Eye, Sparkles } from "lucide-react";

const principles = [
  {
    id: "mission",
    eyebrow: "Our Purpose",
    badge: "Core Purpose",
    title: "Our Mission",
    summary:
      "To build and operate businesses that create lasting value through quality construction, responsible international trade, and thoughtfully developed real estate.",
    detail:
      "We pursue projects at competitive and responsible pricing, provide safe working conditions, and deliver quality work within a reasonable timeframe. Across every S.N Group concern, we combine professional execution, transparent client partnership, and accountable service to earn long-term confidence.",
    icon: Compass,
    variant: "mission",
  },
  {
    id: "vision",
    eyebrow: "Future Horizon",
    badge: "Long-term Direction",
    title: "Our Vision",
    summary:
      "To become a trusted and respected Bangladeshi business group with a strong national presence and growing international reach.",
    detail:
      "We aspire to be recognized for delivering beyond expectation—building a respected construction enterprise while expanding dependable global trade and thoughtful real-estate development. Our horizon is sustainable growth shaped by integrity, innovation, quality, and enduring relationships.",
    icon: Eye,
    variant: "vision",
  },
] as const;

export function MissionVisionCards() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div className="mt-10 grid items-stretch gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-2">
      {principles.map((item) => {
        const Icon = item.icon;
        const isExpanded = Boolean(expanded[item.id]);
        const isMission = item.variant === "mission";

        return (
          <article
            className={`group relative isolate flex h-full flex-col justify-between transform-gpu overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:-translate-y-2 hover:scale-[1.02] sm:p-10 ${
              isMission
                ? "hover:border-cobalt/40 hover:shadow-[0_26px_65px_rgba(21,94,239,0.16)]"
                : "hover:border-sky-400/50 hover:shadow-[0_26px_65px_rgba(14,165,233,0.16)]"
            }`}
            key={item.id}
          >
            {isMission ? (
              <>
                <span className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border border-cobalt/10 transform-gpu transition-transform duration-700 ease-out group-hover:scale-110" />
                <span className="pointer-events-none absolute -right-9 -top-9 size-32 rounded-full border border-dashed border-cobalt/20 transform-gpu transition-transform duration-700 ease-out group-hover:scale-105" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left scale-x-[0.16] bg-gradient-to-r from-cobalt via-sky-400 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </>
            ) : (
              <>
                <span className="pointer-events-none absolute -right-14 -top-14 size-48 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.14)_0,rgba(14,165,233,0.04)_32%,transparent_68%)] opacity-45 transform-gpu transition-[transform,opacity] duration-700 ease-out group-hover:scale-125 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-10 top-0 h-24 w-px origin-top bg-gradient-to-b from-sky-400/60 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-125" />
                <span className="pointer-events-none absolute right-0 top-10 h-px w-24 origin-right bg-gradient-to-l from-sky-400/60 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-125" />
              </>
            )}

            <div className="relative z-10 flex items-start justify-between gap-5">
              <div
                className={`relative grid size-14 shrink-0 place-items-center rounded-2xl border bg-white text-cobalt shadow-[0_10px_24px_rgba(15,23,42,0.08)] transform-gpu transition-[transform,box-shadow,border-color] duration-500 ease-out group-hover:scale-105 ${
                  isMission
                    ? "border-cobalt/20 group-hover:shadow-[0_14px_30px_rgba(21,94,239,0.18)]"
                    : "border-sky-300/60 group-hover:shadow-[0_14px_30px_rgba(14,165,233,0.18)]"
                }`}
              >
                <Icon aria-hidden="true" className="size-7" strokeWidth={1.7} />
                {isMission ? (
                  <span className="absolute inset-[-6px] rounded-[1.15rem] border border-dashed border-cobalt/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                ) : null}
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cobalt/15 bg-blue-50/80 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-cobalt">
                <Sparkles aria-hidden="true" className="size-3" />
                {item.badge}
              </span>
            </div>

            <div className="relative z-10 mt-7 flex flex-1 flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cobalt">{item.eyebrow}</p>
                <h3 className="display-type mt-1 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{item.title}</h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink/75">
                {item.summary}
                {!isExpanded ? (
                  <button
                    aria-controls={`${item.id}-details`}
                    aria-expanded={false}
                    className="group/link ml-1.5 inline-flex cursor-pointer items-center gap-1 font-semibold text-cobalt underline-offset-4 transition-colors duration-200 hover:text-sky-600 hover:underline focus-visible:outline-none focus-visible:underline"
                    onClick={() => setExpanded((current) => ({ ...current, [item.id]: true }))}
                    type="button"
                  >
                    <span>More</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="size-3.5 transition-transform duration-200 group-hover/link:translate-y-0.5"
                    />
                  </button>
                ) : null}
              </p>

              <div
                aria-hidden={!isExpanded}
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                  isExpanded ? "mt-3 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0 pointer-events-none"
                }`}
                id={`${item.id}-details`}
              >
                <div className="overflow-hidden">
                  <p className="border-l-2 border-cobalt/25 pl-4 text-base sm:text-lg leading-relaxed text-ink/70">
                    {item.detail}
                    <button
                      aria-controls={`${item.id}-details`}
                      aria-expanded={true}
                      className="group/link ml-1.5 inline-flex cursor-pointer items-center gap-1 font-semibold text-cobalt underline-offset-4 transition-colors duration-200 hover:text-sky-600 hover:underline focus-visible:outline-none focus-visible:underline"
                      onClick={() => setExpanded((current) => ({ ...current, [item.id]: false }))}
                      type="button"
                    >
                      <span>Show less</span>
                      <ChevronDown
                        aria-hidden="true"
                        className="size-3.5 rotate-180 transition-transform duration-200 group-hover/link:-translate-y-0.5"
                      />
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        );
      })}
    </div>
  );
}
