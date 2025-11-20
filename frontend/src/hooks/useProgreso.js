import { useContext } from 'react';
import { ProgresoContext } from '../context/ProgresoContext';

export const useProgreso = () => {
  const context = useContext(ProgresoContext);
  if (!context) {
    throw new Error('useProgreso debe ser usado dentro de ProgresoProvider');
  }
  return context;
};
