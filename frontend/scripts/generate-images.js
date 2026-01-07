// eslint-env node
/* global process */
// Script para generar variantes JPEG y WebP de la imagen historia-abaco
// Requiere: npm install sharp
// Uso: desde la carpeta `frontend`: node scripts/generate-images.js

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDir = path.resolve(__dirname, '..');
const publicDir = path.join(frontendDir, 'public', 'images', 'teoria');
const srcFile = path.join(publicDir, 'historia-abaco.jpg');
const sizes = [400, 800, 1600];
const baseName = 'historia-abaco';

if (!fs.existsSync(srcFile)) {
  console.error('Archivo fuente no encontrado:', srcFile);
  console.error('Coloca la imagen original en:', srcFile);
  process.exit(1);
}

(async () => {
  try {
    for (const w of sizes) {
      const jpgOut = path.join(publicDir, `${baseName}-${w}.jpg`);
      const webpOut = path.join(publicDir, `${baseName}-${w}.webp`);

      await sharp(srcFile)
        .resize({ width: w })
        .jpeg({ quality: 75 })
        .toFile(jpgOut);

      await sharp(srcFile)
        .resize({ width: w })
        .webp({ quality: 75 })
        .toFile(webpOut);

      console.log('Generadas:', path.relative(frontendDir, jpgOut), path.relative(frontendDir, webpOut));
    }

    // Actualizar el archivo de contenido para usar <picture> (si existe la etiqueta original)
    const temaPath = path.join(frontendDir, 'src', 'data', 'cursos', 'intro-informatica', 'tema-01-evolucion-historica.js');
    if (!fs.existsSync(temaPath)) {
      console.warn('No se encontró el archivo tema para actualizar:', temaPath);
      return;
    }

    let tema = fs.readFileSync(temaPath, 'utf8');
    const imgTag = '<img src="/images/teoria/historia-abaco.jpg" alt="Ábaco" />';
    const picture = `<picture>
          <source type="image/webp"
            srcset="/images/teoria/historia-abaco-400.webp 400w, /images/teoria/historia-abaco-800.webp 800w, /images/teoria/historia-abaco-1600.webp 1600w"
            sizes="(max-width:600px) 100vw, 800px" />
          <img
            src="/images/teoria/historia-abaco-800.jpg"
            srcset="/images/teoria/historia-abaco-400.jpg 400w, /images/teoria/historia-abaco-800.jpg 800w, /images/teoria/historia-abaco-1600.jpg 1600w"
            sizes="(max-width:600px) 100vw, 800px"
            alt="Ábaco"
            loading="lazy" />
        </picture>`;

    if (tema.includes(imgTag)) {
      tema = tema.replace(imgTag, picture);
      fs.writeFileSync(temaPath, tema, 'utf8');
      console.log('Archivo de tema actualizado con <picture> en:', path.relative(frontendDir, temaPath));
    } else {
      console.warn('Etiqueta <img> original no encontrada en el tema; no se modificó el archivo.');
    }

  } catch (err) {
    console.error('Error generando variantes:', err);
    process.exit(1);
  }
})();
