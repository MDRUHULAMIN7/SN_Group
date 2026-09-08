"use client";

import { ArrowUpRight, Building2, DraftingCompass, Mail, Phone, ShipWheel } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const concernContacts = [
  {
    company: "S.N Eng Construction BD Ltd.",
    discipline: "Civil, Defense & Infrastructure",
    icon: DraftingCompass,
    serviceValue: "general-construction",
    phone: "+88 01305-771144",
    phoneHref: "tel:+8801305771144",
    email: "info@sngroup.com",
    emailHref: "mailto:info@sngroup.com",
    specialty: "Government tenders, Bangladesh Army/Navy projects, institutional civil structures & roads.",
    tag: "Engineering Division",
  },
  {
    company: "S.N Import & Export BD Ltd.",
    discipline: "Global Trade, Agro & Equipment",
    icon: ShipWheel,
    serviceValue: "procurement",
    phone: "+88 01783-216428",
    phoneHref: "tel:+8801783216428",
    email: "query@sngroup.com",
    emailHref: "mailto:query@sngroup.com",
    specialty: "Agricultural commodities, food inputs, industrial chemicals, heavy machinery & stone export.",
    tag: "Trade & Logistics",
  },
  {
    company: "Mehrish Holdings Ltd.",
    discipline: "Prime Real Estate & Architecture",
    icon: Building2,
    serviceValue: "development",
    phone: "+88 01305-771144",
    phoneHref: "tel:+8801305771144",
    email: "info@sngroup.com",
    emailHref: "mailto:info@sngroup.com",
    specialty: "Luxury apartments, commercial developments, and high-value properties in Gulshan, Banani & Uttara.",
    tag: "Property Development",
  },
];

export function SisterConcernContacts() {
  const handleSelectService = (serviceValue: string) => {
    const selectElem = document.getElementById("service") as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = serviceValue;
      selectElem.dispatchEvent(new Event("change", { bubbles: true }));
    }
    const formElem = document.getElementById("quotation-form");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-linear-to-b from-slate-50/60 via-white to-white py-16 sm:py-24">
      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/3 size-80 rounded-full bg-cobalt/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 size-80 rounded-full bg-blue-400/5 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 justify-center text-cobalt">Specialized Divisions</p>
            <h2 className="display-type text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Direct Sister Concern Desks
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/65">
              Contact our operating companies directly for immediate quotation review, tender coordination, or domain-specific consultations.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {concernContacts.map((concern, idx) => {
            const Icon = concern.icon;
            return (
              <Reveal
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1.5 hover:border-cobalt/40 hover:shadow-[0_24px_54px_rgba(21,94,239,0.12)]"
                delay={idx * 0.1}
                key={concern.company}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-cobalt via-blue-500 to-cyan-400 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-xl border border-cobalt/15 bg-blue-50 text-cobalt shadow-[0_8px_18px_rgba(21,94,239,0.10)] transition-[background-color,color,transform] duration-500 group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white">
                      <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
                    </span>
                    <span className="rounded-full border border-cobalt/15 bg-blue-50/70 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-cobalt">
                      {concern.tag}
                    </span>
                  </div>

                  <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-widest text-cobalt">
                    {concern.discipline}
                  </p>
                  <h3 className="display-type mt-1 text-xl font-bold text-ink">
                    {concern.company}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-ink/70">
                    {concern.specialty}
                  </p>

                  {/* Direct Contact Links */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs font-semibold">
                    <div className="flex items-center gap-2.5 text-ink/75">
                      <Phone aria-hidden="true" className="size-3.5 shrink-0 text-cobalt" />
                      <a className="font-mono transition-colors hover:text-cobalt" href={concern.phoneHref}>
                        {concern.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5 text-ink/75">
                      <Mail aria-hidden="true" className="size-3.5 shrink-0 text-cobalt" />
                      <a className="transition-colors hover:text-cobalt" href={concern.emailHref}>
                        {concern.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cobalt/20 bg-blue-50/70 px-4 py-2.5 text-xs font-bold text-cobalt transition-[background-color,color,border-color,box-shadow] duration-300 hover:border-cobalt hover:bg-cobalt hover:text-white hover:shadow-[0_10px_20px_rgba(21,94,239,0.18)]"
                    onClick={() => handleSelectService(concern.serviceValue)}
                    type="button"
                  >
                    <span>Request Quotation</span>
                    <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
