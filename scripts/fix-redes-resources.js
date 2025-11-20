const fs = require('fs');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const redesDir = path.join(workspaceRoot, 'frontend', 'src', 'data', 'cursos', 'redes');
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

function extractResourcePaths(content) {
  const re = /["'`]\/(images|videos|docs)\/[^"'`\)]+["'`]/g;
  const matches = content.match(re) || [];
  return matches.map(m => m.slice(1, -1));
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
    const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"800\" height=\"450\">\n  <rect width=\"100%\" height=\"100%\" fill=\"#ddd\"/>\n  <text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-size=\"24\" fill=\"#555\">Placeholder: ${name}</text>\n</svg>`;
    fs.writeFileSync(targetPath, svg, 'utf8');
  } else if (['.mp4', '.webm', '.ogg'].includes(ext)) {
    fs.writeFileSync(targetPath, `Placeholder video file for ${path.basename(targetPath)}\n`, 'utf8');
  } else if (['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.xlsx'].includes(ext)) {
    fs.writeFileSync(targetPath, `Placeholder document for ${path.basename(targetPath)}\n`, 'utf8');
  } else {
    fs.writeFileSync(targetPath, `Placeholder file for ${path.basename(targetPath)}\n`, 'utf8');
  }
}

function main() {
  if (!fs.existsSync(redesDir)) {
    console.error('No se encontró la carpeta de temas redes:', redesDir);
    process.exit(1);
  }

  const files = walk(redesDir).filter(f => /\.(js|jsx|ts|tsx)$/.test(f));
  const allRefs = new Set();
  const missing = [];
  const fixedFiles = [];

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    // normalize /img/ to /images/
    if (content.includes("/img/")) {
      content = content.replace(/\/img\//g, '/images/');
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles.push(file);
      console.log('Normalizado /img/ -> /images/ en', file);
    }

    const refs = extractResourcePaths(content);
    for (const r of refs) allRefs.add(r);
  }

  for (const ref of allRefs) {
    const rel = ref.startsWith('/') ? ref.slice(1) : ref;
    const target = path.join(publicDir, rel);
    if (!fs.existsSync(target)) {
      createPlaceholder(target);
      missing.push('/' + rel);
    }
  }

  const logPath = path.join(workspaceRoot, 'scripts', 'fix-redes-resources.log');
  const lines = [];
  lines.push(`Fecha: ${new Date().toISOString()}`);
  lines.push(`Archivos de temas escaneados: ${files.length}`);
  lines.push(`Referencias únicas encontradas: ${allRefs.size}`);
  lines.push(`Placeholders creados: ${missing.length}`);
  if (fixedFiles.length) {
    lines.push('Archivos normalizados (reemplazo /img/ -> /images/):');
    for (const f of fixedFiles) lines.push(f);
  }
  if (missing.length) {
    lines.push('Placeholders creados:');
    for (const m of missing) lines.push(m);
  }
  fs.writeFileSync(logPath, lines.join('\n'), 'utf8');

  console.log('Proceso de verificación de recursos redes completado.');
  console.log(`Referencias encontradas: ${allRefs.size}`);
  console.log(`Placeholders creados: ${missing.length}`);
  if (missing.length) console.log(`Log: ${logPath}`);
}

main();
