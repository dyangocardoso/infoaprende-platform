#!/usr/bin/env node

// Test automático para scripts/create-tema.js (usando directorio temporal)
// Ejecuta el generador con NO_OPEN=1 y normalización, verifica que el archivo se creó y que los pesos suman 100.

const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

function slugify(text) {
  return text
    .toString()
    .normalize('NFKD')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .toLowerCase();
}

async function run() {
  const tmpBase = await fs.mkdtemp(path.join(os.tmpdir(), 'create-tema-test-'));
  const curso = 'testcurso';
  const numero = '99';
  const titulo = 'Prueba Normalizar';
  const tipo = 'evaluacion';

  const slug = slugify(titulo);
  const nombreArchivo = `tema-${numero}-${slug}.js`;
  const rutaCurso = path.join(tmpBase, curso);
  const rutaArchivo = path.join(rutaCurso, nombreArchivo);

  const cmd = `node scripts/create-tema.js --curso=${curso} --numero=${numero} --titulo="${titulo}" --tipo=${tipo} --normalizar=true --yes=true --out="${tmpBase.replace(/\\/g, '\\\\')}"`;
  console.log('Ejecutando:', cmd);

  exec(cmd, { env: { ...process.env, NO_OPEN: '1' } }, async (err, stdout, stderr) => {
    if (err) {
      console.error('Error al ejecutar create-tema:', err);
      // limpiar directorio tmp
      try { await fs.rm(tmpBase, { recursive: true, force: true }); } catch(e){}
      process.exit(1);
    }
    console.log(stdout);
    if (stderr) console.error(stderr);

    try {
      const contenido = await fs.readFile(rutaArchivo, 'utf8');
      const m = contenido.match(/criteriosEvaluacion:\s*(\[[\s\S]*?\])/);
      if (!m) {
        console.error('No se encontró criteriosEvaluacion en el archivo');
        await fs.rm(tmpBase, { recursive: true, force: true });
        process.exit(1);
      }
      const criteriosJson = m[1];
      const criterios = JSON.parse(criteriosJson);
      const suma = criterios.reduce((s, c) => s + (Number(c.peso) || 0), 0);
      if (suma === 100) {
        console.log('✅ Test OK: criteriosEvaluacion suman 100');
        // limpiar carpeta temporal
        try {
          await fs.rm(tmpBase, { recursive: true, force: true });
        } catch (cleanupErr) {
          // ignorar errores de limpieza
        }
        process.exit(0);
      } else {
        console.error(`❌ Test FAIL: suma de pesos = ${suma}`);
        await fs.rm(tmpBase, { recursive: true, force: true });
        process.exit(1);
      }
    } catch (readErr) {
      console.error('Error leyendo el archivo creado:', readErr);
      try { await fs.rm(tmpBase, { recursive: true, force: true }); } catch(e){}
      process.exit(1);
    }
  });
}

if (require.main === module) run();
