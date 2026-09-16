"use client";

import { useState, useTransition, useEffect } from "react";
import {
  CheckCircle2,
  LoaderCircle,
  Send,
  MessageSquare,
  Building2,
  Home,
} from "lucide-react";
import { submitInquiry, type InquiryResult } from "@/actions/submit-inquiry";
import { Button } from "@/components/ui/button";

export const MEHRISH_PROPERTIES = [
  { id: "crown-heights", label: "Mehrish Crown Heights — Gulshan-2 [লাক্সারি অ্যাপার্টমেন্ট ও পেন্টহাউস]" },
  { id: "trade-center", label: "Mehrish Trade Center — Banani Road 11 [বাণিজ্যিক ফ্লোর স্পেস]" },
  { id: "lakefront-vista", label: "Mehrish Lakefront Vista — Dhanmondi [লেকভিউ রেসিডেন্সিয়াল স্যুট]" },
  { id: "corporate-point", label: "Mehrish Corporate Point — Tejgaon [কর্পোরেট অফিস স্পেস]" },
  { id: "green-oasis", label: "Mehrish Green Oasis — Uttara [ইকো-ফ্রেন্ডলি অ্যাপার্টমেন্ট]" },
  { id: "joint-venture", label: "Land Joint Venture Partnership [ভূমি উন্নয়ন ও যৌথ অংশীদারিত্ব]" },
  { id: "custom", label: "Custom Property Inquiry [অন্যান্য রিয়েল এস্টেট অনুসন্ধান]" },
] as const;

export const UNIT_TYPES = [
  "3-4 Bedroom Luxury Apartment (2,400 - 3,500 sqft)",
  "Duplex / Penthouse Suite (3,800 - 5,000 sqft)",
  "Commercial Office Floor (3,000 - 10,000 sqft)",
  "Retail & Showroom Space (Ground / 1st Floor)",
  "Joint Venture Land Proposal (5+ Katha in Dhaka)",
] as const;

interface MehrishInquiryFormProps {
  selectedProperty?: string;
  onPropertyChange?: (property: string) => void;
}

