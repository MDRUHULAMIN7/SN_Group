import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="blueprint-grid grid min-h-[80svh] place-items-center bg-white pb-20 pt-36 text-ink">
      <Container className="text-center">
        <p className="display-type text-[9rem] leading-none text-cobalt sm:text-[14rem]">404</p>
        <h1 className="display-type mt-2 text-5xl sm:text-7xl">This route is not on the plan.</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-ink/60">The page may have moved, or the address may be incomplete.</p>
        <Link className="mt-9 inline-flex min-h-11 items-center gap-2 rounded-full bg-cobalt px-5 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(21,94,239,0.24)]" href="/"><ArrowLeft aria-hidden="true" className="size-4" />Return home</Link>
      </Container>
    </section>
  );
}
