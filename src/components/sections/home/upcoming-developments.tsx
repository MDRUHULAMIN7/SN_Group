import Image from "next/image";
import { ArrowUpRight, Clock, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const locations = [
  { name: "Dhanmondi", type: "Residential & Mixed-Use", status: "In Planning" },
  { name: "Gulshan", type: "Premium Apartments & Commercial", status: "Concept Design" },
  { name: "Banani", type: "Boutique Residential Living", status: "Site Evaluation" },
  { name: "Uttara", type: "Contemporary Family Living", status: "Feasibility Stage" },
  { name: "Bashundhara", type: "Modern Urban Residences", status: "Planning Stage" },
];

export function UpcomingDevelopments() {
  return (
    <section
      aria-label="Upcoming Real Estate Developments"
      className="blueprint-grid relative overflow-hidden border-t border-slate-200 bg-white py-20 text-ink sm:py-28"
      id="upcoming-developments"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 top-1/3 size-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cobalt/30 bg-cobalt/10 px-3.5 py-1.5 backdrop-blur-md">
                <Sparkles aria-hidden="true" className="size-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Mehrish Holdings Ltd.
                </span>
              </div>

              <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Building Exceptional Spaces in Prime Locations
              </h2>

              <p className="mt-5 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
                Mehrish Holdings Ltd. is preparing to launch a curated portfolio of residential and commercial developments across some of Dhaka&apos;s most desirable neighborhoods.
              </p>

              <p className="mt-3.5 text-sm leading-6 text-ink/60">
                Each development is carefully planned to reflect its prime location and the needs of future residents and investors—focusing on modern architecture, efficient space planning, quality materials, contemporary amenities, and enduring property value.
              </p>
            </Reveal>

            {/* Coming Soon Notice Card */}
            <Reveal className="mt-8" delay={0.15}>
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/70 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                <div className="flex items-center gap-3 text-blue-400">
                  <Clock aria-hidden="true" className="size-5" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                    Coming Soon · Launching Soon
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-ink/72">
                  Our first developments are currently in the planning and development stage. Details—including exact project locations, architectural renderings, unit sizes, amenities, and booking availability—will be announced officially.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 transition-colors hover:text-blue-300"
                    href="#quotation-form"
                  >
                    Register Early Interest
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Location Highlights */}
          <div className="lg:col-span-6 lg:pl-6">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
                <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                  <Image
                    alt="Mehrish Holdings Ltd. premium architectural concepts in Dhaka"
                    className="size-full object-cover"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    src="/images/project-commercial.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/96 via-white/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                      Targeted Expansion
                    </p>
                    <p className="display-type text-2xl font-bold text-ink">
                      Mehrish Holdings Ltd. — Developing the Future of Dhaka
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-ink/45">
                  Prime Locations in Focus:
                </p>

                <div className="space-y-3">
                  {locations.map((loc) => (
                    <div
                      className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-colors hover:border-cobalt/35 hover:bg-blue-50/50"
                      key={loc.name}
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-cobalt/20 text-blue-400">
                          <MapPin aria-hidden="true" className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-ink">{loc.name}</p>
                          <p className="text-xs text-ink/50">{loc.type}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[0.65rem] font-bold text-blue-300">
                        {loc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
