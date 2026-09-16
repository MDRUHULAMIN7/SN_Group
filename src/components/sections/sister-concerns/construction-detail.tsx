"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Clock3,
  HardHat,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { SisterConcern } from "@/types/content";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { ClientLogoSlider } from "@/components/sections/about/client-logo-slider";
import { ConstructionInquiryForm } from "@/components/sections/sister-concerns/construction-inquiry-form";
import { projects } from "@/data/projects";
import { clients } from "@/data/clients";

interface ConstructionDetailProps {
  concern: SisterConcern;
}

export function ConstructionDetail({ concern }: ConstructionDetailProps) {
  const scrollToInquiry = () => {
    const formElement = document.getElementById("inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToProjects = () => {
    const sectionElement = document.getElementById("selected-work-orders");
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Select the 4 featured defense & institutional projects matching the work orders portfolio
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      {/* Breadcrumb Header */}
      <PageHero
        breadcrumbs={[
          { label: "Sister Concerns", href: "/sister-concerns" },
          { label: concern.name },
        ]}
        image={concern.image}
        imageAlt={concern.imageAlt}
        title={concern.name}
      />

      {/* =========================================================================
          SECTION 1: HERO & INTRO (Modeled after S.N Import & Export BD Ltd. layout)
          ========================================================================= */}
      <section
        className="relative border-t border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 py-10 sm:py-16 lg:py-20 text-ink"
        id="construction-overview"
      >
        <Container>
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: S.N Eng Construction BD Ltd. Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-cobalt/20 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cobalt">
                  <HardHat className="size-3.5 text-cobalt" />
                  1st Class Construction &amp; Engineering Division
                </div>

                <h2 className="display-type mt-2.5 sm:mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]">
                  S.N Eng Construction BD Ltd.
                </h2>

                <p className="mt-2 sm:mt-3 text-base sm:text-xl lg:text-2xl font-bold text-cobalt leading-snug">
                  1st Class Construction Company &amp; Infrastructure Development in Bangladesh.
                </p>

                <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-ink/80">
                  With more than two decades of dedicated execution, S.N Eng Construction BD Ltd. has established itself as a premier 1st Class construction and engineering contractor in Bangladesh. We specialize in government, defense, institutional, and strategic civil infrastructure projects.
                </p>

                <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-ink/75">
                  Our portfolio encompasses high-security installations for the Bangladesh Army, Bangladesh Air Force, and Bangladesh Navy, alongside multi-storey commercial complexes, specialized aviation hangars, industrial facilities, and civic engineering works delivered with disciplined safety and quality.
                </p>

                {/* Key Capability Highlights */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-xs">
                    <ShieldCheck className="size-5 text-cobalt shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">Class &apos;A&apos; / 1st Class Certified</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-xs">
                    <Award className="size-5 text-cobalt shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">20+ Years Proven Track Record</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-xs">
                    <Building2 className="size-5 text-cobalt shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">Major Defense Facilities</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-xs">
                    <Zap className="size-5 text-cobalt shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">ABC Electrical Contractor</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-cobalt px-5 py-3 text-sm font-bold text-white shadow-md shadow-cobalt/25 transition-all duration-300 hover:scale-[1.02] hover:bg-cobalt-dark active:scale-[0.98]"
                    onClick={scrollToInquiry}
                    type="button"
                  >
                    Send Project Inquiry
                    <ArrowRight className="size-4" />
                  </button>

                  <button
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-ink shadow-sm transition-all duration-300 hover:border-cobalt hover:bg-blue-50/50 hover:text-cobalt"
                    onClick={scrollToProjects}
                    type="button"
                  >
                    View Selected Projects
                    <ArrowUpRight className="size-4" />
                  </button>

                  <a
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-xs sm:text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
                    href="https://wa.me/8801608864687?text=Hello%20S.N%20Eng%20Construction%20BD%20Ltd,%20I%20have%20a%20project%20inquiry"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <MessageSquare className="size-4 text-emerald-600" />
                    WhatsApp Hotline
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Uploaded Academic Building Image */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div className="group relative aspect-4/3 sm:aspect-5/4 lg:aspect-4/3 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-500 hover:border-cobalt/40 hover:shadow-[0_28px_70px_rgba(21,94,239,0.18)]">
                  <Image
                    alt="S.N Eng Construction BD Ltd. landmark institutional academic building project"
                    className="object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-105"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    src="/images/hero-sazzad-academic-building-hd.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-xl border border-white/20 bg-slate-900/85 p-3 sm:p-4 text-white backdrop-blur-md shadow-lg">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-400">Delivered Institutional Landmark</p>
                    <p className="text-xs sm:text-sm font-semibold">Multi-Storey Academic Complex</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: SELECTED WORK ORDERS (Matching Screenshot)
          ========================================================================= */}
      <section
        aria-label="Selected Work Orders"
        className="border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
        id="selected-work-orders"
      >
        <Container>
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-3 sm:mb-4 text-cobalt">— SELECTED WORK ORDERS</p>
              <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-6xl">
                Projects, dates &amp; delivery status.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/62 sm:text-base">
                A concise view of documented orders across aviation, utilities, and institutional construction.
              </p>
            </div>
            <ButtonLink href="/projects" variant="outline">
              See All Projects
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 sm:mt-14">
            {featuredProjects.map((project, index) => {
              const completed = project.status === "Completed";

              return (
                <Reveal className="h-full" delay={index * 0.06} key={project.slug}>
                  <article className="group grid h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_44px_rgba(15,23,42,0.06)] transition-[transform,border-color,box-shadow] duration-700 hover:-translate-y-1.5 hover:border-cobalt/30 hover:shadow-[0_26px_64px_rgba(21,94,239,0.13)] sm:grid-cols-[0.4fr_0.6fr]">
                    <div className="relative min-h-48 overflow-hidden bg-slate-100 sm:min-h-full">
                      <Image
                        alt={project.coverAlt}
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
                        fill
                        sizes="(min-width: 768px) 22vw, 100vw"
                        src={project.coverImage}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/38 to-transparent" />
                    </div>
                    <div className="flex flex-col p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] ${
                            completed ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {completed ? (
                            <CheckCircle2 aria-hidden="true" className="size-3.5" />
                          ) : (
                            <Clock3 aria-hidden="true" className="size-3.5" />
                          )}
                          {project.status}
                        </span>
                        <span className="text-xs font-bold text-ink/42">{project.year}</span>
                      </div>
                      <h3 className="display-type mt-4 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-cobalt sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.11em] text-cobalt">
                        {project.client}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-ink/60">{project.location}</p>
                      <div className="mt-auto grid grid-cols-2 gap-3 border-t border-slate-100 pt-5 text-xs">
                        <div>
                          <p className="font-bold uppercase tracking-wider text-ink/38">Started</p>
                          <p className="mt-1 font-semibold text-ink/72">{project.commencement}</p>
                        </div>
                        <div>
                          <p className="font-bold uppercase tracking-wider text-ink/38">Completion</p>
                          <p className="mt-1 font-semibold text-ink/72">{project.completion}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Centered Prominent "See All Projects" CTA Button */}
          <Reveal className="mt-10 sm:mt-14 flex justify-center">
            <ButtonLink
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-cobalt px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-cobalt/25 transition-all duration-300 hover:scale-105 hover:bg-cobalt-dark active:scale-[0.98]"
              href="/projects"
              size="lg"
              variant="primary"
            >
              See All Projects
              <ArrowUpRight aria-hidden="true" className="size-4.5" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3: CLIENT LOGO SLIDER (from About Section)
          ========================================================================= */}
      <section
        aria-label="Institutional Clients"
        className="border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink overflow-hidden"
        id="institutional-clients"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4 justify-center text-cobalt">
                Trusted by Bangladesh&apos;s Foremost Institutions
              </p>
              <h2 className="display-type text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-ink">
                Our Clients &amp; Institutional Partners
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-xl leading-relaxed text-ink/75">
                Over two decades, S.N Eng Construction BD Ltd. has delivered documented, high-specification works across defense, public infrastructure, and civil authority sectors.
              </p>
            </Reveal>
          </div>

          <ClientLogoSlider clients={clients} />
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: INQUIRY FORM
          ========================================================================= */}
      <section
        aria-label="Project Inquiry Form"
        className="border-t border-slate-200 bg-slate-50/60 py-14 sm:py-20 lg:py-24 text-ink"
        id="inquiry-form"
      >
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <ConstructionInquiryForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
