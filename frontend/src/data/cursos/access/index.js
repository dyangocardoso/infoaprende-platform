/**
 * Índice del curso: Gestor de Base de Datos Access
 * Estructura modular igual a otros cursos
 */

import tema01 from './tema-01-fundamentos-y-entorno.js';
import tema02 from './tema-02-tablas-y-tipos-de-datos.js';
import tema03 from './tema-03-relaciones.js';
import tema04 from './tema-04-propiedades-de-campos.js';
import tema05 from './tema-05-las-consultas.js';
import tema06 from './tema-06-formularios.js';
import tema07 from './tema-07-informes.js';
import tema08 from './tema-08-controles-de-formularios-e-informes.js';
import tema09 from './tema-09-macros.js';

// Temas como objeto para compatibilidad modular
const temas = {
  '1': tema01,
  '2': tema02,
  '3': tema03,
  '4': tema04,
  '5': tema05,
  '6': tema06,
  '7': tema07,
  '8': tema08,
  '9': tema09
};

// Metadatos del curso
export const cursoInfo = {
  id: "access",
  titulo: "Gestor de Base de Datos Access",
  descripcion: "Aprende a gestionar bases de datos con Microsoft Access desde cero hasta nivel avanzado.",
  nivel: "Intermedio",
  duracion: "3-4 horas",
  categoria: "Bases de datos"
};

const DEFAULT_RECURSOS = {
  documentos: [ { titulo: 'Material complementario: Access (guía rápida)', url: '/recursos/access/guia-rapida.pdf' } ],
  enlaces: [ { titulo: 'Documentación de Microsoft Access', url: 'https://support.microsoft.com/es-es/access' } ],
  videos: [ { titulo: 'Introducción a Microsoft Access', url: 'https://www.youtube.com/watch?v=QwQnYpF2F6A' } ]
};

// Recursos por defecto relacionados con cada tema (si el tema no define recursos)
const DEFAULT_RECURSOS_BY_TEMA = {
  '1': {
    documentos: [ { titulo: 'Guía del entorno de Access', url: '/recursos/access/entorno-guia.pdf' } ],
    enlaces: [ { titulo: 'Introducción a Access - Microsoft', url: 'https://support.microsoft.com/es-es/office/introducci%C3%B3n-a-access' } ],
    videos: [ { titulo: 'Introducción y entorno de Access', url: 'https://www.youtube.com/watch?v=QwQnYpF2F6A' } ]
  },
  '2': {
    documentos: [ { titulo: 'Tipos de datos y diseño de tablas', url: '/recursos/access/tablas-tipos.pdf' } ],
    enlaces: [ { titulo: 'Tipos de datos en Access - Microsoft', url: 'https://support.microsoft.com/es-es/office/tipos-de-datos-para-campos-y-propiedades-de-tablas-en-access-2f0e4ff2-5c8e-4a0b-bd5c-8b8b8b8b8b8' } ],
    videos: [ { titulo: 'Crear y configurar tablas en Access', url: 'https://www.youtube.com/watch?v=6QwQnYpF2F6B' } ]
  },
  '3': {
    documentos: [ { titulo: 'Relaciones e integridad referencial', url: '/recursos/access/relaciones-integridad.pdf' } ],
    enlaces: [ { titulo: 'Crear, editar o eliminar relaciones en Access - Microsoft', url: 'https://support.microsoft.com/es-es/office/crear-editar-o-eliminar-una-relaci%C3%B3n-entre-tablas-en-access-8a6a1e7a-8a3e-4b8b-9c4e-8c6b8b8b8b8b' } ],
    videos: [ { titulo: 'Relaciones entre tablas en Access', url: 'https://www.youtube.com/watch?v=7QwQnYpF2F6C' } ]
  },
  '4': {
    documentos: [ { titulo: 'Propiedades de campos y máscaras de entrada', url: '/recursos/access/propiedades-campos.pdf' } ],
    enlaces: [ { titulo: 'Propiedades de campo en Access - Microsoft', url: 'https://support.microsoft.com/es-es/office/introducci%C3%B3n-a-las-propiedades-de-campo-en-access-20ee0b1c-7b8a-4c3a-8c6b-8b8b8b8b8b8b' } ],
    videos: [ { titulo: 'Configurar propiedades de campos en Access', url: 'https://www.youtube.com/watch?v=8QwQnYpF2F6D' } ]
  },
  '5': {
    documentos: [ { titulo: 'Consultas: guía práctica', url: '/recursos/access/consultas-guia.pdf' } ],
    enlaces: [ { titulo: 'Introducción a las consultas en Access - Microsoft', url: 'https://support.microsoft.com/es-es/office/introducci%C3%B3n-a-las-consultas-en-access-1c1f5b7a-2a5f-4d3a-8c6b-8b8b8b8b8b8' } ],
    videos: [ { titulo: 'Consultas en Access: tipos y ejemplos', url: 'https://www.youtube.com/watch?v=9QwQnYpF2F6E' } ]
  },
  '6': {
    documentos: [ { titulo: 'Diseño y propiedades de formularios', url: '/recursos/access/formularios-guia.pdf' } ],
    enlaces: [ { titulo: 'Crear un formulario en Access - Microsoft', url: 'https://support.microsoft.com/es-es/office/crear-un-formulario-en-access-5d8b4a0d-3e8a-4f6e-8b8b-8b8b8b8b8b8b' } ],
    videos: [ { titulo: 'Formularios en Access: creación y personalización', url: 'https://www.youtube.com/watch?v=10QwQnYpF2F6F' } ]
  },
  '7': {
    documentos: [ { titulo: 'Informes: diseño e impresión', url: '/recursos/access/informes-guia.pdf' } ],
    enlaces: [ { titulo: 'Crear un informe en Access - Microsoft', url: 'https://support.microsoft.com/es-es/office/crear-un-informe-en-access-3fa1a0b1-3e8a-4f6e-8b8b-8b8b8b8b8b8b' } ],
    videos: [ { titulo: 'Informes en Access: diseño y presentación', url: 'https://www.youtube.com/watch?v=11QwQnYpF2F6G' } ]
  },
  '8': {
    documentos: [ { titulo: 'Controles y datos adjuntos', url: '/recursos/access/controles-guia.pdf' } ],
    enlaces: [ { titulo: 'Introducción a los controles en Access - Microsoft', url: 'https://support.microsoft.com/es-es/office/introducci%C3%B3n-a-los-controles-en-formularios-e-informes-de-access-20ee0b1c-7b8a-4c3a-8c6b-8b8b8b8b8b8b' } ],
    videos: [ { titulo: 'Controles en formularios e informes de Access', url: 'https://www.youtube.com/watch?v=12QwQnYpF2F6H' } ]
  },
  '9': {
    documentos: [ { titulo: 'Automatización con macros', url: '/recursos/access/macros-guia.pdf' } ],
    enlaces: [ { titulo: 'Crear una macro de base de datos - Microsoft', url: 'https://support.microsoft.com/es-es/office/crear-una-macro-de-base-de-datos-4e7b62c6-8b8b-4c3a-8c6b-8b8b8b8b8b8b' } ],
    videos: [ { titulo: 'Macros en Access: automatización y ejemplos', url: 'https://www.youtube.com/watch?v=13QwQnYpF2F6I' } ]
  }
};

