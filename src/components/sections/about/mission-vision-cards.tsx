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
    <div className="mt-10 grid items-start gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-2">
      {principles.map((item) => {
        const Icon = item.icon;
        const isExpanded = Boolean(expanded[item.id]);
        const isMission = item.variant === "mission";

        return (
          <article
            className={`group relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-[border-color,box-shadow,transform] duration-700 ease-out sm:p-10 ${
              isMission
                ? "hover:-translate-y-1 hover:rotate-[0.25deg] hover:border-cobalt/40 hover:shadow-[0_28px_75px_rgba(21,94,239,0.14)]"
                : "hover:-translate-y-1 hover:-rotate-[0.25deg] hover:border-sky-400/50 hover:shadow-[0_28px_75px_rgba(14,165,233,0.14)]"
            }`}
            key={item.id}
          >
            {isMission ? (
              <>
                <span className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border border-cobalt/10 transition-transform duration-1000 ease-out group-hover:rotate-90 group-hover:scale-110" />
                <span className="pointer-events-none absolute -right-9 -top-9 size-32 rounded-full border border-dashed border-cobalt/20 transition-transform duration-1000 ease-out group-hover:-rotate-90" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left scale-x-[0.16] bg-gradient-to-r from-cobalt via-sky-400 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
              </>
            ) : (
              <>
                <span className="pointer-events-none absolute -right-14 -top-14 size-48 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12)_0,rgba(14,165,233,0.04)_32%,transparent_68%)] opacity-45 transition-all duration-700 group-hover:translate-x-[-20px] group-hover:translate-y-[20px] group-hover:scale-125 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-10 top-0 h-24 w-px origin-top bg-gradient-to-b from-sky-400/60 to-transparent transition-transform duration-700 group-hover:scale-y-150" />
                <span className="pointer-events-none absolute right-0 top-10 h-px w-24 origin-right bg-gradient-to-l from-sky-400/60 to-transparent transition-transform duration-700 group-hover:scale-x-150" />
              </>
            )}

            <div className="relative z-10 flex items-start justify-between gap-5">
              <div
                className={`relative grid size-14 shrink-0 place-items-center rounded-2xl border bg-white text-cobalt shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-700 ${
                  isMission
                    ? "border-cobalt/20 group-hover:rotate-[12deg] group-hover:shadow-[0_14px_32px_rgba(21,94,239,0.2)]"
                    : "border-sky-300/60 group-hover:scale-110 group-hover:rounded-full group-hover:shadow-[0_0_0_8px_rgba(14,165,233,0.08)]"
                }`}
              >
                <Icon aria-hidden="true" className="size-7" strokeWidth={1.7} />
                {isMission ? (
                  <span className="absolute inset-[-6px] rounded-[1.15rem] border border-dashed border-cobalt/20 opacity-0 transition-all duration-700 group-hover:rotate-45 group-hover:opacity-100" />
                ) : null}
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cobalt/15 bg-blue-50/80 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-cobalt">
                <Sparkles aria-hidden="true" className="size-3" />
                {item.badge}
              </span>
            </div>

            <div className="relative z-10 mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cobalt">{item.eyebrow}</p>
              <h3 className="display-type mt-1 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/72 sm:text-base sm:leading-8">{item.summary}</p>

              <div
                aria-hidden={!isExpanded}
                className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
                  isExpanded ? "mt-3 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                }`}
                id={`${item.id}-details`}
              >
                <div className="overflow-hidden">
                  <p className="border-l-2 border-cobalt/20 pl-4 text-sm leading-7 text-ink/65 sm:text-base sm:leading-8">
                    {item.detail}
                  </p>
                </div>
              </div>

              <button
                aria-controls={`${item.id}-details`}
                aria-expanded={isExpanded}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-cobalt/20 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.13em] text-cobalt shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-cobalt hover:shadow-[0_10px_28px_rgba(21,94,239,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
                onClick={() => setExpanded((current) => ({ ...current, [item.id]: !isExpanded }))}
                type="button"
              >
                {isExpanded ? "Show less" : `More about ${item.id}`}
                <ChevronDown
                  aria-hidden="true"
                  className={`size-4 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
