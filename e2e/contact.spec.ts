/*
 ****************************************************************************************************************************
 * Filename    : contact.spec
 * Description : End-to-end coverage for the ContactUS form.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

import { test, expect } from "@playwright/test";

test.describe("Contact page", () => {
  test("renders the heading and form fields", async ({ page }) => {
    await page.goto("/contact");

    await expect(
      page.getByRole("heading", { name: "Contact Us", level: 1 })
    ).toBeVisible();

    await expect(page.getByLabel("Name", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Email", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Message", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Send Message" })
    ).toBeVisible();
  });

  test("shows a validation error when required fields are empty", async ({
    page,
  }) => {
    await page.goto("/contact");

    // Bypass the browser's native required-field validation so the Server Action runs.
    await page.locator("form").evaluate((form) => {
      for (const el of form.querySelectorAll("[required]")) {
        el.removeAttribute("required");
      }
    });
    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.getByRole("status")).toHaveText(
      "Please fill in all fields."
    );
  });

  test("shows a validation error for an invalid email address", async ({
    page,
  }) => {
    await page.goto("/contact");

    await page.getByLabel("Name", { exact: true }).fill("E2E Test");
    await page.getByLabel("Email", { exact: true }).fill("test@localhost");
    await page.getByLabel("Message", { exact: true }).fill("Hello there.");
    await page.getByRole("button", { name: "Send Message" }).click();

    await expect(page.getByRole("status")).toHaveText(
      "Please enter a valid email address."
    );
  });
});
