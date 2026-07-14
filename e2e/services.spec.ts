/*
 ****************************************************************************************************************************
 * Filename    : services.spec
 * Description : End-to-end Test coverage for the services listing page
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-12
 ****************************************************************************************************************************
 */

import { test, expect } from "@playwright/test";

// services list test
test.describe("Services listing", () => {
  test("renders the heading and at least one service", async ({ page }) => {
    await page.goto("/services");

    await expect(
      page.getByRole("heading", { name: "Our Services", level: 1 })
    ).toBeVisible();

    const firstItem = page.locator("main ul li").first();
    await expect(firstItem.getByRole("heading", { level: 2 })).toBeVisible();
    await expect(firstItem.getByRole("img")).toBeVisible();
    await expect(firstItem.getByText(/^\$/)).toBeVisible();
  });
});
