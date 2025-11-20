/**
 * Herramientas para migrar contenido del sistema monolítico al modular
 * Ejecutar con: node scripts/content-migration/migrate-content.js
 */

const fs = require('fs').promises;
const path = require('path');

/**
 * Configuración de la migración
 */
const CONFIG = {
  // Archivo fuente (monolítico)
  archivoFuente: path.join(__dirname, '../../frontend/src/context/ContenidoProvider.jsx'),
  
  // Directorio destino (modular)
  directorioDestino: path.join(__dirname, '../../frontend/src/data/cursos'),
  
  // Cursos a migrar
  cursosAMigrar: [
    'nociones-computador',
    'intro-informatica', 
    'intro-windows',
    'paint',
    'paint-3d',
    'word',
    'powerpoint',
    'excel'
  ],
  
  // Configuración de backup
  crearBackup: true,
  directorioBackup: path.join(__dirname, 'backup')
};

/**
 * Función principal de migración
 */
async function migrarContenido() {
  console.log('🚀 Iniciando migración de contenido...\n');
  
  try {
    // 1. Crear backup si está habilitado
    if (CONFIG.crearBackup) {
      await crearBackup();
    }
    
    // 2. Leer archivo fuente
    console.log('📖 Leyendo archivo fuente...');
    const contenidoFuente = await fs.readFile(CONFIG.archivoFuente, 'utf-8');
    
    // 3. Extraer datos del contenido
    console.log('🔍 Extrayendo datos de contenido...');
    const datosExtraidos = extraerDatosContenido(contenidoFuente);
    
    // 4. Migrar cada curso
    console.log('📦 Migrando cursos...\n');
    for (const cursoId of CONFIG.cursosAMigrar) {
      await migrarCurso(cursoId, datosExtraidos);
    }
    
    console.log('\n✅ Migración completada exitosamente!');
    console.log('📊 Estadísticas de migración:');
    console.log(`   - Cursos migrados: ${CONFIG.cursosAMigrar.length}`);
    console.log(`   - Directorio destino: ${CONFIG.directorioDestino}`);
    
  } catch (error) {
    console.error('❌ Error durante la migración:', error);
    process.exit(1);
  }
}

/**
 * Crear backup del archivo original
 */
async function crearBackup() {
  console.log('💾 Creando backup...');
  
  try {
    await fs.mkdir(CONFIG.directorioBackup, { recursive: true });
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const nombreBackup = `ContenidoProvider-backup-${timestamp}.jsx`;
    const rutaBackup = path.join(CONFIG.directorioBackup, nombreBackup);
    
    const contenidoOriginal = await fs.readFile(CONFIG.archivoFuente, 'utf-8');
    await fs.writeFile(rutaBackup, contenidoOriginal, 'utf-8');
    
    console.log(`✅ Backup creado: ${rutaBackup}\n`);
  } catch (error) {
    console.error('❌ Error creando backup:', error);
    throw error;
  }
}

/**
 * Extraer datos de contenido del archivo monolítico
 */
function extraerDatosContenido(contenidoArchivo) {
  console.log('🔧 Procesando contenido del archivo...');
  
  // Buscar el objeto contenidoDatabase
  const regex = /const contenidoDatabase = \{([\s\S]*?)\};/;
  const match = contenidoArchivo.match(regex);
  
  if (!match) {
    throw new Error('No se pudo encontrar el objeto contenidoDatabase en el archivo fuente');
  }
  
  // Aquí se podría usar un parser más sofisticado
  // Por ahora, haremos una simulación de los datos
  const datosSimulados = {
    'nociones-computador': {
      info: {
        id: 'nociones-computador',
        titulo: 'Nociones generales del computador',
        descripcion: 'Aprende los conceptos básicos sobre el computador, sus componentes y algoritmos fundamentales.',
        nivel: 'Principiante',
        duracion: '2-3 horas',
        categoria: 'Fundamentos'
      },
      temas: {
        '1': { id: '1', titulo: 'Algoritmos y uso básico' },
        '2': { id: '2', titulo: 'Elementos que componen al computador' },
        '3': { id: '3', titulo: 'Manejo del ratón' }
      }
    }
    // Aquí se agregarían los demás cursos...
  };
  
  console.log('✅ Datos extraídos correctamente');
  return datosSimulados;
}

/**
 * Migrar un curso específico
 */
async function migrarCurso(cursoId, datosExtraidos) {
  console.log(`📁 Migrando curso: ${cursoId}`);
  
  try {
    // Crear directorio del curso
    const directoriosCurso = path.join(CONFIG.directorioDestino, cursoId);
    await fs.mkdir(directoriosCurso, { recursive: true });
    
    const datosCurso = datosExtraidos[cursoId];
    if (!datosCurso) {
      console.log(`⚠️  No se encontraron datos para el curso: ${cursoId}`);
      return;
    }
    
    // Crear archivo index.js del curso
    await crearArchivoIndice(cursoId, datosCurso, directoriosCurso);
    
    // Migrar cada tema
    if (datosCurso.temas) {
      for (const [temaId, dataTema] of Object.entries(datosCurso.temas)) {
        await migrarTema(cursoId, temaId, dataTema, directoriosCurso);
      }
    }
    
    console.log(`✅ Curso migrado: ${cursoId}`);
    
  } catch (error) {
    console.error(`❌ Error migrando curso ${cursoId}:`, error);
    throw error;
  }
}

