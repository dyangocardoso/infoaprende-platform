export default {
  id: '7',
  titulo: "Informes",
  tematica: "Diseño y presentación",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es un informe en Access y su utilidad",
    "Crear y personalizar informes con el asistente y desde cero",
    "Utilizar la Vista Diseño y la pestaña Diseño",
    "Agrupar, ordenar e imprimir datos de manera profesional"
  ],
  descripcion: "Diseño y presentación de informes, asistente, vista diseño, pestaña diseño, agrupar, ordenar, imprimir, vista preliminar.",
  actividades: [
    "Crear un informe con el asistente",
    "Personalizar el diseño del informe",
    "Configurar agrupaciones y ordenaciones"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es un informe en Access?",
      contenido: `
        <h3>¿Qué es un informe en Access?</h3>
        <p>Un informe es un objeto que permite presentar, imprimir o exportar datos de la base de datos de manera estructurada y profesional. Es ideal para generar resúmenes, listados y reportes para la toma de decisiones.</p>
      `
    },
    {
      id: 2,
      titulo: "Creación de informes",
      contenido: `
        <h3>Creación de informes</h3>
        <ul>
          <li><strong>Asistente para informes:</strong> Guía paso a paso para seleccionar campos, agrupaciones y diseño.</li>
          <li><strong>Informe en blanco:</strong> Permite diseñar desde cero.</li>
          <li><strong>Informe instantáneo:</strong> Se genera automáticamente a partir de una tabla o consulta seleccionada.</li>
        </ul>
        <p><em>Ejemplo:</em> Usar el asistente para crear un informe de ventas por producto y por mes.</p>
      `
    },
    {
      id: 3,
      titulo: "Vista Diseño y pestaña Diseño",
      contenido: `
        <h3>Vista Diseño y pestaña Diseño</h3>
        <p>La Vista Diseño permite modificar la estructura del informe, agregar o quitar campos, y personalizar el formato. La pestaña Diseño ofrece herramientas para insertar títulos, imágenes, líneas, cuadros y cambiar estilos.</p>
        <p><em>Ejemplo:</em> Agregar el logo de la empresa y un título personalizado en la cabecera del informe.</p>
      `
    },
    {
      id: 4,
      titulo: "Agrupar y ordenar datos",
      contenido: `
        <h3>Agrupar y ordenar datos</h3>
        <p>Puedes agrupar los datos por uno o varios campos y definir el orden de presentación. Esto facilita la lectura y el análisis de la información.</p>
        <p><em>Ejemplo:</em> Agrupar un informe de ventas por 'Vendedor' y ordenar por 'Fecha de venta' de manera descendente.</p>
      `
    },
    {
      id: 5,
      titulo: "Vista preliminar e impresión",
      contenido: `
        <h3>Vista preliminar e impresión</h3>
        <p>La Vista preliminar permite revisar cómo se verá el informe antes de imprimirlo o exportarlo. Puedes ajustar márgenes, orientación y formato de página.</p>
        <p><em>Ejemplo:</em> Revisar el informe de inventario antes de imprimirlo para asegurarte de que toda la información se visualiza correctamente.</p>
      `
    }
  ],
  recursos: [
    {
      tipo: "video",
      titulo: "Informes en Access: diseño y presentación",
      url: "https://www.youtube.com/watch?v=11QwQnYpF2F6G"
    },
    {
      tipo: "pdf",
      titulo: "Guía de informes en Access",
      url: "https://support.microsoft.com/es-es/office/crear-un-informe-en-access-3fa1a0b1-3e8a-4f6e-8b8b-8b8b8b8b8b8b"
    }
  ]
};
