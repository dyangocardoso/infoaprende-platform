#!/usr/bin/env node

// Script para crear un nuevo tema con plantilla estándar
// Uso: node scripts/create-tema.js --curso=paint --numero=01 --titulo="Primeros pasos" --tipo=tema

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');

function slugify(text) {
  return text
    .toString()
    .normalize('NFKD')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9\-]/g, '')
    .replace(/-+/g, '-')
    .toLowerCase();
}

function parseArgs() {
  const args = {};
  for (const arg of process.argv.slice(2)) {
    const m = arg.match(/^--([^=]+)=(.*)$/);
    if (m) args[m[1]] = m[2];
  }
  return args;
}

function printHelp() {
  console.log(`Uso: node scripts/create-tema.js --curso=<curso> [opciones]

Opciones:
  --curso=<curso>               Curso destino (obligatorio)
  --numero=<NN>                 Número del tema (ej. 01). Default: 01
  --titulo="<Título>"           Título del tema. Default: "Nuevo Tema"
  --tipo=<tema|evaluacion|proyecto>  Tipo de elemento. Default: tema
  --normalizar=true             Normalizar pesos de criteriosEvaluacion para sumar 100
  --normalizar-pesos=true       Alias de --normalizar
  --out=<ruta_base>             Directorio base para crear archivos (por defecto frontend/src/data/cursos)
  --open=vscode                 Abrir el archivo recién creado en VS Code (usa 'code')
  --open=code                   Alias de --open=vscode
  --yes=true, --force=true      Forzar sobrescritura si el archivo ya existe
  --help, -h                    Mostrar esta ayuda

Ejemplos:
  npm run create-tema -- --curso=paint --numero=06 --titulo="Prueba" --tipo=tema
  npm run create-tema -- --curso=paint --numero=07 --titulo="Evaluación 1" --tipo=evaluacion --normalizar=true --open=vscode
`);
}

