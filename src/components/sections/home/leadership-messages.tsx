import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function LeadershipMessages() {
  return (
    <section
      aria-label="Leadership Messages"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white py-20 text-ink sm:py-28"
      id="leadership-messages"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 size-[600px] rounded-full bg-cobalt/10 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 justify-center text-blue-400">Leadership Perspective</p>
            <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Messages from Our Leadership
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/65 sm:text-lg">
              Guided by a commitment to integrity, national development, and responsible long-term growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Chairman's Message */}
          <Reveal delay={0.08}>
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-10">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                      Chairman&apos;s Speech
                    </span>
                    <h3 className="display-type mt-1 text-2xl font-bold sm:text-3xl">
                      Message from the Chairman
                    </h3>
                  </div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-cobalt/20 text-blue-400">
                    <Quote aria-hidden="true" className="size-6" />
                  </span>
                </div>

                <div className="mt-6 space-y-4 text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
                  <p>
                    For more than 20 years, our organization has grown through hard work, responsible business practices, and the trust of our clients and partners.
                  </p>
                  <p>
                    Today, S.N Group brings together three complementary businesses: S.N Engineering & Construction, S.N Import & Export, and Mehrish Holdings.
                  </p>
                  <p>
                    Our construction business has built its experience through government, institutional, infrastructure, and defense-related projects, including work associated with the Bangladesh Army and Bangladesh Navy.
                  </p>
                  <p>
                    Our international trading business connects global markets with Bangladesh, and our real estate arm develops quality properties in prime Dhaka locations.
                  </p>
                  <p className="font-semibold text-cobalt">
                    &ldquo;Our vision for S.N Group is not simply to become larger, but to become stronger, more professional, more innovative, and more trusted with every year.&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="display-type text-xl font-bold text-ink">Chairman</p>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  S.N Group
                </p>
              </div>
            </div>
          </Reveal>

          {/* Managing Director's Message */}
          <Reveal delay={0.16}>
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-10">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                      MD&apos;s Speech
                    </span>
                    <h3 className="display-type mt-1 text-2xl font-bold sm:text-3xl">
                      Message from the Managing Director
                    </h3>
                  </div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-cobalt/20 text-blue-400">
                    <Quote aria-hidden="true" className="size-6" />
                  </span>
                </div>

                <div className="mt-6 space-y-4 text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
                  <p>
                    Welcome to S.N Group. For more than two decades, our journey has been guided by a simple principle: build with integrity, deliver with excellence, and grow through trust.
                  </p>
                  <p>
                    What began with a strong foundation in construction has evolved into a diversified business group with interests in government and institutional construction, international import and export, and real estate development.
                  </p>
                  <p>
                    Through S.N Engineering & Construction, S.N Import & Export, and Mehrish Holdings, we continue to expand capabilities while creating sustainable value for customers, partners, and communities.
                  </p>
                  <p className="font-semibold text-cobalt">
                    &ldquo;Our success is ultimately measured by the trust of our clients, partners, employees, and stakeholders. We look forward to building a stronger future together.&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="display-type text-xl font-bold text-ink">Managing Director</p>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
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
