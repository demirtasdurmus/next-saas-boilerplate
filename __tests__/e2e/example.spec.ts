import { expect, test } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page (the baseUrl is set via the webServer in the playwright.config.ts)
  await page.goto('/');

  // Find an element with the text 'About' and click on it
  await page.click('text=About');

  // The new URL should be '/about' (baseURL is used here)
  await expect(page).toHaveURL('/about');

  // The new page should contain an h1 with 'About'
  await expect(page.locator('h1')).toContainText('About');
});
