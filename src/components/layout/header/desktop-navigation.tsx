"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { SisterConcernMenu } from "./sister-concern-menu";

export function DesktopNavigation() {
  const pathname = usePathname();
  const leading = primaryNavigation.slice(0, 2);
  const trailing = primaryNavigation.slice(2);

  const link = (item: (typeof primaryNavigation)[number]) => {
    const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
    return (
      <Link
        aria-current={active ? "page" : undefined}
        className={cn(
          "group relative flex min-h-10 items-center px-3 text-sm font-semibold transition-colors hover:text-blue-300 xl:px-3.5",
          active && "text-blue-300",
        )}
        href={item.href}
        key={item.href}
      >
        {item.label}
        <span className={cn("absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100", active && "scale-x-100")} />
      </Link>
    );
  };

  return (
    <nav aria-label="Primary navigation" className="hidden items-center lg:flex">
      {leading.map(link)}
      <SisterConcernMenu active={pathname.startsWith("/sister-concerns")} />
      {trailing.map(link)}
    </nav>
  );
}
