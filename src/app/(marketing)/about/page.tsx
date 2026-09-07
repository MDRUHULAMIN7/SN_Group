import type { Metadata } from "next";
import Image from "next/image";
import {
  Anchor,
  Award,
  Building,
  Building2,
  Calendar,
  Compass,
  Eye,
  Globe2,
  HardHat,
  Quote,
  Shield,
  UserCheck,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About S.N Group | Corporate Overview & Leadership",
  description:
    "Learn about S.N Group's 20+ years of excellence across S.N Eng Construction BD Ltd., S.N Import & Export BD Ltd., and Mehrish Holdings Ltd. Read our mission, vision, history, leadership team, and institutional clients.",
  path: "/about",
  image: "/images/team.webp",
});

const milestones = [
  {
    year: "2004",
    title: "Founding & Construction Roots",
    description:
      "Establishment of our construction entity in Bangladesh, executing public civil works, administrative infrastructure, and institutional structures with engineering discipline.",
  },
  {
    year: "2010",
    title: "Defense & Key Institutional Projects",
    description:
      "Proven qualification and continuous execution of high-security defense and institutional projects with the Bangladesh Army, Bangladesh Navy, and allied government agencies.",
  },
  {
    year: "2016",
    title: "International Trade Expansion",
    description:
      "Incorporated S.N Import & Export BD Ltd., launching international sourcing and trade corridors for agricultural commodities, industrial chemicals, machinery, and export materials.",
  },
  {
    year: "2020",
    title: "Prime Real Estate Development",
    description:
      "Founded Mehrish Holdings Ltd. to deliver premium residential apartment projects and contemporary commercial developments in prime Dhaka neighborhoods.",
  },
  {
    year: "Present",
    title: "Unified Multi-Disciplinary Group",
    description:
      "Operating as a cohesive corporate group connecting infrastructure construction, global procurement, and prime property development under a unified governance standard.",
  },
];

const leadershipTeam = [
  {
    name: "Al-Haj Md. Ruhul Amin",
    designation: "Chairman, S.N Group",
    department: "Executive Leadership & Strategic Direction",
    bio: "Guiding S.N Group's long-term vision, core values, and strategic national partnerships for over two decades.",
  },
  {
    name: "Md. Shaheen Noman",
    designation: "Managing Director, S.N Group",
    department: "Group Operations & Executive Management",
    bio: "Directing operational execution, commercial synergy, and international growth across all group entities.",
  },
  {
    name: "Engr. K. M. Shamsuddin",
    designation: "Director, Engineering & Operations",
    department: "S.N Eng Construction BD Ltd.",
    bio: "Over 25 years overseeing civil engineering, defense works, structural quality controls, and site execution.",
  },
  {
    name: "Mohammad Faruk Hossain",
    designation: "Director, International Trade & Supply",
    department: "S.N Import & Export BD Ltd.",
    bio: "Spearheading global manufacturer relations, commodity import logistics, and international export distribution.",
  },
  {
    name: "Ar. Tanvir Ahmed",
    designation: "Head of Real Estate & Planning",
    department: "Mehrish Holdings Ltd.",
    bio: "Leading architectural design, modern space planning, and property acquisitions in Dhaka's premier zones.",
  },
  {
    name: "Mustafa Kamal, FCA",
    designation: "Chief Financial Officer & Compliance",
    department: "Group Corporate Affairs",
    bio: "Overseeing group financial strategy, fiscal integrity, statutory compliance, and corporate governance.",
  },
];

