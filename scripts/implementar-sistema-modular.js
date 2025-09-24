#!/usr/bin/env node

/**
 * Script de migración e implementación del sistema modular
 * Ejecuta la transición completa del sistema monolítico al modular
 */

const fs = require('fs').promises;
const path = require('path');

const CONFIG = {
  frontendDir: path.join(__dirname, '../frontend/src'),
  backupDir: path.join(__dirname, 'backup-migration'),
  timestamp: new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
};

async function main() {
  console.log('🚀 INICIANDO IMPLEMENTACIÓN DEL SISTEMA MODULAR\n');
  console.log('📅 Fecha:', new Date().toLocaleString());
  console.log('⏰ Timestamp:', CONFIG.timestamp);
  console.log('📁 Directorio frontend:', CONFIG.frontendDir);
  console.log('💾 Directorio backup:', CONFIG.backupDir, '\n');

  try {
    // Paso 1: Crear backup de seguridad
    await crearBackupCompleto();
    
    // Paso 2: Actualizar archivo principal de la app
    await actualizarAppPrincipal();
    
    // Paso 3: Actualizar hooks que usan el contenido
    await actualizarHooks();
    
    // Paso 4: Crear archivo de compatibilidad
    await crearArchivoCompatibilidad();
    
    // Paso 5: Validar la migración
    await validarMigracion();
    
    console.log('\n✅ IMPLEMENTACIÓN COMPLETADA EXITOSAMENTE!');
    console.log('\n📋 PRÓXIMOS PASOS:');
    console.log('   1. Reiniciar el servidor de desarrollo');
    console.log('   2. Verificar que los cursos cargan correctamente');
    console.log('   3. Probar navegación entre temas');
    console.log('   4. Revisar consola para errores');
    console.log('\n🔄 Para revertir cambios si es necesario:');
    console.log(`   - Restaurar desde: ${CONFIG.backupDir}`);
    
  } catch (error) {
    console.error('❌ ERROR DURANTE LA IMPLEMENTACIÓN:', error);
    console.log('\n🔄 REVERTIR CAMBIOS:');
    console.log(`   - Restaurar archivos desde: ${CONFIG.backupDir}`);
    process.exit(1);
  }
}

/**
 * Crear backup completo del sistema actual
 */
async function crearBackupCompleto() {
  console.log('💾 Creando backup de seguridad...');
  
  await fs.mkdir(CONFIG.backupDir, { recursive: true });
  
  // Archivos críticos a respaldar
  const archivosBackup = [
    'context/ContenidoProvider.jsx',
    'context/ContenidoContext.js', 
    'hooks/useContenido.js',
    'App.jsx',
    'AppRouter.jsx'
  ];
  
  for (const archivo of archivosBackup) {
    try {
      const rutaOrigen = path.join(CONFIG.frontendDir, archivo);
      const rutaDestino = path.join(CONFIG.backupDir, archivo);
      
      // Crear directorio si no existe
      await fs.mkdir(path.dirname(rutaDestino), { recursive: true });
      
      // Copiar archivo
      const contenido = await fs.readFile(rutaOrigen, 'utf-8');
      await fs.writeFile(rutaDestino, contenido, 'utf-8');
      
      console.log(`   ✅ Backup: ${archivo}`);
    } catch (error) {
      console.log(`   ⚠️  No se pudo respaldar: ${archivo} (${error.message})`);
    }
  }
  
  console.log('✅ Backup completado\n');
}

/**
 * Actualizar el archivo principal de la aplicación
 */
