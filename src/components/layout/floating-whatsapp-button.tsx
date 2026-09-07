import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingWhatsappButton() {
  return (
    <a
      aria-label="Chat with S.N Group on WhatsApp"
      className="group fixed bottom-5 right-5 z-30 isolate grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-[transform,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_18px_38px_rgba(37,211,102,0.34)] active:scale-95 sm:bottom-7 sm:right-7"
      href={siteConfig.whatsapp}
      rel="noreferrer"
      target="_blank"
    >
      <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-[#25d366]/45 motion-safe:animate-ping [animation-duration:2.8s]" />
      <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-ink px-3 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition-[transform,opacity] duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span aria-hidden="true" className="relative grid place-items-center transition-transform duration-500 group-hover:scale-110">
        <MessageCircle className="size-7" strokeWidth={2.1} />
        <Phone className="absolute size-3.5" strokeWidth={2.3} />
      </span>
    </a>
  );
}
