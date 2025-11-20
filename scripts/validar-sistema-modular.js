#!/usr/bin/env node

/**
 * Script de validación del sistema modular
 * Verifica que la migración fue exitosa y todo funciona correctamente
 */

const fs = require('fs').promises;
const path = require('path');

const CONFIG = {
  frontendDir: path.join(__dirname, '../frontend/src'),
  cursosDir: path.join(__dirname, '../frontend/src/data/cursos'),
  timestamp: new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
};

async function main() {
  console.log('🔍 VALIDANDO SISTEMA MODULAR\n');
  console.log('📅 Fecha:', new Date().toLocaleString());
  console.log('📁 Directorio frontend:', CONFIG.frontendDir);
  console.log('📚 Directorio cursos:', CONFIG.cursosDir, '\n');

  try {
    // Verificar estructura de archivos
    await verificarEstructura();
    
    // Validar contenido de archivos
    await validarContenido();
    
    // Verificar compatibilidad del provider
    await verificarProvider();
    
    // Verificar hooks
    await verificarHooks();
    
    // Verificar que App.jsx usa el nuevo provider
    await verificarApp();
    
    console.log('\n✅ VALIDACIÓN COMPLETADA EXITOSAMENTE!');
    console.log('\n📊 RESUMEN:');
    console.log('   ✅ Estructura de archivos: OK');
    console.log('   ✅ Contenido migrado: OK');
    console.log('   ✅ Provider modular: OK');
    console.log('   ✅ Hooks actualizados: OK');
    console.log('   ✅ App.jsx configurado: OK');
    
    console.log('\n🎯 SISTEMA MODULAR LISTO PARA USO!');
    
  } catch (error) {
    console.error('\n❌ ERROR DURANTE LA VALIDACIÓN:', error.message);
    console.log('\n🔧 Revisa los archivos y ejecuta el script de implementación nuevamente si es necesario.');
    process.exit(1);
  }
}

async function verificarEstructura() {
  console.log('📁 Verificando estructura de archivos...');
  
  const archivosRequeridos = [
    // Curso Nociones Computador
    'data/cursos/nociones-computador/index.js',
    'data/cursos/nociones-computador/tema-01-algoritmos-y-uso-basico.js',
    'data/cursos/nociones-computador/tema-02-elementos-que-componen-al-computador.js',
    'data/cursos/nociones-computador/tema-03-manejo-del-raton.js',
    // Curso Paint
    'data/cursos/paint/index.js',
    'data/cursos/paint/tema-01-interfaz-herramientas.js',
    'data/cursos/paint/tema-02-tecnicas-basicas-corrected.js',
    // Curso Paint 3D
    'data/cursos/paint-3d/index.js',
    'data/cursos/paint-3d/tema-01-exploracion-paint3d.js',
    'data/cursos/paint-3d/tema-02-creacion-objetos-3d-corrected.js',
    'data/cursos/paint-3d/tema-03-pintura-decoracion-corrected.js',
    'data/cursos/paint-3d/tema-04-escenarios-composicion-corrected.js',
    'data/cursos/paint-3d/tema-05-exposicion-creativa-corrected.js',
    // Curso Introducción Windows
    'data/cursos/intro-windows/index.js',
    'data/cursos/intro-windows/tema-01-elementos-funciones-basicas.js',
    'data/cursos/intro-windows/tema-02-explorador-windows.js',
    'data/cursos/intro-windows/tema-03-escritorio-windows.js',
    'data/cursos/intro-windows/tema-04-barra-tareas.js',
    'data/cursos/intro-windows/tema-05-menu-inicio.js',
    'data/cursos/intro-windows/tema-06-papelera-reciclaje.js',
    'data/cursos/intro-windows/tema-07-gestion-usuarios.js',
    'data/cursos/intro-windows/tema-08-herramientas-utilidades.js',
    // Curso Word
    'data/cursos/word/index.js',
    'data/cursos/word/tema-01-entorno-word.js',
    'data/cursos/word/tema-02-edicion-basica.js',
    'data/cursos/word/tema-03-formato-documento.js',
    'data/cursos/word/tema-04-ortografia-gramatica.js',
    'data/cursos/word/tema-05-estilos.js',
    'data/cursos/word/tema-06-imagenes-graficos.js',
    'data/cursos/word/tema-07-tablas.js',
    'data/cursos/word/tema-08-diagramas-organigramas.js',
    // Archivos compartidos y sistema
    'data/shared/templates.js',
    'data/shared/validadores.js',
    'data/shared/constantes.js',
    'context/ContenidoProviderModular.jsx',
    'context/ContenidoContext.js',
    'hooks/useContenido.js',
    'App.jsx'
  ];

  for (const archivo of archivosRequeridos) {
    const rutaCompleta = path.join(CONFIG.frontendDir, archivo);
    try {
      await fs.access(rutaCompleta);
      console.log(`   ✅ ${archivo}`);
    } catch (error) {
      throw new Error(`Archivo faltante: ${archivo}`);
    }
  }
  
  console.log('✅ Estructura verificada\n');
}

