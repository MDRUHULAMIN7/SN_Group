import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactDetails() {
  const cards = [
    {
      title: "Visit",
      icon: MapPin,
      body: <a href={siteConfig.address.mapUrl} rel="noreferrer" target="_blank">{siteConfig.address.lines.map((line) => <span className="block" key={line}>{line}</span>)}</a>,
    },
    {
      title: "Call",
      icon: Phone,
      body: siteConfig.phones.map((item) => <a className="block" href={item.href} key={item.href}>{item.label}</a>),
    },
    {
      title: "Mobile",
      icon: Smartphone,
      body: siteConfig.mobiles.map((item) => <a className="block" href={item.href} key={item.href}>{item.label}</a>),
    },
    {
      title: "Email",
      icon: Mail,
      body: siteConfig.emails.map((item) => <a className="block" href={item.href} key={item.href}>{item.label}</a>),
    },
  ] as const;

  return (
    <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12 sm:grid-cols-2">
      {cards.map(({ title, icon: Icon, body }) => (
        <div className="bg-[#090b10] p-6 sm:p-8" key={title}>
          <span className="grid size-11 place-items-center rounded-full bg-cobalt text-white"><Icon aria-hidden="true" className="size-5" /></span>
          <h3 className="display-type mt-7 text-3xl">{title}</h3>
          <div className="mt-3 text-sm leading-7 text-white/58 [&_a]:transition-colors [&_a]:hover:text-blue-300">{body}</div>
        </div>
      ))}
    </div>
  );
}
