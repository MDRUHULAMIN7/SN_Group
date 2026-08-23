import Link from "next/link";
import { primaryNavigation } from "@/config/navigation";
import { sisterConcerns } from "@/data/sister-concerns";

export function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      <div>
        <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/40">Navigate</p>
        <ul className="space-y-3 text-sm text-white/65">
          {primaryNavigation.map((item) => <li key={item.href}><Link className="transition-colors hover:text-white" href={item.href}>{item.label}</Link></li>)}
        </ul>
      </div>
      <div className="col-span-1 sm:col-span-2">
        <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/40">Sister concerns</p>
        <ul className="space-y-3 text-sm text-white/65">
          {sisterConcerns.map((concern) => <li key={concern.slug}><Link className="transition-colors hover:text-white" href={`/sister-concerns/${concern.slug}`}>{concern.name}</Link></li>)}
        </ul>
      </div>
    </div>
  );
}
