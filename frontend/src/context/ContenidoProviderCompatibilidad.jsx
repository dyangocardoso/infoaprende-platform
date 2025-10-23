/**
 * Provider de compatibilidad para transición gradual
 * Permite usar ambos sistemas durante la migración
 * Creado: 2025-09-12T15-07-20
 */

// ...existing code...
import React, { useEffect, useState } from 'react';
import ContenidoProviderModular from './ContenidoProviderModular.jsx';
import { validarCursoCompleto } from '../data/shared/validadores.js';

export default function ContenidoProviderCompatibilidad({ children }) {
  // Eliminado 'sistemaActivo' porque no se usa (limpieza de código).
  const [erroresCarga, setErroresCarga] = useState([]);
  
  useEffect(() => {
    // Verificar que el sistema modular funciona correctamente
    verificarSistemaModular();
  }, []);
  
  const verificarSistemaModular = async () => {
    try {
      // Intentar cargar un curso de prueba
      const { default: cursoTest } = await import('../data/cursos/nociones-computador/index.js');
      
      // Validar estructura
      const validacion = validarCursoCompleto(cursoTest);
      
      if (!validacion.esValido) {
        console.warn('⚠️ Sistema modular con advertencias:', validacion.advertencias);
        setErroresCarga(validacion.errores);
      } else {
        console.log('✅ Sistema modular funcionando correctamente');
      }
      
    } catch (error) {
      console.error('❌ Error en sistema modular:', error);
      setErroresCarga([error.message]);
      // En caso de error se muestra el banner de errores; el fallback se puede implementar si se necesita.
    }
  };
  
  // ...existing code...
  return (
    <>
      {erroresCarga.length > 0 && (
        <div style={{ background: '#fff3cd', color: '#856404', padding: 8, borderRadius: 4, marginBottom: 8 }}>
          <strong>Advertencia de carga:</strong> {erroresCarga.join('; ')}
        </div>
      )}
      <ContenidoProviderModular>{children}</ContenidoProviderModular>
    </>
  );
}
