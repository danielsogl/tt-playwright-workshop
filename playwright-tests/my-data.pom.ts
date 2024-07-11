import { Locator, Page } from '@playwright/test';
import { LoginPage } from './login.pom';

export class MyDataPage {
  private readonly page: Page;
  readonly stepper: Locator;
  readonly jobDescriptionInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.stepper = page.getByRole('tablist');
    this.jobDescriptionInput = page.getByLabel('Aktueller Beruf').first();
  }

  async setup() {
    const loginPage = new LoginPage(this.page);
    await loginPage.setup();
    await loginPage.login('PLACEHOLDER_USER', 'PLACEHOLDER_PASSWORD');
    await this.page.getByRole('button', { name: 'Meine Daten' }).click();
  }

  async selectTabByName(tabName: string) {
    await this.stepper.getByRole('tab', { name: tabName }).click();
  }

  async fillForm(config: { jobDescription: string }) {
    await this.jobDescriptionInput.clear();
    await this.jobDescriptionInput.fill(config.jobDescription);
    await this.jobDescriptionInput.blur();
  }
}
