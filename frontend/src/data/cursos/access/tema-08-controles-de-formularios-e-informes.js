export default {
  id: '8',
  titulo: "Controles de formularios e informes",
  tematica: "Tipos de controles",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es un control en Access y su utilidad",
    "Agregar y configurar controles básicos y avanzados",
    "Utilizar controles de selección, organización y visuales",
    "Insertar imágenes, datos adjuntos y objetos ActiveX"
  ],
  descripcion: "Etiquetas, cuadros de texto, listas, opciones, pestañas, dibujo, imágenes, datos adjuntos, botones, ActiveX.",
  actividades: [
    "Agregar y configurar controles básicos",
    "Insertar imágenes y datos adjuntos",
    "Utilizar controles avanzados como ActiveX"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es un control en Access?",
      contenido: `
        <h3>¿Qué es un control en Access?</h3>
        <p>Un control es un elemento visual que se coloca en un formulario o informe para mostrar, ingresar o manipular datos. Los controles permiten personalizar la interfaz y mejorar la interacción del usuario con la base de datos.</p>
      `
    },
    {
      id: 2,
      titulo: "Controles básicos",
      contenido: `
        <h3>Controles básicos</h3>
        <ul>
          <li><strong>Etiqueta:</strong> Muestra texto fijo, como títulos o instrucciones.<br><em>Ejemplo:</em> Una etiqueta con el texto 'Ingrese sus datos personales'.</li>
          <li><strong>Cuadro de texto:</strong> Permite mostrar o ingresar datos de un campo.<br><em>Ejemplo:</em> Un cuadro de texto vinculado al campo 'Nombre'.</li>
          <li><strong>Botón:</strong> Ejecuta una acción, como guardar o cerrar el formulario.<br><em>Ejemplo:</em> Un botón 'Guardar' que almacena los datos ingresados.</li>
        </ul>
      `
    },
    {
      id: 3,
      titulo: "Controles de selección",
      contenido: `
        <h3>Controles de selección</h3>
        <ul>
          <li><strong>Cuadro combinado (lista desplegable):</strong> Permite seleccionar un valor de una lista.<br><em>Ejemplo:</em> Seleccionar el distrito de una lista de opciones.</li>
          <li><strong>Cuadro de lista:</strong> Muestra varias opciones y permite seleccionar una o varias.<br><em>Ejemplo:</em> Seleccionar varios productos para un pedido.</li>
          <li><strong>Botón de opción y casilla de verificación:</strong> Permiten elegir entre varias opciones o activar/desactivar una característica.<br><em>Ejemplo:</em> Casilla para indicar si el cliente acepta recibir promociones.</li>
        </ul>
      `
    },
    {
      id: 4,
      titulo: "Controles de organización y visuales",
      contenido: `
        <h3>Controles de organización y visuales</h3>
        <ul>
          <li><strong>Pestañas:</strong> Organizan los controles en secciones dentro del formulario.<br><em>Ejemplo:</em> Una pestaña 'Datos personales' y otra 'Datos de contacto'.</li>
          <li><strong>Líneas y cuadros:</strong> Sirven para separar o resaltar áreas del formulario o informe.</li>
          <li><strong>Imágenes:</strong> Permiten mostrar logotipos, fotos u otros gráficos.<br><em>Ejemplo:</em> Insertar la foto de un empleado en su ficha.</li>
        </ul>
      `
    },
    {
      id: 5,
      titulo: "Controles de datos adjuntos y objetos",
      contenido: `
        <h3>Controles de datos adjuntos y objetos</h3>
        <ul>
          <li><strong>Datos adjuntos:</strong> Permiten almacenar archivos como imágenes, documentos PDF, etc.<br><em>Ejemplo:</em> Adjuntar el CV de un postulante.</li>
          <li><strong>Objeto OLE:</strong> Inserta objetos de otras aplicaciones, como hojas de Excel o gráficos.</li>
          <li><strong>Control ActiveX:</strong> Permite agregar funcionalidades avanzadas, como calendarios o reproductores multimedia.<br><em>Ejemplo:</em> Usar un calendario ActiveX para seleccionar fechas.</li>
        </ul>
      `
    }
  ],
  recursos: [
    {
      tipo: "video",
      titulo: "Controles en formularios e informes de Access",
      url: "https://www.youtube.com/watch?v=12QwQnYpF2F6H"
    },
    {
      tipo: "pdf",
      titulo: "Guía de controles en Access",
      url: "https://support.microsoft.com/es-es/office/introducci%C3%B3n-a-los-controles-en-formularios-e-informes-de-access-20ee0b1c-7b8a-4c3a-8c6b-8b8b8b8b8b8b"
    }
  ]
};
