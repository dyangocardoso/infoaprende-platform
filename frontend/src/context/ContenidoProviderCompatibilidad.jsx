/**
 * Provider de compatibilidad para transición gradual
 * Permite usar ambos sistemas durante la migración
 * Creado: 2025-09-12T15-07-20
 */

import React, { useEffect, useState } from 'react';
import ContenidoProviderModular from './ContenidoProviderModular.jsx';
import { validarCursoCompleto } from '../data/shared/validadores.js';

export default function ContenidoProviderCompatibilidad({ children }) {
  const [sistemaActivo, setSistemaActivo] = useState('modular');
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
      // Fallback al sistema anterior si está disponible
      setSistemaActivo('fallback');
    }
  };
  
  if (erroresCarga.length > 0 && process.env.NODE_ENV === 'development') {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffebee',
        border: '1px solid #f44336',
        padding: '10px',
        zIndex: 9999
      }}>
        <h4>⚠️ Advertencias del Sistema Modular:</h4>
        <ul>
          {erroresCarga.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <small>Esto solo se muestra en desarrollo</small>
      </div>
    );
  }
  
  return <ContenidoProviderModular>{children}</ContenidoProviderModular>;
}
