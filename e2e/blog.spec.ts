/*
 ****************************************************************************************************************************
 * Filename    : blog.spec
 * Description : End-to-end Test coverage for the blog flow actual tests on data.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-10
 ****************************************************************************************************************************
 */

import { test, expect } from "@playwright/test";

// blog list test
test.describe("Blog listing", () => {
  test("renders the heading and at least one post linking to its detail page", async ({
    page,
  }) => {
    await page.goto("/blog");

    await expect(
      page.getByRole("heading", { name: "Blog", level: 1 })
    ).toBeVisible();

    const firstItem = page.locator("main ul li").first();
    const href = await firstItem.getByRole("link").getAttribute("href");

    expect(href).toMatch(/^\/blog\/.+/);
  });

  test("clicking a post navigates to its own detail page", async ({ page }) => {
    await page.goto("/blog");

    const firstItem = page.locator("main ul li").first();
    const title = (
      await firstItem.getByRole("heading", { level: 2 }).textContent()
    )?.trim();
    const href = await firstItem.getByRole("link").getAttribute("href");

    await firstItem.getByRole("link").click();

    await expect(page).toHaveURL(new RegExp(`${href}$`), { timeout: 60_000 });
    if (title) {
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
    }
  });
});

// If unknow blog slug then show page not found
test.describe("Blog post detail page", () => {
  test("shows a not-found page for an unknown slug", async ({ page }) => {
    const response = await page.goto("/blog/this-slug-does-not-exist-e2e");

    expect(response?.status()).toBe(200);
    await expect(page.getByText(/could not be found/i)).toBeVisible();
  });
});
