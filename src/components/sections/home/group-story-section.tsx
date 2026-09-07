import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const facts = [
  { value: "20+", label: "Years of construction & business experience" },
  { value: "03", label: "Core diversified business entities" },
  { value: "100%", label: "Committed to integrity & quality standards" },
] as const;

export function GroupStorySection() {
  return (
    <section
      aria-label="About S.N Group"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
      id="about-group"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 size-136 rounded-full bg-cobalt/5.5 blur-[120px]"
      />
      <Container className="relative z-10">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-stretch lg:gap-16">
          <Reveal className="flex h-full flex-col justify-center lg:py-4">
            <p className="eyebrow mb-3 sm:mb-4 text-blue-400">Company Introduction</p>
            <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              About S.N Group
            </h2>

            <div className="mt-4 sm:mt-6 space-y-3.5 sm:space-y-4 text-sm sm:text-base leading-7 sm:leading-8 text-ink/72">
              <p>
                S.N Group is a diversified Bangladeshi business group with more than 20 years of experience in construction and business operations, built on a foundation of integrity, quality, reliability, and long-term relationships.
              </p>
              <p>
                Over the years, the Group has developed a diversified portfolio through three core businesses: <span className="font-bold text-ink">S.N Eng Construction BD Ltd.</span>, <span className="font-bold text-ink">S.N Import &amp; Export BD Ltd.</span>, and <span className="font-bold text-ink">Mehrish Holdings Ltd.</span>.
              </p>
              <p className="text-xs sm:text-base leading-6 sm:leading-7 text-ink/62">
                Our businesses operate across government and institutional construction, infrastructure development, international import and export, agricultural and food commodities, industrial chemicals and equipment, and premium real estate development.
              </p>
              <p className="text-xs sm:text-base leading-6 sm:leading-7 text-ink/62">
                With strong local expertise and growing international business relationships, S.N Group continues to expand its capabilities while creating sustainable value for customers, partners, investors, and the communities we serve.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative h-full" delay={0.12}>
            <div className="relative aspect-4/3 h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.11)] sm:aspect-16/11 lg:aspect-auto lg:min-h-128">
              <Image
                alt="S.N Group team and engineering operations"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 47vw, 100vw"
                src="/images/team.webp"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/98 via-white/28 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-r from-white/96 to-white/86 p-4 sm:p-8 text-ink backdrop-blur-md">
                <ArrowDownRight aria-hidden="true" className="mb-2 sm:mb-3 size-5 sm:size-6 text-cobalt" />
                <p className="display-type text-lg xs:text-xl sm:text-3xl font-bold leading-snug sm:leading-tight">
                  Built on integrity, quality, reliability, and long-term relationships.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats Row */}
        <div className="mt-10 sm:mt-16 grid gap-3.5 sm:gap-5 sm:grid-cols-3 lg:mt-20">
          {facts.map((fact, index) => (
            <Reveal
              className="group relative min-h-36 sm:min-h-40 overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-white via-white to-blue-50/70 p-5 sm:p-7 shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-cobalt/35 hover:shadow-[0_20px_44px_rgba(21,94,239,0.12)]"
              delay={index * 0.08}
              key={fact.label}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-[0.22] bg-linear-to-r from-cobalt via-blue-400 to-blue-200 transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <span
                aria-hidden="true"
                className="absolute -right-10 -top-12 size-32 rounded-full bg-cobalt/5.5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-150"
              />
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 sm:right-7 sm:top-7 text-xs font-extrabold tracking-[0.18em] text-cobalt/30 transition-colors duration-500 group-hover:text-cobalt/65"
              >
                0{index + 1}
              </span>

              <div className="relative z-10 flex h-full flex-col justify-end">
                <p className="display-type text-4xl sm:text-[3.35rem] font-bold text-cobalt">
                  {fact.value}
                </p>
                <p className="mt-1.5 sm:mt-2 max-w-xs text-xs sm:text-sm font-semibold leading-5 sm:leading-6 text-ink/62 transition-colors duration-500 group-hover:text-ink/78">
                  {fact.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
