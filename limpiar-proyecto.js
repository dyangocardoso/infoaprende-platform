// limpiar-proyecto.js
// Script para eliminar archivos de respaldo, pruebas y migraciones innecesarios en el proyecto INFOAPRENDE
// Ejecutar con: node limpiar-proyecto.js

const fs = require('fs');
const path = require('path');

// Listado de patrones y carpetas a limpiar
const patterns = [
  'frontend/src/context/EvaluacionContext-*.js',
  'frontend/src/context/ContenidoProvider*-backup*',
  'frontend/src/context/ContenidoProviderCompatibilidad.jsx',
  'frontend/src/context/ContenidoProviderModular.jsx',
  'frontend/src/context/ContenidoProvider-old.jsx',
  'frontend/src/context/ContenidoProvider-test.jsx',
  'frontend/src/context/ContenidoProvider-minimal.jsx',
  'frontend/src/context/ContenidoProvider-error.jsx',
  'frontend/src/context/ContenidoProvider-new.jsx',
  'frontend/src/context/ContenidoProvider-fixed.jsx',
  'frontend/src/context/ContenidoProvider-backup.jsx',
  'scripts/backup-migration',
  'scripts/content-migration',
];

function deleteFileOrDir(targetPath) {
  if (fs.existsSync(targetPath)) {
    const stat = fs.statSync(targetPath);
    if (stat.isDirectory()) {
      fs.readdirSync(targetPath).forEach(file => {
        deleteFileOrDir(path.join(targetPath, file));
      });
      fs.rmdirSync(targetPath);
      console.log('Directorio eliminado:', targetPath);
    } else {
      fs.unlinkSync(targetPath);
      console.log('Archivo eliminado:', targetPath);
    }
  }
}

function globDelete(pattern) {
  const glob = require('glob');
  glob.sync(pattern, { nodir: false }).forEach(deleteFileOrDir);
}

patterns.forEach(globDelete);

console.log('Limpieza completada. Revisa el proyecto antes de hacer commit.');