const clients = [
  {
    name: "Bangladesh Army",
    category: "Defense & Strategic Infrastructure",
    icon: Shield,
    detail: "Defense accommodation, structural works, and institutional facilities.",
  },
  {
    name: "Bangladesh Navy",
    category: "Naval & Marine Infrastructure",
    icon: Anchor,
    detail: "Naval facilities, administrative buildings, and structural engineering.",
  },
  {
    name: "DGDP (Directorate General of Defence Purchase)",
    category: "Government Procurement & Sourcing",
    icon: Award,
    detail: "Institutional supply and technical procurement partnerships.",
  },
  {
    name: "Military Engineer Services (MES)",
    category: "Defense Civil Works",
    icon: HardHat,
    detail: "Complex civil, structural, and infrastructure construction works.",
  },
  {
    name: "Ministry of Housing & Public Works",
    category: "Public Sector Infrastructure",
    icon: Building2,
    detail: "Public institutional facilities and urban civic infrastructure.",
  },
  {
    name: "Roads & Highways Department (RHD)",
    category: "Civil Connectivity Works",
    icon: Building,
    detail: "Civil works, road corridors, and structural logistics projects.",
  },
  {
    name: "Global Commodity & Chemical Partners",
    category: "International Trade Associates",
    icon: Globe2,
    detail: "International manufacturers and agricultural suppliers across Asia, Europe, and Americas.",
  },
  {
    name: "Commercial & Institutional Stakeholders",
    category: "Property Development Partners",
    icon: UserCheck,
    detail: "High-value commercial and residential project investors and stakeholders in Dhaka.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb Header: Half Height, standard breadcrumb, no description */}
      <PageHero
        breadcrumbs={[{ label: "About Us" }]}
        image="/images/team.webp"
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
            <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              20+ Years of Dedication &amp; Excellence
            </h2>
            <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 text-sm sm:text-base leading-7 sm:leading-8 text-ink/72">
              <p>
                S.N Group is a diversified Bangladeshi business group with more than 20 years of experience in construction and business operations, built on a foundation of integrity, quality, reliability, and long-term relationships.
              </p>
              <p>
                Over the years, the Group has developed a diversified portfolio through three core businesses:{" "}
                <strong className="text-ink font-bold">S.N Eng Construction BD Ltd.</strong>,{" "}
                <strong className="text-ink font-bold">S.N Import &amp; Export BD Ltd.</strong>, and{" "}
                <strong className="text-ink font-bold">Mehrish Holdings Ltd.</strong>.
              </p>
              <p className="text-xs sm:text-base leading-6 sm:leading-7 text-ink/64">
                Our businesses operate across government and institutional construction, infrastructure development, international import and export, agricultural and food commodities, industrial chemicals and equipment, and premium real estate development.
              </p>
              <p className="text-xs sm:text-base leading-6 sm:leading-7 text-ink/64">
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
                src="/images/team.webp"
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
              <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Our Mission &amp; Vision
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-6 sm:leading-7 text-ink/65">
                The purpose that directs our daily operations and the long-term horizon guiding our group&apos;s growth.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* 2. Mission */}
            <Reveal className="h-full" delay={0.05}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-400 ease-out hover:-translate-y-2 hover:border-cobalt/40 hover:shadow-[0_24px_60px_rgba(21,94,239,0.16)]">
                {/* Ambient glowing backdrop on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/70 via-transparent to-cobalt/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Animated expanding top accent line */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-cobalt via-blue-500 to-sky-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                {/* Decorative corner glow */}
                <span className="pointer-events-none absolute -right-10 -bottom-10 size-36 rounded-full bg-cobalt/[0.06] blur-2xl transition-transform duration-700 group-hover:scale-150" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 sm:size-14 place-items-center rounded-xl sm:rounded-2xl border border-cobalt/20 bg-blue-50 text-cobalt transition-all duration-400 ease-out group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(21,94,239,0.35)]">
                      <Compass aria-hidden="true" className="size-6 sm:size-7" />
                    </span>
                    <span className="rounded-full border border-cobalt/20 bg-blue-50/80 px-3 py-1 text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-cobalt transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white">
                      Core Purpose
                    </span>
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-cobalt">
                    Our Purpose
                  </p>
                  <h3 className="display-type mt-1 text-2xl xs:text-3xl sm:text-4xl font-bold transition-colors duration-300 group-hover:text-cobalt">
                    Our Mission
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-ink/72">
                    To build and operate businesses that create lasting value through quality construction, responsible international trade, and thoughtfully developed real estate, while maintaining the highest standards of integrity, professionalism, and customer satisfaction.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 3. Vision */}
            <Reveal className="h-full" delay={0.1}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-400 ease-out hover:-translate-y-2 hover:border-cobalt/40 hover:shadow-[0_24px_60px_rgba(21,94,239,0.16)]">
                {/* Ambient glowing backdrop on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/70 via-transparent to-cobalt/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Animated expanding top accent line */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-cobalt via-blue-500 to-sky-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                {/* Decorative corner glow */}
                <span className="pointer-events-none absolute -right-10 -bottom-10 size-36 rounded-full bg-cobalt/[0.06] blur-2xl transition-transform duration-700 group-hover:scale-150" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 sm:size-14 place-items-center rounded-xl sm:rounded-2xl border border-cobalt/20 bg-blue-50 text-cobalt transition-all duration-400 ease-out group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(21,94,239,0.35)]">
                      <Eye aria-hidden="true" className="size-6 sm:size-7" />
                    </span>
                    <span className="rounded-full border border-cobalt/20 bg-blue-50/80 px-3 py-1 text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-cobalt transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white">
                      Future Horizon
                    </span>
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-cobalt">
                    Future Horizon
                  </p>
                  <h3 className="display-type mt-1 text-2xl xs:text-3xl sm:text-4xl font-bold transition-colors duration-300 group-hover:text-cobalt">
                    Our Vision
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-ink/72">
                    To become a trusted and respected Bangladeshi business group with a strong national presence and growing international reach, recognized for excellence in construction, global trade, and real estate development.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. Company History */}
      <section
        aria-label="Company History"
        className="border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
        id="company-history"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Two Decades of Progress</p>
              <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Company History
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-6 sm:leading-7 text-ink/65">
                Key milestones in our evolution from a specialized civil engineering contractor to a diversified multi-disciplinary corporate group.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-16 relative">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {milestones.map((item, index) => (
                <Reveal
                  className="h-full"
                  delay={index * 0.07}
                  key={item.year}
                >
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_10px_32px_rgba(15,23,42,0.05)] transition-all duration-400 ease-out hover:-translate-y-2 hover:border-cobalt/40 hover:shadow-[0_22px_54px_rgba(21,94,239,0.15)]">
                    {/* Active vertical left accent line */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-cobalt/25 transition-all duration-400 group-hover:w-1.5 group-hover:bg-cobalt"
                    />
                    {/* Corner ambient glow */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-cobalt/[0.04] transition-transform duration-500 group-hover:scale-150"
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-cobalt/20 bg-blue-50 px-3 py-1 text-xs font-bold text-cobalt transition-all duration-300 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(21,94,239,0.3)]">
                          <Calendar aria-hidden="true" className="size-3.5" />
                          {item.year}
                        </span>
                        <span className="text-xs font-extrabold tracking-widest text-cobalt/35 transition-colors duration-300 group-hover:text-cobalt">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="display-type mt-5 text-xl sm:text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-cobalt">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm leading-6 text-ink/65">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
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
                    <h2 className="display-type mt-1 text-2xl xs:text-3xl sm:text-4xl font-bold transition-colors duration-300 group-hover:text-cobalt">
                      Message from the Managing Director
                    </h2>
                  </div>
                  <span className="grid size-12 sm:size-14 place-items-center rounded-2xl border border-cobalt/20 bg-blue-50 text-cobalt shadow-[0_8px_24px_rgba(21,94,239,0.12)] shrink-0 transition-all duration-400 group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(21,94,239,0.35)]">
                    <Quote aria-hidden="true" className="size-6 sm:size-7" strokeWidth={1.8} />
                  </span>
                </div>

                <div className="mt-6 sm:mt-8 space-y-4 text-xs sm:text-base leading-6 sm:leading-8 text-ink/72">
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
                    <p className="display-type text-lg sm:text-xl font-bold text-ink">Managing Director</p>
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
              <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Management &amp; Team Introduction
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-6 sm:leading-7 text-ink/65">
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
        className="blueprint-grid border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
        id="clients"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-3 sm:mb-4 justify-center text-blue-400">Institutional Trust</p>
              <h2 className="display-type text-2.5xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Our Clients &amp; Institutional Partners
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-6 sm:leading-7 text-ink/65">
                Proud to have delivered projects and commercial solutions associated with premier defense, government, and corporate organizations in Bangladesh.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client, index) => {
              const Icon = client.icon;
              return (
                <Reveal
                  className="h-full"
                  delay={index * 0.05}
                  key={client.name}
                >
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-400 ease-out hover:-translate-y-2 hover:border-cobalt/40 hover:shadow-[0_22px_50px_rgba(21,94,239,0.15)]">
                    {/* Ambient corner glow */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-8 -bottom-8 size-24 rounded-full bg-cobalt/[0.04] transition-transform duration-500 group-hover:scale-150"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cobalt to-sky-400 transition-transform duration-500 group-hover:scale-x-100"
                    />

                    <div className="relative z-10">
                      <span className="grid size-11 place-items-center rounded-xl border border-cobalt/15 bg-blue-50 text-cobalt transition-all duration-400 group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white group-hover:shadow-[0_6px_18px_rgba(21,94,239,0.3)]">
                        <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                      </span>
                      <h3 className="display-type mt-4 text-base sm:text-lg font-bold text-ink transition-colors duration-300 group-hover:text-cobalt">
                        {client.name}
                      </h3>
                      <p className="mt-1 text-[0.72rem] font-bold uppercase tracking-wider text-cobalt">
                        {client.category}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-ink/62">
                        {client.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