async function validarContenido() {
  console.log('📝 Validando contenido de archivos...');
  
  // Definir cursos y sus temas
  const cursos = {
    'nociones-computador': [
      'tema-01-algoritmos-y-uso-basico.js',
      'tema-02-elementos-que-componen-al-computador.js', 
      'tema-03-manejo-del-raton.js'
    ],
    'paint': [
      'tema-01-interfaz-herramientas.js',
      'tema-02-tecnicas-basicas-corrected.js'
    ],
    'paint-3d': [
      'tema-01-exploracion-paint3d.js',
      'tema-02-creacion-objetos-3d-corrected.js',
      'tema-03-pintura-decoracion-corrected.js',
      'tema-04-escenarios-composicion-corrected.js',
      'tema-05-exposicion-creativa-corrected.js'
    ],
    'intro-windows': [
      'tema-01-elementos-funciones-basicas.js',
      'tema-02-explorador-windows.js',
      'tema-03-escritorio-windows.js',
      'tema-04-barra-tareas.js',
      'tema-05-menu-inicio.js',
      'tema-06-papelera-reciclaje.js',
      'tema-07-gestion-usuarios.js',
      'tema-08-herramientas-utilidades.js'
    ],
    'word': [
      'tema-01-entorno-word.js',
      'tema-02-edicion-basica.js',
      'tema-03-formato-documento.js',
      'tema-04-ortografia-gramatica.js',
      'tema-05-estilos.js',
      'tema-06-imagenes-graficos.js',
      'tema-07-tablas.js',
      'tema-08-diagramas-organigramas.js'
    ]
  };
  
  for (const [curso, temas] of Object.entries(cursos)) {
    console.log(`   📚 Validando curso: ${curso}`);
    
    for (const tema of temas) {
      const rutaTema = path.join(CONFIG.cursosDir, curso, tema);
      const contenido = await fs.readFile(rutaTema, 'utf8');
      
      // Verificar que tiene contenido sustancial
      if (contenido.includes('Contenido por migrar') || contenido.includes('Objetivo por definir')) {
        throw new Error(`El archivo ${tema} aún contiene contenido de placeholder`);
      }
      
      // Verificar que tiene estructura correcta
      if (!contenido.includes('export') || !contenido.includes('secciones')) {
        throw new Error(`El archivo ${tema} no tiene la estructura correcta`);
      }
      
      console.log(`      ✅ ${tema} - Contenido validado`);
    }
  }
  
  console.log('✅ Contenido validado\n');
}

async function verificarProvider() {
  console.log('⚛️ Verificando provider modular...');
  
  const rutaProvider = path.join(CONFIG.frontendDir, 'context/ContenidoProviderModular.jsx');
  const contenido = await fs.readFile(rutaProvider, 'utf8');
  
  // Verificar que tiene las funciones esenciales
  const funcionesRequeridas = [
    'cargarCurso',
    'obtenerTema',
    'ContenidoProviderModular'
  ];
  
  for (const funcion of funcionesRequeridas) {
    if (!contenido.includes(funcion)) {
      throw new Error(`Provider no contiene la función: ${funcion}`);
    }
  }
  
  console.log('   ✅ Provider modular validado');
  console.log('✅ Provider verificado\n');
}

async function verificarHooks() {
  console.log('🪝 Verificando hooks...');
  
  const rutaHook = path.join(CONFIG.frontendDir, 'hooks/useContenido.js');
  const contenido = await fs.readFile(rutaHook, 'utf8');
  
  // Verificar que está actualizado para el sistema modular
  if (!contenido.includes('ContenidoContext')) {
    throw new Error('Hook useContenido no está usando ContenidoContext');
  }
  
  console.log('   ✅ useContenido.js validado');
  console.log('✅ Hooks verificados\n');
}

async function verificarApp() {
  console.log('📱 Verificando App.jsx...');
  
  const rutaApp = path.join(CONFIG.frontendDir, 'App.jsx');
  const contenido = await fs.readFile(rutaApp, 'utf8');
  
  // Verificar que usa el provider modular
  if (!contenido.includes('ContenidoProviderModular')) {
    throw new Error('App.jsx no está usando ContenidoProviderModular');
  }
  
  console.log('   ✅ App.jsx usa provider modular');
  console.log('✅ App.jsx verificado\n');
}

// Ejecutar validación
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };
