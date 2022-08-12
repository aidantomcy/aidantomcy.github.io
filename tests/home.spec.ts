import { test, expect } from "@playwright/test";

test("homepage has text 'Aidan Tomcy' in title", async ({ page }) => {
  const port = 3000;
  const baseUrl = `http://localhost:${port}`;
  await page.goto(baseUrl, { timeout: 3000000 });
  await expect(page).toHaveTitle(/Aidan Tomcy/);

  const header = page.locator(".header h1");
  await expect(header).toHaveText(/Aidan Tomcy/);
});
