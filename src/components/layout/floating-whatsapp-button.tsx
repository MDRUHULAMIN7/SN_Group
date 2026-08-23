import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingWhatsappButton() {
  return (
    <a
      aria-label="Chat with S.N Group on WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid size-13 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_32px_rgba(0,0,0,0.24)] transition-transform hover:-translate-y-1 sm:bottom-7 sm:right-7"
      href={siteConfig.whatsapp}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="size-6" />
    </a>
  );
}
