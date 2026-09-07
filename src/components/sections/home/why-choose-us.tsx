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
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white py-20 text-ink sm:py-24"
      id="why-choose-us"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-40 top-1/4 size-125 rounded-full bg-cobalt/12 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center text-blue-400">Why Choose S.N Group?</p>
            <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Experience That Builds Trust
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/65 sm:text-lg">
              With more than two decades of experience, S.N Group brings together engineering excellence, global trade partnerships, and premium real estate development.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                className="group relative min-h-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_14px_42px_rgba(15,23,42,0.055)] transition-[background-color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-cobalt/40 hover:bg-blue-50/35 hover:shadow-[0_22px_52px_rgba(21,94,239,0.12)] sm:p-8"
                delay={index * 0.08}
                key={pillar.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-xl border border-cobalt/20 bg-white text-cobalt shadow-[0_8px_22px_rgba(21,94,239,0.08)] transition-[transform,background-color,color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(21,94,239,0.20)]">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-extrabold tracking-[0.16em] text-cobalt/35 transition-colors duration-700 group-hover:text-cobalt/70">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="display-type mt-7 text-2xl font-bold transition-colors duration-700 group-hover:text-cobalt">{pillar.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-ink/64">{pillar.description}</p>
              </Reveal>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
