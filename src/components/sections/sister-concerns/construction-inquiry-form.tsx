"use client";

import { useState, useTransition } from "react";
import {
  CheckCircle2,
  LoaderCircle,
  Send,
  MessageSquare,
  Building2,
  HardHat,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { submitInquiry, type InquiryResult } from "@/actions/submit-inquiry";
import { Button } from "@/components/ui/button";

export const CONSTRUCTION_SERVICES = [
  { id: "defense", label: "Government & Defense Infrastructure (Army/Air Force/Navy)" },
  { id: "institutional", label: "Institutional & Administrative Buildings" },
  { id: "steel-hangar", label: "Specialized Steel Structure & Hangar Facilities" },
  { id: "multistorey", label: "Multi-Storey Commercial & Residential Complexes" },
  { id: "civil-roads", label: "Civil Infrastructure, Roads & Drainage Works" },
  { id: "electrical-abc", label: "ABC Electrical Substation & Turnkey Engineering" },
  { id: "other", label: "General Civil Engineering & Project Consultation" },
] as const;

export const BUDGET_RANGES = [
  "< 1 Crore BDT",
  "1 – 5 Crore BDT",
  "5 – 15 Crore BDT",
  "15 – 50 Crore BDT",
  "50 Crore+ BDT",
] as const;

export function ConstructionInquiryForm() {
  const [service, setService] = useState<string>(CONSTRUCTION_SERVICES[0].label);
  const [budget, setBudget] = useState<string>("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<InquiryResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Full name is required";
    if (!phone.trim()) errs.phone = "Contact number is required";
    if (!email.trim() || !email.includes("@")) errs.email = "Valid official email is required";
    if (!message.trim() || message.trim().length < 20) {
      errs.message = "Please provide project details (at least 20 characters)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setResult(null);
    startTransition(async () => {
      const response = await submitInquiry({
        name,
        company,
        phone,
        email,
        service,
        projectLocation: location,
        estimatedBudget: budget,
        message,
        website: "",
      });

      setResult(response);
      if (response.status === "success") {
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setLocation("");
        setMessage("");
        setBudget("");
      }
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      {/* Header Info */}
      <div className="border-b border-slate-200 pb-6 sm:pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cobalt/20 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cobalt">
          <HardHat className="size-3.5 text-cobalt" />
          Tender &amp; Project Inquiry
        </div>
        <h3 className="display-type mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink">
          Initiate a Construction Project Inquiry
        </h3>
        <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-ink/75 leading-relaxed">
          Submit your project requirements, tender brief, or engineering specifications. Our senior project directors and engineering estimation team will respond promptly.
        </p>
      </div>

      {result?.status === "success" ? (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/90 p-6 sm:p-8 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="size-7" />
          </div>
          <h4 className="mt-4 text-xl font-bold text-emerald-950">
            Inquiry Submitted Successfully!
          </h4>
          <p className="mt-2 text-sm text-emerald-800/90 max-w-md mx-auto">
            Thank you for reaching out to S.N Eng Construction BD Ltd. Our project engineering team will review your brief and contact you within 24 hours.
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-800"
            onClick={() => setResult(null)}
            type="button"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form className="mt-6 sm:mt-8 space-y-6" onSubmit={handleSubmit}>
          {result?.status === "error" && (
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
              {result.message}
            </div>
          )}

          {/* Service / Work Discipline */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Required Construction Discipline <span className="text-rose-500">*</span>
            </label>
            <select
              className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm font-medium text-ink focus:border-cobalt focus:bg-white focus:outline-none focus:ring-2 focus:ring-cobalt/20 transition-all"
              onChange={(e) => setService(e.target.value)}
              value={service}
            >
              {CONSTRUCTION_SERVICES.map((s) => (
                <option key={s.id} value={s.label}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Name & Organization */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-2 focus:ring-cobalt/20 transition-all"
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Major (Retd.) Rafiqul Islam / Engr. Tanvir"
                type="text"
                value={name}
              />
              {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Organization / Directorate / Client
              </label>
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-2 focus:ring-cobalt/20 transition-all"
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Directorate of Works / Private Developer"
                type="text"
                value={company}
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Phone or WhatsApp <span className="text-rose-500">*</span>
              </label>
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-2 focus:ring-cobalt/20 transition-all"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+880 1XXXXXXXXX"
                type="tel"
                value={phone}
              />
              {errors.phone && <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Official Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-2 focus:ring-cobalt/20 transition-all"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@organization.gov.bd"
                type="email"
                value={email}
              />
              {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
            </div>
          </div>

          {/* Project Location & Budget Range */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Project Site Location
              </label>
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-2 focus:ring-cobalt/20 transition-all"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Dhaka Cantonment, Tejgaon, Gazipur"
                type="text"
                value={location}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Estimated Project Budget
              </label>
              <select
                className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm font-medium text-ink focus:border-cobalt focus:bg-white focus:outline-none focus:ring-2 focus:ring-cobalt/20 transition-all"
                onChange={(e) => setBudget(e.target.value)}
                value={budget}
              >
                <option value="">Select an estimated range (optional)</option>
                {BUDGET_RANGES.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Scope of Work &amp; Specifications <span className="text-rose-500">*</span>
            </label>
            <textarea
              className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-2 focus:ring-cobalt/20 transition-all"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project requirements, structural scale, proposed commencement date, tender references, or specific deliverables..."
              rows={4}
              value={message}
            />
            {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message}</p>}
          </div>

          {/* Submit Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
              <span>Direct confidential submission to S.N Group Engineering Directorate</span>
            </div>

            <Button
              className="w-full sm:w-auto min-w-[200px] gap-2 rounded-xl bg-cobalt py-3.5 text-sm font-bold shadow-md shadow-cobalt/25 hover:bg-cobalt-dark transition-all"
              disabled={pending}
              type="submit"
            >
              {pending ? (
                <>
                  <LoaderCircle className="size-4 animate-spin" />
                  Submitting Brief...
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Submit Project Inquiry
                </>
              )}
            </Button>
          </div>
        </form>
      )}

      {/* Direct Communication Strip */}
      <div className="mt-8 border-t border-slate-200 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
        <div className="flex flex-wrap items-center gap-5">
          <a
            className="inline-flex items-center gap-2 font-semibold text-ink hover:text-cobalt transition-colors"
            href="tel:+8801305771144"
          >
            <Phone className="size-4 text-cobalt" />
            +88 01305-771144
          </a>
          <a
            className="inline-flex items-center gap-2 font-semibold text-ink hover:text-cobalt transition-colors"
            href="mailto:info@sngroupbd.com"
          >
            <Mail className="size-4 text-cobalt" />
            info@sngroupbd.com
          </a>
        </div>

        <a
          className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100"
          href="https://wa.me/8801608864687?text=Hello%20S.N%20Eng%20Construction%20BD%20Ltd,%20I%20have%20a%20construction%20project%20inquiry"
          rel="noreferrer"
          target="_blank"
        >
          <MessageSquare className="size-3.5 text-emerald-600" />
          Direct WhatsApp Chat
        </a>
      </div>
    </div>
  );
}
