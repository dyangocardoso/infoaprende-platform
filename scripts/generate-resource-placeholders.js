const fs = require('fs');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const frontendSrc = path.join(workspaceRoot, 'frontend', 'src');
const publicDir = path.join(workspaceRoot, 'frontend', 'public');

function walk(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function extractResourcePathsFromFile(fileContent) {
  const re = /["'`]\/(images|videos|docs)\/[^"'`\)]+["'`]/g;
  const matches = fileContent.match(re) || [];
  return matches.map(m => m.slice(1, -1)); // remove surrounding quotes and keep leading /
}

function makeSvgPlaceholder(text) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450">\n  <rect width="100%" height="100%" fill="#ddd"/>\n  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="#555">${text}</text>\n</svg>`;
}

function ensureDirForFile(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function createPlaceholder(targetPath) {
  const ext = path.extname(targetPath).toLowerCase();
  ensureDirForFile(targetPath);
  if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
    const name = path.basename(targetPath);
    fs.writeFileSync(targetPath, makeSvgPlaceholder(`Placeholder: ${name}`), 'utf8');
  } else if (['.mp4', '.webm', '.ogg'].includes(ext)) {
    // create a tiny text file with the right name to avoid 404s
    fs.writeFileSync(targetPath, `Placeholder video file for ${path.basename(targetPath)}\n`, 'utf8');
  } else if (['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.xlsx'].includes(ext)) {
    fs.writeFileSync(targetPath, `Placeholder document for ${path.basename(targetPath)}\n`, 'utf8');
  } else {
    fs.writeFileSync(targetPath, `Placeholder file for ${path.basename(targetPath)}\n`, 'utf8');
  }
}

function main() {
  if (!fs.existsSync(frontendSrc)) {
    console.error('No se encontró la carpeta frontend/src. Ejecuta este script desde la raíz del proyecto.');
    process.exit(1);
  }

  const allFiles = walk(frontendSrc).filter(f => /\.(js|jsx|ts|tsx|json|html)$/.test(f));
  const resourcePaths = new Set();

  for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const paths = extractResourcePathsFromFile(content);
    for (const p of paths) resourcePaths.add(p);
  }

  const missing = [];
  for (const resPath of resourcePaths) {
    // resPath starts with /images/... remove leading /
    const rel = resPath.startsWith('/') ? resPath.slice(1) : resPath;
    const target = path.join(publicDir, rel);
    if (!fs.existsSync(target)) {
      createPlaceholder(target);
      missing.push('/' + rel);
    }
  }

  const logPath = path.join(workspaceRoot, 'scripts', 'placeholders-created.log');
  const reportLines = [];
  reportLines.push(`Fecha: ${new Date().toISOString()}`);
  reportLines.push(`Total referencias encontradas: ${resourcePaths.size}`);
  reportLines.push(`Total placeholders creados: ${missing.length}`);
  reportLines.push('Archivos creados:');
  for (const m of missing) reportLines.push(m);
  fs.writeFileSync(logPath, reportLines.join('\n'), 'utf8');

  console.log('Proceso completado.');
  console.log(`Referencias encontradas: ${resourcePaths.size}`);
  console.log(`Placeholders creados: ${missing.length}`);
  if (missing.length) console.log(`Lista de archivos creados guardada en ${logPath}`);
  else console.log('No se crearon archivos. Todos los recursos existen.');
}

main();
