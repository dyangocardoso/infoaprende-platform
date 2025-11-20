/**
 * Script de validación para el curso PowerPoint
 * Verifica completitud y consistencia de la estructura modular
 */

import fs from 'fs';
import path from 'path';

const RUTA_CURSO = './frontend/src/data/cursos/powerpoint';

console.log('📊 REVISIÓN COMPLETA - CURSO POWERPOINT');
console.log('=====================================');

try {
  // 1. Verificar archivos requeridos
  const archivosRequeridos = [
    'index.js',
    'tema-01-primeros-pasos.js',
    'tema-02-vistas-diapositivas.js', 
    'tema-03-manejo-objetos.js',
    'tema-04-diseno.js',
    'tema-05-texto.js',
    'tema-06-imagenes-formas.js',
    'tema-07-animaciones-transiciones.js'
  ];

  console.log('✅ Verificando archivos...');
  let archivosEncontrados = 0;
  
  for (const archivo of archivosRequeridos) {
    const rutaCompleta = path.join(RUTA_CURSO, archivo);
    if (fs.existsSync(rutaCompleta)) {
      archivosEncontrados++;
      console.log(`   ✓ ${archivo}`);
    } else {
      console.log(`   ❌ ${archivo} - NO ENCONTRADO`);
    }
  }

  console.log(`\n📈 Archivos encontrados: ${archivosEncontrados}/${archivosRequeridos.length}`);

  // 2. Cargar y validar el índice
  console.log('\n✅ Validando estructura del índice...');
  
  const indexPath = path.join(RUTA_CURSO, 'index.js');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Verificar importaciones
  const importaciones = [
    "import tema01 from './tema-01-primeros-pasos.js'",
    "import tema02 from './tema-02-vistas-diapositivas.js'",
    "import tema03 from './tema-03-manejo-objetos.js'",
    "import tema04 from './tema-04-diseno.js'",
    "import tema05 from './tema-05-texto.js'",
    "import tema06 from './tema-06-imagenes-formas.js'",
    "import tema07 from './tema-07-animaciones-transiciones.js'"
  ];

  let importacionesCorrectas = 0;
  for (const importacion of importaciones) {
    if (indexContent.includes(importacion)) {
      importacionesCorrectas++;
      console.log(`   ✓ ${importacion.split(' ')[1]}`);
    } else {
      console.log(`   ❌ ${importacion.split(' ')[1]} - IMPORTACIÓN FALTANTE`);
    }
  }

  console.log(`\n📈 Importaciones correctas: ${importacionesCorrectas}/${importaciones.length}`);

  // 3. Verificar metadatos del curso
  console.log('\n✅ Verificando metadatos del curso...');
  const metadatos = [
    'cursoInfo',
    'temas',
    'obtenerInfoCurso',
    'obtenerTema',
    'obtenerTodosTemas',
    'validarCurso'
  ];

  let metadatosPresentes = 0;
  for (const metadato of metadatos) {
    if (indexContent.includes(metadato)) {
      metadatosPresentes++;
      console.log(`   ✓ ${metadato}`);
    } else {
      console.log(`   ❌ ${metadato} - NO ENCONTRADO`);
    }
  }

  console.log(`\n📈 Metadatos presentes: ${metadatosPresentes}/${metadatos.length}`);

  // 4. Verificar estructura de cada tema
  console.log('\n✅ Verificando estructura de temas...');
  
  const propiedadesRequeridas = [
    'id',
    'titulo', 
    'duracion',
    'objetivos',
    'secciones',
    'recursos',
    'evaluacion'
  ];

  let temasValidados = 0;
  for (let i = 1; i <= 7; i++) {
    const nombreArchivo = `tema-0${i}-*.js`;
    const archivos = fs.readdirSync(RUTA_CURSO).filter(f => f.match(`tema-0${i}-.*\\.js`));
    
    if (archivos.length > 0) {
      const rutaTema = path.join(RUTA_CURSO, archivos[0]);
      const contenidoTema = fs.readFileSync(rutaTema, 'utf8');
      
      let propiedadesEncontradas = 0;
      console.log(`\n   📋 Tema ${i}: ${archivos[0]}`);
      
      for (const propiedad of propiedadesRequeridas) {
        if (contenidoTema.includes(`${propiedad}:`)) {
          propiedadesEncontradas++;
          console.log(`      ✓ ${propiedad}`);
        } else {
          console.log(`      ❌ ${propiedad} - FALTANTE`);
        }
      }
      
      if (propiedadesEncontradas === propiedadesRequeridas.length) {
        temasValidados++;
      }
      
      console.log(`      📊 Completitud: ${propiedadesEncontradas}/${propiedadesRequeridas.length}`);
    }
  }

  console.log(`\n📈 Temas completamente validados: ${temasValidados}/7`);

  // 5. Resumen final
  console.log('\n🎯 RESUMEN DE VALIDACIÓN');
  console.log('========================');
  console.log(`📁 Archivos: ${archivosEncontrados}/${archivosRequeridos.length} (${Math.round(archivosEncontrados/archivosRequeridos.length*100)}%)`);
  console.log(`📥 Importaciones: ${importacionesCorrectas}/${importaciones.length} (${Math.round(importacionesCorrectas/importaciones.length*100)}%)`);
  console.log(`📋 Metadatos: ${metadatosPresentes}/${metadatos.length} (${Math.round(metadatosPresentes/metadatos.length*100)}%)`);
  console.log(`📚 Temas válidos: ${temasValidados}/7 (${Math.round(temasValidados/7*100)}%)`);

  const completitudGeneral = Math.round(
    (archivosEncontrados/archivosRequeridos.length + 
     importacionesCorrectas/importaciones.length + 
     metadatosPresentes/metadatos.length + 
     temasValidados/7) / 4 * 100
  );

  console.log(`\n🎊 COMPLETITUD GENERAL: ${completitudGeneral}%`);

  if (completitudGeneral >= 95) {
    console.log('🌟 ¡EXCELENTE! El curso está listo para producción.');
  } else if (completitudGeneral >= 80) {
    console.log('👍 BUENO. El curso está casi listo, revisa los elementos faltantes.');
  } else {
    console.log('⚠️  NECESITA TRABAJO. Faltan elementos importantes.');
  }

} catch (error) {
  console.error('❌ Error durante la validación:', error.message);
  process.exit(1);
}
