"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const faqs = [
  {
    question: "How quickly can I expect a response to a Request for Quotation (RFQ)?",
    answer:
      "Our technical appraisal desk reviews all preliminary briefs within 24 to 48 business hours. For complex civil engineering or multi-tier procurement tenders, our project director will reach out directly to coordinate drawing submissions and initial BOQ alignment.",
  },
  {
    question: "Can we arrange an in-person boardroom meeting at your Gulshan headquarters?",
    answer:
      "Yes, executive consultations are hosted at Silver Tower (Lift 4), 52 Gulshan Avenue. We recommend booking at least 24 hours in advance through our switchboard (+88-02-41080412) or via email so our engineering leads can prepare relevant project dossiers and arrange visitor parking.",
  },
  {
    question: "Do you execute construction and development projects outside of Dhaka?",
    answer:
      "Yes. S.N Group has successfully delivered significant defense, civil infrastructure, and institutional projects across multiple divisions of Bangladesh, including naval installations, army cantonments, and regional logistics corridors.",
  },
  {
    question: "What initial documentation is helpful for procurement or import/export inquiries?",
    answer:
      "Supplying product technical specifications, target volumes (metric tons or shipping containers), destination port (Chittagong or Mongla), and preferred delivery timeframes allows our trade team to provide competitive CIF/FOB pricing with verified supply-chain schedules.",
  },
  {
    question: "How are urgent site or operational emergencies routed outside normal hours?",
    answer:
      "Active site managers and authorized partners can contact our priority operational mobile desk directly at +88 01305-771144 or connect via our 24/7 WhatsApp emergency channel for immediate supervisory escalation.",
  },
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-slate-50/50 py-16 sm:py-24" id="contact-faq">
      <Container className="max-w-4xl">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow mb-3 sm:mb-4 justify-center text-cobalt">Frequently Asked Questions</p>
            <h2 className="display-type text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Commercial & Project Inquiries
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/65">
              Clear answers to common questions about quotations, site visits, tenders, and operational coordination.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.03)] transition-[border-color,box-shadow] duration-300 hover:border-cobalt/30 hover:shadow-[0_12px_32px_rgba(21,94,239,0.07)]"
                delay={idx * 0.05}
                key={faq.question}
              >
                <button
                  aria-controls={`faq-answer-${idx}`}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  onClick={() => toggleFaq(idx)}
                  type="button"
                >
                  <span className="flex items-center gap-3">
                    <span className={`grid size-7 shrink-0 place-items-center rounded-lg text-xs font-bold transition-colors ${isOpen ? "bg-cobalt text-white" : "bg-blue-50 text-cobalt"}`}>
                      <HelpCircle aria-hidden="true" className="size-4" />
                    </span>
                    <span className="font-bold text-sm sm:text-base text-ink">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-5 shrink-0 text-cobalt transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  id={`faq-answer-${idx}`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-6 pb-6 pt-4 text-xs sm:text-sm leading-relaxed text-ink/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
