"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck,
  Hammer,
  Home,
  KeyRound,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { SisterConcern } from "@/types/content";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { MehrishPropertySlider } from "@/components/sections/sister-concerns/mehrish-property-slider";
import {
  MehrishInquiryForm,
  MEHRISH_PROPERTIES,
} from "@/components/sections/sister-concerns/mehrish-inquiry-form";

interface PropertyCardItem {
  id: string;
  name: string;
  bangla: string;
  location: string;
  type: string;
  size: string;
  image: string;
  inquiryName: string;
  status: "Under Construction" | "Upcoming" | "Ready";
}

const PROPERTIES_GRID_DATA: readonly PropertyCardItem[] = [
  {
    id: "crown-heights",
    name: "Mehrish Crown Heights",
    bangla: "লাক্সারি কনডোমিনিয়াম ও পেন্টহাউস",
    location: "Gulshan-2, Dhaka",
    type: "Luxury Residential Suites",
    size: "3,800 – 4,600 sqft",
    image: "/images/hero-commercial-hd.webp",
    inquiryName: "Mehrish Crown Heights — Gulshan-2 [লাক্সারি অ্যাপার্টমেন্ট ও পেন্টহাউস]",
    status: "Under Construction",
  },
  {
    id: "trade-center",
    name: "Mehrish Trade Center",
    bangla: "প্রিমিয়াম কমার্শিয়াল টাওয়ার",
    location: "Banani Road 11, Dhaka",
    type: "Grade-A Commercial Tower",
    size: "5,000 – 12,000 sqft Floor Plates",
    image: "/images/hero-headquarters-silver-tower.jpg",
    inquiryName: "Mehrish Trade Center — Banani Road 11 [বাণিজ্যিক ফ্লোর স্পেস]",
    status: "Under Construction",
  },
  {
    id: "lakefront-vista",
    name: "Mehrish Lakefront Vista",
    bangla: "প্যানোরামিক লেকভিউ ফ্ল্যাট",
    location: "Dhanmondi Lake View, Dhaka",
    type: "Premium Family Apartments",
    size: "2,600 – 3,200 sqft",
    image: "/images/project-commercial.webp",
    inquiryName: "Mehrish Lakefront Vista — Dhanmondi [লেকভিউ রেসিডেন্সিয়াল স্যুট]",
    status: "Ready",
  },
  {
    id: "corporate-point",
    name: "Mehrish Corporate Point",
    bangla: "কর্পোরেট হাব ও অফিস স্পেস",
    location: "Tejgaon Commercial Hub, Dhaka",
    type: "Modern Commercial Office Hub",
    size: "3,500 – 8,000 sqft",
    image: "/images/hero-modern-institutional-building-hd.jpg",
    inquiryName: "Mehrish Corporate Point — Tejgaon [কর্পোরেট অফিস স্পেস]",
    status: "Under Construction",
  },
  {
    id: "green-oasis",
    name: "Mehrish Green Oasis",
    bangla: "ইকো-ফ্রেন্ডলি ফ্যামিলি রেসিডেন্স",
    location: "Sector 4, Uttara, Dhaka",
    type: "Eco-Friendly Residential",
    size: "2,200 – 2,800 sqft",
    image: "/images/hero-commercial.webp",
    inquiryName: "Mehrish Green Oasis — Uttara [ইকো-ফ্রেন্ডলি অ্যাপার্টমেন্ট]",
    status: "Upcoming",
  },
  {
    id: "signature-plaza",
    name: "Mehrish Signature Plaza",
    bangla: "প্রিমিয়াম রিটেইল ও শোরুম হাব",
    location: "Bashundhara Main Gate, Dhaka",
    type: "Retail & Commercial Hub",
    size: "1,500 – 6,000 sqft",
    image: "/images/gallery/cadet-college-complex.jpg",
    inquiryName: "Custom Property Inquiry [অন্যান্য রিয়েল এস্টেট অনুসন্ধান]",
    status: "Upcoming",
  },
];

