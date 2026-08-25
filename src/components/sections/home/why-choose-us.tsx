import { Award, Briefcase, Building, Handshake, Shield, Sparkles } from "lucide-react";
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
    icon: Sparkles,
    title: "Integrity & Long-Term Value",
    description:
      "Uncompromising focus on transparency, safety, sustainable practices, and building enduring relationships with stakeholders.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      aria-label="Why Choose S.N Group"
      className="blueprint-grid-dark relative overflow-hidden border-t border-white/10 bg-[#040812] py-20 text-white sm:py-28"
      id="why-choose-us"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-40 top-1/4 size-[500px] rounded-full bg-cobalt/12 blur-[140px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center text-blue-400">Why Choose S.N Group?</p>
            <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Experience That Builds Trust
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              With more than two decades of experience, S.N Group brings together engineering excellence, global trade partnerships, and premium real estate development.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                className="group relative rounded-2xl border border-white/10 bg-black/60 p-7 backdrop-blur-xl transition-all duration-300 hover:border-cobalt/50 hover:bg-black/90 hover:shadow-[0_12px_36px_rgba(21,94,239,0.15)] sm:p-8"
                delay={index * 0.08}
                key={pillar.title}
              >
                <span className="mb-6 grid size-12 place-items-center rounded-xl bg-cobalt/15 text-cobalt transition-colors group-hover:bg-cobalt group-hover:text-white">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="display-type text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{pillar.description}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Highlight quote banner */}
        <Reveal className="mt-12" delay={0.2}>
          <div className="rounded-2xl border border-cobalt/30 bg-gradient-to-r from-cobalt/15 via-blue-900/10 to-cobalt/15 p-8 text-center backdrop-blur-xl sm:p-10">
            <p className="mx-auto max-w-3xl text-base font-semibold leading-7 text-blue-100 sm:text-lg sm:leading-8">
              &ldquo;Above all, we believe sustainable growth is built through trust, transparency, consistent performance, and strong long-term partnerships with our clients, suppliers, investors, and stakeholders.&rdquo;
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-blue-400">
              — S.N Group Leadership
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
