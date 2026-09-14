"use client";

import { useState } from "react";

interface Milestone {
  index: string;
  year: string;
  title: string;
  description: string;
  align: "left" | "right";
}

const milestones: Milestone[] = [
  {
    index: "01",
    year: "2006",
    title: "Founding & Construction Roots",
    description:
      "S.N Eng Construction began operations as a proprietorship, establishing the construction and engineering foundation of today's group.",
    align: "left",
  },
  {
    index: "02",
    year: "2011",
    title: "Defense Project Portfolio",
    description:
      "The documented project portfolio expanded through Bangladesh Army works at Qadirabad and Parbatipur Cantonments.",
    align: "right",
  },
  {
    index: "03",
    year: "2015",
    title: "Major Infrastructure Delivery",
    description:
      "Delivery capabilities grew into major bridge, culvert, RCC road, drain, hardstanding, and multi-storey institutional works.",
    align: "left",
  },
  {
    index: "04",
    year: "2019",
    title: "Private Limited Incorporation",
    description:
      "The construction business was incorporated as a private limited company under the Companies Act 1994 in Bangladesh.",
    align: "right",
  },
  {
    index: "05",
    year: "2021–24",
    title: "Tri-Service Project Expansion",
    description:
      "The portfolio expanded across Bangladesh Army, Navy, and Air Force projects, including aviation, operations, fuel, and drainage infrastructure.",
    align: "left",
  },
  {
    index: "06",
    year: "Today",
    title: "A Diversified Business Group",
    description:
      "S.N Group connects construction, international import and export, and real estate development through three specialist operating companies.",
    align: "right",
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
        <linearGradient id="capGradient" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="25%" stopColor="#155eef" />
          <stop offset="50%" stopColor="#93c5fd" />
          <stop offset="75%" stopColor="#155eef" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="capHighlight" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      {/* Top Rounded Crown */}
      <rect fill="url(#capGradient)" height="4" rx="2" width="18" x="3" y="1" />
      <line stroke="#ffffff" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="0.8" x1="5" x2="19" y1="2" y2="2" />
      {/* Main Collar Body */}
      <rect fill="url(#capGradient)" height="5.5" width="14" x="5" y="4.5" />
      {/* Bottom Overlapping Lip (Wider than 14px rod, seamlessly covers the top) */}
      <rect fill="url(#capGradient)" height="3.5" rx="1" width="18" x="3" y="9.5" />
      <line stroke="url(#capHighlight)" strokeLinecap="round" strokeWidth="0.8" x1="4" x2="20" y1="10" y2="10" />
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
      {/* Top Lip (Overlaps the bottom of the 14px rod) */}
      <rect fill="url(#capGradient)" height="3.5" rx="1" width="18" x="3" y="1" />
      {/* Main Collar Body */}
      <rect fill="url(#capGradient)" height="5.5" width="14" x="5" y="4" />
      {/* Bottom Rounded Plinth */}
      <rect fill="url(#capGradient)" height="4" rx="2" width="18" x="3" y="9" />
      <line stroke="#1e3a8a" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="0.8" x1="5" x2="19" y1="12" y2="12" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Main CompanyJourneyTimeline Component                                      */
/* -------------------------------------------------------------------------- */

export function CompanyJourneyTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Timeline Structure */}
      <div className="relative">
        {/* Central Vertical Rod (Desktop: Center, Mobile: Left side) */}
        <div className="absolute bottom-6 top-1 left-6 -translate-x-1/2 md:left-1/2 flex flex-col items-center">
          {/* Top Machined Cap */}
          <TopFinialCap />

          {/* The Continuous Cylindrical Rod (14px = w-3.5) */}
          <div className="relative h-full w-3.5 overflow-hidden bg-gradient-to-b from-sky-400 via-cobalt to-blue-600 shadow-[0_0_12px_rgba(21,94,239,0.25)]">
            {/* Animated Light Pulse traveling down the rod */}
            <div className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-90 blur-[1px] animate-[travelDown_5s_ease-in-out_infinite]" />
          </div>

          {/* Bottom Machined Cap */}
          <BottomFinialCap />
        </div>

        {/* Timeline Milestones Flow */}
        <div className="relative z-10 flex flex-col gap-10 sm:gap-14 lg:gap-16">
          {milestones.map((item) => (
            <TimelineRow
              hovered={hoveredIndex === item.index}
              item={item}
              key={item.index}
              onHover={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Individual Timeline Row with Branch Line & Card (S.N Group Theme)          */
/* -------------------------------------------------------------------------- */

interface TimelineRowProps {
  item: Milestone;
  hovered: boolean;
  onHover: (id: string | null) => void;
}

function TimelineRow({ item, hovered, onHover }: TimelineRowProps) {
  const isLeft = item.align === "left";

  return (
    <div
      className="relative pl-14 sm:pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-24 items-center"
      onMouseEnter={() => onHover(item.index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Plaque Card Container (Column 1 for left, Column 2 for right) */}
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
            {/* Top Row: Index and Year */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-100 pb-3">
              {isLeft ? (
                <>
                  <span className="display-type text-2xl font-bold tracking-tight text-cobalt">
                    {item.index}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-cobalt/20 bg-blue-50 px-3 py-0.5 text-xs font-bold text-cobalt">
                    {item.year}
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-flex items-center rounded-full border border-cobalt/20 bg-blue-50 px-3 py-0.5 text-xs font-bold text-cobalt">
                    {item.year}
                  </span>
                  <span className="display-type text-2xl font-bold tracking-tight text-cobalt">
                    {item.index}
                  </span>
                </>
              )}
            </div>

            {/* Title & Description */}
            <div className="relative z-10 mt-4">
              <h4 className="display-type text-xl sm:text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-cobalt">
                {item.title}
              </h4>
              <p className="mt-2.5 text-xs sm:text-sm leading-6 text-ink/70 font-sans">
                {item.description}
              </p>
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
