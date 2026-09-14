"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Globe2,
  Mail,
  MessageSquare,
  PackageCheck,
  Phone,
  SearchCheck,
  Ship,
  Truck,
} from "lucide-react";
import type { SisterConcern } from "@/types/content";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { HeroBrandSlider } from "@/components/sections/sister-concerns/hero-brand-slider";
import { ImportInquiryForm, IMPORT_PRODUCTS } from "@/components/sections/sister-concerns/import-inquiry-form";

interface ProductCardItem {
  id: string;
  name: string;
  bangla: string;
  image: string;
  inquiryName: string;
}

const PRODUCTS_GRID_DATA: readonly ProductCardItem[] = [
  {
    id: "cassia",
    name: "Cassia / Cinnamon",
    bangla: "ক্যাসিয়া / দারুচিনি",
    image: "/images/import-export/products/img_1.jpg",
    inquiryName: "Tiger Brand — Mehris Premium Cassia / Cinnamon [ক্যাসিয়া / দারুচিনি]",
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    bangla: "গোলমরিচ",
    image: "/images/import-export/products/black_pepper_jar.jpg",
    inquiryName: "Tiger Brand — Mehris Premium Black Pepper [গোলমরিচ]",
  },
  {
    id: "cloves",
    name: "Cloves",
    bangla: "লবঙ্গ",
    image: "/images/import-export/products/img_6.jpg",
    inquiryName: "Cloves [লবঙ্গ]",
  },
  {
    id: "red-lentils",
    name: "Red Lentils",
    bangla: "মসুর ডাল",
    image: "/images/import-export/products/img_9.jpg",
    inquiryName: "Red Lentils [মসুর ডাল]",
  },
  {
    id: "cumin",
    name: "Cumin Seeds",
    bangla: "জিরা",
    image: "/images/import-export/products/img_12.jpg",
    inquiryName: "Cumin [জিরা]",
  },
  {
    id: "milk-powder",
    name: "Milk Powder",
    bangla: "দুধের গুঁড়া",
    image: "/images/import-export/products/img_5.jpg",
    inquiryName: "Milk Powder [দুধের গুঁড়া]",
  },
  {
    id: "tiger-brand-cartons",
    name: "Tiger Brand Cassia",
    bangla: "টাইগার ব্র্যান্ড ক্যাসিয়া",
    image: "/images/import-export/products/img_3.jpg",
    inquiryName: "Tiger Brand — Mehris Premium Cassia / Cinnamon [ক্যাসিয়া / দারুচিনি]",
  },
  {
    id: "chemicals",
    name: "Industrial Chemicals",
    bangla: "শিল্প রাসায়নিক",
    image: "/images/import-export/products/img_8.jpg",
    inquiryName: "Chemical Products [শিল্প রাসায়নিক]",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Product Inquiry",
    bangla: "পণ্য অনুসন্ধান",
    icon: SearchCheck,
    description:
      "Select a Tiger Brand product or submit a request for a custom importable order according to your commercial specifications.",
  },
  {
    number: "02",
    title: "Quotation & Terms",
    bangla: "দরপত্র ও শর্তাবলী",
    icon: FileText,
    description:
      "We provide competitive pricing (e.g., FOB, CIF or landed costs) and verify minimum order quantities (MOQ) with full transparency.",
  },
  {
    number: "03",
    title: "L/C & Sourcing",
    bangla: "এলসি ও সোর্সিং",
    icon: Ship,
    description:
      "S.N Group manages the international sourcing, origin quality assurance, and complete Letter of Credit (L/C) documentation.",
  },
  {
    number: "04",
    title: "Delivery",
    bangla: "খালাস ও ডেলিভারি",
    icon: PackageCheck,
    description:
      "We handle custom clearance at Chattogram/Mongla ports and ensure secure transport straight to your warehouse or factory in Bangladesh.",
  },
] as const;

