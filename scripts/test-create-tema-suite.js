#!/usr/bin/env node

// Suite de tests para scripts/create-tema.js
// Contiene varios casos herméticos que usan un directorio temporal y NO_OPEN=1

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

function runCmd(cmd, env) {
  return new Promise((resolve, reject) => {
    exec(cmd, { env: { ...process.env, ...env } }, (err, stdout, stderr) => {
      resolve({ err, stdout, stderr });
    });
  });
}

async function testNormalizedEvaluation(tmpBase) {
  const curso = 'suite-eval';
  const numero = '01';
  const titulo = 'Suite Eval';
  const tipo = 'evaluacion';
  const slug = slugify(titulo);
  const rutaArchivo = path.join(tmpBase, curso, `tema-${numero}-${slug}.js`);

  const cmd = `node scripts/create-tema.js --curso=${curso} --numero=${numero} --titulo="${titulo}" --tipo=${tipo} --normalizar=true --yes=true --out="${tmpBase.replace(/\\/g, '\\\\')}"`;
  const r = await runCmd(cmd, { NO_OPEN: '1' });
  if (r.err) throw new Error('create-tema falló en testNormalizedEvaluation: ' + r.stderr);

  const contenido = await fs.readFile(rutaArchivo, 'utf8');
  const m = contenido.match(/criteriosEvaluacion:\s*(\[[\s\S]*?\])/);
  if (!m) throw new Error('No se encontró criteriosEvaluacion en archivo generado (testNormalizedEvaluation)');
  const criterios = JSON.parse(m[1]);
  const suma = criterios.reduce((s, c) => s + (Number(c.peso) || 0), 0);
  if (suma !== 100) throw new Error('Pesos no suman 100 en testNormalizedEvaluation: ' + suma);
  console.log('✅ testNormalizedEvaluation OK');
}

async function testTemaType(tmpBase) {
  const curso = 'suite-tema';
  const numero = '02';
  const titulo = 'Suite Tema';
  const tipo = 'tema';
  const slug = slugify(titulo);
  const rutaArchivo = path.join(tmpBase, curso, `tema-${numero}-${slug}.js`);

  const cmd = `node scripts/create-tema.js --curso=${curso} --numero=${numero} --titulo="${titulo}" --tipo=${tipo} --yes=true --out="${tmpBase.replace(/\\/g, '\\\\')}"`;
  const r = await runCmd(cmd, { NO_OPEN: '1' });
  if (r.err) throw new Error('create-tema falló en testTemaType: ' + r.stderr);

  const contenido = await fs.readFile(rutaArchivo, 'utf8');
  if (!contenido.includes('secciones')) throw new Error('Archivo no contiene secciones (testTemaType)');
  if (!contenido.includes("tipo: 'tema'")) throw new Error('Archivo no contiene tipo: tema');
  if (!contenido.includes('tipoEvaluacion: null')) throw new Error('Evaluación no debería tener tipoEvaluacion en tema');
  console.log('✅ testTemaType OK');
}

async function testOverwriteProtection(tmpBase) {
  const curso = 'suite-overwrite';
  const numero = '03';
  const titulo = 'Suite Overwrite';
  const tipo = 'tema';
  const slug = slugify(titulo);
  const rutaArchivo = path.join(tmpBase, curso, `tema-${numero}-${slug}.js`);

  const cmdCreate = `node scripts/create-tema.js --curso=${curso} --numero=${numero} --titulo="${titulo}" --tipo=${tipo} --yes=true --out="${tmpBase.replace(/\\/g, '\\\\')}"`;
  const r1 = await runCmd(cmdCreate, { NO_OPEN: '1' });
  if (r1.err) throw new Error('create-tema inicial falló en testOverwriteProtection: ' + r1.stderr);

  // Ejecutar sin --yes; debe fallar (err != null)
  const cmdFail = `node scripts/create-tema.js --curso=${curso} --numero=${numero} --titulo="${titulo}" --tipo=${tipo} --out="${tmpBase.replace(/\\/g, '\\\\')}"`;
  const r2 = await runCmd(cmdFail, { NO_OPEN: '1' });
  if (!r2.err) throw new Error('Se esperaba fallo al sobrescribir sin --yes en testOverwriteProtection');
  console.log('✅ testOverwriteProtection OK');
}

async function runSuite() {
  const tmpBase = await fs.mkdtemp(path.join(os.tmpdir(), 'create-tema-suite-'));
  try {
    await testNormalizedEvaluation(tmpBase);
    await testTemaType(tmpBase);
    await testOverwriteProtection(tmpBase);
    console.log('\n🎉 SUITE COMPLETA: todos los tests OK');
    process.exit(0);
  } catch (err) {
    console.error('\n❌ SUITE FAIL:', err.message);
    process.exit(1);
  } finally {
    try { await fs.rm(tmpBase, { recursive: true, force: true }); } catch(e) {}
  }
}

if (require.main === module) runSuite();
