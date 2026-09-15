import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Quote,
  TrendingUp,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { MissionVisionCards } from "@/components/sections/about/mission-vision-cards";
import { CompanyJourneyTimeline } from "@/components/sections/about/company-journey-timeline";
import { ContractorProgressionTimeline } from "@/components/sections/about/contractor-progression-timeline";
import { ClientLogoSlider } from "@/components/sections/about/client-logo-slider";
import { ButtonLink } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About S.N Group | Corporate Overview & Leadership",
  description:
    "Learn about S.N Group's 20+ years of excellence across S.N Eng Construction BD Ltd., S.N Import & Export BD Ltd., and Mehrish Holdings Ltd. Read our mission, vision, history, leadership team, and institutional clients.",
  path: "/about",
  image: "/images/hero-engineers-team-hd.webp",
});

const contractorProgress = [
  {
    className: "Class C",
    period: "2006–2010",
    title: "Foundation & First Capability",
    description:
      "The business began as a proprietorship in 2006, building its operational base through disciplined execution, trusted supplier relationships, and early civil and support works.",
    proof: "Foundation phase",
  },
  {
    className: "Class B",
    period: "2011–2014",
    title: "Structured Portfolio Expansion",
    description:
      "Documented Bangladesh Army orders began in 2011 and progressed to multi-storey academic buildings and a 68-bay garage-cum-multipurpose hall by 2013–14.",
    proof: "Institutional scale-up",
  },
  {
    className: "Class A",
    period: "2015–Today",
    title: "Major-Works Delivery Capacity",
    description:
      "From 2015, the portfolio moved into major infrastructure, multi-storey, industrial, naval and aviation works. An ABC electrical-contractor licence followed on 29 September 2021.",
    proof: "Highest capability phase",
  },
] as const;

const leadershipTeam = [
  {
    name: "Amia Afreen",
    designation: "Chairman, S.N Group",
    department: "Executive Leadership & Strategic Direction",
    bio: "Leading the organization with a focus on responsible growth, client partnership, quality, safety, and long-term institutional trust.",
  },
  {
    name: "Md. Sazzad Noor",
    designation: "Managing Director, S.N Group",
    department: "Group Operations & Executive Management",
    bio: "Directing business operations and the delivery of high-quality, cost-effective projects through motivated and focused teams.",
  },
  {
    name: "Ishrat Jahan Anannya",
    designation: "Head of Business Development & Communication",
    department: "Board of Directors",
    bio: "Building strong client and business relationships while supporting quality, value, safety, integrity, and strategic growth.",
  },
  {
    name: "Md. Mahedi Hasan",
    designation: "Project Director",
    department: "S.N Eng Construction BD Ltd.",
    bio: "Overseeing project delivery with close attention to quality, programme commitments, and client satisfaction.",
  },
  {
    name: "Sazia Asrak Tasmin",
    designation: "HR & Admin",
    department: "Human Resources",
    bio: "Supporting workforce coordination, workplace standards, and the people who deliver the group’s construction operations.",
  },
];

