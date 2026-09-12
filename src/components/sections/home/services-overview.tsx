"use client";

import Link from "next/link";
import type { PointerEvent } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, DraftingCompass, Landmark, ShipWheel } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const serviceCategories = [
  {
    company: "S.N Eng Construction BD Ltd.",
    discipline: "Civil & Defense Infrastructure",
    icon: DraftingCompass,
    tag: "20+ Years Experience",
    slug: "sn-engineering-construction",
    description:
      "Delivering government, defense, institutional, and infrastructure projects with disciplined control of safety, quality, specifications, and schedules.",
    highlights: [
      "Government & institutional construction projects",
      "Army, Navy & defense infrastructure works",
      "Civil, structural & architectural development",
      "Project management & construction supervision",
    ],
  },
  {
    company: "S.N Import & Export BD Ltd.",
    discipline: "Global Sourcing & Distribution",
    icon: ShipWheel,
    tag: "Global Trade Network",
    slug: "sn-import-export",
    description:
      "Connecting Bangladesh with trusted global suppliers and buyers across food commodities, industrial inputs, machinery, and export materials.",
    highlights: [
      "Agricultural commodities & food ingredients",
      "Industrial & commercial chemicals and raw materials",
      "Construction & engineering equipment and machinery",
      "Export of soil, stone, aggregates & construction materials",
    ],
  },
  {
    company: "Mehrish Holdings Ltd.",
    discipline: "Prime Real Estate Development",
    icon: Landmark,
    tag: "Prime Dhaka Locations",
    slug: "mehrish-holdings",
    description:
      "Creating residential and commercial properties in prime Dhaka locations through thoughtful planning, quality engineering, and enduring investment value.",
    highlights: [
      "Residential property development & premium apartments",
      "Commercial & multi-storey building development",
      "Prime locations: Dhanmondi, Gulshan, Banani & Uttara",
      "Modern amenities, space efficiency & long-term asset value",
    ],
  },
];

function handleCardPointerEnter(event: PointerEvent<HTMLElement>) {
  if (event.pointerType === "touch") return;
  event.currentTarget.dataset.tilting = "true";
}

function handleCardPointerMove(event: PointerEvent<HTMLElement>) {
  if (event.pointerType === "touch") return;

  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const pointerX = (event.clientX - bounds.left) / bounds.width;
  const pointerY = (event.clientY - bounds.top) / bounds.height;
  const rotateX = (0.5 - pointerY) * 11;
  const rotateY = (pointerX - 0.5) * 11;

  card.style.setProperty("--card-rotate-x", `${rotateX.toFixed(2)}deg`);
  card.style.setProperty("--card-rotate-y", `${rotateY.toFixed(2)}deg`);
  card.style.setProperty("--spotlight-x", `${(pointerX * 100).toFixed(1)}%`);
  card.style.setProperty("--spotlight-y", `${(pointerY * 100).toFixed(1)}%`);
}

function handleCardPointerLeave(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget;
  delete card.dataset.tilting;
  card.style.setProperty("--card-rotate-x", "0deg");
  card.style.setProperty("--card-rotate-y", "0deg");
  card.style.setProperty("--spotlight-x", "50%");
  card.style.setProperty("--spotlight-y", "50%");
}