export function ImportExportDetail({ concern }: { concern: SisterConcern }) {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    IMPORT_PRODUCTS[0].label
  );

  const scrollToInquiry = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
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
          SECTION 1: HERO & INTRO WITH BRAND SLIDER AND PRODUCTS GRID CARDS
          ========================================================================= */}
      <section
        className="relative border-t border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 py-12 sm:py-16 lg:py-20 text-ink"
        id="product-import-inquiry"
      >
        <Container>
          {/* Main Hero Split: Left Text + Right Brand Slider */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Section: Intro Text & Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>

                <h1 className="display-type text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl leading-[1.1]">
                  S.N Import &amp; Export BD Ltd.
                </h1>

                <p className="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold text-cobalt leading-snug">
                  Connecting Bangladesh with Global Commodity &amp; Chemical Markets.
                </p>

                <p className="mt-5 text-lg sm:text-xl leading-relaxed text-ink/85">
                  As the international trading arm of S.N Group, S.N Import &amp; Export BD Ltd. connects commercial enterprises with verified global producers. We specialize in the bulk sourcing, import, and distribution of agricultural commodities, food ingredients, and industrial chemicals.
                </p>

                <p className="mt-4 text-lg sm:text-xl leading-relaxed text-ink/80">
                  From competitive pricing and Letter of Credit (L/C) documentation to port clearance and nationwide delivery, we manage the complete commercial import lifecycle with guaranteed origin quality.
                </p>


                {/* Action Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cobalt px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-cobalt/25 transition-all duration-300 hover:scale-[1.02] hover:bg-cobalt-dark active:scale-[0.98]"
                    onClick={() => scrollToInquiry()}
                    type="button"
                  >
                    Send Product Inquiry
                    <ArrowRight className="size-4" />
                  </button>

                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-bold text-ink shadow-sm transition-all duration-300 hover:border-cobalt hover:bg-blue-50/50 hover:text-cobalt"
                    href="#available-products"
                  >
                    View Products
                    <ArrowUpRight className="size-4" />
                  </a>

                  <a
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-5 py-3.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
                    href="https://wa.me/8801608864687?text=Hello%20S.N%20Group,%20I%20want%20to%20inquire%20about%20Product%20Import"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <MessageSquare className="size-4 text-emerald-600" />
                    WhatsApp Hotline
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Section: Brand Image Slider (Featuring the 2 uploaded brand designs) */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <HeroBrandSlider />
              </Reveal>
            </div>
          </div>

          {/* =========================================================================
              PRODUCTS LIST IN GRID VIEW CARDS (niche prodcuts list thakbe grid view card akare)
              ========================================================================= */}
          <div className="mt-14 sm:mt-20" id="available-products">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cobalt">
                    <Globe2 className="size-3.5 text-cobalt" />
                    Commodity &amp; Chemical Portfolio
                  </div>
                  <h2 className="display-type mt-1 text-2xl sm:text-3xl font-extrabold text-ink">
                    Available Import Products
                  </h2>
                </div>
                <p className="max-w-md text-xs sm:text-sm text-ink/70">
                  Click any product card below to instantly pre-fill your inquiry form for expedited pricing.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {PRODUCTS_GRID_DATA.map((prod, idx) => (
                <Reveal delay={idx * 0.04} key={prod.id}>
                  <div
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cobalt/50 hover:shadow-xl hover:shadow-cobalt/10 cursor-pointer"
                    onClick={() => scrollToInquiry(prod.inquiryName)}
                    role="button"
                    tabIndex={0}
                  >
                    {/* Product Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        alt={prod.name}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        src={prod.image}
                      />
                    </div>

                    {/* Clean Minimal Title without extra info */}
                    <div className="pt-3 pb-1 text-center">
                      <h3 className="text-base font-bold text-ink group-hover:text-cobalt transition-colors leading-snug">
                        {prod.name}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-cobalt">
                        [{prod.bangla}]
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Banner Reminder */}
            <Reveal className="mt-8" delay={0.1}>
              <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-cobalt text-white shadow-md shrink-0">
                    <Truck className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">
                      Looking for custom spices, pulses, or industrial chemicals not listed above?
                    </p>
                    <p className="text-xs text-ink/70">
                      <strong>If you give us an order, we can import on behalf of you</strong> through our direct manufacturer network in Vietnam, India, Indonesia, and China.
                    </p>
                  </div>
                </div>
                <button
                  className="shrink-0 rounded-xl bg-cobalt px-4 py-2.5 text-xs font-bold text-white transition hover:bg-cobalt-dark shadow-sm"
                  onClick={() => scrollToInquiry("Custom Bulk Import [অন্যান্য পণ্য]")}
                  type="button"
                >
                  Request Custom Sourcing
                </button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>



      {/* =========================================================================
          SECTION 3: HOW WE WORK (THE IMPORT PROCESS)
          ========================================================================= */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-14 sm:py-20 lg:py-24 text-ink" id="import-process">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-2 text-cobalt">Streamlined Global Trade</p>
            <h2 className="display-type text-3xl sm:text-5xl font-extrabold tracking-tight">
              How We Work (The Import Process)
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink/70">
              A transparent, 4-step international commercial trade process managed by S.N Group from global origin to landed delivery in Bangladesh.
            </p>
          </Reveal>

          {/* 4-Step Infographic Grid */}
          <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal className="h-full" delay={idx * 0.08} key={step.number}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-400 hover:-translate-y-2 hover:border-cobalt hover:shadow-xl hover:shadow-cobalt/10">
                    {/* Top Step Number Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="grid size-12 place-items-center rounded-xl border border-cobalt/20 bg-blue-50 text-cobalt transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white">
                        <Icon className="size-6" />
                      </span>
                      <span className="font-mono text-3xl font-black text-slate-200 group-hover:text-cobalt/30 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="display-type text-lg font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-cobalt mb-3">
                      [{step.bangla}]
                    </p>

                    <p className="text-xs sm:text-sm leading-relaxed text-ink/70">
                      {step.description}
                    </p>

                    {/* Connecting indicator bar */}
                    <div className="mt-auto pt-5">
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
          SECTION 4: DEDICATED CONTACT & INQUIRY PAGE (CRUCIAL INTEGRATION)
          ========================================================================= */}
      <section
        className="blueprint-grid border-t border-slate-200 bg-white py-14 sm:py-20 lg:py-24 text-ink"
        id="contact-inquiry-section"
      >
        <Container>
          <Reveal className="mb-8 text-center max-w-2xl mx-auto">
            <h2 className="display-type text-2xl sm:text-4xl font-extrabold tracking-tight">
              Product Import Inquiry &amp; Contacts
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-ink/65">
              Connect directly with our designated trade managers or submit your specifications below.
            </p>
          </Reveal>

          {/* Split Screen: Left Clean Contacts + Right Inquiry Form */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Official Corporate Contacts */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="display-type text-2xl sm:text-3xl font-bold text-ink">
                      Direct Trade Contacts
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base text-ink/70">
                      Direct lines for product inquiries, pricing, and L/C terms.
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Contact 1: Ishrat Jahan Anannya */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5 transition-colors hover:border-cobalt/30 hover:bg-blue-50/30">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-ink">Ishrat Jahan Anannya</h4>
                          <p className="text-base text-cobalt font-semibold mt-1">Head of Business &amp; Communication</p>
                          <p className="text-sm text-ink/65 mt-0.5 font-medium">Agriculture &amp; Food Products</p>
                        </div>
                        <a
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3.5 py-2 text-xs sm:text-sm font-bold text-emerald-700 transition hover:bg-emerald-100 shrink-0"
                          href="https://wa.me/8801608864687?text=Hello%20Ishrat%20Jahan,%20I%20have%20an%20import%20inquiry%20for%20S.N%20Group."
                          rel="noreferrer"
                          target="_blank"
                        >
                          <MessageSquare className="size-4 text-emerald-600" />
                          WhatsApp
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-ink/80">
                        <a className="font-bold text-ink hover:text-cobalt transition-colors" href="tel:+8801608864687">
                          +8801608864687
                        </a>
                        <span className="text-slate-300">•</span>
                        <a className="font-medium hover:text-cobalt transition-colors" href="mailto:info@sngroupbd.com">
                          info@sngroupbd.com
                        </a>
                      </div>
                    </div>

                    {/* Contact 2: Biplab Kumar Saha */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5 transition-colors hover:border-cobalt/30 hover:bg-blue-50/30">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-ink">Biplab Kumar Saha</h4>
                          <p className="text-base text-cobalt font-semibold mt-1">International Trade Manager</p>
                          <p className="text-sm text-ink/65 mt-0.5 font-medium">Agriculture &amp; Food Products</p>
                        </div>
                        <a
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3.5 py-2 text-xs sm:text-sm font-bold text-emerald-700 transition hover:bg-emerald-100 shrink-0"
                          href="https://wa.me/8801335229070?text=Hello%20Biplab%20Kumar,%20I%20have%20an%20import%20inquiry%20for%20S.N%20Group."
                          rel="noreferrer"
                          target="_blank"
                        >
                          <MessageSquare className="size-4 text-emerald-600" />
                          WhatsApp
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-ink/80">
                        <a className="font-bold text-ink hover:text-cobalt transition-colors" href="tel:+8801335229070">
                          +8801335229070
                        </a>
                        <span className="text-slate-300">•</span>
                        <a className="font-bold text-ink hover:text-cobalt transition-colors" href="tel:+8801713048985">
                          +8801713048985
                        </a>
                        <span className="text-slate-300">•</span>
                        <a className="font-medium hover:text-cobalt transition-colors" href="mailto:query@sngroupbd.com">
                          query@sngroupbd.com
                        </a>
                      </div>
                    </div>

                    {/* Contact 3: Ashik Mahmud Haydari */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5 transition-colors hover:border-cobalt/30 hover:bg-blue-50/30">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-ink">Ashik Mahmud Haydari</h4>
                          <p className="text-base text-cobalt font-semibold mt-1">Trade Manager</p>
                          <p className="text-sm text-ink/65 mt-0.5 font-medium">Chemical Products</p>
                        </div>
                        <a
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3.5 py-2 text-xs sm:text-sm font-bold text-emerald-700 transition hover:bg-emerald-100 shrink-0"
                          href="https://wa.me/8801894824091?text=Hello%20Ashik%20Mahmud,%20I%20have%20an%20inquiry%20regarding%20Chemical%20Products."
                          rel="noreferrer"
                          target="_blank"
                        >
                          <MessageSquare className="size-4 text-emerald-600" />
                          WhatsApp
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-ink/80">
                        <a className="font-bold text-ink hover:text-cobalt transition-colors" href="tel:+8801894824091">
                          +8801894824091
                        </a>
                        <span className="text-slate-300">•</span>
                        <a className="font-bold text-ink hover:text-cobalt transition-colors" href="tel:+8801335229071">
                          +8801335229071
                        </a>
                        <span className="text-slate-300">•</span>
                        <a className="font-medium hover:text-cobalt transition-colors" href="mailto:query@sngroupbd.com">
                          query@sngroupbd.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Dynamic Inquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <ImportInquiryForm
                  onProductChange={(p) => setSelectedProduct(p)}
                  selectedProduct={selectedProduct}
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
