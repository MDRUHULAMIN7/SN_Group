import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactInformation() {
  const groups = [
    {
      label: "Office",
      icon: MapPin,
      content: (
        <a className="transition-colors hover:text-cobalt" href={siteConfig.address.mapUrl} rel="noreferrer" target="_blank">
          {siteConfig.address.lines.map((line) => <span className="block" key={line}>{line}</span>)}
        </a>
      ),
    },
    {
      label: "Telephone",
      icon: Phone,
      content: siteConfig.phones.map((phone) => <a className="block transition-colors hover:text-cobalt" href={phone.href} key={phone.href}>{phone.label}</a>),
    },
    {
      label: "Mobile",
      icon: Smartphone,
      content: siteConfig.mobiles.map((phone) => <a className="block transition-colors hover:text-cobalt" href={phone.href} key={phone.href}>{phone.label}</a>),
    },
    {
      label: "Email",
      icon: Mail,
      content: siteConfig.emails.map((email) => <a className="block transition-colors hover:text-cobalt" href={email.href} key={email.href}>{email.label}</a>),
    },
  ];

  return (
    <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      {groups.map(({ label, icon: Icon, content }) => (
        <div className="flex gap-3" key={label}>
          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-blue-50 text-cobalt"><Icon aria-hidden="true" className="size-4" /></span>
          <div>
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink/45">{label}</p>
            <div className="text-sm leading-6 text-ink/65">{content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
