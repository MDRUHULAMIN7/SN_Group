import { ArrowUpRight, CheckCircle2, DraftingCompass, Landmark, ShipWheel } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const serviceCategories = [
  {
    company: "S.N Engineering & Construction Ltd.",
    discipline: "Civil & Defense Infrastructure",
    icon: DraftingCompass,
    tag: "20+ Years Experience",
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
    company: "S.N Import & Export Ltd.",
    discipline: "Global Sourcing & Distribution",
    icon: ShipWheel,
    tag: "Global Trade Network",
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

export function ServicesOverview() {
  return (
    <section
      aria-label="Service Overview"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white pb-12 pt-20 text-ink sm:pb-14 sm:pt-28"
      id="services-overview"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 top-1/2 size-96 rounded-full bg-cobalt/10 blur-[130px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center text-blue-400">Service Overview</p>
            <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              What We Do
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/65 sm:text-lg">
              Three specialized disciplines working under one uncompromising standard of accountability, delivering integrated solutions from concept to execution.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/45 p-7 shadow-[0_16px_48px_rgba(15,23,42,0.07)] transition-[border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-cobalt/40 hover:shadow-[0_26px_64px_rgba(21,94,239,0.13)] sm:p-9"
                delay={index * 0.1}
                key={service.company}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-cobalt via-blue-400 to-blue-200 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 size-56 rounded-full bg-cobalt/4.5 transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125"
                />

                <div className="relative z-10">
                  {/* Top bar */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl border border-cobalt/15 bg-white text-cobalt shadow-[0_10px_24px_rgba(21,94,239,0.10)] transition-[background-color,color,box-shadow] duration-700 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(21,94,239,0.24)]">
                      <Icon aria-hidden="true" className="size-7" strokeWidth={1.7} />
                    </span>
                    <span className="rounded-full border border-cobalt/15 bg-blue-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-cobalt">
                      {service.tag}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-400">
                    {service.discipline}
                  </p>
                  <h3 className="display-type mt-1 text-2xl font-bold sm:text-3xl">
                    {service.company}
                  </h3>

                  <p className="mt-4 text-[0.95rem] leading-7 text-ink/66">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-6">
                    <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-ink/50">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-3">
                      {service.highlights.map((highlight) => (
                        <li className="flex items-start gap-2.5 text-sm font-semibold leading-5 text-ink/78" key={highlight}>
                          <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-cobalt" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 mt-8 border-t border-slate-200 pt-5">
                  <a
                    className="group/link inline-flex items-center gap-2 rounded-full border border-cobalt/20 bg-blue-50 px-4 py-2.5 text-sm font-bold text-cobalt shadow-[0_6px_18px_rgba(21,94,239,0.08)] transition-[background-color,color,border-color,box-shadow] duration-500 hover:border-cobalt hover:bg-cobalt hover:text-white hover:shadow-[0_10px_24px_rgba(21,94,239,0.20)]"
                    href="/contact#quotation-form"
                  >
                    Inquire about this company
                    <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-500 group-hover/link:rotate-45" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