export function MehrishInquiryForm({
  selectedProperty = MEHRISH_PROPERTIES[0].label,
  onPropertyChange,
}: MehrishInquiryFormProps) {
  const [property, setProperty] = useState<string>(selectedProperty);
  const [unitType, setUnitType] = useState<string>(UNIT_TYPES[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<InquiryResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedProperty) {
      setProperty(selectedProperty);
    }
  }, [selectedProperty]);

  const handlePropertySelect = (p: string) => {
    setProperty(p);
    if (onPropertyChange) onPropertyChange(p);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Full name is required";
    if (!phone.trim()) errs.phone = "Phone or WhatsApp number is required";
    if (!email.trim() || !email.includes("@")) errs.email = "Valid email is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setResult(null);
    startTransition(async () => {
      const detailedMessage = `[Mehrish Holdings Real Estate Inquiry]\nProperty / Development: ${property}\nUnit Type / Space Requirement: ${unitType}\nMessage: ${message || "General property inquiry & brochure request."}`;

      const response = await submitInquiry({
        name,
        company: "Private Buyer / Commercial Tenant",
        email,
        phone,
        service: "design-build",
        projectLocation: "Dhaka, Bangladesh",
        estimatedBudget: "Above 2 Crore BDT",
        message: detailedMessage,
        website: "",
      });

      setResult(response);
      if (response.status === "success") {
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      }
    });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*Mehrish Holdings Property Inquiry*\n` +
      `Property: ${property}\n` +
      `Requirement: ${unitType}\n` +
      `Name: ${name || "Client"}\n` +
      `Phone: ${phone || "Provided on chat"}\n\n` +
      `Hello Mehrish Holdings Desk, I would like to receive the digital brochure and floor layout plan for this development.`
    );
    window.open(`https://wa.me/8801608864687?text=${text}`, "_blank");
  };

  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8 shadow-sm"
      id="inquiry-form"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-cobalt">
            <Building2 className="size-3.5" />
            Official Real Estate Desk
          </span>
          <h3 className="display-type mt-2 text-xl sm:text-2xl font-bold text-ink">
            Request Property Brochure &amp; Pricing
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-ink/70">
            Submit your inquiry to receive architectural floor plans, pricing schedules, and site visits.
          </p>
        </div>

        <button
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 shrink-0"
          onClick={handleWhatsAppDirect}
          type="button"
        >
          <MessageSquare className="size-3.5 text-emerald-600" />
          WhatsApp Desk
        </button>
      </div>

      {result?.status === "success" && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
          <CheckCircle2 className="size-5 shrink-0 text-emerald-600 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-bold">{result.message}</p>
            <p className="mt-1 text-emerald-800">
              Our property consultant will reach out to you with detailed floor plans and price quotations.
            </p>
          </div>
        </div>
      )}

      {result?.status === "error" && (
        <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs sm:text-sm text-rose-900">
          <p className="font-bold">Submission failed</p>
          <p className="mt-1">{result.message}</p>
        </div>
      )}

      <form className="mt-6 space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
        {/* Development Selection */}
        <div>
          <label
            className="block text-xs font-bold uppercase tracking-wider text-ink/75"
            htmlFor="property-select"
          >
            Select Development or Property <span className="text-cobalt">*</span>
          </label>
          <div className="relative mt-1.5">
            <select
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-ink shadow-sm transition focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt/20"
              id="property-select"
              onChange={(e) => handlePropertySelect(e.target.value)}
              value={property}
            >
              {MEHRISH_PROPERTIES.map((item) => (
                <option key={item.id} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
              <Home className="size-4" />
            </div>
          </div>
        </div>

        {/* Space Requirement / Unit Type */}
        <div>
          <label
            className="block text-xs font-bold uppercase tracking-wider text-ink/75"
            htmlFor="unit-type-select"
          >
            Preferred Space / Unit Requirement
          </label>
          <div className="relative mt-1.5">
            <select
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-ink shadow-sm transition focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt/20"
              id="unit-type-select"
              onChange={(e) => setUnitType(e.target.value)}
              value={unitType}
            >
              {UNIT_TYPES.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Client Name & Phone Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink/75" htmlFor="client-name">
              Full Name <span className="text-cobalt">*</span>
            </label>
            <input
              className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm text-ink transition focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
                  : "border-slate-300 focus:border-cobalt focus:ring-cobalt/20"
              }`}
              id="client-name"
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Engr. Shafiqur Rahman"
              type="text"
              value={name}
            />
            {errors.name && <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink/75" htmlFor="client-phone">
              Phone / WhatsApp Number <span className="text-cobalt">*</span>
            </label>
            <input
              className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm text-ink transition focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
                  : "border-slate-300 focus:border-cobalt focus:ring-cobalt/20"
              }`}
              id="client-phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+880 17XX-XXXXXX"
              type="tel"
              value={phone}
            />
            {errors.phone && <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.phone}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink/75" htmlFor="client-email">
            Email Address <span className="text-cobalt">*</span>
          </label>
          <input
            className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm text-ink transition focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
                : "border-slate-300 focus:border-cobalt focus:ring-cobalt/20"
            }`}
            id="client-email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="shafiq@example.com"
            type="email"
            value={email}
          />
          {errors.email && <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.email}</p>}
        </div>

        {/* Specific Inquiries or Joint Venture Notes */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink/75" htmlFor="client-message">
            Specific Requirements / Message
          </label>
          <textarea
            className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-ink transition focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt/20"
            id="client-message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mention floor preference, parking requirement, or land details if proposing a joint venture..."
            rows={3}
            value={message}
          />
        </div>

        {/* Submit Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-cobalt px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-cobalt/25 transition hover:bg-cobalt-dark active:scale-[0.98]"
            disabled={pending}
            type="submit"
          >
            {pending ? (
              <>
                <LoaderCircle className="size-4 animate-spin" />
                Sending Inquiry...
              </>
            ) : (
              <>
                <Send className="size-4" />
                Submit Property Inquiry
              </>
            )}
          </Button>

          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-5 py-3 text-xs sm:text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
            onClick={handleWhatsAppDirect}
            type="button"
          >
            <MessageSquare className="size-4 text-emerald-600" />
            Connect via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
