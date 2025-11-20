// Índice de temas del curso Tabulador Electrónico Excel
import tema01 from './tema-01-introduccion.js';
import tema02 from './tema-02-edicion-datos.js';
import tema03 from './tema-03-manipulacion-celdas.js';
import tema04 from './tema-04-formatos.js';
import tema05 from './tema-05-estructura-libro.js';
import tema06 from './tema-06-formulas-funciones.js';
import tema07 from './tema-07-formato-condicional.js';
import tema08 from './tema-08-imagenes-diagramas.js';
import tema09 from './tema-09-graficos.js';
import tema10 from './tema-10-tablas-dinamicas.js';
import tema11 from './tema-11-validacion-organizacion.js';

const temas = [
  tema01,
  tema02,
  tema03,
  tema04,
  tema05,
  tema06,
  tema07,
  tema08,
  tema09,
  tema10,
  tema11
];

function obtenerTema(id) {
  // Permite buscar por id numérico o string
  return temas.find(t => t.id === id || t.id === String(id));
}

export default Object.assign(temas, { obtenerTema });
