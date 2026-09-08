"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, ExternalLink, Mail, MapPin, MessageSquare, Phone, Smartphone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactDetails() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2200);
    }
  };

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {/* 1. Visit Headquarters */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-b from-white via-white to-blue-50/30 p-6 sm:p-7 shadow-[0_16px_44px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-[0_24px_56px_rgba(21,94,239,0.12)]">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-cobalt via-blue-400 to-blue-200 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
        />

        <div>
          <div className="flex items-center justify-between">
            <span className="grid size-12 place-items-center rounded-xl border border-cobalt/15 bg-blue-50 text-cobalt shadow-[0_8px_20px_rgba(21,94,239,0.10)] transition-[background-color,color,transform] duration-500 group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white">
              <MapPin aria-hidden="true" className="size-5" />
            </span>
            <span className="rounded-full border border-cobalt/15 bg-blue-50/70 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-cobalt">
              Headquarters
            </span>
          </div>

          <h3 className="display-type mt-5 text-2xl font-bold text-ink">Visit Us</h3>
          <p className="mt-1 text-xs font-semibold text-cobalt">Corporate Operations & Executive Suite</p>

          <div className="mt-4 space-y-1 text-sm leading-relaxed text-ink/70">
            {siteConfig.address.lines.map((line) => (
              <p className="font-medium" key={line}>
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
          <a
            className="inline-flex items-center gap-1.5 rounded-lg border border-cobalt/20 bg-blue-50 px-3 py-1.5 text-xs font-bold text-cobalt transition-colors duration-300 hover:border-cobalt hover:bg-cobalt hover:text-white"
            href={siteConfig.address.mapUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span>Google Maps</span>
            <ExternalLink aria-hidden="true" className="size-3.5" />
          </a>
          <button
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-ink/70 transition-colors duration-300 hover:border-slate-300 hover:bg-slate-50 hover:text-ink"
            onClick={() => handleCopy(siteConfig.address.lines.join(", "), "address")}
            type="button"
          >
            {copiedKey === "address" ? (
              <>
                <Check aria-hidden="true" className="size-3.5 text-emerald-600" />
                <span className="font-bold text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy aria-hidden="true" className="size-3.5" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Direct PBX / Telephone */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-b from-white via-white to-blue-50/30 p-6 sm:p-7 shadow-[0_16px_44px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-[0_24px_56px_rgba(21,94,239,0.12)]">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-cobalt via-blue-400 to-blue-200 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
        />

        <div>
          <div className="flex items-center justify-between">
            <span className="grid size-12 place-items-center rounded-xl border border-cobalt/15 bg-blue-50 text-cobalt shadow-[0_8px_20px_rgba(21,94,239,0.10)] transition-[background-color,color,transform] duration-500 group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white">
              <Phone aria-hidden="true" className="size-5" />
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink/65">
              Landline PBX
            </span>
          </div>

          <h3 className="display-type mt-5 text-2xl font-bold text-ink">Call Switchboard</h3>
          <p className="mt-1 text-xs font-semibold text-cobalt">Sun – Thu: 9:00 AM – 6:00 PM</p>

          <div className="mt-4 space-y-2.5">
            {siteConfig.phones.map((phone) => (
              <div className="flex items-center justify-between text-sm" key={phone.href}>
                <a
                  className="font-mono font-semibold text-ink/80 transition-colors hover:text-cobalt"
                  href={phone.href}
                >
                  {phone.label}
                </a>
                <button
                  aria-label={`Copy phone ${phone.label}`}
                  className="grid size-7 place-items-center rounded-md border border-slate-200 bg-white text-ink/60 transition-colors hover:border-cobalt/40 hover:text-cobalt"
                  onClick={() => handleCopy(phone.label, phone.label)}
                  type="button"
                >
                  {copiedKey === phone.label ? (
                    <Check aria-hidden="true" className="size-3.5 text-emerald-600" />
                  ) : (
                    <Copy aria-hidden="true" className="size-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-4">
          <a
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-cobalt/20 bg-blue-50 px-3 py-1.5 text-xs font-bold text-cobalt transition-colors duration-300 hover:border-cobalt hover:bg-cobalt hover:text-white"
            href={siteConfig.phones[0].href}
          >
            <span>Dial Switchboard</span>
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>

      {/* 3. Mobile Hotline & WhatsApp */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-b from-white via-white to-blue-50/30 p-6 sm:p-7 shadow-[0_16px_44px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-[0_24px_56px_rgba(21,94,239,0.12)]">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-emerald-500 via-teal-400 to-cobalt transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
        />

        <div>
          <div className="flex items-center justify-between">
            <span className="grid size-12 place-items-center rounded-xl border border-emerald-500/20 bg-emerald-50 text-emerald-600 shadow-[0_8px_20px_rgba(16,185,129,0.12)] transition-[background-color,color,transform] duration-500 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
              <Smartphone aria-hidden="true" className="size-5" />
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-emerald-700">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Priority Hotlines
            </span>
          </div>

          <h3 className="display-type mt-5 text-2xl font-bold text-ink">Direct Mobile</h3>
          <p className="mt-1 text-xs font-semibold text-emerald-700">Project Operations & Urgent Site Matters</p>

          <div className="mt-4 space-y-2.5">
            {siteConfig.mobiles.map((mobile) => (
              <div className="flex items-center justify-between text-sm" key={mobile.href}>
                <a
                  className="font-mono font-semibold text-ink/80 transition-colors hover:text-cobalt"
                  href={mobile.href}
                >
                  {mobile.label}
                </a>
                <button
                  aria-label={`Copy mobile ${mobile.label}`}
                  className="grid size-7 place-items-center rounded-md border border-slate-200 bg-white text-ink/60 transition-colors hover:border-cobalt/40 hover:text-cobalt"
                  onClick={() => handleCopy(mobile.label, mobile.label)}
                  type="button"
                >
                  {copiedKey === mobile.label ? (
                    <Check aria-hidden="true" className="size-3.5 text-emerald-600" />
                  ) : (
                    <Copy aria-hidden="true" className="size-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
          <a
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 transition-colors duration-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
            href={siteConfig.whatsapp}
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare aria-hidden="true" className="size-3.5" />
            <span>WhatsApp Advisory</span>
          </a>
          <a
            className="inline-flex items-center gap-1.5 rounded-lg border border-cobalt/20 bg-blue-50 px-3 py-1.5 text-xs font-bold text-cobalt transition-colors duration-300 hover:border-cobalt hover:bg-cobalt hover:text-white"
            href={siteConfig.mobiles[0].href}
          >
            <span>Call Mobile</span>
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>

      {/* 4. Official Email */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-b from-white via-white to-blue-50/30 p-6 sm:p-7 shadow-[0_16px_44px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-[0_24px_56px_rgba(21,94,239,0.12)]">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-cobalt via-blue-400 to-blue-200 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
        />

        <div>
          <div className="flex items-center justify-between">
            <span className="grid size-12 place-items-center rounded-xl border border-cobalt/15 bg-blue-50 text-cobalt shadow-[0_8px_20px_rgba(21,94,239,0.10)] transition-[background-color,color,transform] duration-500 group-hover:scale-110 group-hover:bg-cobalt group-hover:text-white">
              <Mail aria-hidden="true" className="size-5" />
            </span>
            <span className="rounded-full border border-cobalt/15 bg-blue-50/70 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-cobalt">
              Electronic Mail
            </span>
          </div>

          <h3 className="display-type mt-5 text-2xl font-bold text-ink">Direct Email</h3>
          <p className="mt-1 text-xs font-semibold text-cobalt">Average Response Under 24 Business Hours</p>

          <div className="mt-4 space-y-2.5">
            {siteConfig.emails.map((email) => (
              <div className="flex items-center justify-between text-sm" key={email.href}>
                <a
                  className="font-medium text-ink/80 transition-colors hover:text-cobalt"
                  href={email.href}
                >
                  {email.label}
                </a>
                <button
                  aria-label={`Copy email ${email.label}`}
                  className="grid size-7 place-items-center rounded-md border border-slate-200 bg-white text-ink/60 transition-colors hover:border-cobalt/40 hover:text-cobalt"
                  onClick={() => handleCopy(email.label, email.label)}
                  type="button"
                >
                  {copiedKey === email.label ? (
                    <Check aria-hidden="true" className="size-3.5 text-emerald-600" />
                  ) : (
                    <Copy aria-hidden="true" className="size-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-4">
          <a
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-cobalt/20 bg-blue-50 px-3 py-1.5 text-xs font-bold text-cobalt transition-colors duration-300 hover:border-cobalt hover:bg-cobalt hover:text-white"
            href={siteConfig.emails[0].href}
          >
            <span>Compose Email</span>
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
