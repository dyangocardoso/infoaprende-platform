const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, args, env = {}) {
  const res = spawnSync(cmd, args, { env: { ...process.env, ...env }, stdio: 'inherit' });
  return res.status;
}

function safeWrite(file, content) {
  fs.writeFileSync(file, content, 'utf8');
}

async function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const schemaPath = path.join(repoRoot, 'schemas', 'evaluacion.schema.json');
  const backupPath = schemaPath + '.bak';
  if (!fs.existsSync(schemaPath)) {
    console.error('Schema not found at', schemaPath);
    process.exit(2);
  }

  // Backup original schema
  fs.copyFileSync(schemaPath, backupPath);

  try {
    // 1) Write a stricter schema that forces validation to fail
    const failingSchema = {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "required": ["mustFail"]
    };
    safeWrite(schemaPath, JSON.stringify(failingSchema, null, 2));

    // Run create-tema for evaluacion (should fail validation -> non-zero exit)
    console.log('\n> Ejecutando create-tema --tipo=evaluacion (esperado: fallo por schema)...');
    const outDir = path.join(repoRoot, 'scripts', 'tmp-cli-eval-test-fail');
    fs.rmSync(outDir, { recursive: true, force: true });
    fs.mkdirSync(outDir, { recursive: true });
    const statusFail = run('node', [path.join(repoRoot, 'scripts', 'create-tema.js'), `--curso=cli-eval`, `--numero=99`, `--titulo=PruebaEvalFail`, `--out=${outDir}`, '--tipo=evaluacion', '--validate=true'], { NO_OPEN: '1' });
    console.log('Exit code (expected non-zero):', statusFail);
    if (statusFail === 0) {
      console.error('ERROR: la validación de evaluacion no falló como se esperaba');
      process.exit(3);
    }

    // 2) Restore original schema and run create-tema for evaluacion (esperado: éxito)
    fs.copyFileSync(backupPath, schemaPath);
    console.log('\n> Ejecutando create-tema --tipo=evaluacion (esperado: éxito)...');
    const outDir2 = path.join(repoRoot, 'scripts', 'tmp-cli-eval-test-ok');
    fs.rmSync(outDir2, { recursive: true, force: true });
    fs.mkdirSync(outDir2, { recursive: true });
    const statusOk = run('node', [path.join(repoRoot, 'scripts', 'create-tema.js'), `--curso=cli-eval`, `--numero=100`, `--titulo=PruebaEvalOk`, `--out=${outDir2}`, '--tipo=evaluacion', '--validate=true'], { NO_OPEN: '1' });
    console.log('Exit code (expected 0):', statusOk);
    if (statusOk !== 0) {
      console.error('ERROR: create-tema falló en caso esperado OK para evaluacion');
      process.exit(4);
    }

    // Verify file created
    const createdFiles = fs.readdirSync(outDir2);
    console.log('Archivos creados en ok case (evaluacion):', createdFiles);
    if (createdFiles.length === 0) {
      console.error('ERROR: no se creó ningún archivo en el caso OK (evaluacion)');
      process.exit(5);
    }

    console.log('\nTest de cli create-evaluacion completado correctamente');
    process.exit(0);
  } catch (e) {
    console.error('Error en test CLI evaluacion:', e);
    // restore schema before exiting
    if (fs.existsSync(backupPath)) fs.copyFileSync(backupPath, schemaPath);
    process.exit(10);
  } finally {
    // ensure schema restored
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, schemaPath);
      fs.unlinkSync(backupPath);
    }
  }
}

if (require.main === module) main();

module.exports = { main };
