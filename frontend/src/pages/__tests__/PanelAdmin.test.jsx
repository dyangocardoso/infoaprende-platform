import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

// Mock API client
vi.mock('../../api/client', () => ({
  default: {
    get: vi.fn(async (path) => {
      if (path === '/api/admin/users') return { ok: true, data: { users: [] } };
      if (path === '/api/admin/stats') return { ok: true, data: { stats: { totalUsers: 0, usersByRole: { estudiantes: 0, docentes: 0, administradores: 0 } } } };
      if (path === '/api/docente/temarios') return {
        ok: true,
        data: {
          temarios: [
            { id: 1, titulo: 'Temario Demo', descripcion: 'Desc', nivel: 'Inicial', metadata: { generated_html: '<div id="preview">Hola</div>' } }
          ]
        }
      };
      return { ok: false };
    })
  }
}));

// Mock TemarioForm to avoid rendering complex form inside the test
vi.mock('../../components/TemarioForm', () => ({ default: () => null }));

// Ensure createObjectURL / revokeObjectURL exist in JSDOM environment for the test
beforeEach(() => {
  globalThis.URL.createObjectURL = vi.fn(() => 'blob:fake-url');
  globalThis.URL.revokeObjectURL = vi.fn();
  // set localStorage user as docente so the create temario button and form logic allow rendering
  window.localStorage.setItem('user', JSON.stringify({ rol: 'docente' }));
  window.localStorage.setItem('token', 'fake-token');
});

import PanelAdmin from '../PanelAdmin';

describe('PanelAdmin preview iframe', () => {
  it('muestra iframe sandbox con src blob cuando se abre previsualización', async () => {
    render(
      <MemoryRouter>
        <PanelAdmin />
      </MemoryRouter>
    );

    // Verificar que la tarjeta del temario muestra el badge indicando HTML incluido
    const badge = await screen.findByText(/HTML incluido/i);
    expect(badge).toBeTruthy();

    // Esperar a que aparezca el botón Abrir HTML para el temario mockeado
    const openBtn = await screen.findByText(/👁️ Abrir HTML/i);
    await userEvent.click(openBtn);

    // Esperar que el iframe aparezca
    await waitFor(() => {
      const iframe = document.querySelector('iframe[title="Previsualización del temario"]');
      expect(iframe).toBeTruthy();
      expect(iframe.src).toContain('blob:fake-url');
      // Verificar que el iframe tiene el atributo sandbox configurado
      expect(iframe.getAttribute('sandbox')).toBe('allow-same-origin');
    });

    // Verificar que los botones de la modal están presentes
    const downloadBtn = await screen.findByText(/⬇️ Descargar/i);
    const openTabBtn = await screen.findByText(/🔗 Abrir en pestaña/i);
    const closeBtn = await screen.findByText(/❌ Cerrar/i);
    expect(downloadBtn).toBeTruthy();
    expect(openTabBtn).toBeTruthy();
    expect(closeBtn).toBeTruthy();
  });
});
