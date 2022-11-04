import { test, expect } from "@playwright/test";
import { baseURL, timeoutOptions } from "./constants";

test("users can change the theme", async ({ page }) => {
  await page.goto(baseURL, timeoutOptions);

  const updateThemeButton = page.locator("#dark-light-toggle");
  const body = page.locator("body");

  await expect(updateThemeButton).toHaveText("Let there be light");
  await expect(body).toHaveClass("dark");
  updateThemeButton.click();
  await expect(updateThemeButton).toHaveText("Let there be darkness");
  await expect(body).toHaveClass("light");
});
