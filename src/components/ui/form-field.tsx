import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function FormField({ id, label, error, required, children, className }: FormFieldProps) {
  return (
    <div className={cn(className)}>
      <label className="mb-2.5 block text-xs font-bold uppercase tracking-[0.11em] text-ink/70" htmlFor={id}>
        {label}{required ? <span className="ml-1 text-cobalt" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {error ? <p className="mt-2 text-sm font-semibold text-red-700" id={`${id}-error`} role="alert">{error}</p> : null}
    </div>
  );
}

export const fieldClassName = "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition-[border-color,box-shadow] placeholder:text-ink/35 focus:border-cobalt focus:ring-4 focus:ring-cobalt/15";
