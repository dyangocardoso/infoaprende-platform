// MIGRADO AL SISTEMA MODULAR - 2025-09-12T15-07-20
// Provider anterior respaldado en: C:\Users\PROFESOR\Desktop\INFOAPRENDE\scripts\backup-migration
import React from 'react';
import AppRouter from './AppRouter';
import ProgresoProvider from './context/ProgresoProvider';
import EvaluacionProvider from './context/EvaluacionProvider';
import ContenidoProvider from './context/ContenidoProviderModular.jsx';
import PlantillaPreview from './components/PlantillaPreview';

export default function App() {
  const demoId = import.meta.env.VITE_PLANTILLA_DEMO_ID || 1;
  const token = localStorage.getItem('token') || null;

  // Mostrar preview solo si existe token (evita errores 401) o si se fuerza en desarrollo
  const forcePreviewInDev = import.meta.env.DEV && import.meta.env.VITE_SHOW_PLANTILLA_PREVIEW === 'true';
  const showPreview = Boolean(token) || forcePreviewInDev;

  return (
    <ProgresoProvider>
      <EvaluacionProvider>
        <ContenidoProvider>
          <AppRouter />
          {/* Ejemplo rápido: vista de preview en la página principal para desarrollo */}
          {showPreview && (
            <div style={{ margin: 20 }}>
              <h3>Preview de plantilla (demo)</h3>
              <PlantillaPreview id={demoId} token={token} />
            </div>
          )}
        </ContenidoProvider>
      </EvaluacionProvider>
    </ProgresoProvider>
  );
}
