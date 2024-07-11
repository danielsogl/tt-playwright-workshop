import { test as base } from '@playwright/test';
import { readFileSync } from 'fs';
import { HomePage } from './home.pom';

interface MyFixtures {
  homePage: HomePage;
}

export const test = base.extend<MyFixtures>({
  context: async ({ context }, use) => {
    const sessionStorage = JSON.parse(readFileSync('playwright/.auth/session.json', 'utf-8'));
    await context.addInitScript(storage => {
      for (const [key, value] of Object.entries(storage)) {
        window.sessionStorage.setItem(key, value as string);
      }
    }, sessionStorage);
    await use(context);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { expect } from '@playwright/test';