async function main() {
  const args = parseArgs();
  const curso = args.curso;
  const numero = args.numero || '01';
  const titulo = args.titulo || 'Nuevo Tema';
  const tipo = args.tipo || 'tema'; // tema | evaluacion | proyecto

  if (!curso) {
    console.error('ERROR: --curso es obligatorio');
    console.log('Ejemplo: node scripts/create-tema.js --curso=paint --numero=02 --titulo="Herramientas"');
    process.exit(1);
  }

  const slugTitulo = slugify(titulo);
  const nombreArchivo = `tema-${numero}-${slugTitulo}.js`;
  const outBase = args.out || args.dest || process.env.CREATE_TEMA_BASE || path.join(__dirname, '../frontend/src/data/cursos');
  const rutaCurso = path.join(outBase, curso);
  const rutaArchivo = path.join(rutaCurso, nombreArchivo);

  // Definir criterios por defecto según tipo
  let criteriosPorDefecto = tipo === 'evaluacion'
    ? [
        { criterio: 'Dominio teórico', peso: 60 },
        { criterio: 'Aplicación práctica', peso: 40 }
      ]
    : [
        { criterio: 'Criterio 1', peso: 50 },
        { criterio: 'Criterio 2', peso: 50 }
      ];

  // Opción CLI para normalizar pesos: --normalizar=true o --normalizar-pesos=true
  const normalizar = args.normalizar === 'true' || args['normalizar-pesos'] === 'true';
  if (normalizar) {
    const sumaOriginal = criteriosPorDefecto.reduce((s, c) => s + (Number(c.peso) || 0), 0);
    if (sumaOriginal > 0 && sumaOriginal !== 100) {
      let sumaNueva = 0;
      criteriosPorDefecto = criteriosPorDefecto.map((c, i, arr) => {
        const peso = Math.round(((Number(c.peso) || 0) * 100) / sumaOriginal);
        sumaNueva += peso;
        return { ...c, peso };
      });
      const diff = 100 - sumaNueva;
      if (diff !== 0) {
        criteriosPorDefecto[criteriosPorDefecto.length - 1].peso += diff;
      }
      console.log('🔧 Pesos normalizados:', criteriosPorDefecto.map(c => `${c.criterio}:${c.peso}`).join(', '));
    }
  }

  // Opción CLI para forzar sobrescritura: --yes=true o --force=true
  const force = args.yes === 'true' || args.force === 'true' || args.y === 'true';

  const tipoEvaluacionPorDefecto = tipo === 'evaluacion' ? 'Cuestionario/Práctica' : null;

  const plantilla = `// ${titulo} - ${curso}
// Generado: ${new Date().toISOString()}

export default {
  id: '${curso}-tema-${numero}-${slugTitulo}',
  curso: '${curso}',
  numero: '${numero}',
  titulo: '${titulo}',
  tipo: '${tipo}',
  objetivos: [
    'Objetivo general por definir'
  ],
  secciones: [
    {
      titulo: 'Introducción',
      contenido: 'Contenido de la introducción...'
    }
  ],
  evaluacion: {
    descripcion: 'Descripción de la evaluación (si aplica). Edita tipoEvaluacion y criteriosEvaluacion según la necesidad.',
    tipoEvaluacion: ${tipoEvaluacionPorDefecto ? `'${tipoEvaluacionPorDefecto}'` : 'null'},
    criteriosEvaluacion: ${JSON.stringify(criteriosPorDefecto, null, 2)}
  },
  recursos: [],
  creadoEn: '${new Date().toISOString()}'
};
`;

  try {
    await fs.mkdir(rutaCurso, { recursive: true });
    // Evitar sobrescribir si ya existe
    try {
      await fs.access(rutaArchivo);
      if (force) {
        console.log(`⚠️ Archivo existente y --yes/--force especificado. Se sobrescribirá: ${rutaArchivo}`);
      } else {
        console.error('ERROR: El archivo ya existe:', rutaArchivo);
        console.log('Si deseas sobrescribir usa --yes=true o --force=true');
        process.exit(1);
      }
    } catch (e) {
      // no existe -> crear
    }

    await fs.writeFile(rutaArchivo, plantilla, 'utf8');
    console.log('✅ Tema creado:', rutaArchivo);

    // Validación automática: comprobar que criteriosEvaluacion suman 100
    try {
      const contenidoCreado = await fs.readFile(rutaArchivo, 'utf8');
      const pesoRegex = /"peso"\s*:\s*(\d+)/g;
      let match;
      let sumaPesos = 0;
      let contadorPesos = 0;
      while ((match = pesoRegex.exec(contenidoCreado)) !== null) {
        sumaPesos += parseInt(match[1], 10);
        contadorPesos++;
      }

      if (contadorPesos > 0) {
        if (sumaPesos !== 100) {
          console.warn(`⚠️ Validación automática: los pesos suman ${sumaPesos} (deben sumar 100). Abriendo archivo para edición.`);
        } else {
          console.log('✅ Validación automática: criteriosEvaluacion suman 100');
        }
      } else {
        console.log('ℹ️ Validación automática: no se detectaron pesos en criteriosEvaluacion');
      }
    } catch (valErr) {
      console.error('Error durante la validación automática:', valErr.message);
    }

    // Intentar abrir el archivo en el editor por defecto (Windows, macOS, Linux) o en VS Code si se solicita
    try {
      const ruta = rutaArchivo.replace(/"/g, '');
      const openOption = args.open || args.openWith || null;

      // Permitir desactivar apertura automática vía variable de entorno NO_OPEN=1 (útil para tests)
      if (process.env.NO_OPEN === '1') {
        console.log('ℹ️ Apertura automática desactivada por NO_OPEN=1');
      } else {
      if (openOption === 'vscode' || openOption === 'code') {
        // Intentar abrir con la CLI de VS Code
        exec(`code "${ruta}"`, (err) => {
          if (err) console.log('No se pudo abrir en VS Code con `code`. Se intentará la app por defecto.');
        });
      } else {
        if (process.platform === 'win32') {
          exec(`cmd /c start "" "${ruta}"`);
        } else if (process.platform === 'darwin') {
          exec(`open "${ruta}"`);
        } else {
          exec(`xdg-open "${ruta}"`);
        }
      }
      }
    } catch (openErr) {
      console.log('No se pudo abrir el archivo automáticamente:', openErr.message);
    }
  } catch (error) {
    console.error('ERROR al crear el tema:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  const args = parseArgs();
  // Detectar ayuda (-h o --help)
  if (args.help === 'true' || args.h === 'true' || args['help'] === true) {
    printHelp();
    process.exit(0);
  }

  main();
}
