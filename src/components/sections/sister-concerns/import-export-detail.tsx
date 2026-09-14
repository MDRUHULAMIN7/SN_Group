import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  FileText,
  FlaskConical,
  Globe2,
  Mail,
  PackageCheck,
  Phone,
  SearchCheck,
  Ship,
  Wheat,
} from "lucide-react";
import type { SisterConcern } from "@/types/content";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ProductImageSlider } from "@/components/sections/sister-concerns/product-image-slider";

const products = [
  {
    title: "Tiger Brand — Mehrish Premium Cassia / Cinnamon",
    bangla: "ক্যাসিয়া / দারুচিনি",
    details: "Net Weight — 25 Kg · Made in Vietnam · S.N Group",
    images: [
      "/images/import-export/tiger-cinnamon-brand.jpg",
      "/images/import-export/tiger-cinnamon-brand.png",
    ],
  },
  {
    title: "Tiger Brand — Mehrish Premium Black Pepper",
    bangla: "গোলমরিচ",
    details: "Net Weight — 25 Kg · Made in Vietnam · S.N Group",
    images: [
      "/images/import-export/tiger-black-pepper-brand-secondary.jpg",
      "/images/import-export/tiger-black-pepper-brand.jpg",
      "/images/import-export/tiger-black-pepper-brand-alt.jpg",
    ],
  },
] as const;

const productCategories = [
  "Cassia / Cinnamon",
  "Cloves",
  "Black Pepper",
  "Red Lentils",
  "Cumin",
  "Milk Powder",
] as const;

const processSteps = [
  {
    icon: SearchCheck,
    number: "01",
    title: "Product Inquiry",
    description: "Select a Tiger Brand product or submit a request for a custom importable order.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Quotation & Terms",
    description: "We provide competitive FOB or landed pricing and confirm the applicable minimum order quantity.",
  },
  {
    icon: Ship,
    number: "03",
    title: "L/C & Sourcing",
    description: "Our team manages international sourcing, quality assurance, and Letter of Credit documentation.",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Delivery",
    description: "We coordinate port clearance and secure transport to your facility in Bangladesh.",
  },
] as const;

const inquiryContacts = [
  {
    area: "Agriculture & Food Products",
    name: "Ishrat Jahan Anannya",
    role: "Head of Business & Communication",
    phones: ["+880 1608-864687"],
    email: "info@sngroupbd.com",
    icon: Wheat,
  },
  {
    area: "International Trade",
    name: "Biplab Kumar Saha",
    role: "International Trade Manager",
    phones: ["+880 1335-229070", "+880 1713-048985"],
    email: "query@sngroupbd.com",
    icon: Ship,
  },
  {
    area: "Chemical Products",
    name: "Ashik Mahmud Haydari",
    role: "Trade Manager",
    phones: ["+880 1894-824091", "+880 1335-229071"],
    icon: FlaskConical,
  },
] as const;

