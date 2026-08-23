"use client";

import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function MarketingError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <section className="blueprint-grid-dark grid min-h-[80svh] place-items-center bg-navy pb-20 pt-36 text-white">
      <Container className="max-w-3xl text-center">
        <TriangleAlert aria-hidden="true" className="mx-auto size-12 text-blue-300" />
        <h1 className="display-type mt-7 text-5xl sm:text-7xl">The page hit an unexpected constraint.</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">Please try the request again. If the issue continues, contact the S.N Group office directly.</p>
        <Button className="mt-9" onClick={retry} variant="light">Try again</Button>
      </Container>
    </section>
  );
}
