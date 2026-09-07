import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { BlueprintParallax } from "@/components/motion/blueprint-parallax";

const facts = [
  { value: "20+", label: "Years of construction & business experience" },
  { value: "03", label: "Core diversified business entities" },
  { value: "100%", label: "Committed to integrity & quality standards" },
] as const;

export function GroupStorySection() {
  return (
    <section
      aria-label="About S.N Group"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white text-ink section-space"
      id="about-group"
    >
      <BlueprintParallax />
      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-4 text-blue-400">Company Introduction</p>
            <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About S.N Group
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-ink/72 sm:text-lg">
              <p>
                S.N Group is a diversified Bangladeshi business group with more than 20 years of experience in construction and business operations, built on a foundation of integrity, quality, reliability, and long-term relationships.
              </p>
              <p>
                Over the years, the Group has developed a diversified portfolio through three core businesses: <span className="font-bold text-ink">S.N Engineering &amp; Construction</span>, <span className="font-bold text-ink">S.N Import &amp; Export</span>, and <span className="font-bold text-ink">Mehrish Holdings</span>.
              </p>
              <p className="text-sm leading-7 text-ink/62 sm:text-base">
                Our businesses operate across government and institutional construction, infrastructure development, international import and export, agricultural and food commodities, industrial chemicals and equipment, and premium real estate development.
              </p>
              <p className="text-sm leading-7 text-ink/62 sm:text-base">
                With strong local expertise and growing international business relationships, S.N Group continues to expand its capabilities while creating sustainable value for customers, partners, investors, and the communities we serve.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative lg:col-span-6" delay={0.12}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] sm:aspect-[16/11]">
              <Image
                alt="S.N Group team and engineering operations"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 47vw, 100vw"
                src="/images/team.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/98 via-white/28 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white/96 to-white/86 p-6 text-ink backdrop-blur-md sm:p-8">
                <ArrowDownRight aria-hidden="true" className="mb-3 size-6 text-cobalt" />
                <p className="display-type text-2xl font-bold leading-tight sm:text-3xl">
                  Built on integrity, quality, reliability, and long-term relationships.
                </p>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute -right-5 -top-5 -z-10 size-32 border-r border-t border-cobalt/40"
            />
          </Reveal>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid border-y border-slate-200 sm:grid-cols-3 lg:mt-24">
          {facts.map((fact, index) => (
            <Reveal
              className="border-b border-slate-200 px-0 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:last:border-r-0 lg:px-10"
              delay={index * 0.08}
              key={fact.label}
            >
              <p className="display-type text-5xl font-bold text-cobalt">{fact.value}</p>
              <p className="mt-2 text-sm font-semibold text-ink/60">{fact.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