const clients = [
  {
    name: "Bangladesh Army",
    category: "Defense & Strategic Infrastructure",
    logo: "/images/clients/bangladesh-army.png",
    logoAlt: "Bangladesh Army official emblem",
    detail: "Defense accommodation, structural works, and institutional facilities.",
  },
  {
    name: "Bangladesh Navy",
    category: "Naval & Marine Infrastructure",
    logo: "/images/clients/bangladesh-navy.png",
    logoAlt: "Bangladesh Navy official emblem",
    detail: "Naval facilities, administrative buildings, and structural engineering.",
  },
  {
    name: "Bangladesh Air Force",
    category: "Aviation Infrastructure",
    logo: "/images/clients/bangladesh-air-force.png",
    logoAlt: "Bangladesh Air Force official emblem",
    detail: "Hangar, operations wing, briefing, and air movement facilities.",
  },
  {
    name: "Border Guard Bangladesh (BGB)",
    category: "Public Sector Works",
    logo: "/images/clients/bgb.svg",
    logoAlt: "Border Guard Bangladesh official emblem",
    detail: "Construction and related public-sector infrastructure services.",
  },
  {
    name: "Public Works Department (PWD)",
    category: "Public Sector Infrastructure",
    logo: "/images/clients/pwd.jpg",
    logoAlt: "Public Works Department official emblem",
    detail: "Government building and institutional infrastructure works.",
  },
  {
    name: "Roads & Highways Department (RHD)",
    category: "Civil Connectivity Works",
    logo: "/images/clients/rhd.png",
    logoAlt: "Government of Bangladesh official emblem used by RHD",
    detail: "Civil works, road corridors, and structural logistics projects.",
  },
  {
    name: "Local Government Engineering Department (LGED)",
    category: "Local Infrastructure",
    logo: "/images/clients/lged.png",
    logoAlt: "Local Government Engineering Department official emblem",
    detail: "Road, drainage, and local infrastructure development works.",
  },
  {
    name: "Department of Public Health Engineering (DPHE)",
    category: "Water Infrastructure",
    logo: "/images/clients/dphe.jpg",
    logoAlt: "Department of Public Health Engineering official emblem",
    detail: "Water supply and public utility infrastructure works.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb Header: Half Height, standard breadcrumb, no description */}
      <PageHero
        breadcrumbs={[{ label: "About Us" }]}
        image="/images/hero-engineers-team-hd.webp"
        imageAlt="S.N Group engineering team"
        title="About S.N Group"
      />

      {/* 1. Company Introduction */}
      <section
        aria-label="Company Introduction"
        className="border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
        id="company-introduction"
      >
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-3 sm:mb-4 text-cobalt">Company Introduction</p>
            <h2 className="display-type text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              20+ Years of Dedication &amp; Excellence
            </h2>
            <div className="mt-5 sm:mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-ink/80">
              <p>
                S.N Group is a diversified Bangladeshi business group with more than 20 years of experience in construction and business operations, built on a foundation of integrity, quality, reliability, and long-term relationships.
              </p>
              <p>
                Over the years, the Group has developed a diversified portfolio through three core businesses:{" "}
                <strong className="text-ink font-bold">S.N Eng Construction BD Ltd.</strong>,{" "}
                <strong className="text-ink font-bold">S.N Import &amp; Export BD Ltd.</strong>, and{" "}
                <strong className="text-ink font-bold">Mehrish Holdings Ltd.</strong>.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-ink/75">
                Our businesses operate across government and institutional construction, infrastructure development, international import and export, agricultural and food commodities, industrial chemicals and equipment, and premium real estate development.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-ink/75">
                With deep technical know-how and growing international trading networks, S.N Group continues to expand capabilities while delivering enduring value for clients, partners, investors, and communities across Bangladesh.
              </p>
            </div>
          </Reveal>

          <Reveal className="relative lg:col-span-6" delay={0.1}>
            <div className="group relative aspect-4/3 sm:aspect-5/4 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.11)] transition-all duration-500 hover:border-cobalt/40 hover:shadow-[0_28px_70px_rgba(21,94,239,0.18)]">
              <Image
                alt="S.N Group project and engineering team"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/images/hero-engineers-team-hd.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent" />
            </div>
            <span className="absolute -bottom-4 -left-4 hidden sm:block rounded-xl border border-cobalt/25 bg-white p-5 text-xs font-bold uppercase tracking-[0.14em] text-cobalt shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-cobalt hover:text-white">
              Dhaka · Bangladesh
            </span>
          </Reveal>
        </Container>
      </section>

      {/* 2. Mission & 3. Vision */}
      <section
        aria-label="Mission and Vision"
        className="blueprint-grid border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
        id="mission-vision"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Guiding Principles</p>
              <h2 className="display-type text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Our Mission &amp; Vision
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-xl leading-relaxed text-ink/75">
                The purpose that directs our daily operations and the long-term horizon guiding our group&apos;s growth.
              </p>
            </Reveal>
          </div>

          <MissionVisionCards />
        </Container>
      </section>

      {/* 4. Company History */}
      <section
        aria-label="Company History"
        className="blueprint-grid border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink relative overflow-hidden"
        id="company-history"
      >
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4 justify-center text-cobalt">Two Decades of Progress</p>
              <h2 className="display-type text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-ink">
                Company History
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-xl leading-relaxed text-ink/75">
                Key milestones in our evolution from a specialized civil engineering contractor to a diversified multi-disciplinary corporate group.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <CompanyJourneyTimeline />
          </Reveal>
        </Container>
      </section>

      <section
        aria-label="Contractor Capability Progression"
        className="blueprint-grid border-t border-slate-200 bg-white py-14 text-ink sm:py-20 lg:py-24"
        id="contractor-progression"
      >
        <Container>
          <Reveal className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow mb-3 text-cobalt">Built Step by Step</p>
              <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-6xl">
                From Class C to Class A capability.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-ink/64 lg:justify-self-end sm:text-base">
              The growth path below uses dated company and project-portfolio markers to show how early operating capability developed into the capacity to deliver major institutional and defense works.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ContractorProgressionTimeline />
          </Reveal>
        </Container>
      </section>

      <section
        aria-label="Project Orders and Status"
        className="border-t border-slate-200 bg-white py-14 text-ink sm:py-20 lg:py-24"
        id="project-orders"
      >
        <Container>
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3 text-cobalt">Selected Work Orders</p>
              <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-6xl">Projects, dates &amp; delivery status.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/62 sm:text-base">
                A concise view of documented orders across aviation, utilities, and institutional construction.
              </p>
            </div>
            <ButtonLink href="/projects" variant="outline">
              View Complete Portfolio
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 sm:mt-14">
            {projects.slice(0, 4).map((project, index) => {
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
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] ${completed ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                          {completed ? <CheckCircle2 aria-hidden="true" className="size-3.5" /> : <Clock3 aria-hidden="true" className="size-3.5" />}
                          {project.status}
                        </span>
                        <span className="text-xs font-bold text-ink/42">{project.year}</span>
                      </div>
                      <h3 className="display-type mt-4 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-cobalt sm:text-2xl">{project.title}</h3>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.11em] text-cobalt">{project.client}</p>
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
        </Container>
      </section>

      {/* 5. MD Message */}
      <section
        aria-label="Managing Director Message"
        className="blueprint-grid border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
        id="md-message"
      >
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-12 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-cobalt/40 hover:shadow-[0_28px_70px_rgba(21,94,239,0.16)]">
                {/* Top sweeping line */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-cobalt via-blue-500 to-sky-400 transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <Quote
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-8 size-56 text-cobalt/[0.04] transition-all duration-700 ease-out group-hover:scale-115 group-hover:rotate-6 group-hover:text-cobalt/[0.08]"
                  strokeWidth={1.2}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                      Executive Perspective
                    </span>
                    <h2 className="display-type mt-1 text-2xl sm:text-4xl font-bold transition-colors duration-300 group-hover:text-cobalt">
                      Message from the Managing Director
                    </h2>
                  </div>
                  <span className="grid size-12 sm:size-14 place-items-center rounded-2xl border border-cobalt/20 bg-blue-50 text-cobalt shadow-[0_8px_24px_rgba(21,94,239,0.12)] shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(21,94,239,0.35)]">
                    <Quote aria-hidden="true" className="size-6 sm:size-7" strokeWidth={1.8} />
                  </span>
                </div>

                <div className="mt-6 sm:mt-8 space-y-4 text-base sm:text-lg leading-relaxed sm:leading-8 text-ink/80">
                  <p>
                    Welcome to S.N Group. For more than two decades, our journey has been guided by a simple principle: build with integrity, deliver with excellence, and grow through trust.
                  </p>
                  <p>
                    What began with a strong foundation in construction has evolved into a diversified business group with interests in government and institutional construction, international import and export, and real estate development.
                  </p>
                  <p>
                    Through <strong className="text-ink">S.N Eng Construction BD Ltd.</strong>, <strong className="text-ink">S.N Import &amp; Export BD Ltd.</strong>, and <strong className="text-ink">Mehrish Holdings Ltd.</strong>, we continue to expand capabilities while creating sustainable value for customers, partners, and communities.
                  </p>
                  <p className="rounded-xl border-l-2 border-cobalt bg-blue-50/70 p-4 sm:p-5 font-semibold text-cobalt transition-colors duration-300 group-hover:border-blue-600 group-hover:bg-blue-50">
                    &ldquo;Our success is ultimately measured by the trust of our clients, partners, employees, and stakeholders. We look forward to building a stronger future together.&rdquo;
                  </p>
                </div>

                <div className="relative z-10 mt-8 border-t border-slate-200 pt-6 flex items-center justify-between">
                  <div>
                    <p className="display-type text-lg sm:text-xl font-bold text-ink">Md. Sazzad Noor</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                      S.N Group
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 6. Management/Team Introduction */}
      <section
        aria-label="Management and Team Introduction"
        className="border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
        id="management-team"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Leadership &amp; Execution</p>
              <h2 className="display-type text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Management &amp; Team Introduction
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-xl leading-relaxed text-ink/75">
                Experienced professionals steering our engineering execution, international procurement, and real estate development.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member, index) => (
              <Reveal
                className="h-full"
                delay={index * 0.06}
                key={member.name}
              >
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-[0_12px_36px_rgba(15,23,42,0.055)] transition-all duration-400 ease-out hover:-translate-y-2 hover:border-cobalt/40 hover:shadow-[0_24px_56px_rgba(21,94,239,0.16)]">
                  {/* Top expanding accent line */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cobalt to-blue-400 transition-transform duration-500 group-hover:scale-x-100"
                  />
                  {/* Left indicator line */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-7 h-10 w-1 rounded-r-full bg-cobalt/35 transition-all duration-300 group-hover:h-16 group-hover:bg-cobalt"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid size-12 place-items-center rounded-xl border border-cobalt/20 bg-blue-50 text-cobalt font-extrabold text-sm transition-all duration-400 group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_6px_20px_rgba(21,94,239,0.35)]">
                        {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-cobalt/50 transition-colors duration-300 group-hover:text-cobalt">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="display-type mt-5 text-xl font-bold text-ink transition-colors duration-300 group-hover:text-cobalt">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-cobalt transition-colors duration-300 group-hover:text-blue-600">
                      {member.designation}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-ink/50">
                      {member.department}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm leading-6 text-ink/68">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Client */}
      <section
        aria-label="Our Clients"
        className="blueprint-grid overflow-hidden border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
        id="clients"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Institutional Trust</p>
              <h2 className="display-type text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Our Clients &amp; Institutional Partners
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-xl leading-relaxed text-ink/75">
                Proud to have delivered projects and commercial solutions associated with premier defense, government, and corporate organizations in Bangladesh.
              </p>
            </Reveal>
          </div>
        </Container>

        <Reveal delay={0.1}>
          <ClientLogoSlider clients={clients} />
        </Reveal>
      </section>
    </>
  );
}
