/*
 ****************************************************************************************************************************
 * Filename    : team.spec
 * Description : End-to-end coverage for the team flow.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-12
 ****************************************************************************************************************************
 */

import { test, expect } from "@playwright/test";

test.describe("Team listing", () => {
  test("renders the heading and at least one team member linking to their detail page", async ({
    page,
  }) => {
    await page.goto("/team");

    await expect(
      page.getByRole("heading", { name: "Our Team", level: 1 })
    ).toBeVisible();

    const firstItem = page.locator("main ul li").first();
    await expect(firstItem.getByRole("heading", { level: 2 })).toBeVisible();
    await expect(firstItem.getByRole("img")).toBeVisible();

    const href = await firstItem.getByRole("link").getAttribute("href");
    expect(href).toMatch(/^\/team\/.+/);
  });

  test("clicking a team member navigates to their own detail page", async ({
    page,
  }) => {
    await page.goto("/team");

    const firstItem = page.locator("main ul li").first();
    const name = (
      await firstItem.getByRole("heading", { level: 2 }).textContent()
    )?.trim();
    const href = await firstItem.getByRole("link").getAttribute("href");

    await firstItem.getByRole("link").click();

    await expect(page).toHaveURL(new RegExp(`${href}$`), { timeout: 60_000 });
    if (name) {
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);
    }
  });
});

test.describe("Team member detail page", () => {
  test("shows a not-found page for an unknown id", async ({ page }) => {
    const response = await page.goto("/team/this-id-does-not-exist-e2e");

    expect(response?.status()).toBe(200);
    await expect(page.getByText(/could not be found/i)).toBeVisible();
  });
});
