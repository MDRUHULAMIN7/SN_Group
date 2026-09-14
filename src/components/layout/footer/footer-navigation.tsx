import Link from "next/link";
import { primaryNavigation } from "@/config/navigation";
import { sisterConcerns } from "@/data/sister-concerns";

export function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      <div>
        <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink/65">Navigate</p>
        <ul className="space-y-3 text-sm text-ink/78">
          {primaryNavigation.map((item) => <li key={item.href}><Link className="transition-colors hover:text-cobalt" href={item.href}>{item.label}</Link></li>)}
          <li>
            <a
              className="inline-flex items-center gap-1 font-semibold text-cobalt transition-colors hover:text-cobalt/80"
              href="https://drive.google.com/file/d/1LPf6z4_mytrZQqKnS3fSlhURC-aDiIjf/view?usp=drive_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Company Profile (PDF)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-1 sm:col-span-2">
        <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink/65">Sister concerns</p>
        <ul className="space-y-3 text-sm text-ink/78">
          {sisterConcerns.map((concern) => <li key={concern.slug}><Link className="transition-colors hover:text-cobalt" href={`/sister-concerns/${concern.slug}`}>{concern.name}</Link></li>)}
        </ul>
      </div>
    </div>
  );
}
