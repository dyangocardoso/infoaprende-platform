const fs = require('fs');
const path = require('path');

const examplePath = path.resolve(__dirname, '..', '.env.example');
const targetPath = path.resolve(__dirname, '..', '.env');

function copyEnv(overwrite = true) {
  if (!fs.existsSync(examplePath)) {
    console.error('.env.example no encontrado en:', examplePath);
    process.exit(1);
  }

  if (fs.existsSync(targetPath) && !overwrite) {
    console.log('.env ya existe y overwrite=false -> no se copia');
    return;
  }

  try {
    const data = fs.readFileSync(examplePath, 'utf8');
    fs.writeFileSync(targetPath, data, 'utf8');
    console.log(`✅ Copiado .env desde .env.example (${examplePath}) -> ${targetPath}`);
  } catch (err) {
    console.error('❌ Error copiando .env:', err.message);
    process.exit(1);
  }
}

// Default: overwrite
const forceEnv = process.argv.includes('--no-overwrite') ? false : true;
copyEnv(forceEnv);
