import { expect, test } from "@playwright/test";

test("core marketing, navigation, project and contact flows", async ({ page }) => {
  await page.goto("/");
  const preloader = page.getByRole("status", { name: "S.N Group is loading" });
  await expect(preloader).toBeVisible();
  await expect(preloader).toBeHidden({ timeout: 4_000 });

  await page.reload();
  await expect(preloader).toBeHidden();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  const navbar = page.locator("[data-navbar-state]");
  await expect(navbar).toHaveAttribute("data-navbar-state", "full");
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect(navbar).toHaveAttribute("data-navbar-state", "compact");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();
  await page.getByRole("dialog", { name: "Mobile navigation" }).getByRole("link", { name: "S.N Int. Construction BD Ltd." }).click();
  await expect(page).toHaveURL(/\/sister-concerns\/sn-int-construction-bd-ltd$/);
  await expect(page.getByRole("heading", { level: 1, name: "S.N Int. Construction BD Ltd." })).toBeVisible();

  await page.goto("/projects/gulshan-commercial-annex");
  await expect(page.getByRole("heading", { level: 1, name: "Gulshan Commercial Annex" })).toBeVisible();
  await expect(page.getByText("Private commercial developer")).toBeVisible();

  await page.goto("/contact#quotation-form");
  await page.getByRole("button", { name: "Send project brief" }).click();
  await expect(page.getByText("Enter your full name.")).toBeVisible();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await expect(page.getByText("Select a service.")).toBeVisible();
});
