import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, describe, it, expect, afterEach } from 'vitest';
import PlantillaPreview from '../PlantillaPreview';

// Mock fetch
vi.stubGlobal('fetch', vi.fn(() =>
  Promise.resolve({
    ok: true,
    text: () => Promise.resolve('<div><h1>Hola</h1><script>window.XSS=1</script></div>')
  })
));

describe('PlantillaPreview', () => {
  afterEach(() => {
    vi.resetAllMocks();
    delete window.XSS;
  });

  it('renderiza HTML sanitizado desde el endpoint', async () => {
    render(<PlantillaPreview id={1} token={'fake-token'} />);

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const heading = await screen.findByText('Hola');
    expect(heading).toBeInTheDocument();

    // Verificar que el script no se ejecutó y no quedó en el DOM
    expect(window.XSS).toBeUndefined();
  });
});
