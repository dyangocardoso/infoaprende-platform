// ACTUALIZADO PARA SISTEMA MODULAR - 2025-09-12T15-07-20
import { useContext } from 'react';
import { ContenidoContext } from '../context/ContenidoContext';

export function useContenido() {
  const context = useContext(ContenidoContext);
  
  if (!context) {
    throw new Error('useContenido debe usarse dentro de ContenidoProvider');
  }
  
  // Mantener compatibilidad con el sistema anterior
  // Las funciones ahora retornan Promises
  return {
    ...context,
    // Wrapper para mantener compatibilidad
    getContenidoLeccionSync: (cursoId, temaId) => {
      // Para casos donde se necesite acceso síncrono (deprecated)
      console.warn('getContenidoLeccionSync está deprecated, usar await getContenidoLeccion()');
      return context.getContenidoLeccion(cursoId, temaId);
    }
  };
}

export default useContenido;
