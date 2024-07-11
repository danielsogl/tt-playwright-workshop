import { test, expect } from '@playwright/test';
import { LoginPage } from './login.pom';

test.describe('Login Page', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.setup();
  });

  test('should login user', async ({ page }) => {
    // act
    await loginPage.login('PLACEHOLDER_USER', 'PLACEHOLDER_PASSWORD');

    // assert
    await expect(page).toHaveTitle('Kundenportal');
  });

  test('should show error message on wrong credentials', async ({ page }) => {
    // act
    await loginPage.login('PLACEHOLDER_USER', 'PLACEHOLDER_PASSWORD!!');

    // assert
    await expect(loginPage.errorText).toBeVisible();
  });
});

