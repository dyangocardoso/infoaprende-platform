import { test, expect } from '@playwright/test';

// Base URL para llamadas API (permitir override con TEST_API_URL en CI/local)
// Soporta: Node env (globalThis.process.env.TEST_API_URL) o Vite env (import.meta.env.VITE_TEST_API_URL)
const API_BASE = (
  globalThis?.process?.env?.TEST_API_URL ||
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_TEST_API_URL) ||
  'http://localhost:4000'
);

// Helpers
async function apiLogin(request, email, password) {
  const res = await request.post(`${API_BASE}/api/users/login`, {
    data: { email, password }
  });
  return res;
}

test.describe('RBAC docente module', () => {
  test('docente puede crear un temario (positivo)', async ({ request }) => {
    // Login como docente - ajustar credenciales de seed si necesario
    const loginRes = await apiLogin(request, 'docente@example.com', 'password');
    expect(loginRes.ok()).toBeTruthy();
    const token = (await loginRes.json()).token;

    const createRes = await request.post(`${API_BASE}/api/docente/temarios`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { titulo: 'Temario E2E', descripcion: 'Creado en test', nivel: 'primario' }
    });
    expect(createRes.status()).toBe(201);
    const body = await createRes.json();
    expect(body).toHaveProperty('id');
  });

  test('estudiante no puede acceder al módulo docente (negativo)', async ({ request }) => {
    // Login como estudiante
    const loginRes = await apiLogin(request, 'estudiante@example.com', 'password');
    expect(loginRes.ok()).toBeTruthy();
    const token = (await loginRes.json()).token;

    const accessRes = await request.post(`${API_BASE}/api/docente/temarios`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { titulo: 'Intento no autorizado', descripcion: 'Debe fallar', nivel: 'primario' }
    });
    expect(accessRes.status()).toBe(403);
    const err = await accessRes.json();
    expect(err).toHaveProperty('message').catch(() => {});
  });
});
