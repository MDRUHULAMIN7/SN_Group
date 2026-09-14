"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

interface CapabilityStage {
  tier: string;
  className: string;
  period: string;
  title: string;
  description: string;
  proof: string;
  isPinnacle?: boolean;
  align: "left" | "right";
  highlights: string[];
}

const capabilityStages: CapabilityStage[] = [
  {
    tier: "C",
    className: "Class C",
    period: "2006–2010",
    title: "Foundation & First Capability",
    description:
      "The business began as a proprietorship in 2006, building its operational base through disciplined execution, trusted supplier relationships, and early civil and support works.",
    proof: "Foundation Phase",
    align: "left",
    highlights: ["Proprietorship inception", "Early civil & support works", "Trusted supplier network"],
  },
  {
    tier: "B",
    className: "Class B",
    period: "2011–2014",
    title: "Structured Portfolio Expansion",
    description:
      "Documented Bangladesh Army orders began in 2011 and progressed to multi-storey academic buildings and a 68-bay garage-cum-multipurpose hall by 2013–14.",
    proof: "Institutional Scale-Up",
    align: "right",
    highlights: ["Bangladesh Army contracts", "Academic institutional builds", "68-bay multipurpose hall"],
  },
  {
    tier: "A",
    className: "Class A",
    period: "2015–Today",
    title: "Major-Works Delivery Capacity",
    description:
      "From 2015, the portfolio moved into major infrastructure, multi-storey, industrial, naval and aviation works. An ABC electrical-contractor licence followed on 29 September 2021.",
    proof: "Highest Capability Phase",
    isPinnacle: true,
    align: "left",
    highlights: ["ABC Electrical Licence (2021)", "Naval, aviation & civil infra", "Highest multi-discipline tier"],
  },
];

/* -------------------------------------------------------------------------- */
/* Precision Machined Finial Caps for Vertical Pillar                          */
/* -------------------------------------------------------------------------- */

function TopFinialCap() {
  return (
    <svg
      aria-hidden="true"
      className="relative z-20 -mb-1 size-auto drop-shadow-[0_2px_6px_rgba(21,94,239,0.35)]"
      fill="none"
      height="14"
      viewBox="0 0 24 14"
      width="24"
    >
      <defs>
        <linearGradient id="capProgGrad" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="25%" stopColor="#155eef" />
          <stop offset="50%" stopColor="#93c5fd" />
          <stop offset="75%" stopColor="#155eef" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="capProgHl" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      {/* Top Rounded Crown */}
      <rect fill="url(#capProgGrad)" height="4" rx="2" width="18" x="3" y="1" />
      <line stroke="#ffffff" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="0.8" x1="5" x2="19" y1="2" y2="2" />
      {/* Main Collar Body */}
      <rect fill="url(#capProgGrad)" height="5.5" width="14" x="5" y="4.5" />
      {/* Bottom Lip */}
      <rect fill="url(#capProgGrad)" height="3.5" rx="1" width="18" x="3" y="9.5" />
      <line stroke="url(#capProgHl)" strokeLinecap="round" strokeWidth="0.8" x1="4" x2="20" y1="10" y2="10" />
    </svg>
  );
}

