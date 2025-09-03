import React from 'react';
import AppRouter from './AppRouter';
import { ProgresoProvider } from './context/ProgresoContext';
import { EvaluacionProvider } from './context/EvaluacionContext';
import { ContenidoProvider } from './context/ContenidoContext';

export default function App() {
  return (
    <ProgresoProvider>
      <EvaluacionProvider>
        <ContenidoProvider>
          <AppRouter />
        </ContenidoProvider>
      </EvaluacionProvider>
    </ProgresoProvider>
  );
}
