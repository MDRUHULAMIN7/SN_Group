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
                <div className="group relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transform-gpu will-change-transform backface-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-cobalt/30 hover:shadow-[0_20px_46px_rgba(15,23,42,0.10)] sm:p-8">
                  <span aria-hidden="true" className="absolute left-0 top-8 h-10 w-1 rounded-r-full bg-cobalt/35 transition-all duration-300 ease-out group-hover:h-16 group-hover:bg-cobalt" />
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-12 place-items-center rounded-xl border border-cobalt/15 bg-cobalt/8 text-cobalt transform-gpu will-change-transform backface-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-cobalt/30 group-hover:bg-cobalt/15 group-hover:shadow-[0_8px_20px_rgba(21,94,239,0.15)]">
                        <Icon aria-hidden="true" className="size-6 transition-transform duration-300 ease-out group-hover:scale-105" strokeWidth={1.8} />
                      </span>
                      <span className="text-xs font-extrabold tracking-[0.16em] text-cobalt/35 transition-colors duration-300 group-hover:text-cobalt/70">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="display-type mt-7 text-2xl font-bold">{pillar.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-ink/64">{pillar.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
