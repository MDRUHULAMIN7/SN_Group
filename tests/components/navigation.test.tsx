import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { DesktopNavigation } from "@/components/layout/header/desktop-navigation";
import { MotionProvider } from "@/components/motion/motion-provider";

const usePathname = vi.fn(() => "/");

vi.mock("next/navigation", () => ({
  usePathname: () => usePathname(),
}));

describe("desktop navigation", () => {
  beforeEach(() => usePathname.mockReturnValue("/"));

  it("marks the home route and exposes the restrained sister-concern menu", async () => {
    const user = userEvent.setup();
    render(<MotionProvider><DesktopNavigation /></MotionProvider>);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");

    const trigger = screen.getByRole("button", { name: "Sister concerns" });
    await user.hover(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getAllByRole("menuitem")).toHaveLength(3);
  });
});
