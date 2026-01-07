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

function safeRead(file) {
  return fs.readFileSync(file, 'utf8');
}

async function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const schemaPath = path.join(repoRoot, 'schemas', 'tema.schema.json');
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

    // Run create-tema (should fail validation -> non-zero exit)
    console.log('\n> Ejecutando create-tema (esperado: fallo por schema)...');
    const outDir = path.join(repoRoot, 'scripts', 'tmp-cli-test-fail');
    fs.rmSync(outDir, { recursive: true, force: true });
    fs.mkdirSync(outDir, { recursive: true });
    const statusFail = run('node', [path.join(repoRoot, 'scripts', 'create-tema.js'), `--curso=cli-test`, `--numero=99`, `--titulo=PruebaFail`, `--out=${outDir}`, '--validate=true'], { NO_OPEN: '1' });
    console.log('Exit code (expected non-zero):', statusFail);
    if (statusFail === 0) {
      console.error('ERROR: la validación no falló como se esperaba');
      process.exit(3);
    }

    // 2) Restore original schema and run create-tema (esperado: éxito)
    fs.copyFileSync(backupPath, schemaPath);
    console.log('\n> Ejecutando create-tema (esperado: éxito)...');
    const outDir2 = path.join(repoRoot, 'scripts', 'tmp-cli-test-ok');
    fs.rmSync(outDir2, { recursive: true, force: true });
    fs.mkdirSync(outDir2, { recursive: true });
    const statusOk = run('node', [path.join(repoRoot, 'scripts', 'create-tema.js'), `--curso=cli-test`, `--numero=100`, `--titulo=PruebaOk`, `--out=${outDir2}`, '--validate=true'], { NO_OPEN: '1' });
    console.log('Exit code (expected 0):', statusOk);
    if (statusOk !== 0) {
      console.error('ERROR: create-tema falló en caso esperado OK');
      process.exit(4);
    }

    // Verify file created
    const createdFiles = fs.readdirSync(outDir2);
    console.log('Archivos creados en ok case:', createdFiles);
    if (createdFiles.length === 0) {
      console.error('ERROR: no se creó ningún archivo en el caso OK');
      process.exit(5);
    }

    console.log('\nTest de cli create-tema completado correctamente');
    process.exit(0);
  } catch (e) {
    console.error('Error en test CLI:', e);
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
