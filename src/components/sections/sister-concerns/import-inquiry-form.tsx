"use client";

import { useState, useTransition, useEffect } from "react";
import {
  CheckCircle2,
  LoaderCircle,
  Send,
  MessageSquare,
  Package,
} from "lucide-react";
import { submitInquiry, type InquiryResult } from "@/actions/submit-inquiry";
import { Button } from "@/components/ui/button";

export const IMPORT_PRODUCTS = [
  { id: "cassia", label: "Tiger Brand — Mehris Premium Cassia / Cinnamon [ক্যাসিয়া / দারুচিনি]" },
  { id: "black-pepper", label: "Tiger Brand — Mehris Premium Black Pepper [গোলমরিচ]" },
  { id: "cloves", label: "Cloves [লবঙ্গ]" },
  { id: "red-lentils", label: "Red Lentils [মসুর ডাল]" },
  { id: "cumin", label: "Cumin [জিরা]" },
  { id: "milk-powder", label: "Milk Powder [দুধের গুঁড়া]" },
  { id: "chemicals", label: "Chemical Products [শিল্প রাসায়নিক]" },
  { id: "custom", label: "Custom Bulk Import [অন্যান্য পণ্য]" },
] as const;

interface ImportInquiryFormProps {
  selectedProduct?: string;
  onProductChange?: (product: string) => void;
}

export function ImportInquiryForm({
  selectedProduct = IMPORT_PRODUCTS[0].label,
  onProductChange,
}: ImportInquiryFormProps) {
  const [product, setProduct] = useState<string>(selectedProduct);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<InquiryResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleProductSelect = (p: string) => {
    setProduct(p);
    if (onProductChange) onProductChange(p);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!phone.trim()) errs.phone = "Phone or WhatsApp is required";
    if (!email.trim() || !email.includes("@")) errs.email = "Valid email is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setResult(null);
    startTransition(async () => {
      const detailedMessage = `[Import Inquiry]\nProduct: ${product}\nQuantity: ${quantity || "Standard"}\nCompany: ${company || "N/A"}\nMessage: ${message || "Commercial import quotation request."}`;

      const response = await submitInquiry({
        name,
        company: company || "",
        email,
        phone,
        service: "procurement",
        projectLocation: "Bangladesh",
        estimatedBudget: "50 Lakh – 2 Crore",
        message: detailedMessage,
        website: "",
      });

      setResult(response);
      if (response.status === "success") {
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setQuantity("");
        setMessage("");
      }
    });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*Product Import Inquiry*\n` +
      `Product: ${product}\n` +
      (quantity ? `Quantity: ${quantity}\n` : "") +
      `Name: ${name || "Interested Buyer"}\n` +
      (company ? `Company: ${company}\n` : "") +
      (phone ? `Phone: ${phone}\n` : "") +
      (message ? `Details: ${message}` : "")
    );
    window.open(`https://wa.me/8801608864687?text=${text}`, "_blank");
  };

  return (
    <div
      aria-label="Product Import Inquiry Form"
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
      id="inquiry-form"
    >
      <div className="mb-6 border-b border-slate-100 pb-4">
        <h3 className="display-type text-xl sm:text-2xl font-bold text-ink">
          Send Import Inquiry
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-ink/65">
          Submit your product requirement and our trade desk will respond promptly.
        </p>
      </div>

      {result?.status === "success" ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-6 text-center">
          <CheckCircle2 className="mx-auto size-10 text-emerald-600" />
          <h4 className="mt-2 text-base font-bold text-emerald-950">Inquiry Received</h4>
          <p className="mt-1 text-xs text-emerald-800">
            Our trade team will get in touch with you shortly.
          </p>
          <button
            className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
            onClick={() => setResult(null)}
            type="button"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form className="space-y-4" noValidate onSubmit={handleSubmit}>
          {/* Product Selection */}
          <div>
            <label className="block text-xs font-semibold text-ink/75 mb-1.5" htmlFor="inq-product">
              Product of Interest
            </label>
            <div className="relative">
              <select
                aria-label="Product of Interest"
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-ink transition focus:border-cobalt focus:bg-white focus:outline-none focus:ring-1 focus:ring-cobalt/20"
                id="inq-product"
                onChange={(e) => handleProductSelect(e.target.value)}
                value={product}
              >
                {IMPORT_PRODUCTS.map((item) => (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                <Package className="size-4" />
              </div>
            </div>
          </div>

          {/* Name & Company */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-ink/75 mb-1" htmlFor="inq-name">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                aria-invalid={Boolean(errors.name)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-ink transition placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-1 focus:ring-cobalt/20"
                id="inq-name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                type="text"
                value={name}
              />
              {errors.name && <p className="mt-0.5 text-[0.7rem] text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink/75 mb-1" htmlFor="inq-company">
                Company Name
              </label>
              <input
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-ink transition placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-1 focus:ring-cobalt/20"
                id="inq-company"
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Organization (Optional)"
                type="text"
                value={company}
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-ink/75 mb-1" htmlFor="inq-phone">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                aria-invalid={Boolean(errors.phone)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-ink transition placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-1 focus:ring-cobalt/20"
                id="inq-phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+880 1..."
                type="tel"
                value={phone}
              />
              {errors.phone && <p className="mt-0.5 text-[0.7rem] text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink/75 mb-1" htmlFor="inq-email">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                aria-invalid={Boolean(errors.email)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-ink transition placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-1 focus:ring-cobalt/20"
                id="inq-email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                type="email"
                value={email}
              />
              {errors.email && <p className="mt-0.5 text-[0.7rem] text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Target Quantity */}
          <div>
            <label className="block text-xs font-semibold text-ink/75 mb-1" htmlFor="inq-quantity">
              Order Volume / Quantity
            </label>
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-ink transition placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-1 focus:ring-cobalt/20"
              id="inq-quantity"
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 25 Kg, 500 Kg, 1 Container (20 MT)"
              type="text"
              value={quantity}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-ink/75 mb-1" htmlFor="inq-message">
              Requirements / Message
            </label>
            <textarea
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs sm:text-sm text-ink transition placeholder:text-slate-400 focus:border-cobalt focus:bg-white focus:outline-none focus:ring-1 focus:ring-cobalt/20"
              id="inq-message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Destination port, timeline, or special terms..."
              rows={2}
              value={message}
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <Button
              className="flex-1 justify-center gap-2 py-2.5 text-xs sm:text-sm font-bold"
              disabled={pending}
              type="submit"
              variant="primary"
            >
              {pending ? (
                <>
                  <LoaderCircle className="size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="size-3.5" />
                  Submit Inquiry
                </>
              )}
            </Button>

            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
              onClick={handleWhatsAppDirect}
              type="button"
            >
              <MessageSquare className="size-4 text-emerald-600" />
              WhatsApp
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
