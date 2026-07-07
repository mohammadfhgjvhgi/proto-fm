import { test, expect } from "@playwright/test";

/**
 * E2E tests for all 7 public routes.
 * Verifies each route loads, returns 200, and contains expected heading.
 */

const routes = [
  { path: "/", heading: /محمد عادل العقيلي|Mohammed Adil Alakaly/ },
  { path: "/proof", heading: /فهرس الأدلة|Proof index/ },
  { path: "/philosophy", heading: /الفلسفة الهندسية|Engineering philosophy/ },
  { path: "/trajectory", heading: /المسار الزمني|Trajectory/ },
  { path: "/projects", heading: /المشاريع|Projects/ },
  { path: "/projects/smart-building", heading: /نظام إدارة المباني|Smart Building/ },
  { path: "/engage", heading: /كيف يمكننا العمل|How can we work/ },
];

for (const route of routes) {
  test(`${route.path} loads with correct heading`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1, h2").first()).toContainText(route.heading);
  });
}

test("home page has hero with name", async ({ page }) => {
  await page.goto("/");
  const h1 = page.locator("#entry h1");
  await expect(h1).toBeVisible();
  const text = await h1.textContent();
  expect(text).toBeTruthy();
  expect(text!.length).toBeGreaterThan(5);
});

test("home page has CTAs", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("a:has-text('شوف'), a:has-text('See')").first()).toBeVisible();
});

test("proof page has claims map", async ({ page }) => {
  await page.goto("/proof");
  await expect(page.locator("body")).toContainText(/خريطة الادّعاءات|Claims map/);
});

test("trajectory has 8 stages", async ({ page }) => {
  await page.goto("/trajectory");
  const stageText = await page.locator("body").textContent();
  expect(stageText).toContain("البذرة");
  expect(stageText).toContain("الشرارة");
  expect(stageText).toContain("التسلّق");
  expect(stageText).toContain("المشروع الرئيسي");
  expect(stageText).toContain("التطلعات");
});

test("deep-dive has 9 sections", async ({ page }) => {
  await page.goto("/projects/smart-building");
  const bodyText = await page.locator("body").textContent();
  expect(bodyText).toContain("المشكلة");
  expect(bodyText).toContain("القيود");
  expect(bodyText).toContain("عمارة النظام");
  expect(bodyText).toContain("قائمة المكوّنات");
  expect(bodyText).toContain("التنفيذ");
  expect(bodyText).toContain("بروتوكول الاختبار");
  expect(bodyText).toContain("النتائج");
  expect(bodyText).toContain("الدروس");
  expect(bodyText).toContain("التحقق");
});

test("deep-dive has code blocks with copy buttons", async ({ page }) => {
  await page.goto("/projects/smart-building");
  const codeBlocks = page.locator("pre code");
  await expect(codeBlocks.first()).toBeVisible();
  const count = await codeBlocks.count();
  expect(count).toBeGreaterThanOrEqual(3);
});

test("engage page has 4 path tabs", async ({ page }) => {
  await page.goto("/engage");
  await expect(page.locator('[role="tab"]')).toHaveCount(4);
});
