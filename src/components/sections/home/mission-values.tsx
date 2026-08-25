import { Compass, Eye, HeartHandshake, Lightbulb, Leaf, Shield, Sparkles, Star, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const values = [
  {
    title: "Integrity",
    icon: Shield,
    description: "We conduct our business with honesty, transparency, accountability, and respect.",
  },
  {
    title: "Excellence",
    icon: Star,
    description: "We pursue high standards in construction, products, services, and business operations.",
  },
  {
    title: "Reliability",
    icon: Target,
    description: "We honor our commitments and strive to be a dependable partner for our clients and business associates.",
  },
  {
    title: "Quality",
    icon: Sparkles,
    description: "We believe quality is the foundation of lasting relationships and sustainable growth.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description: "We embrace new ideas, technologies, markets, and opportunities that improve the way we work.",
  },
  {
    title: "Partnership",
    icon: HeartHandshake,
    description: "We build relationships based on mutual trust, respect, and shared success.",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    description: "We seek responsible and sustainable growth that creates long-term economic and social value.",
  },
];

export function CoreValuesSection() {
  return (
    <section
      aria-label="Our Core Values"
      className="blueprint-grid-dark relative overflow-hidden border-t border-white/10 bg-black py-20 text-white sm:py-28"
      id="core-values"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center text-blue-400">Principles in Action</p>
            <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Core Values
            </h2>
            <p className="mt-3 text-base text-white/65">
              The principles that guide how we operate, build partnerships, and deliver on our promises.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cobalt/40 hover:bg-white/10"
                delay={index * 0.05}
                key={value.title}
              >
                <span className="mb-4 grid size-10 place-items-center rounded-xl bg-cobalt/15 text-cobalt">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="display-type text-xl font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/65">{value.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function MissionValues() {
  return (
    <section
      aria-label="Mission, Vision and Values"
      className="blueprint-grid-dark relative overflow-hidden border-t border-white/10 bg-black py-20 text-white sm:py-28"
      id="mission-values"
    >
      <Container className="relative z-10">
        {/* Mission & Vision Row */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <Reveal>
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-br from-[#08172c] to-black/80 p-8 backdrop-blur-xl sm:p-10">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-cobalt/20 text-blue-400">
                  <Compass aria-hidden="true" className="size-6" />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-400">
                  Our Purpose
                </p>
                <h3 className="display-type mt-1 text-3xl font-bold sm:text-4xl">Our Mission</h3>
                <p className="mt-4 text-base leading-8 text-white/75">
                  To build and operate businesses that create lasting value through quality construction, responsible international trade, and thoughtfully developed real estate, while maintaining the highest standards of integrity, professionalism, and customer satisfaction.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Vision */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-br from-[#08172c] to-black/80 p-8 backdrop-blur-xl sm:p-10">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-cobalt/20 text-blue-400">
                  <Eye aria-hidden="true" className="size-6" />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-400">
                  Future Horizon
                </p>
                <h3 className="display-type mt-1 text-3xl font-bold sm:text-4xl">Our Vision</h3>
                <p className="mt-4 text-base leading-8 text-white/75">
                  To become a trusted and respected Bangladeshi business group with a strong national presence and growing international reach, recognized for excellence in construction, global trade, and real estate development.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Core Values Section */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-4 justify-center text-blue-400">Principles in Action</p>
              <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl">
                Our Core Values
              </h2>
              <p className="mt-3 text-base text-white/65">
                The fundamental principles that govern how we operate, build partnerships, and deliver on our promises.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <Reveal
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cobalt/40 hover:bg-white/10"
                  delay={idx * 0.05}
                  key={val.title}
                >
                  <span className="mb-4 grid size-10 place-items-center rounded-xl bg-cobalt/15 text-cobalt">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h4 className="display-type text-xl font-bold text-white">{val.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-white/65">{val.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