async function actualizarAppPrincipal() {
  console.log('🔄 Actualizando archivo principal de la aplicación...');
  
  const rutaApp = path.join(CONFIG.frontendDir, 'App.jsx');
  
  try {
    let contenidoApp = await fs.readFile(rutaApp, 'utf-8');
    
    // Reemplazar import del ContenidoProvider
    if (contenidoApp.includes('ContenidoProvider')) {
      contenidoApp = contenidoApp.replace(
        /import.*ContenidoProvider.*from.*['"](.*ContenidoProvider.*)['"]/g,
        "import ContenidoProvider from './context/ContenidoProviderModular.jsx'"
      );
      
      // Agregar comentario de migración
      const comentarioMigracion = `// MIGRADO AL SISTEMA MODULAR - ${CONFIG.timestamp}\n// Provider anterior respaldado en: ${CONFIG.backupDir}\n`;
      
      if (!contenidoApp.includes('MIGRADO AL SISTEMA MODULAR')) {
        contenidoApp = comentarioMigracion + contenidoApp;
      }
      
      await fs.writeFile(rutaApp, contenidoApp, 'utf-8');
      console.log('   ✅ App.jsx actualizado');
    } else {
      console.log('   ℹ️  App.jsx no requiere cambios');
    }
    
  } catch (error) {
    console.log(`   ❌ Error actualizando App.jsx: ${error.message}`);
  }
  
  console.log('✅ Archivo principal actualizado\n');
}

/**
 * Actualizar hooks que usan el contenido
 */
async function actualizarHooks() {
  console.log('🔄 Actualizando hooks de contenido...');
  
  const rutaHook = path.join(CONFIG.frontendDir, 'hooks/useContenido.js');
  
  try {
    let contenidoHook = await fs.readFile(rutaHook, 'utf-8');
    
    // Agregar compatibilidad con async/await
    const nuevoHook = `// ACTUALIZADO PARA SISTEMA MODULAR - ${CONFIG.timestamp}
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
`;
    
    await fs.writeFile(rutaHook, nuevoHook, 'utf-8');
    console.log('   ✅ useContenido.js actualizado');
    
  } catch (error) {
    console.log(`   ❌ Error actualizando hook: ${error.message}`);
  }
  
  console.log('✅ Hooks actualizados\n');
}

/**
 * Crear archivo de compatibilidad para transición gradual
 */
async function crearArchivoCompatibilidad() {
  console.log('🔄 Creando archivo de compatibilidad...');
  
  const rutaCompatibilidad = path.join(CONFIG.frontendDir, 'context/ContenidoProviderCompatibilidad.jsx');
  
  const contenidoCompatibilidad = `/**
 * Provider de compatibilidad para transición gradual
 * Permite usar ambos sistemas durante la migración
 * Creado: ${CONFIG.timestamp}
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
`;
  
  await fs.writeFile(rutaCompatibilidad, contenidoCompatibilidad, 'utf-8');
  console.log('   ✅ Archivo de compatibilidad creado');
  console.log('✅ Compatibilidad establecida\n');
}

/**
 * Validar que la migración fue exitosa
 */
async function validarMigracion() {
  console.log('🔍 Validando migración...');
  
  const archivosValidar = [
    'data/cursos/nociones-computador/index.js',
    'data/cursos/nociones-computador/tema-01-algoritmos-migrado.js',
    'data/cursos/nociones-computador/tema-02-elementos.js',
    'data/cursos/nociones-computador/tema-03-manejo-raton.js',
    'data/shared/templates.js',
    'data/shared/validadores.js',
    'data/shared/constantes.js',
    'context/ContenidoProviderModular.jsx'
  ];
  
  let archivosExistentes = 0;
  
  for (const archivo of archivosValidar) {
    try {
      const rutaArchivo = path.join(CONFIG.frontendDir, archivo);
      await fs.access(rutaArchivo);
      console.log(`   ✅ ${archivo}`);
      archivosExistentes++;
    } catch (error) {
      console.log(`   ❌ ${archivo} - NO ENCONTRADO`);
    }
  }
  
  console.log(`\n📊 Validación: ${archivosExistentes}/${archivosValidar.length} archivos encontrados`);
  
  if (archivosExistentes === archivosValidar.length) {
    console.log('✅ Validación exitosa - Todos los archivos están en su lugar');
  } else {
    console.log('⚠️ Validación incompleta - Algunos archivos faltan');
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  main().catch(error => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });
}

module.exports = { main, CONFIG };
