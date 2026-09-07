import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function LeadershipMessages() {
  return (
    <section
      aria-label="Leadership Messages"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
      id="leadership-messages"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 size-[600px] rounded-full bg-cobalt/10 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Leadership Perspective</p>
            <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Messages from Our Leadership
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-6 sm:leading-7 text-ink/65">
              Guided by a commitment to integrity, national development, and responsible long-term growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-10 lg:grid-cols-2">
          {/* Chairman's Message */}
          <Reveal delay={0.08}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-blue-50/45 p-6 sm:p-10 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-[border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-cobalt/35 hover:shadow-[0_28px_68px_rgba(21,94,239,0.13)]">
              <Quote aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-8 size-40 text-cobalt/[0.045] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.1} />
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-5 sm:pb-6">
                  <div>
                    <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-blue-400">
                      Chairman&apos;s Speech
                    </span>
                    <h3 className="display-type mt-1 text-xl sm:text-2xl font-bold transition-colors duration-700 group-hover:text-cobalt sm:text-3xl">
                      Message from the Chairman
                    </h3>
                  </div>
                  <span className="grid size-11 sm:size-12 place-items-center rounded-xl sm:rounded-2xl border border-cobalt/20 bg-white text-cobalt shadow-[0_8px_22px_rgba(21,94,239,0.10)] transition-[transform,background-color,color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(21,94,239,0.22)]">
                    <Quote aria-hidden="true" className="size-5 sm:size-6" strokeWidth={1.8} />
                  </span>
                </div>

                <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 text-xs sm:text-base leading-6 sm:leading-8 text-ink/70">
                  <p>
                    For more than 20 years, our organization has grown through hard work, responsible business practices, and the trust of our clients and partners.
                  </p>
                  <p>
                    Today, S.N Group brings together three complementary businesses: S.N Eng Construction BD Ltd., S.N Import &amp; Export BD Ltd., and Mehrish Holdings Ltd.
                  </p>
                  <p>
                    Our construction business has built its experience through government, institutional, infrastructure, and defense-related projects, including work associated with the Bangladesh Army and Bangladesh Navy.
                  </p>
                  <p>
                    Our international trading business connects global markets with Bangladesh, and our real estate arm develops quality properties in prime Dhaka locations.
                  </p>
                  <p className="rounded-xl border-l-2 border-cobalt bg-blue-50/65 px-3.5 sm:px-4 py-2.5 sm:py-3 font-semibold text-cobalt transition-colors duration-700 group-hover:bg-blue-50">
                    &ldquo;Our vision for S.N Group is not simply to become larger, but to become stronger, more professional, more innovative, and more trusted with every year.&rdquo;
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-6 sm:mt-8 border-t border-slate-200 pt-5 sm:pt-6 transition-colors duration-700 group-hover:border-cobalt/25">
                <p className="display-type text-lg sm:text-xl font-bold text-ink">Chairman</p>
                <p className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-blue-400">
                  S.N Group
                </p>
              </div>
            </div>
          </Reveal>

          {/* Managing Director's Message */}
          <Reveal delay={0.16}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-blue-50/45 p-6 sm:p-10 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-[border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-cobalt/35 hover:shadow-[0_28px_68px_rgba(21,94,239,0.13)]">
              <Quote aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-8 size-40 text-cobalt/[0.045] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.1} />
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-5 sm:pb-6">
                  <div>
                    <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-blue-400">
                      MD&apos;s Speech
                    </span>
                    <h3 className="display-type mt-1 text-xl sm:text-2xl font-bold transition-colors duration-700 group-hover:text-cobalt sm:text-3xl">
                      Message from the Managing Director
                    </h3>
                  </div>
                  <span className="grid size-11 sm:size-12 place-items-center rounded-xl sm:rounded-2xl border border-cobalt/20 bg-white text-cobalt shadow-[0_8px_22px_rgba(21,94,239,0.10)] transition-[transform,background-color,color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(21,94,239,0.22)]">
                    <Quote aria-hidden="true" className="size-5 sm:size-6" strokeWidth={1.8} />
                  </span>
                </div>

                <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 text-xs sm:text-base leading-6 sm:leading-8 text-ink/70">
                  <p>
                    Welcome to S.N Group. For more than two decades, our journey has been guided by a simple principle: build with integrity, deliver with excellence, and grow through trust.
                  </p>
                  <p>
                    What began with a strong foundation in construction has evolved into a diversified business group with interests in government and institutional construction, international import and export, and real estate development.
                  </p>
                  <p>
                    Through S.N Eng Construction BD Ltd., S.N Import &amp; Export BD Ltd., and Mehrish Holdings Ltd., we continue to expand capabilities while creating sustainable value for customers, partners, and communities.
                  </p>
                  <p className="rounded-xl border-l-2 border-cobalt bg-blue-50/65 px-3.5 sm:px-4 py-2.5 sm:py-3 font-semibold text-cobalt transition-colors duration-700 group-hover:bg-blue-50">
                    &ldquo;Our success is ultimately measured by the trust of our clients, partners, employees, and stakeholders. We look forward to building a stronger future together.&rdquo;
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-6 sm:mt-8 border-t border-slate-200 pt-5 sm:pt-6 transition-colors duration-700 group-hover:border-cobalt/25">
                <p className="display-type text-lg sm:text-xl font-bold text-ink">Managing Director</p>
                <p className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-blue-400">
                  S.N Group
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
