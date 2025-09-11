import React from 'react';
import AppRouter from './AppRouter';
import ProgresoProvider from './context/ProgresoProvider';
import EvaluacionProvider from './context/EvaluacionProvider';
import ContenidoProvider from './context/ContenidoProvider';

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
