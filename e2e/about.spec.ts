/*
 ****************************************************************************************************************************
 * Filename    : about.spec
 * Description : End-to-end coverage for the about page.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

import { test, expect } from "@playwright/test";

test.describe("About page", () => {
  test("renders the heading and vision section", async ({ page }) => {
    await page.goto("/about");

    await expect(
      page.getByRole("heading", { name: "About Us", level: 1 })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Our Vision", level: 2 })
    ).toBeVisible();
  });

  test("is reachable from the shared navigation", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation");
    await expect(nav.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about"
    );

    await nav.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);
  });
});
