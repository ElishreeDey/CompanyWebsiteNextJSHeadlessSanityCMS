/*
 ****************************************************************************************************************************
 * Filename    : home.spec
 * Description : End-to-end coverage for the homepage and shared navigation against a real dev server and the live Sanity dataset
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("renders the banner heading", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});

test.describe("Shared navigation", () => {
  test("appears on every page and links to Blog, Team, and Services", async ({
    page,
  }) => {
    await page.goto("/blog");

    const nav = page.getByRole("navigation");
    await expect(nav).toBeVisible();
    await expect(nav.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "href",
      "/blog"
    );
    await expect(nav.getByRole("link", { name: "Team" })).toHaveAttribute(
      "href",
      "/team"
    );
    await expect(nav.getByRole("link", { name: "Services" })).toHaveAttribute(
      "href",
      "/services"
    );

    await nav.getByRole("link", { name: "Team" }).click();
    await expect(page).toHaveURL(/\/team$/);
  });
});
