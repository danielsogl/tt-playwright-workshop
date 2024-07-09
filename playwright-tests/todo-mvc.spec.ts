import { test, expect } from '@playwright/test';

test.describe('TodoMVC', () => {
  test('should navigate to the TodoMVC app', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/angular/dist/browser');
    await expect(page).toHaveTitle('TodoMVC: Angular');
  });

  test('should add a new todo', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/angular/dist/browser');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('New Todo');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await expect(page.locator('app-todo-item').getByText('New Todo')).toBeVisible();
  });

  test('should complete a todo', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/angular/dist/browser');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('New Todo');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await page.locator('app-todo-item').getByRole('checkbox').check();
    await expect(page.locator('app-todo-item').getByRole('checkbox')).toBeChecked();
  });

  test('should delete a todo', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/angular/dist/browser');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('New Todo');
    await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
    await page.locator('app-todo-item').hover();
    await page.locator('app-todo-item').getByRole('button', { name: '×' }).click();
    await expect(page.locator('app-todo-item')).not.toBeVisible();
  });
});
