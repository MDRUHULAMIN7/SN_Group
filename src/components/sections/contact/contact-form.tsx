"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, LoaderCircle, Lock, Send, Sparkles, TriangleAlert } from "lucide-react";
import { submitInquiry, type InquiryResult } from "@/actions/submit-inquiry";
import { contactDefaultValues, contactSchema, type ContactInput } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { fieldClassName, FormField } from "@/components/ui/form-field";

const serviceOptions = [
  ["general-construction", "General construction"],
  ["procurement", "Procurement, import and export"],
  ["development", "Development management"],
  ["fit-out", "Renovation and fit-out"],
  ["other", "Other / not sure yet"],
] as const;

const budgetSuggestions = [
  "< 50 Lakh BDT",
  "50 Lakh – 2 Crore",
  "2 – 10 Crore",
  "10 Crore+",
] as const;

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<InquiryResult | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaultValues,
  });

  const selectedBudget = watch("estimatedBudget");

  function onSubmit(input: ContactInput) {
    setResult(null);
    startTransition(async () => {
      const response = await submitInquiry(input);
      setResult(response);
      if (response.fieldErrors) {
        Object.entries(response.fieldErrors).forEach(([field, message]) => {
          if (message) setError(field as keyof ContactInput, { message });
        });
      }
      if (response.status === "success") reset(contactDefaultValues);
    });
  }

  const fieldError = (name: keyof ContactInput) => errors[name]?.message;

  return (
    <form className="grid gap-6 sm:grid-cols-2" id="quotation-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormField error={fieldError("name")} id="name" label="Name" required>
        <input
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
          className={fieldClassName}
          id="name"
          placeholder="Your full name"
          {...register("name")}
        />
      </FormField>

      <FormField error={fieldError("company")} id="company" label="Company">
        <input
          aria-describedby={errors.company ? "company-error" : undefined}
          aria-invalid={Boolean(errors.company)}
          autoComplete="organization"
          className={fieldClassName}
          id="company"
          placeholder="Organization name"
          {...register("company")}
        />
      </FormField>

      <FormField error={fieldError("email")} id="email" label="Email" required>
        <input
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          className={fieldClassName}
          id="email"
          inputMode="email"
          placeholder="you@company.com"
          type="email"
          {...register("email")}
        />
      </FormField>

      <FormField error={fieldError("phone")} id="phone" label="Phone" required>
        <input
          aria-describedby={errors.phone ? "phone-error" : undefined}
          aria-invalid={Boolean(errors.phone)}
          autoComplete="tel"
          className={fieldClassName}
          id="phone"
          inputMode="tel"
          placeholder="+880…"
          type="tel"
          {...register("phone")}
        />
      </FormField>

      <FormField error={fieldError("service")} id="service" label="Service" required>
        <select
          aria-describedby={errors.service ? "service-error" : undefined}
          aria-invalid={Boolean(errors.service)}
          className={fieldClassName}
          id="service"
          {...register("service")}
        >
          <option value="">Select a service</option>
          {serviceOptions.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField error={fieldError("projectLocation")} id="projectLocation" label="Project location">
        <input
          aria-describedby={errors.projectLocation ? "projectLocation-error" : undefined}
          aria-invalid={Boolean(errors.projectLocation)}
          className={fieldClassName}
          id="projectLocation"
          placeholder="City or site address"
          {...register("projectLocation")}
        />
      </FormField>

      <FormField className="sm:col-span-2" error={fieldError("estimatedBudget")} id="estimatedBudget" label="Estimated budget">
        <div>
          <input
            aria-describedby={errors.estimatedBudget ? "estimatedBudget-error" : undefined}
            aria-invalid={Boolean(errors.estimatedBudget)}
            className={fieldClassName}
            id="estimatedBudget"
            placeholder="A range or estimate (e.g. 1 - 2 Crore BDT)"
            {...register("estimatedBudget")}
          />
          {/* Quick budget suggestion chips */}
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="text-[0.68rem] font-bold uppercase tracking-wider text-ink/40">Quick select:</span>
            {budgetSuggestions.map((suggestion) => {
              const isSelected = selectedBudget === suggestion;
              return (
                <button
                  className={`rounded-lg border px-2.5 py-1 text-[0.68rem] font-semibold transition-all duration-200 ${
                    isSelected
                      ? "border-cobalt bg-cobalt text-white shadow-xs"
                      : "border-slate-200 bg-slate-50/70 text-ink/70 hover:border-cobalt/40 hover:bg-blue-50/50 hover:text-cobalt"
                  }`}
                  key={suggestion}
                  onClick={() => setValue("estimatedBudget", suggestion, { shouldValidate: true })}
                  type="button"
                >
                  {suggestion}
                </button>
              );
            })}
          </div>
        </div>
      </FormField>

      <FormField className="sm:col-span-2" error={fieldError("message")} id="message" label="Project brief" required>
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          className={`${fieldClassName} min-h-36 resize-y`}
          id="message"
          placeholder="Tell us about the scope, timeframe, and key technical or site constraints."
          {...register("message")}
        />
      </FormField>

      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input autoComplete="off" id="website" tabIndex={-1} {...register("website")} />
      </div>

      <div className="sm:col-span-2">
        {result ? (
          <div
            className={
              result.status === "success"
                ? "mb-5 flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 text-sm text-emerald-900 shadow-xs"
                : "mb-5 flex gap-3 rounded-xl border border-red-200 bg-red-50/80 p-4 text-sm text-red-900 shadow-xs"
            }
            role="status"
          >
            {result.status === "success" ? (
              <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-emerald-600" />
            ) : (
              <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-red-600" />
            )}
            <p className="font-medium leading-relaxed">{result.message}</p>
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Button
            className="group relative overflow-hidden shadow-[0_10px_24px_rgba(21,94,239,0.22)] transition-all duration-300 hover:shadow-[0_14px_30px_rgba(21,94,239,0.32)]"
            disabled={pending}
            size="lg"
            type="submit"
          >
            {pending ? (
              <LoaderCircle aria-hidden="true" className="size-5 animate-spin" />
            ) : (
              <Send aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            )}
            <span>{pending ? "Sending…" : "Send project brief"}</span>
          </Button>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Senior Director review within 24h</span>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-[0.72rem] leading-normal text-ink/50 border-t border-slate-100 pt-4">
          <Lock aria-hidden="true" className="size-3.5 shrink-0 text-slate-400" />
          <span>256-bit SSL encrypted. S.N Group uses your information strictly to respond to this commercial inquiry.</span>
        </div>
      </div>
    </form>
  );
}
