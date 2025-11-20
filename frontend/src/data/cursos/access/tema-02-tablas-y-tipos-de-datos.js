export default {
  id: '2',
  titulo: "Tablas y tipos de datos",
  tematica: "Creación y edición",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es una tabla en Access y su función",
    "Crear y editar tablas y campos",
    "Diferenciar los tipos de datos disponibles en Access",
    "Establecer una clave primaria correctamente"
  ],
  descripcion: "Creación de tablas, edición de campos, tipos de datos: texto, numérico, fecha/hora, moneda, sí/no, adjuntos, etc.",
  actividades: [
    "Crear una tabla desde cero",
    "Editar campos y definir tipos de datos",
    "Establecer clave primaria"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es una tabla en Access?",
      contenido: `
        <h3>¿Qué es una tabla en Access?</h3>
        <p>Una tabla es el objeto principal donde se almacenan los datos en Access. Cada tabla está compuesta por filas (registros) y columnas (campos). Cada campo representa una característica de la información, y cada registro es una entrada completa de datos.</p>
      `
    },
    {
      id: 2,
      titulo: "Creación de tablas",
      contenido: `
        <h3>Creación de tablas</h3>
        <ol>
          <li>Ve a la pestaña 'Crear' y selecciona 'Tabla'.</li>
          <li>Se abrirá una tabla en vista Hoja de datos para que agregues campos y registros.</li>
          <li>Cambia a 'Vista Diseño' para definir los nombres y tipos de cada campo.</li>
        </ol>
      `
    },
    {
      id: 3,
      titulo: "Edición de campos",
      contenido: `
        <h3>Edición de campos</h3>
        <ul>
          <li>Cambiar el nombre de los campos.</li>
          <li>Definir el tipo de datos de cada campo.</li>
          <li>Especificar propiedades adicionales como tamaño, formato, valor predeterminado, etc.</li>
        </ul>
      `
    },
    {
      id: 4,
      titulo: "Tipos de datos en Access",
      contenido: `
        <h3>Tipos de datos en Access</h3>
        <ul>
          <li><strong>Texto corto:</strong> Para cadenas de hasta 255 caracteres.</li>
          <li><strong>Texto largo (Memo):</strong> Para textos extensos.</li>
          <li><strong>Número:</strong> Para valores numéricos.</li>
          <li><strong>Fecha/Hora:</strong> Para fechas y horas.</li>
          <li><strong>Moneda:</strong> Para valores monetarios.</li>
          <li><strong>Sí/No:</strong> Para valores booleanos (verdadero/falso).</li>
          <li><strong>Autonumérico:</strong> Genera automáticamente un número único para cada registro.</li>
          <li><strong>Objeto OLE:</strong> Para almacenar archivos como imágenes o documentos.</li>
          <li><strong>Hipervínculo:</strong> Para enlaces web o de correo.</li>
          <li><strong>Adjuntos:</strong> Para archivos adjuntos (imágenes, documentos, etc.).</li>
        </ul>
      `
    },
    {
      id: 5,
      titulo: "Clave primaria",
      contenido: `
        <h3>Clave primaria</h3>
        <p>La clave primaria es un campo (o combinación de campos) que identifica de manera única cada registro en la tabla. Es fundamental para evitar duplicados y establecer relaciones entre tablas. Para definirla, haz clic derecho sobre el campo deseado en la Vista Diseño y selecciona 'Clave principal'.</p>
      `
    }
  ],
  recursos: [
    {
      tipo: "video",
      titulo: "Crear y configurar tablas en Access",
      url: "https://www.youtube.com/watch?v=6QwQnYpF2F6B"
    },
    {
      tipo: "pdf",
      titulo: "Tipos de datos en Access",
      url: "https://support.microsoft.com/es-es/office/tipos-de-datos-para-campos-y-propiedades-de-tablas-en-access-2f0e4ff2-5c8e-4a0b-bd5c-8b8b8b8b8b8b"
    }
  ]
};
