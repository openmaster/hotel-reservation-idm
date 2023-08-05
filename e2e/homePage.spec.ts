import { test, expect } from '@playwright/test';

const searchBarLabel = 'Search with name or phone number';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Hotel Reservation/);
});

test('Main page heading', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
//   await page.getByRole('button', { name: 'Add New Reservation' }).click();

  // Expects the URL to contain intro.
  await expect(page.getByRole('button', { name: 'Add New Reservation'})).toBeEnabled()
});

test('Main page should have search bar and be enabled', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const searchBar = page.getByLabel(searchBarLabel);
  await expect(searchBar).toBeEnabled()
  await expect(searchBar).toBeEmpty()
  await searchBar.fill('john')
  await expect(searchBar).not.toBeEmpty()
});

test('check Datalist with search', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const searchBar = page.getByLabel(searchBarLabel);
  let list = await page.locator('li').all()
  await expect(list).toHaveLength(4)
  await searchBar.fill('john')
  list = await page.locator('li').all()
  await expect(list).toHaveLength(2)
});

test('check deleting a Datalist item', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const deleteButton = page.getByRole('button', { name: 'Delete'}).first();
  let list = await page.locator('li').all()
  await expect(list).toHaveLength(4)
  await deleteButton.click()
  list = await page.locator('li').all()
  await expect(list).toHaveLength(2)
});

test('check adding new Datalist item', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const addButton = page.getByRole('button', { name: 'Add New Reservation' });
  let list = await page.locator('li').all()
  await expect(list).toHaveLength(4)
  await addButton.click()
  await expect(page.getByRole('heading', { name: 'Your Reservation Details' })).toBeInViewport()

  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('testfirstname');
  await page.getByLabel('First Name *').press('Tab');
  await page.getByLabel('Last Name *').fill('testlastname');
  await page.getByLabel('Last Name *').press('Tab');
  await page.getByLabel('Email').fill('sample@test.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Phone Number *').fill('9059062536');
  await page.getByRole('button', { name: 'Add' }).click();

  list = await page.locator('li').all()
  await expect(list).toHaveLength(6)

  await expect(page.locator('li').filter({ hasText: 'testfirstname' })).toBeInViewport()
});

test('check updating existing Datalist item', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Details' }).first().click();
  await expect(page.getByRole('heading', { name: 'Your Reservation Details' })).toBeInViewport()
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('testfirstname');
  await page.getByLabel('First Name *').press('Tab');
  await page.getByLabel('Last Name *').fill('testlastname');
  await page.getByLabel('Last Name *').press('Tab');
  await page.getByLabel('Email').fill('sample@test.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Phone Number *').fill('9059062536');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.locator('li').filter({ hasText: 'testfirstname' })).toBeInViewport()
});