const ensureRecursos = (t) => {
  if (!t) return t;

  // Normalizar distintos formatos de recursos a la estructura {documentos, enlaces, videos}
  let rec = t.recursos;

  if (!rec) {
    rec = { documentos: [], enlaces: [], videos: [] };
  } else if (Array.isArray(rec)) {
    const documentos = [];
    const enlaces = [];
    const videos = [];
    rec.forEach(r => {
      const tipo = (r.tipo || '').toLowerCase();
      if (tipo.includes('video')) videos.push({ titulo: r.titulo, url: r.url });
      else if (tipo.includes('pdf') || tipo.includes('document')) documentos.push({ titulo: r.titulo, url: r.url });
      else enlaces.push({ titulo: r.titulo, url: r.url });
    });
    rec = { documentos, enlaces, videos };
  } else {
    // Asegurar claves
    rec.documentos = rec.documentos || [];
    rec.enlaces = rec.enlaces || [];
    rec.videos = rec.videos || [];
  }

  const estaVacio = (arr) => !arr || arr.length === 0;
  if (estaVacio(rec.documentos) && estaVacio(rec.enlaces) && estaVacio(rec.videos)) {
    const def = (t.id && DEFAULT_RECURSOS_BY_TEMA[t.id]) ? DEFAULT_RECURSOS_BY_TEMA[t.id] : DEFAULT_RECURSOS;
    rec = JSON.parse(JSON.stringify(def));
  }

  t.recursos = rec;
  return t;
};

export const obtenerTema = (id) => ensureRecursos(temas[id] || null);
export const obtenerTodosTemas = () => Object.values(temas).map(ensureRecursos);
export const temaExiste = (id) => Object.prototype.hasOwnProperty.call(temas, id);
export const obtenerInfoCurso = () => cursoInfo;

export default {
  info: cursoInfo,
  temas,
  obtenerTema,
  obtenerTodosTemas,
  obtenerInfoCurso,
  temaExiste
};
