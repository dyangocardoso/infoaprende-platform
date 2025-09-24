import { useContext } from 'react';
import { ContenidoContext } from '../context/ContenidoContext';

export const useContenido = () => {
  const context = useContext(ContenidoContext);
  if (!context) {
    throw new Error('useContenido debe ser usado dentro de ContenidoProvider');
  }
  return context;
};