function BottomFinialCap() {
  return (
    <svg
      aria-hidden="true"
      className="relative z-20 -mt-1 size-auto drop-shadow-[0_2px_6px_rgba(21,94,239,0.35)]"
      fill="none"
      height="14"
      viewBox="0 0 24 14"
      width="24"
    >
      {/* Top Lip */}
      <rect fill="url(#capProgGrad)" height="3.5" rx="1" width="18" x="3" y="1" />
      {/* Main Collar Body */}
      <rect fill="url(#capProgGrad)" height="5.5" width="14" x="5" y="4" />
      {/* Bottom Rounded Plinth */}
      <rect fill="url(#capProgGrad)" height="4" rx="2" width="18" x="3" y="9" />
      <line stroke="#1e3a8a" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="0.8" x1="5" x2="19" y1="12" y2="12" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Main ContractorProgressionTimeline Component                               */
/* -------------------------------------------------------------------------- */

export function ContractorProgressionTimeline() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  return (
    <div className="relative mx-auto mt-10 max-w-5xl sm:mt-14">
      {/* Timeline Structure */}
      <div className="relative">
        {/* Central Vertical Rod (Desktop: Center, Mobile: Left side) */}
        <div className="absolute bottom-6 top-1 left-6 -translate-x-1/2 md:left-1/2 flex flex-col items-center">
          {/* Top Machined Cap */}
          <TopFinialCap />

          {/* Continuous Cylindrical Rod */}
          <div className="relative h-full w-3.5 overflow-hidden bg-gradient-to-b from-sky-400 via-cobalt to-blue-600 shadow-[0_0_12px_rgba(21,94,239,0.25)]">
            {/* Animated Light Pulse traveling down the rod */}
            <div className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-90 blur-[1px] animate-[travelDown_5s_ease-in-out_infinite]" />
          </div>

          {/* Bottom Machined Cap */}
          <BottomFinialCap />
        </div>

        {/* Timeline Progression Stages Flow */}
        <div className="relative z-10 flex flex-col gap-10 sm:gap-14 lg:gap-16">
          {capabilityStages.map((stage) => (
            <ProgressionRow
              hovered={hoveredTier === stage.tier}
              item={stage}
              key={stage.tier}
              onHover={setHoveredTier}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Individual Progression Row with Branch Arm & Card                          */
/* -------------------------------------------------------------------------- */

interface ProgressionRowProps {
  item: CapabilityStage;
  hovered: boolean;
  onHover: (tier: string | null) => void;
}

function ProgressionRow({ item, hovered, onHover }: ProgressionRowProps) {
  const isLeft = item.align === "left";

  return (
    <div
      className="relative pl-14 sm:pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-24 items-center"
      onMouseEnter={() => onHover(item.tier)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Card Container (Column 1 for left, Column 2 for right) */}
      <div
        className={`w-full ${
          isLeft
            ? "md:col-start-1 md:col-end-2"
            : "md:col-start-2 md:col-end-3"
        }`}
      >
        <div className="relative">
          {/* Card in S.N Group Website Styling */}
          <article
            className={`group relative isolate transform-gpu overflow-hidden rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-500 ease-out will-change-transform ${
              hovered
                ? "scale-[1.02] -translate-y-1.5 border-cobalt/50 shadow-[0_20px_50px_rgba(21,94,239,0.14)]"
                : "border-slate-200 shadow-[0_10px_32px_rgba(15,23,42,0.05)]"
            }`}
          >
            {/* Top Accent Line */}
            <div
              className={`absolute inset-x-0 top-0 h-1 transition-all duration-500 ${
                item.isPinnacle
                  ? "bg-gradient-to-r from-cobalt via-sky-400 to-cyan-400 opacity-100"
                  : hovered
                  ? "bg-gradient-to-r from-blue-300 to-cobalt opacity-100"
                  : "bg-slate-100 opacity-70"
              }`}
            />

            {/* Top Row: Class Tier and Period */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-100 pb-3">
              {isLeft ? (
                <>
                  <div className="flex items-center gap-2">
                    <span className="display-type text-2xl sm:text-3xl font-bold tracking-tight text-cobalt">
                      {item.className}
                    </span>
                    {item.isPinnacle ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/80 px-2 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-wider text-amber-600">
                        <Sparkles aria-hidden="true" className="size-2.5" />
                        Pinnacle
                      </span>
                    ) : null}
                  </div>
                  <span className="inline-flex items-center rounded-full border border-cobalt/20 bg-blue-50 px-3 py-0.5 text-xs font-bold text-cobalt">
                    {item.period}
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-flex items-center rounded-full border border-cobalt/20 bg-blue-50 px-3 py-0.5 text-xs font-bold text-cobalt">
                    {item.period}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="display-type text-2xl sm:text-3xl font-bold tracking-tight text-cobalt">
                      {item.className}
                    </span>
                    {item.isPinnacle ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/80 px-2 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-wider text-amber-600">
                        <Sparkles aria-hidden="true" className="size-2.5" />
                        Pinnacle
                      </span>
                    ) : null}
                  </div>
                </>
              )}
            </div>

            {/* Title & Description */}
            <div className="relative z-10 mt-4">
              <h4 className="display-type text-xl sm:text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-cobalt">
                {item.title}
              </h4>
              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-ink/75 font-sans">
                {item.description}
              </p>
            </div>

            {/* Deliverables / Milestones */}
            <div className="relative z-10 mt-4 space-y-2 border-t border-slate-100 pt-4">
              {item.highlights.map((highlight) => (
                <div className="flex items-center gap-2 text-sm sm:text-base text-ink/80" key={highlight}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-4 shrink-0 text-cobalt transition-transform duration-300 group-hover:scale-110"
                  />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Card Footer: Capability Phase Verification */}
            <div className="relative z-10 mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cobalt">
                {item.isPinnacle ? (
                  <ShieldCheck aria-hidden="true" className="size-4 text-cobalt" />
                ) : (
                  <TrendingUp aria-hidden="true" className="size-4 text-cobalt" />
                )}
                <span>{item.proof}</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Horizontal Connecting Branch Arm on desktop */}
      <div
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 hidden md:block ${
          isLeft
            ? "right-1/2 w-8 lg:w-12"
            : "left-1/2 w-8 lg:w-12"
        }`}
      >
        <div
          className={`h-1 w-full transition-all duration-300 rounded-full ${
            hovered
              ? "bg-cobalt shadow-[0_0_10px_rgba(21,94,239,0.5)]"
              : "bg-slate-300"
          }`}
        />
        {/* Ring Rivet / Node on spine intersection */}
        <span
          className={`absolute top-1/2 -translate-y-1/2 size-3.5 rounded-full border-2 border-white bg-cobalt shadow-[0_0_8px_rgba(21,94,239,0.4)] ${
            isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
          }`}
        />
      </div>

      {/* Horizontal Connecting Branch Arm on mobile */}
      <div className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 w-8 sm:w-10 block md:hidden">
        <div
          className={`h-1 w-full rounded-full transition-all duration-300 ${
            hovered ? "bg-cobalt" : "bg-slate-300"
          }`}
        />
        <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full border border-white bg-cobalt" />
      </div>
    </div>
  );
}
