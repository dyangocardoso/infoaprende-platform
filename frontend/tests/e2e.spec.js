import { test, expect } from '@playwright/test';

test('homepage loads and health endpoint responds via proxy', async ({ page, request, baseURL }) => {
  // Open the app
  await page.goto('/');
  // Basic check: page has some expected text (adjust if your app differs)
  await expect(page).toHaveTitle(/InfoAprende|Info Aprende|InfoAprende/i);

  // Check proxied health endpoint
  const res = await request.get('/api/health');
  expect(res.ok()).toBeTruthy();
  const body = await res.json();
  expect(body).toHaveProperty('status');
});
