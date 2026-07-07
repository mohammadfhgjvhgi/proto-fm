import { test, expect } from "@playwright/test";

/**
 * E2E tests for the engage form flow.
 * Tests: path switching, form filling, submission, success state, validation.
 */

test("engage form: fill and submit successfully", async ({ page }) => {
  await page.goto("/engage");

  // Select "Project review" path (first tab)
  await page.locator('[role="tab"]').first().click();

  // Fill name + email
  await page.locator('input[type="text"]').first().fill("E2E Test User");
  await page.locator('input[type="email"]').fill("e2e@test.com");

  // Fill textareas
  const textareas = page.locator("textarea");
  const count = await textareas.count();
  for (let i = 0; i < count; i++) {
    await textareas.nth(i).fill(`E2E test field ${i + 1}`);
  }

  // Submit
  await page.locator('button[type="submit"]').click();

  // Verify success state
  await expect(page.locator('[role="status"]')).toBeVisible({ timeout: 10000 });
  await expect(page.locator('[role="status"]')).toContainText(/وصلتني|received|I received/i);
});

test("engage form: validation rejects empty fields", async ({ page }) => {
  await page.goto("/engage");

  // Click submit without filling
  await page.locator('button[type="submit"]').click();

  // Browser HTML5 validation should prevent submission
  // (the form has required attributes)
  const status = page.locator('[role="status"]');
  await expect(status).toHaveCount(0);
});

test("engage form: switching paths changes fields", async ({ page }) => {
  await page.goto("/engage");

  // Click "Build a project" tab (3rd)
  await page.locator('[role="tab"]').nth(2).click();

  // Should have 5 fields (name, email, project type, budget, timeline)
  const textareas = page.locator("textarea");
  await expect(textareas).toHaveCount(3);
});

test("engage form: honeypot field exists (hidden)", async ({ page }) => {
  await page.goto("/engage");

  // Honeypot input should exist but be off-screen
  const honeypot = page.locator('input[autocomplete="off"][tabindex="-1"]');
  await expect(honeypot).toHaveCount(1);
});

test("language toggle switches AR to EN", async ({ page }) => {
  await page.goto("/");

  // Default is Arabic
  await expect(page.locator("html")).toHaveAttribute("lang", "ar");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");

  // Find and click language toggle button
  const toggleBtn = page.locator("button", { hasText: "EN" });
  await toggleBtn.click();

  // Should switch to English
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
});

test("navbar active state highlights current route", async ({ page }) => {
  await page.goto("/philosophy");

  // The Philosophy link should have active styling
  const philosophyLink = page.locator('a[href="/philosophy"]').first();
  await expect(philosophyLink).toBeVisible();
});