const DEVELOPMENT_PROCESS = [
  {
    number: "01",
    title: "Land Selection & Feasibility",
    bangla: "জমি নির্বাচন ও সম্ভাব্যতা যাচাই",
    icon: Compass,
    description:
      "Strategic acquisition of high-value land in prime Dhaka sectors with stringent legal clearance, soil testing, and RAJUK approvals.",
  },
  {
    number: "02",
    title: "Architectural & Structural Design",
    bangla: "স্থাপত্য ও কাঠামোগত প্রকৌশল",
    icon: FileCheck,
    description:
      "Engineered to BNBC code compliance, maximum seismic resistance, natural ventilation, modern glass facade treatments, and space optimization.",
  },
  {
    number: "03",
    title: "Precision Construction",
    bangla: "মানসম্পন্ন নির্মাণ ও ফিনিশিং",
    icon: Hammer,
    description:
      "Supervised by senior civil engineers using 500W steel, certified ready-mix concrete, European sanitary fittings, and high-speed elevators.",
  },
  {
    number: "04",
    title: "Handover & Facility Management",
    bangla: "হস্তান্তর ও স্থায়ী ব্যবস্থাপনা",
    icon: KeyRound,
    description:
      "On-schedule possession, registered deed documentation, 24/7 building management systems, and dedicated post-handover warranty support.",
  },
] as const;

