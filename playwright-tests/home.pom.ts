import { expect, Locator, Page } from '@playwright/test';
import { LoginPage } from './login.pom';

export class HomePage {
  protected page: Page;
  readonly welcomeText: Locator;
  readonly navBar: Locator;
  readonly userMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeText = page.locator('h3').filter({ hasText: 'Herzlich Willkommen' });
    this.navBar = page.locator('ps-app-bar');
    this.userMenu = this.navBar.locator('ps-user-menu').getByRole('button');
  }

  async setup() {
    // const loginPage = new LoginPage(this.page);
    // await loginPage.setup();
    // await loginPage.login('PLACEHOLDER_USER', 'PLACEHOLDER_PASSWORD');

    await this.page.goto('#/startseite(side:consultant)');
    await expect(this.welcomeText).toBeVisible();
  }
}
