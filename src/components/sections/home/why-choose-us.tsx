import { Award, BadgeCheck, Briefcase, Building, Handshake, Shield } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const pillars = [
  {
    icon: Award,
    title: "20+ Years Track Record",
    description:
      "More than two decades of construction and commercial execution, backed by deep technical know-how and disciplined delivery.",
  },
  {
    icon: Shield,
    title: "Defense & Institutional Trust",
    description:
      "Proven project experience associated with Bangladesh Army, Bangladesh Navy, and premier government organizations.",
  },
  {
    icon: Briefcase,
    title: "Diversified Synergy",
    description:
      "Integrated capabilities across civil construction, international import/export trade, and prime real estate development.",
  },
  {
    icon: Handshake,
    title: "Global Supply Networks",
    description:
      "Direct relationships with international manufacturers and producers across agricultural commodities, industrial chemicals, and machinery.",
  },
  {
    icon: Building,
    title: "Prime Real Estate Vision",
    description:
      "Strategic property developments in Dhaka's premier neighborhoods focused on modern architectural standards and enduring value.",
  },
  {
    icon: BadgeCheck,
    title: "Integrity & Long-Term Value",
    description:
      "Uncompromising focus on transparency, safety, sustainable practices, and building enduring relationships with stakeholders.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      aria-label="Why Choose S.N Group"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
      id="why-choose-us"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-40 top-1/4 size-125 rounded-full bg-cobalt/12 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Why Choose S.N Group?</p>
            <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Experience That Builds Trust
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-6 sm:leading-7 text-ink/65">
              With more than two decades of experience, S.N Group brings together engineering excellence, global trade partnerships, and premium real estate development.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal className="h-full" delay={index * 0.08} key={pillar.title}>
                <article className="why-card group relative flex h-full min-h-68 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-7 shadow-[0_8px_26px_rgba(15,23,42,0.045)] sm:p-8">
                  <span aria-hidden="true" className="absolute left-0 top-0 z-20 h-0.5 w-full origin-left scale-x-0 bg-cobalt transition-transform duration-450 ease-out group-hover:scale-x-100" />
                  <span aria-hidden="true" className="absolute right-0 top-0 z-20 h-full w-0.5 origin-top scale-y-0 bg-cobalt transition-transform delay-100 duration-450 ease-out group-hover:scale-y-100" />
                  <span aria-hidden="true" className="absolute bottom-0 right-0 z-20 h-0.5 w-full origin-right scale-x-0 bg-cobalt transition-transform delay-200 duration-450 ease-out group-hover:scale-x-100" />
                  <span aria-hidden="true" className="absolute bottom-0 left-0 z-20 h-full w-0.5 origin-bottom scale-y-0 bg-cobalt transition-transform delay-300 duration-450 ease-out group-hover:scale-y-100" />

                  <div className="relative z-10 flex h-full flex-col transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-14 place-items-center rounded-lg border border-cobalt/15 bg-cobalt/8 text-cobalt shadow-[0_6px_16px_rgba(21,94,239,0.07)] transition-[transform,border-color,box-shadow] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:border-cobalt/40 group-hover:shadow-[0_10px_22px_rgba(21,94,239,0.15)]">
                        <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
                      </span>
                      <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-cobalt/45 transition-colors duration-500 group-hover:text-cobalt">
                        Pillar 0{index + 1}
                      </span>
                    </div>
                    <h3 className="display-type mt-8 text-2xl font-bold transition-colors duration-500 group-hover:text-cobalt">{pillar.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-ink/64 transition-colors duration-500 group-hover:text-ink/78">{pillar.description}</p>

                    <span aria-hidden="true" className="mt-auto flex items-center gap-3 pt-8">
                      <span className="h-px w-10 bg-cobalt/35 transition-[width,background-color] duration-600 group-hover:w-18 group-hover:bg-cobalt" />
                      <span className="size-1.5 rounded-full border border-cobalt/40 transition-[transform,border-color] duration-600 group-hover:scale-125 group-hover:border-cobalt" />
                    </span>
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
