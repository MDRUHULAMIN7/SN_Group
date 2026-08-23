import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HeroSection } from "@/components/sections/home/hero-section";
import { MotionProvider } from "@/components/motion/motion-provider";
import { sisterConcerns } from "@/data/sister-concerns";

describe("hero slider", () => {
  afterEach(() => vi.useRealTimers());

  it("advances automatically without replacing the background media or exposing manual controls", async () => {
    vi.useFakeTimers({ toFake: ["setInterval", "clearInterval"] });
    const { container } = render(<MotionProvider><HeroSection /></MotionProvider>);
    expect(screen.getByRole("heading", { name: sisterConcerns[0].headline })).toBeInTheDocument();
    const mediaBefore = container.querySelector("video");

    expect(screen.queryByRole("button", { name: /slide/i })).not.toBeInTheDocument();
    await act(async () => new Promise((resolve) => window.setTimeout(resolve, 700)));
    act(() => vi.advanceTimersByTime(6_500));
    expect(await screen.findByRole("heading", { name: sisterConcerns[1].headline })).toBeInTheDocument();
    expect(container.querySelector("video")).toBe(mediaBefore);
  });
});