export function MehrishHoldingDetail({ concern }: { concern: SisterConcern }) {
  const [selectedProperty, setSelectedProperty] = useState<string>(
    MEHRISH_PROPERTIES[0].label
  );

  const scrollToInquiry = (propertyName?: string) => {
    if (propertyName) {
      setSelectedProperty(propertyName);
    }
    const formElement = document.getElementById("inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
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
          SECTION 1: HERO & INTRO WITH PROPERTY SLIDER
          ========================================================================= */}
      <section
        className="relative border-t border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 py-8 sm:py-14 lg:py-20 text-ink"
        id="property-overview"
      >
        <Container>
          {/* Main Hero Split: Left Text + Right Property Slider */}
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Section: Intro Text & Value Proposition */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-cobalt/20 bg-blue-50 px-3.5 py-1 text-xs font-bold text-cobalt">
                  <Sparkles className="size-3.5" />
                  Premium Real Estate &amp; Development Arm of S.N Group
                </div>

                <h2 className="display-type mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]">
                  Mehrish Holdings Ltd.
                </h2>

                <p className="mt-2 sm:mt-3 text-base sm:text-xl lg:text-2xl font-bold text-cobalt leading-snug">
                  Creating Sustainable Value Through Architectural Landmark Properties.
                </p>

                <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-ink/80">
                  Mehrish Holdings is dedicated to developing high-value residential condominiums, grade-A commercial complexes, and bespoke corporate spaces across Dhaka&apos;s most sought-after neighborhoods.
                </p>

                <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-ink/75">
                  Backstopped by the engineering expertise, equipment fleet, and construction heritage of S.N Group, every development guarantees earthquake-resilient structures, transparent titling, and on-time possession.
                </p>

                {/* Action Buttons */}
                <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-cobalt px-5 py-3 text-sm font-bold text-white shadow-md shadow-cobalt/25 transition-all duration-300 hover:scale-[1.02] hover:bg-cobalt-dark active:scale-[0.98]"
                    onClick={() => scrollToInquiry()}
                    type="button"
                  >
                    Request Brochure &amp; Price
                    <ArrowRight className="size-4" />
                  </button>

                  <a
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-ink shadow-sm transition-all duration-300 hover:border-cobalt hover:bg-blue-50/50 hover:text-cobalt"
                    href="#available-properties"
                  >
                    View Developments
                    <ArrowUpRight className="size-4" />
                  </a>

                  <a
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-xs sm:text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
                    href="https://wa.me/8801608864687?text=Hello%20Mehrish%20Holdings,%20I%20am%20interested%20in%20your%20property%20developments."
                    rel="noreferrer"
                    target="_blank"
                  >
                    <MessageSquare className="size-4 text-emerald-600" />
                    Property Hotline
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Section: Property Showcase Slider */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <MehrishPropertySlider />
              </Reveal>
            </div>
          </div>

          {/* =========================================================================
              SECTION 2: DEVELOPMENTS IN GRID VIEW CARDS
              ========================================================================= */}
          <div className="mt-10 sm:mt-16 lg:mt-20" id="available-properties">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 border-b border-slate-200 pb-4 sm:pb-5">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cobalt">
                    <Building2 className="size-3.5 text-cobalt" />
                    Residential &amp; Commercial Portfolio
                  </div>
                  <h2 className="display-type mt-1 text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink">
                    Featured Property Developments
                  </h2>
                </div>
                <p className="max-w-md text-xs sm:text-sm text-ink/70">
                  Click any property card below to pre-fill your inquiry form for floor plans, brochure, and pricing.
                </p>
              </div>
            </Reveal>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {PROPERTIES_GRID_DATA.map((prop, idx) => (
                <Reveal delay={idx * 0.05} key={prop.id}>
                  <div
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cobalt/50 hover:shadow-xl hover:shadow-cobalt/10 cursor-pointer"
                    onClick={() => scrollToInquiry(prop.inquiryName)}
                    role="button"
                    tabIndex={0}
                  >
                    {/* Property Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        alt={prop.name}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        src={prop.image}
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider ${
                            prop.status === "Ready"
                              ? "bg-emerald-500 text-white shadow-sm"
                              : prop.status === "Under Construction"
                              ? "bg-cobalt text-white shadow-sm"
                              : "bg-amber-500 text-white shadow-sm"
                          }`}
                        >
                          {prop.status}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="pt-3.5 pb-1 flex flex-col flex-grow">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-cobalt">
                        <MapPin className="size-3.5 shrink-0" />
                        <span>{prop.location}</span>
                      </div>

                      <h3 className="display-type mt-1 text-base sm:text-lg font-bold text-ink group-hover:text-cobalt transition-colors leading-snug">
                        {prop.name}
                      </h3>
                      <p className="text-xs text-ink/65 font-medium mt-0.5">
                        [{prop.bangla}]
                      </p>

                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-ink/75">
                        <span className="font-semibold text-ink/60">{prop.type}</span>
                        <span className="font-bold text-cobalt">{prop.size}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Joint Venture Partnership Banner */}
            <Reveal className="mt-6 sm:mt-8" delay={0.1}>
              <div className="rounded-xl sm:rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/50 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5">
                  <span className="grid size-10 sm:size-11 place-items-center rounded-xl bg-cobalt text-white shadow-md shrink-0">
                    <Building className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-ink">
                      Are you a Landowner looking for a Joint Venture Partnership in Dhaka?
                    </p>
                    <p className="text-[11px] sm:text-xs text-ink/70 mt-0.5">
                      Mehrish Holdings provides high landowner ratio, transparent agreements, state-of-the-art architecture, and guaranteed timely completion backed by S.N Group.
                    </p>
                  </div>
                </div>
                <button
                  className="w-full sm:w-auto shrink-0 rounded-xl bg-cobalt px-5 py-2.5 text-xs font-bold text-white transition hover:bg-cobalt-dark shadow-sm text-center justify-center"
                  onClick={() =>
                    scrollToInquiry(
                      "Land Joint Venture Partnership [ভূমি উন্নয়ন ও যৌথ অংশীদারিত্ব]"
                    )
                  }
                  type="button"
                >
                  Propose Joint Venture
                </button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3: HOW WE WORK (THE DEVELOPMENT PROCESS)
          ========================================================================= */}
      <section
        className="border-t border-slate-200 bg-slate-50/70 py-10 sm:py-16 lg:py-24 text-ink"
        id="development-process"
      >
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-1.5 sm:mb-2 text-cobalt">Structured Real Estate Development</p>
            <h2 className="display-type text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              How We Work (The Development Process)
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-ink/70">
              A comprehensive 4-stage development protocol ensuring structural durability, legal safety, and timely possession for every homeowner and corporate tenant.
            </p>
          </Reveal>

          {/* 4-Step Infographic Grid */}
          <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {DEVELOPMENT_PROCESS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal className="h-full" delay={idx * 0.08} key={step.number}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition-all duration-400 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-cobalt hover:shadow-xl hover:shadow-cobalt/10">
                    {/* Top Step Number Badge */}
                    <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                      <span className="grid size-10 sm:size-12 place-items-center rounded-xl border border-cobalt/20 bg-blue-50 text-cobalt transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white">
                        <Icon className="size-5 sm:size-6" />
                      </span>
                      <span className="font-mono text-2xl sm:text-3xl font-black text-slate-200 group-hover:text-cobalt/30 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="display-type text-base sm:text-lg font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-cobalt mb-2 sm:mb-3">
                      [{step.bangla}]
                    </p>

                    <p className="text-xs sm:text-sm leading-relaxed text-ink/70">
                      {step.description}
                    </p>

                    {/* Connecting indicator bar */}
                    <div className="mt-auto pt-4 sm:pt-5">
                      <div className="h-1 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cobalt to-sky-400 transition-all duration-500 group-hover:w-full"
                          style={{ width: `${(idx + 1) * 25}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: DEDICATED CONTACT & INQUIRY SECTION
          ========================================================================= */}
      <section
        className="blueprint-grid border-t border-slate-200 bg-white py-10 sm:py-16 lg:py-24 text-ink"
        id="property-inquiry-section"
      >
        <Container>
          <Reveal className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            <h2 className="display-type text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Property Inquiries &amp; Customer Care
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-ink/65">
              Connect directly with our real estate sales advisors, leasing managers, or joint venture consultants.
            </p>
          </Reveal>

          {/* Split Screen: Left Clean Contacts + Right Inquiry Form */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Direct Corporate Property Contacts */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-sm">
                  <div className="border-b border-slate-100 pb-3.5 sm:pb-4">
                    <h3 className="display-type text-xl sm:text-2xl lg:text-3xl font-bold text-ink">
                      Property Desk Contacts
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-ink/70">
                      Direct phone &amp; WhatsApp lines for bookings, site inspections, and inquiries.
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                    {/* Contact 1: Real Estate Sales & Bookings */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 sm:p-5 transition-colors hover:border-cobalt/30 hover:bg-blue-50/30">
                      <div className="flex items-start justify-between gap-2.5 sm:gap-3">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-ink">Real Estate Sales &amp; Bookings</h4>
                          <p className="text-xs text-cobalt font-semibold mt-0.5">Residential Condos &amp; Apartments</p>
                          <p className="text-[11px] text-ink/65 mt-0.5 font-medium">Gulshan, Banani, Dhanmondi, Uttara</p>
                        </div>
                        <a
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100 shrink-0"
                          href="https://wa.me/8801608864687?text=Hello%20Mehrish%20Holdings,%20I%20would%20like%20information%20on%20residential%20units."
                          rel="noreferrer"
                          target="_blank"
                        >
                          <MessageSquare className="size-3.5 text-emerald-600" />
                          WhatsApp
                        </a>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-ink/80">
                        <a className="font-bold text-ink hover:text-cobalt transition-colors" href="tel:+8801608864687">
                          +8801608864687
                        </a>
                        <span className="text-slate-300">•</span>
                        <a className="font-medium hover:text-cobalt transition-colors" href="mailto:info@sngroupbd.com">
                          info@sngroupbd.com
                        </a>
                      </div>
                    </div>

                    {/* Contact 2: Commercial Leasing & Corporate Spaces */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 sm:p-5 transition-colors hover:border-cobalt/30 hover:bg-blue-50/30">
                      <div className="flex items-start justify-between gap-2.5 sm:gap-3">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-ink">Commercial Leasing Desk</h4>
                          <p className="text-xs text-cobalt font-semibold mt-0.5">Corporate Floors &amp; Retail Outlets</p>
                          <p className="text-[11px] text-ink/65 mt-0.5 font-medium">Full Floor Plates &amp; Office Suites</p>
                        </div>
                        <a
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100 shrink-0"
                          href="https://wa.me/8801335229070?text=Hello,%20I%20am%20inquiring%20about%20commercial%20leasing%20at%20Mehrish%20Holdings."
                          rel="noreferrer"
                          target="_blank"
                        >
                          <MessageSquare className="size-3.5 text-emerald-600" />
                          WhatsApp
                        </a>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-ink/80">
                        <a className="font-bold text-ink hover:text-cobalt transition-colors" href="tel:+8801335229070">
                          +8801335229070
                        </a>
                        <span className="text-slate-300">•</span>
                        <a className="font-medium hover:text-cobalt transition-colors" href="mailto:query@sngroupbd.com">
                          query@sngroupbd.com
                        </a>
                      </div>
                    </div>

                    {/* Contact 3: Land Joint-Venture & Development */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 sm:p-5 transition-colors hover:border-cobalt/30 hover:bg-blue-50/30">
                      <div className="flex items-start justify-between gap-2.5 sm:gap-3">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-ink">Land Joint Venture Desk</h4>
                          <p className="text-xs text-cobalt font-semibold mt-0.5">Land Development &amp; Joint Partnerships</p>
                          <p className="text-[11px] text-ink/65 mt-0.5 font-medium">Dhaka Prime Locations</p>
                        </div>
                        <a
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100 shrink-0"
                          href="https://wa.me/8801713048985?text=Hello,%20I%20have%20a%20land%20joint%20venture%20proposal%20for%20Mehrish%20Holdings."
                          rel="noreferrer"
                          target="_blank"
                        >
                          <MessageSquare className="size-3.5 text-emerald-600" />
                          WhatsApp
                        </a>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-ink/80">
                        <a className="font-bold text-ink hover:text-cobalt transition-colors" href="tel:+8801713048985">
                          +8801713048985
                        </a>
                        <span className="text-slate-300">•</span>
                        <a className="font-medium hover:text-cobalt transition-colors" href="mailto:trade@sngroupbd.com">
                          trade@sngroupbd.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Dynamic Property Inquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <MehrishInquiryForm
                  onPropertyChange={(p) => setSelectedProperty(p)}
                  selectedProperty={selectedProperty}
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
