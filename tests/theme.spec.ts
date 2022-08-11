import { test, expect } from "@playwright/test";

test("functionality to change theme is working as expected", async ({
  page,
}) => {
  const port = 3000;
  const baseUrl = `http://localhost:${port}`;
  await page.goto(baseUrl);

  const updateThemeButton = page.locator("#dark-light-toggle");
  const body = page.locator("body");

  await expect(updateThemeButton).toHaveText("Let there be light");
  await expect(body).toHaveClass("dark");
  updateThemeButton.click();
  await expect(updateThemeButton).toHaveText("Let there be darkness");
  await expect(body).toHaveClass("light");
});
