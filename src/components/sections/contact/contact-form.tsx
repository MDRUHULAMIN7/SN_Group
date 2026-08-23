"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, LoaderCircle, Send, TriangleAlert } from "lucide-react";
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

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<InquiryResult | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaultValues,
  });

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
        <input aria-describedby={errors.name ? "name-error" : undefined} aria-invalid={Boolean(errors.name)} autoComplete="name" className={fieldClassName} id="name" placeholder="Your full name" {...register("name")} />
      </FormField>
      <FormField error={fieldError("company")} id="company" label="Company">
        <input aria-describedby={errors.company ? "company-error" : undefined} aria-invalid={Boolean(errors.company)} autoComplete="organization" className={fieldClassName} id="company" placeholder="Organization name" {...register("company")} />
      </FormField>
      <FormField error={fieldError("email")} id="email" label="Email" required>
        <input aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={Boolean(errors.email)} autoComplete="email" className={fieldClassName} id="email" inputMode="email" placeholder="you@company.com" type="email" {...register("email")} />
      </FormField>
      <FormField error={fieldError("phone")} id="phone" label="Phone" required>
        <input aria-describedby={errors.phone ? "phone-error" : undefined} aria-invalid={Boolean(errors.phone)} autoComplete="tel" className={fieldClassName} id="phone" inputMode="tel" placeholder="+880…" type="tel" {...register("phone")} />
      </FormField>
      <FormField error={fieldError("service")} id="service" label="Service" required>
        <select aria-describedby={errors.service ? "service-error" : undefined} aria-invalid={Boolean(errors.service)} className={fieldClassName} id="service" {...register("service")}>
          <option value="">Select a service</option>
          {serviceOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </FormField>
      <FormField error={fieldError("projectLocation")} id="projectLocation" label="Project location">
        <input aria-describedby={errors.projectLocation ? "projectLocation-error" : undefined} aria-invalid={Boolean(errors.projectLocation)} className={fieldClassName} id="projectLocation" placeholder="City or site address" {...register("projectLocation")} />
      </FormField>
      <FormField className="sm:col-span-2" error={fieldError("estimatedBudget")} id="estimatedBudget" label="Estimated budget">
        <input aria-describedby={errors.estimatedBudget ? "estimatedBudget-error" : undefined} aria-invalid={Boolean(errors.estimatedBudget)} className={fieldClassName} id="estimatedBudget" placeholder="A range is fine" {...register("estimatedBudget")} />
      </FormField>
      <FormField className="sm:col-span-2" error={fieldError("message")} id="message" label="Project brief" required>
        <textarea aria-describedby={errors.message ? "message-error" : undefined} aria-invalid={Boolean(errors.message)} className={`${fieldClassName} min-h-40 resize-y`} id="message" placeholder="Tell us about the scope, timeframe and key constraints." {...register("message")} />
      </FormField>
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input autoComplete="off" id="website" tabIndex={-1} {...register("website")} />
      </div>
      <div className="sm:col-span-2">
        {result ? (
          <div className={result.status === "success" ? "mb-5 flex gap-3 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900" : "mb-5 flex gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-900"} role="status">
            {result.status === "success" ? <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0" /> : <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />}
            <p>{result.message}</p>
          </div>
        ) : null}
        <Button disabled={pending} size="lg" type="submit">
          {pending ? <LoaderCircle aria-hidden="true" className="size-5 animate-spin" /> : <Send aria-hidden="true" className="size-5" />}
          {pending ? "Sending…" : "Send project brief"}
        </Button>
        <p className="mt-4 max-w-xl text-xs leading-5 text-white/42">By submitting this form, you consent to S.N Group using the information only to respond to your enquiry.</p>
      </div>
    </form>
  );
}
