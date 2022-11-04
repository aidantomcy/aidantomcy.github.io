import { test, expect } from "@playwright/test";
import { baseURL, timeoutOptions } from "./constants";

test("homepage has correct title", async ({ page }) => {
  await page.goto(baseURL, timeoutOptions);
  await expect(page).toHaveTitle(/Aidan Tomcy/);

  const h1 = page.locator(".header h1");
  await expect(h1).toHaveText(/Aidan Tomcy/);
});
