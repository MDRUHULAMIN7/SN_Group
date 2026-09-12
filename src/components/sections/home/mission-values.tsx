import { BadgeCheck, Compass, Eye, HeartHandshake, Lightbulb, Leaf, Shield, Star, Target } from "lucide-react";
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
    icon: BadgeCheck,
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

function CoreValuesGrid({ className }: { className: string }) {
  return (
    <div className={className}>
      {values.map((value, index) => {
        const Icon = value.icon;

        return (
          <Reveal
            className={`h-full ${index === values.length - 1 ? "lg:col-start-2" : ""}`}
            delay={index * 0.05}
            key={value.title}
          >
            <article className="core-value-card group relative flex h-full min-h-56 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(15,23,42,0.045)]">
              <span aria-hidden="true" className="absolute bottom-7 left-0 top-7 w-1 origin-center scale-y-0 rounded-r-full bg-cobalt transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              <Icon aria-hidden="true" className="pointer-events-none absolute -bottom-6 -right-5 size-28 scale-75 text-cobalt opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-[0.055]" strokeWidth={1.1} />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-13 place-items-center rounded-xl border border-cobalt/15 bg-cobalt/8 text-cobalt shadow-[0_6px_16px_rgba(21,94,239,0.07)] transition-[transform,background-color,color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(21,94,239,0.22)]">
                    <Icon aria-hidden="true" className="size-5.5" strokeWidth={1.8} />
                  </span>
                  <span className="flex items-center gap-2 text-xs font-extrabold tracking-[0.18em] text-cobalt/35 transition-colors duration-500 group-hover:text-cobalt/80">
                    <span aria-hidden="true" className="h-px w-6 bg-cobalt/20 transition-[width,background-color] duration-600 group-hover:w-10 group-hover:bg-cobalt/60" />
                    0{index + 1}
                  </span>
                </div>
                <h3 className="display-type mt-8 text-2xl font-bold text-ink">
                  {value.title}
                </h3>
                <span aria-hidden="true" className="mt-3 block h-0.5 w-8 bg-cobalt/25 transition-[width,background-color] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-16 group-hover:bg-cobalt" />
                <p className="mt-4 text-sm leading-6 text-ink/64 transition-colors duration-500 group-hover:text-ink/76">
                  {value.description}
                </p>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function CoreValuesSection() {
  return (
    <section
      aria-label="Our Core Values"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
      id="core-values"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Principles in Action</p>
            <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl font-extrabold tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-ink/62">
              The principles that guide how we operate, build partnerships, and deliver on our promises.
            </p>
          </Reveal>
        </div>

        <CoreValuesGrid className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" />
      </Container>
    </section>
  );
}

export function MissionValues() {
  return (
    <section
      aria-label="Mission, Vision and Values"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white py-20 text-ink sm:py-28"
      id="mission-values"
    >
      <Container className="relative z-10">
        {/* Mission & Vision Row */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <Reveal>
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-linear-to-br from-white to-blue-50/70 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-10">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-cobalt/20 text-blue-400">
                  <Compass aria-hidden="true" className="size-6" />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-400">
                  Our Purpose
                </p>
                <h3 className="display-type mt-1 text-3xl font-bold sm:text-4xl">Our Mission</h3>
                <p className="mt-4 text-base leading-8 text-ink/70">
                  To build and operate businesses that create lasting value through quality construction, responsible international trade, and thoughtfully developed real estate, while maintaining the highest standards of integrity, professionalism, and customer satisfaction.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Vision */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-linear-to-br from-white to-blue-50/70 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-10">
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-cobalt/20 text-blue-400">
                  <Eye aria-hidden="true" className="size-6" />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-400">
                  Future Horizon
                </p>
                <h3 className="display-type mt-1 text-3xl font-bold sm:text-4xl">Our Vision</h3>
                <p className="mt-4 text-base leading-8 text-ink/70">
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
              <p className="mt-3 text-base text-ink/62">
                The fundamental principles that govern how we operate, build partnerships, and deliver on our promises.
              </p>
            </Reveal>
          </div>

          <CoreValuesGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </Container>
    </section>
  );
}
