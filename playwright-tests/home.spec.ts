import { test, expect } from './base';

test.describe('Home Page', { tag: ['@home'] }, () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.setup();
  });

  test.describe('Headline', { tag: ['@smoke', '@fast'] }, () => {
    test('should display the same user as inside the user menu', async ({ homePage }) => {
      await expect(homePage.welcomeText).toContainText('Wolfgang Bach');
    });
  });
});
