import { ArrowUpRight, Building2, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const serviceCategories = [
  {
    company: "S.N Engineering & Construction Ltd.",
    discipline: "Civil & Defense Infrastructure",
    icon: Building2,
    tag: "20+ Years Experience",
    description:
      "Specializing in government, defense, institutional, and infrastructure projects. The company undertakes civil, structural, building, road, site development, rehabilitation, and renovation works with a strong focus on safety, specifications, and on-time completion.",
    highlights: [
      "Government & institutional construction projects",
      "Bangladesh Army & defense infrastructure works",
      "Bangladesh Navy & naval infrastructure projects",
      "Civil, structural & architectural development",
      "Roads, site development & rehabilitation",
      "Project management & construction supervision",
    ],
  },
  {
    company: "S.N Import & Export Ltd.",
    discipline: "Global Sourcing & Distribution",
    icon: Globe,
    tag: "Global Trade Network",
    description:
      "Connecting Bangladesh with international producers, manufacturers, and suppliers. Sourcing a diverse portfolio of agricultural commodities, food products, industrial chemicals, machinery, and equipment, while exporting Bangladeshi-origin natural resources.",
    highlights: [
      "Agricultural commodities: lentils, pulses, chickpeas, grains & wheat",
      "Food ingredients, dairy powder & edible oils",
      "Industrial & commercial chemicals and raw materials",
      "Construction & engineering equipment and machinery",
      "Export of soil, stone, aggregates & construction materials",
      "Agro-based export connecting local producers with overseas buyers",
    ],
  },
  {
    company: "Mehrish Holdings Ltd.",
    discipline: "Prime Real Estate Development",
    icon: Sparkles,
    tag: "Prime Dhaka Locations",
    description:
      "Developing thoughtfully planned residential and commercial properties in some of Dhaka's most sought-after and strategically important locations, combining contemporary architecture, quality construction, and enduring investment value.",
    highlights: [
      "Residential property development & premium apartments",
      "Commercial & multi-storey building development",
      "Prime locations: Dhanmondi, Gulshan, Banani & Uttara",
      "Thoughtful architectural planning & space efficiency",
      "Modern amenities & high-specification engineering",
      "Strategic real estate investment & long-term asset value",
    ],
  },
];

export function ServicesOverview() {
  return (
    <section
      aria-label="Service Overview"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white py-20 text-ink sm:py-28"
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
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_16px_48px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/45 hover:shadow-[0_22px_55px_rgba(21,94,239,0.12)] sm:p-9"
                delay={index * 0.1}
                key={service.company}
              >
                <div>
                  {/* Top bar */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-xl bg-cobalt/15 text-cobalt transition-colors group-hover:bg-cobalt group-hover:text-white">
                      <Icon aria-hidden="true" className="size-6" />
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

                  <p className="mt-4 text-sm leading-6 text-ink/65">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-6">
                    <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-ink/50">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-2.5">
                      {service.highlights.map((highlight) => (
                        <li className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-ink/80" key={highlight}>
                          <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-cobalt" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-5">
                  <a
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 transition-colors hover:text-blue-300"
                    href="/contact#quotation-form"
                  >
                    Inquire about {service.company}
                    <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
