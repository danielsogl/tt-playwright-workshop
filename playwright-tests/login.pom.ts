import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  protected page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'E-Mail' });
    this.passwordInput = page.getByRole('textbox', { name: 'Kennwort' });
    this.loginButton = page.getByRole('button', { name: 'Anmelden' });
    this.errorText = page.getByText('Ungültiger Benutzername oder Kennwort');
  }

  async setup() {
    this.page.goto('');
    await expect(this.page).toHaveTitle('Placeholder - MeinPlaceholder - Login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
