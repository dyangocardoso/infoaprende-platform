/* eslint-env node */
import { defineConfig, devices } from '@playwright/test';

// Evitar acceso directo a `process` en entornos donde no esté definido (lint)
const isCI = typeof globalThis !== 'undefined' && !!globalThis.process?.env?.CI;

export default defineConfig({
  testDir: './tests',
  timeout: 120 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: false,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:5173',
    actionTimeout: 0,
    trace: 'on-first-retry'
  },
  webServer: {
    // Arranca backend y frontend sin Docker: backend en segundo plano, frontend en primer plano
    command: "sh -c 'npm --prefix backend run dev & npm --prefix frontend run dev'",
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