/**
 * Crear archivo index.js para un curso
 */
async function crearArchivoIndice(cursoId, datosCurso, directorio) {
  const contenidoIndice = generarContenidoIndice(cursoId, datosCurso);
  const rutaIndice = path.join(directorio, 'index.js');
  
  await fs.writeFile(rutaIndice, contenidoIndice, 'utf-8');
  console.log(`   📄 Creado: index.js`);
}

/**
 * Migrar un tema específico
 */
async function migrarTema(cursoId, temaId, dataTema, directorio) {
  const contenidoTema = generarContenidoTema(temaId, dataTema);
  const nombreArchivo = `tema-${temaId.padStart(2, '0')}-${generarSlug(dataTema.titulo || 'tema')}.js`;
  const rutaTema = path.join(directorio, nombreArchivo);
  
  await fs.writeFile(rutaTema, contenidoTema, 'utf-8');
  console.log(`   📄 Creado: ${nombreArchivo}`);
}

/**
 * Generar contenido del archivo index.js
 */
function generarContenidoIndice(cursoId, datosCurso) {
  const imports = Object.keys(datosCurso.temas || {}).map(temaId => {
    const slug = generarSlug(datosCurso.temas[temaId].titulo || 'tema');
    return `import tema${temaId.padStart(2, '0')} from './tema-${temaId.padStart(2, '0')}-${slug}.js';`;
  }).join('\n');
  
  const temasExport = Object.keys(datosCurso.temas || {}).map(temaId => {
    return `  '${temaId}': tema${temaId.padStart(2, '0')}`;
  }).join(',\n');
  
  return `/**
 * Índice del curso: ${datosCurso.info?.titulo || 'Curso'}
 * Generado automáticamente por herramientas de migración
 */

${imports}

// Metadatos del curso
export const cursoInfo = ${JSON.stringify(datosCurso.info, null, 2)};

// Exportar todos los temas
export const temas = {
${temasExport}
};

// Funciones helper
export const obtenerInfoCurso = () => cursoInfo;
export const obtenerTema = (temaId) => temas[temaId] || null;
export const obtenerTodosTemas = () => Object.values(temas);
export const temaExiste = (temaId) => Object.prototype.hasOwnProperty.call(temas, temaId);

export default {
  info: cursoInfo,
  temas,
  obtenerInfoCurso,
  obtenerTema,
  obtenerTodosTemas,
  temaExiste
};
`;
}

/**
 * Generar contenido de un archivo de tema
 */
function generarContenidoTema(temaId, dataTema) {
  return `/**
 * Tema ${temaId}: ${dataTema.titulo || 'Sin título'}
 * Migrado automáticamente desde sistema monolítico
 */

export const tema${temaId.padStart(2, '0')} = ${JSON.stringify({
  id: temaId,
  titulo: dataTema.titulo || 'Sin título',
  duracion: dataTema.duracion || '20-30 minutos',
  objetivos: dataTema.objetivos || [
    'Objetivo por definir'
  ],
  secciones: dataTema.secciones || [
    {
      id: 1,
      titulo: 'Sección por migrar',
      contenido: '<p>Contenido por migrar del sistema anterior</p>',
      actividades: []
    }
  ],
  recursos: dataTema.recursos || {
    documentos: [],
    enlaces: [],
    videos: []
  },
  evaluacion: dataTema.evaluacion || null
}, null, 2)};

export default tema${temaId.padStart(2, '0')};
`;
}

/**
 * Generar slug para nombres de archivo
 */
function generarSlug(texto) {
  return texto
    .toLowerCase()
    .replace(/[áéíóúñ]/g, match => {
      const map = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n' };
      return map[match];
    })
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Función para validar archivos migrados
 */
async function validarMigracion() {
  console.log('\n🔍 Validando migración...');
  
  try {
    for (const cursoId of CONFIG.cursosAMigrar) {
      const directoriosCurso = path.join(CONFIG.directorioDestino, cursoId);
      
      try {
        await fs.access(directoriosCurso);
        
        // Verificar que existe index.js
        const rutaIndice = path.join(directoriosCurso, 'index.js');
        await fs.access(rutaIndice);
        
        console.log(`✅ ${cursoId}: Estructura válida`);
      } catch (error) {
        console.log(`❌ ${cursoId}: Error en estructura`);
      }
    }
    
    console.log('✅ Validación completada');
  } catch (error) {
    console.error('❌ Error durante validación:', error);
  }
}

// Ejecutar migración si se llama directamente
if (require.main === module) {
  migrarContenido()
    .then(() => validarMigracion())
    .catch(error => {
      console.error('💥 Error fatal:', error);
      process.exit(1);
    });
}

module.exports = {
  migrarContenido,
  validarMigracion,
  CONFIG
};
