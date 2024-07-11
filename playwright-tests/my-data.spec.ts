import test, { expect } from '@playwright/test';
import { MyDataPage } from './my-data.pom';

test.describe('My Data Page', () => {
  let myDataPage: MyDataPage;

  test.beforeEach(async ({ page }) => {
    myDataPage = new MyDataPage(page);
    await myDataPage.setup();
  });

  test.describe('Stepper', () => {
    test('should show job description tooltip on focus', async ({ page }) => {
      await myDataPage.selectTabByName('Berufsangaben');
      await myDataPage.jobDescriptionInput.focus();
      await expect(page.getByText('Das Feld darf nur Buchstaben')).toBeVisible();
    });

    test('should show an input error message for invalid job description', async ({ page }) => {
      await myDataPage.selectTabByName('Berufsangaben');
      await myDataPage.fillForm({ jobDescription: 'Mein-Job-gibt-es-nicht!' });
      await myDataPage.jobDescriptionInput.focus();
      await expect(page.getByText('Das Feld darf nur Buchstaben')).toBeVisible();
    });
  });
});
