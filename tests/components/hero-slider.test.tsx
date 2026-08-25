import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HeroSection, heroSlides } from "@/components/sections/home/hero-section";
import { MotionProvider } from "@/components/motion/motion-provider";

describe("hero slider", () => {
  afterEach(() => vi.useRealTimers());

  it("renders the initial group slide with heading and background content", () => {
    render(
      <MotionProvider>
        <HeroSection />
      </MotionProvider>,
    );

    expect(screen.getByRole("heading", { name: heroSlides[0].title })).toBeInTheDocument();
    expect(screen.getByText(heroSlides[0].headline)).toBeInTheDocument();
  });

  it("advances automatically to the next slide", async () => {
    vi.useFakeTimers({ toFake: ["setInterval", "clearInterval"] });
    render(
      <MotionProvider>
        <HeroSection />
      </MotionProvider>,
    );

    expect(screen.getByRole("heading", { name: heroSlides[0].title })).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(6500);
    });

    expect(screen.getByRole("heading", { name: heroSlides[1].title })).toBeInTheDocument();
  });
});
