const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 120 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    actionTimeout: 0,
    trace: 'on-first-retry'
  },
  webServer: {
    // Start docker compose to bring db + backend + frontend (Nginx) for e2e tests.
    command: 'docker compose up --build',
    port: 5173,
    reuseExistingServer: true,
    timeout: 120 * 1000
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
