const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

// Configuración CommonJS para evitar errores al ejecutar Playwright en proyectos ESM
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
    // Usar script npm 'dev' en la raíz que ejecuta concurrently (cross-platform)
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true,
    cwd: path.resolve(__dirname, '..'),
    timeout: 180 * 1000,
    // Esperar a que el backend responda en /api/health antes de marcar listo
    serverReadyCheck: async () => {
      const fetch = require('node-fetch');
      const max = Date.now() + 180000; // 3 minutos
      while (Date.now() < max) {
        try {
          const res = await fetch('http://localhost:4000/api/health');
          if (res.ok) return true;
        } catch (e) {
          // ignore
        }
        await new Promise(r => setTimeout(r, 1000));
      }
      throw new Error('backend did not become ready in time');
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
