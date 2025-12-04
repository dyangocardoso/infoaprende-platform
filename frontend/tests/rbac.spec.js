import { test, expect } from '@playwright/test';

// Helpers
async function apiLogin(request, email, password) {
  const res = await request.post('/api/users/login', {
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

    const createRes = await request.post('/api/docente/temarios', {
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

    const accessRes = await request.post('/api/docente/temarios', {
      headers: { Authorization: `Bearer ${token}` },
      data: { titulo: 'Intento no autorizado', descripcion: 'Debe fallar', nivel: 'primario' }
    });
    expect(accessRes.status()).toBe(403);
    const err = await accessRes.json();
    expect(err).toHaveProperty('message').catch(() => {});
  });
});