export function ServicesOverview() {
  return (
    <section
      aria-label="Service Overview"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white pb-12 pt-14 text-ink sm:pb-14 sm:pt-24"
      id="services-overview"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 top-1/2 size-96 rounded-full bg-cobalt/10 blur-[130px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Service Overview</p>
            <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              What We Do
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-6 sm:leading-7 text-ink/65">
              Three specialized disciplines working under one uncompromising standard of accountability, delivering integrated solutions from concept to execution.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                className="h-full [perspective:1400px]"
                delay={index * 0.1}
                key={service.company}
              >
                <article
                  className="premium-service-card group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-linear-to-br from-white via-white to-blue-50/80 p-6 shadow-[0_18px_45px_-18px_rgba(15,23,42,0.24),0_2px_8px_rgba(15,23,42,0.04)] sm:p-9"
                  onPointerEnter={handleCardPointerEnter}
                  onPointerLeave={handleCardPointerLeave}
                  onPointerMove={handleCardPointerMove}
                >
                  <span aria-hidden="true" className="premium-service-card__dark absolute inset-0" />
                  <span aria-hidden="true" className="premium-service-card__spotlight absolute inset-0" />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 z-20 h-1 origin-center scale-x-0 bg-linear-to-r from-transparent via-cyan-300 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-within:scale-x-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -right-24 -top-24 z-1 size-60 rounded-full border border-cobalt/10 bg-cobalt/[0.06] transition-[transform,border-color] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/15 motion-safe:group-hover:-translate-x-5 motion-safe:group-hover:translate-y-5 motion-safe:group-hover:scale-125"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-24 -left-24 z-1 size-52 rounded-full border border-cobalt/10 bg-blue-50/50 transition-[transform,border-color,background-color] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-cyan-300/20 group-hover:bg-cobalt/10 motion-safe:group-hover:scale-125"
                  />
                  <span
                    aria-hidden="true"
                    className="premium-service-card__sheen pointer-events-none absolute -inset-y-32 left-0 z-20 w-1/4 bg-linear-to-r from-transparent via-white/45 to-transparent"
                  />

                  <div className="premium-service-card__content relative z-10">
                    {/* Top bar */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid size-12 place-items-center rounded-xl border border-cobalt/15 bg-white text-cobalt shadow-[0_10px_24px_rgba(21,94,239,0.10)] transition-[transform,background-color,color,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/70 group-hover:bg-white group-hover:text-cobalt group-hover:shadow-[0_16px_38px_rgba(56,189,248,0.28)] motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:rotate-6 motion-safe:group-hover:scale-110 sm:size-14 sm:rounded-2xl">
                        <Icon aria-hidden="true" className="size-6 sm:size-7" strokeWidth={1.7} />
                      </span>
                      <span className="rounded-full border border-cobalt/15 bg-blue-50/90 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-cobalt shadow-[0_6px_16px_rgba(21,94,239,0.06)] backdrop-blur-sm transition-[transform,border-color,background-color,color] duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-cyan-100 motion-safe:group-hover:-translate-y-0.5 sm:px-3 sm:py-1 sm:text-[0.65rem]">
                        {service.tag}
                      </span>
                    </div>

                    <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-widest text-blue-400 transition-colors duration-500 group-hover:text-cyan-300 group-focus-within:text-cyan-300 sm:mt-6 sm:text-xs">
                      {service.discipline}
                    </p>
                    <h3 className="display-type mt-1 text-xl font-bold transition-colors duration-500 group-hover:text-white group-focus-within:text-white sm:text-3xl">
                      {service.company}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-ink/66 transition-colors duration-500 group-hover:text-white/72 group-focus-within:text-white/72 sm:mt-4 sm:text-base sm:leading-7">
                      {service.description}
                    </p>

                    <Link
                      className="group/more mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-cobalt/20 bg-white/85 px-4 py-2.5 text-sm font-bold text-cobalt shadow-[0_8px_20px_rgba(21,94,239,0.09)] backdrop-blur-sm transition-[transform,background-color,color,border-color,box-shadow] duration-500 group-hover:border-white group-hover:bg-white group-hover:shadow-[0_12px_30px_rgba(3,11,24,0.25)] hover:scale-[1.04] hover:bg-cyan-50 active:scale-[0.98]"
                      href={`/sister-concerns/${service.slug}`}
                    >
                      More Details
                      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-500 motion-safe:group-hover/more:translate-x-1" />
                    </Link>

                    <div className="mt-5 border-t border-slate-200/90 pt-5 transition-colors duration-500 group-hover:border-white/15 group-focus-within:border-white/15 sm:mt-6 sm:pt-6">
                      <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-wider text-ink/50 transition-colors duration-500 group-hover:text-white/55 group-focus-within:text-white/55 sm:text-xs">
                        Key Capabilities:
                      </p>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {service.highlights.map((highlight) => (
                          <li className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-ink/78 transition-colors duration-500 group-hover:text-white/82 group-focus-within:text-white/82 sm:text-sm" key={highlight}>
                            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-cobalt transition-[transform,color] duration-500 group-hover:text-cyan-300 motion-safe:group-hover:scale-110" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="premium-service-card__footer relative z-10 mt-6 border-t border-slate-200/90 pt-4 transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/15 group-focus-within:border-white/15 sm:mt-8 sm:pt-5">
                    <Link
                      className="group/link inline-flex w-full items-center justify-center gap-2 rounded-full border border-cobalt/20 bg-blue-50/90 px-4 py-2.5 text-xs font-bold text-cobalt shadow-[0_6px_18px_rgba(21,94,239,0.08)] backdrop-blur-sm transition-[transform,background-color,color,border-color,box-shadow] duration-500 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white hover:border-white hover:bg-white hover:text-cobalt hover:shadow-[0_12px_28px_rgba(3,11,24,0.28)] active:scale-[0.98] sm:w-auto sm:text-sm"
                      href="/contact#quotation-form"
                    >
                      Inquire about this company
                      <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-500 motion-safe:group-hover/link:rotate-45" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
