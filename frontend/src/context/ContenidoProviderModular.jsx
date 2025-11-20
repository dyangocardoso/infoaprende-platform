/**
 * Proveedor de contenido modular mejorado
 * Sistema de carga dinámica para contenido de cursos
 * IMPLEMENTACIÓN COMPLETA - MIGRACIÓN DEL SISTEMA MONOLÍTICO
 */

import React, { useState, useCallback, useMemo } from 'react';
import { ContenidoContext } from './ContenidoContext.js';
import { MENSAJES_ERROR, CACHE_CONFIG, DEV_CONFIG } from '../data/shared/constantes.js';

export default function ContenidoProviderModular({ children }) {
  // Estado para cache de contenido
  const [contenidoCache, setContenidoCache] = useState(new Map());
  const [cursosDisponibles] = useState(new Set([
    'nociones-computador',
    'intro-informatica',
    'intro-windows',
    'paint',
    'paint-3d',
    'word',
    'powerpoint',
    'excel',
    'access',
    'redes',
    'ciberseguridad'
  ]));

  // Estado para errores y logs
  const [erroresCache, setErroresCache] = useState(new Map());

  /**
   * Carga dinámica de un curso completo
   */
  const cargarCurso = useCallback(async (cursoId) => {
    const cacheKey = `curso-${cursoId}`;
    
    // Verificar cache primero
    if (contenidoCache.has(cacheKey)) {
      const cachedData = contenidoCache.get(cacheKey);
      
      // Verificar si no ha expirado
      if (Date.now() - cachedData.timestamp < CACHE_CONFIG.TTL_CONTENIDO) {
        if (DEV_CONFIG.MOSTRAR_LOGS) {
          console.log(`📄 Curso ${cursoId} cargado desde cache`);
        }
        return cachedData.data;
      }
    }

    try {
      if (DEV_CONFIG.MOSTRAR_LOGS) {
        console.log(`🔄 Cargando curso dinámicamente: ${cursoId}`);
      }

      // Importación dinámica del curso
      const modulo = await import(`../data/cursos/${cursoId}/index.js`);
      const cursoData = modulo.default;

      // Almacenar en cache
      setContenidoCache(prev => {
        const newCache = new Map(prev);
        newCache.set(cacheKey, {
          data: cursoData,
          timestamp: Date.now()
        });
        
        // Limitar tamaño del cache
        if (newCache.size > CACHE_CONFIG.MAX_ITEMS_CACHE) {
          const oldestKey = newCache.keys().next().value;
          newCache.delete(oldestKey);
        }
        
        return newCache;
      });

      // Limpiar errores previos
      setErroresCache(prev => {
        const newErrors = new Map(prev);
        newErrors.delete(cursoId);
        return newErrors;
      });

      if (DEV_CONFIG.MOSTRAR_LOGS) {
        console.log(`✅ Curso ${cursoId} cargado exitosamente`);
      }

      return cursoData;
      
    } catch (error) {
      console.error(`❌ Error cargando curso ${cursoId}:`, error);
      
      // Registrar error
      setErroresCache(prev => {
        const newErrors = new Map(prev);
        newErrors.set(cursoId, {
          mensaje: error.message,
          timestamp: Date.now()
        });
        return newErrors;
      });

      throw new Error(`${MENSAJES_ERROR.ERROR_CARGA}: ${cursoId}`);
    }
  }, [contenidoCache]);

  /**
   * Carga dinámica de un tema específico
   */
  const cargarTema = useCallback(async (cursoId, temaId) => {
    const cacheKey = `tema-${cursoId}-${temaId}`;
    
    // Verificar cache
    if (contenidoCache.has(cacheKey)) {
      const cachedData = contenidoCache.get(cacheKey);
      if (Date.now() - cachedData.timestamp < CACHE_CONFIG.TTL_CONTENIDO) {
        return cachedData.data;
      }
    }

    try {
      // Primero intentar cargar desde curso completo
      const curso = await cargarCurso(cursoId);
      const tema = curso.obtenerTema(temaId);
      
      if (!tema) {
        throw new Error(`${MENSAJES_ERROR.TEMA_NO_ENCONTRADO}: ${temaId}`);
      }

      // Cache del tema individual
      setContenidoCache(prev => {
        const newCache = new Map(prev);
        newCache.set(cacheKey, {
          data: tema,
          timestamp: Date.now()
        });
        return newCache;
      });

      return tema;
      
    } catch (error) {
      console.error(`❌ Error cargando tema ${cursoId}/${temaId}:`, error);
      throw error;
    }
  }, [cargarCurso, contenidoCache]);

  /**
   * Obtiene información de un curso sin cargar todo el contenido
   */
  const obtenerInfoCurso = useCallback(async (cursoId) => {
    try {
      const curso = await cargarCurso(cursoId);
      return curso.obtenerInfoCurso();
    } catch (error) {
      console.error(`❌ Error obteniendo info del curso ${cursoId}:`, error);
      return null;
    }
  }, [cargarCurso]);

  /**
   * Obtiene contenido de una lección específica (COMPATIBILIDAD CON SISTEMA ANTERIOR)
   */
  const getContenidoLeccion = useCallback((cursoId, temaId) => {
    return cargarTema(cursoId, temaId);
  }, [cargarTema]);

  /**
   * Obtiene secciones de un tema (COMPATIBILIDAD CON SISTEMA ANTERIOR)
   */
  const getSecciones = useCallback((cursoId, temaId) => {
    return cargarTema(cursoId, temaId).then(tema => tema?.secciones || []);
  }, [cargarTema]);

  /**
   * Obtiene una sección específica (COMPATIBILIDAD CON SISTEMA ANTERIOR)
   */
  const getSeccion = useCallback((cursoId, temaId, seccionId) => {
    return getSecciones(cursoId, temaId).then(secciones => 
      secciones.find(s => s.id === parseInt(seccionId)) || null
    );
  }, [getSecciones]);

  /**
   * Obtiene recursos de un tema (COMPATIBILIDAD CON SISTEMA ANTERIOR)
   */
  const getRecursos = useCallback((cursoId, temaId) => {
    return cargarTema(cursoId, temaId).then(tema => 
      tema?.recursos || { documentos: [], enlaces: [], videos: [] }
    );
  }, [cargarTema]);

  /**
   * Verifica si un curso existe
   */
  const cursoExiste = useCallback((cursoId) => {
    return cursosDisponibles.has(cursoId);
  }, [cursosDisponibles]);

  /**
   * Limpia el cache (útil para desarrollo)
   */
  const limpiarCache = useCallback(() => {
    setContenidoCache(new Map());
    setErroresCache(new Map());
    if (DEV_CONFIG.MOSTRAR_LOGS) {
      console.log('🧹 Cache limpiado');
    }
  }, []);

  /**
   * Obtiene estadísticas del cache
   */
  const getEstadisticasCache = useCallback(() => {
    return {
      itemsEnCache: contenidoCache.size,
      erroresRegistrados: erroresCache.size,
      limiteCacheAlcanzado: contenidoCache.size >= CACHE_CONFIG.MAX_ITEMS_CACHE
    };
  }, [contenidoCache.size, erroresCache.size]);

  /**
   * Pre-carga cursos para mejor performance
   */
  const precargarCursos = useCallback(async (cursosIds = []) => {
    if (DEV_CONFIG.MOSTRAR_LOGS) {
      console.log('🚀 Iniciando precarga de cursos:', cursosIds);
    }

    const promesas = cursosIds.map(async (cursoId) => {
      try {
        await cargarCurso(cursoId);
        return { cursoId, exito: true };
      } catch (error) {
        return { cursoId, exito: false, error: error.message };
      }
    });

    const resultados = await Promise.allSettled(promesas);
    
    if (DEV_CONFIG.MOSTRAR_LOGS) {
      console.log('📊 Resultados de precarga:', resultados);
    }

    return resultados;
  }, [cargarCurso]);

  // Valor del contexto memoizado para evitar re-renders innecesarios
  const contextValue = useMemo(() => ({
    // Funciones principales
    getContenidoLeccion,
    getSecciones,
    getSeccion,
    getRecursos,
    obtenerInfoCurso,
    cursoExiste,
    
    // Funciones de gestión de cache
    limpiarCache,
    getEstadisticasCache,
    precargarCursos,
    
    // Estado del sistema
    cursosDisponibles: Array.from(cursosDisponibles),
    erroresCache: Object.fromEntries(erroresCache),
    
    // Configuración
    config: {
      cacheTTL: CACHE_CONFIG.TTL_CONTENIDO,
      maxItemsCache: CACHE_CONFIG.MAX_ITEMS_CACHE,
      debugMode: DEV_CONFIG.MOSTRAR_LOGS
    }
  }), [
    getContenidoLeccion,
    getSecciones,
    getSeccion,
    getRecursos,
    obtenerInfoCurso,
    cursoExiste,
    limpiarCache,
    getEstadisticasCache,
    precargarCursos,
    cursosDisponibles,
    erroresCache
  ]);

  return (
    <ContenidoContext.Provider value={contextValue}>
      {children}
    </ContenidoContext.Provider>
  );
}
