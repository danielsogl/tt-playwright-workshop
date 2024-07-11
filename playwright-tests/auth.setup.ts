import { test as setup, expect } from '@playwright/test';
import { writeFile } from 'fs/promises';

const authFile = 'playwright/.auth/user.json';

setup('authenticate user', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle('Placeholder - MeinPlaceholder - Login');

  await page.getByRole('textbox', { name: 'E-Mail' }).fill('PLACEHOLDER_USER');
  await page.getByRole('textbox', { name: 'Kennwort' }).fill('PLACEHOLDER_PASSWORD');
  await page.getByRole('button', { name: 'Anmelden' }).click();

  await expect(page.locator('h3').filter({ hasText: 'Herzlich Willkommen' })).toBeVisible();
  await page.context().storageState({ path: authFile });

  const storage = await page.evaluate(() => JSON.stringify(sessionStorage));
  await writeFile('playwright/.auth/session.json', storage, 'utf-8');
});