export function ImportExportDetail({ concern }: { concern: SisterConcern }) {
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

      <section className="border-t border-slate-200 bg-white py-14 text-ink sm:py-20 lg:py-24" id="product-import-inquiry">
        <Container>
          <Reveal>
            <div className="group relative isolate overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.1)] transition-[border-color,box-shadow] duration-700 hover:border-cobalt/35 hover:shadow-[0_32px_90px_rgba(21,94,239,0.16)]">
              <span className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.14),transparent_68%)] transition-transform duration-1000 group-hover:scale-125" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-[0.22] bg-gradient-to-r from-cobalt via-sky-400 to-transparent transition-transform duration-1000 group-hover:scale-x-100" />

              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative z-10 p-6 sm:p-10 lg:p-14">
                  <p className="eyebrow mb-4 text-cobalt">Product Import Inquiry</p>
                  <h2 className="display-type max-w-xl text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
                    Source globally. Deliver confidently.
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg sm:leading-9">{concern.description}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/60">
                    If your required item is not listed, our trade team can assess a custom import order through its international producer and supplier network.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {productCategories.map((product) => (
                      <span className="rounded-full border border-cobalt/15 bg-blue-50 px-3 py-1.5 text-xs font-bold text-cobalt transition-all duration-300 hover:-translate-y-0.5 hover:border-cobalt/35 hover:shadow-[0_7px_18px_rgba(21,94,239,0.1)]" key={product}>
                        {product}
                      </span>
                    ))}
                  </div>

                  <ButtonLink className="mt-8 w-full justify-center sm:w-fit" href="/contact#quotation-form" variant="primary">
                    Request a Sourcing Quote
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </ButtonLink>
                </div>

                <div className="relative min-h-[360px] overflow-hidden border-t border-slate-200 bg-slate-950 lg:min-h-full lg:border-l lg:border-t-0">
                  <Image
                    alt="Tiger Brand cassia cartons ready for commercial import"
                    className="object-cover opacity-78 transition-transform duration-1000 ease-out group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    src="/images/import-export/tiger-cassia-cartons.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-950/28 to-cobalt/28" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/20 bg-slate-950/45 p-4 text-white backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1">
                        <Globe2 aria-hidden="true" className="size-5 text-sky-300" />
                        <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white/55">Sourcing Network</p>
                        <p className="mt-1 text-sm font-bold">International producers &amp; suppliers</p>
                      </div>
                      <div className="rounded-2xl border border-white/20 bg-slate-950/45 p-4 text-white backdrop-blur-xl transition-transform delay-75 duration-500 group-hover:-translate-y-1">
                        <CheckCircle2 aria-hidden="true" className="size-5 text-emerald-300" />
                        <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white/55">Trade Support</p>
                        <p className="mt-1 text-sm font-bold">Quotation to landed delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Section 2: Tiger Brand Master Brand & Products Showcase */}
      <section className="blueprint-grid border-t border-slate-200 bg-white py-14 text-ink sm:py-20 lg:py-24" id="tiger-brand-products">
        <Container>
          {/* Tiger Brand Master Identity Header */}
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cobalt/20 bg-blue-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cobalt shadow-[0_2px_10px_rgba(21,94,239,0.08)]">
              <BadgeCheck aria-hidden="true" className="size-4" />
              Flagship Brand by S.N Group
            </div>
            <h2 className="display-type mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Tiger Brand <span className="text-cobalt">[টাইগার ব্র্যান্ড]</span>
            </h2>
            <p className="mt-2 text-base font-bold uppercase tracking-[0.14em] text-cobalt sm:text-lg">
              Mehris Premium Agricultural &amp; Food Commodities
            </p>
            <p className="mt-4 text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
              S.N Import &amp; Export BD Ltd is the official custodian and importer of <strong>Tiger Brand</strong>. Sourced directly from premier agricultural hubs in Vietnam and globally, Tiger Brand provides unadulterated purity, international 25 Kg export-grade packaging, and seamless commercial trade delivery across Bangladesh.
            </p>

            {/* Brand Assurance Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs font-semibold text-ink">
                <CheckCircle2 aria-hidden="true" className="size-4 text-emerald-600" />
                Made in Vietnam
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs font-semibold text-ink">
                <CheckCircle2 aria-hidden="true" className="size-4 text-emerald-600" />
                25 Kg Standard Export Packs
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs font-semibold text-ink">
                <CheckCircle2 aria-hidden="true" className="size-4 text-emerald-600" />
                100% Pure &amp; Lab-Tested
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs font-semibold text-ink">
                <CheckCircle2 aria-hidden="true" className="size-4 text-emerald-600" />
                Complete L/C &amp; Port Clearance
              </span>
            </div>
          </Reveal>

          {/* Sub-Products under Tiger Brand: Flagship Mehris Premium Products */}
          <div className="mt-12 sm:mt-16">
            <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-cobalt">Products under Tiger Brand</p>
                <h3 className="display-type text-2xl font-extrabold sm:text-3xl">Flagship Product Line</h3>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-cobalt">
                2 Core Flagship Lines
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Product 1: Mehris Premium Cassia / Cinnamon */}
              <Reveal className="h-full" delay={0.06}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-[border-color,box-shadow,transform] duration-700 ease-out hover:-translate-y-2 hover:border-cobalt/35 hover:shadow-[0_30px_76px_rgba(21,94,239,0.17)]">
                  <ProductImageSlider
                    images={[
                      "/images/import-export/tiger-cinnamon-brand.jpg",
                      "/images/import-export/tiger-cinnamon-brand.png",
                    ]}
                    title="Tiger Brand — Mehris Premium Cassia / Cinnamon [ক্যাসিয়া / দারুচিনি]"
                  />
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cobalt/20 bg-blue-50 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cobalt">
                        <BadgeCheck aria-hidden="true" className="size-3.5" />
                        Brand: Tiger Brand
                      </span>
                      <span className="text-xs font-bold text-ink/60">Product Line: Mehris Premium</span>
                    </div>

                    <h4 className="display-type mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                      Tiger Brand — Mehris Premium Cassia / Cinnamon{" "}
                      <span className="whitespace-nowrap text-cobalt">[ক্যাসিয়া / দারুচিনি]</span>
                    </h4>

                    <div className="mt-4 space-y-1.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-xs text-ink/75">
                      <p><strong className="font-semibold text-ink">Net Weight:</strong> 25 Kg standard packaging</p>
                      <p><strong className="font-semibold text-ink">Origin:</strong> Made in Vietnam</p>
                      <p><strong className="font-semibold text-ink">Import Custodian:</strong> S.N Group (S.N Import &amp; Export BD Ltd)</p>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-ink/65">
                      Export-grade, high-aroma whole cassia/cinnamon sticks sorted for moisture control, thick bark consistency, and high essential cinnamaldehyde content.
                    </p>

                    <ButtonLink className="mt-7 w-full justify-center sm:w-fit" href="/contact#quotation-form" variant="primary">
                      Send Inquiry for this Product
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>

              {/* Product 2: Mehris Premium Black Pepper */}
              <Reveal className="h-full" delay={0.12}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-[border-color,box-shadow,transform] duration-700 ease-out hover:-translate-y-2 hover:border-cobalt/35 hover:shadow-[0_30px_76px_rgba(21,94,239,0.17)]">
                  <ProductImageSlider
                    images={[
                      "/images/import-export/tiger-black-pepper-brand-secondary.jpg",
                      "/images/import-export/tiger-black-pepper-brand.jpg",
                      "/images/import-export/tiger-black-pepper-brand-alt.jpg",
                    ]}
                    title="Tiger Brand — Mehris Premium Black Pepper [গোলমরিচ]"
                  />
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cobalt/20 bg-blue-50 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cobalt">
                        <BadgeCheck aria-hidden="true" className="size-3.5" />
                        Brand: Tiger Brand
                      </span>
                      <span className="text-xs font-bold text-ink/60">Product Line: Mehris Premium</span>
                    </div>

                    <h4 className="display-type mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                      Tiger Brand — Mehris Premium Black Pepper{" "}
                      <span className="whitespace-nowrap text-cobalt">[গোলমরিচ]</span>
                    </h4>

                    <div className="mt-4 space-y-1.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-xs text-ink/75">
                      <p><strong className="font-semibold text-ink">Net Weight:</strong> 25 Kg standard packaging</p>
                      <p><strong className="font-semibold text-ink">Origin:</strong> Made in Vietnam</p>
                      <p><strong className="font-semibold text-ink">Import Custodian:</strong> S.N Group (S.N Import &amp; Export BD Ltd)</p>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-ink/65">
                      Heavy-density, bold-grained whole black pepper selected for high piperine percentage, pungent bite, and moisture-free commercial shelf life.
                    </p>

                    <ButtonLink className="mt-7 w-full justify-center sm:w-fit" href="/contact#quotation-form" variant="primary">
                      Send Inquiry for this Product
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>

          {/* Extended Products & Custom Client Import Guarantee */}
          <Reveal className="mt-12" delay={0.16}>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50/70 via-white to-slate-50/60 p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cobalt/20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-cobalt">
                    <span>Extended Portfolio &amp; Custom Sourcing</span>
                  </div>
                  <h3 className="display-type mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    More Products Available Under S.N Import &amp; Export
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70">
                    Apart from Cassia and Black Pepper, we supply and import the following agricultural food commodities. <strong>If you give us an order, we can import any item on your behalf</strong> with verified origin inspection, competitive bulk pricing, and port clearance.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {[
                      { name: "Cloves", bangla: "লবঙ্গ" },
                      { name: "Red Lentils", bangla: "মসুর ডাল" },
                      { name: "Cumin", bangla: "জিরা" },
                      { name: "Milk Powder", bangla: "দুধের গুঁড়া" },
                      { name: "Chemical Products", bangla: "রাসায়নিক পণ্য" },
                      { name: "Custom Bulk Order", bangla: "কাস্টম আমদানি" },
                    ].map((item) => (
                      <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm transition-all hover:border-cobalt/40" key={item.name}>
                        <p className="text-xs font-bold text-ink">{item.name}</p>
                        <p className="text-[0.72rem] font-medium text-cobalt">{item.bangla}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start rounded-2xl border border-cobalt/20 bg-white p-6 shadow-sm sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cobalt">Client Import Guarantee</p>
                  <h4 className="display-type mt-1 text-xl font-bold">Have a custom commodity requirement?</h4>
                  <p className="mt-2 text-xs leading-6 text-ink/65">
                    Submit your target volume, required grade, and delivery schedule. Our international trade desk will establish supply lines, open Letters of Credit (L/C), and deliver landed cargo to your facility.
                  </p>
                  <ButtonLink className="mt-6 w-full justify-center" href="/contact#quotation-form" variant="primary">
                    Order a Custom Import
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-14 text-ink sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3 text-cobalt">The Import Process</p>
            <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-6xl">How We Work</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 sm:mt-14">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal className="h-full" delay={index * 0.06} key={step.number}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.055)] transition-all duration-500 hover:-translate-y-1.5 hover:border-cobalt/35 hover:shadow-[0_22px_48px_rgba(21,94,239,0.13)]">
                    <span className="absolute right-5 top-4 text-3xl font-black text-cobalt/10 transition-colors group-hover:text-cobalt/20">{step.number}</span>
                    <span className="grid size-12 place-items-center rounded-xl border border-cobalt/15 bg-blue-50 text-cobalt transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <h3 className="display-type mt-5 text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/62">{step.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="blueprint-grid border-t border-slate-200 bg-white py-14 text-ink sm:py-20 lg:py-24" id="trade-inquiry-team">
        <Container>
          <Reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow mb-3 text-cobalt">Dedicated Contact Team</p>
              <h2 className="display-type text-4xl font-extrabold tracking-tight sm:text-6xl">Speak to the right trade desk.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink/62 lg:justify-self-end sm:text-base">
              Contact the relevant specialist directly, or send the complete requirement through our inquiry form for coordinated review.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3 sm:mt-14">
            {inquiryContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Reveal className="h-full" delay={index * 0.07} key={contact.name}>
                  <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.055)] sm:p-7">
                    <span className="grid size-11 place-items-center rounded-xl border border-cobalt/15 bg-blue-50 text-cobalt">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.13em] text-cobalt">{contact.area}</p>
                    <h3 className="display-type mt-2 text-2xl font-bold">{contact.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-ink/55">{contact.role}</p>
                    <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-sm">
                      {contact.phones.map((phone) => (
                        <a className="flex items-center gap-2.5 font-semibold text-ink/72 transition-colors hover:text-cobalt" href={`tel:${phone.replace(/\D/g, "")}`} key={phone}>
                          <Phone aria-hidden="true" className="size-4 text-cobalt" /> {phone}
                        </a>
                      ))}
                      {"email" in contact ? (
                        <a className="flex items-center gap-2.5 font-semibold text-ink/72 transition-colors hover:text-cobalt" href={`mailto:${contact.email}`}>
                          <Mail aria-hidden="true" className="size-4 text-cobalt" /> {contact.email}
                        </a>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-8 flex justify-center" delay={0.14}>
            <ButtonLink href="/contact#quotation-form" size="lg" variant="primary">
              Submit a Product Inquiry
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
