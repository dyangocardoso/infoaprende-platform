export default {
  id: '6',
  titulo: "Formularios",
  tematica: "Creación, edición, propiedades y controles",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es un formulario en Access y su utilidad",
    "Crear y personalizar formularios y controles",
    "Utilizar la Vista Diseño y la Hoja de propiedades",
    "Agregar subformularios y organizar controles"
  ],
  descripcion: "Creación y edición de formularios, asistente, edición de datos, vista diseño, hoja de propiedades, grupo controles, subformularios, organización y ajuste de controles.",
  actividades: [
    "Crear un formulario con el asistente",
    "Editar y personalizar controles",
    "Agregar subformularios"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es un formulario en Access?",
      contenido: `
        <h3>¿Qué es un formulario en Access?</h3>
        <p>Un formulario es un objeto que permite visualizar, ingresar y modificar datos de manera más amigable y controlada que la vista de tabla. Facilita la interacción del usuario con la base de datos.</p>
      `
    },
    {
      id: 2,
      titulo: "Creación de formularios",
      contenido: `
        <h3>Creación de formularios</h3>
        <ul>
          <li><strong>Asistente para formularios:</strong> Guía paso a paso para seleccionar campos y diseño.</li>
          <li><strong>Formulario en blanco:</strong> Permite diseñar desde cero.</li>
          <li><strong>Formulario instantáneo:</strong> Se genera automáticamente a partir de una tabla o consulta seleccionada.</li>
        </ul>
        <p><em>Ejemplo:</em> Usar el asistente para crear un formulario de ingreso de clientes seleccionando los campos 'Nombre', 'Apellido', 'DNI' y 'Teléfono'.</p>
      `
    },
    {
      id: 3,
      titulo: "Edición y personalización de controles",
      contenido: `
        <h3>Edición y personalización de controles</h3>
        <ul>
          <li>Mover y redimensionar controles.</li>
          <li>Cambiar el tipo de control (por ejemplo, de cuadro de texto a lista desplegable).</li>
          <li>Modificar propiedades como color, fuente, formato, etc.</li>
        </ul>
        <p><em>Ejemplo:</em> Personalizar el botón 'Guardar' para que tenga un color verde y fuente en negrita.</p>
      `
    },
    {
      id: 4,
      titulo: "Vista Diseño y Hoja de propiedades",
      contenido: `
        <h3>Vista Diseño y Hoja de propiedades</h3>
        <p>La Vista Diseño permite modificar la estructura del formulario y sus controles. La Hoja de propiedades muestra todas las opciones configurables de cada control o del formulario completo.</p>
        <p><em>Ejemplo:</em> Cambiar el título del formulario desde la Hoja de propiedades o establecer un formato de fecha para un campo específico.</p>
      `
    },
    {
      id: 5,
      titulo: "Subformularios",
      contenido: `
        <h3>Subformularios</h3>
        <p>Un subformulario es un formulario insertado dentro de otro, útil para mostrar datos relacionados.</p>
        <p><em>Ejemplo:</em> En un formulario de 'Clientes', agregar un subformulario que muestre todos los 'Pedidos' realizados por ese cliente.</p>
      `
    },
    {
      id: 6,
      titulo: "Organización y ajuste de controles",
      contenido: `
        <h3>Organización y ajuste de controles</h3>
        <p>Puedes organizar los controles en grupos, usar cuadrículas para alinearlos y ajustar el tamaño automáticamente.</p>
        <p><em>Ejemplo:</em> Agrupar los campos de dirección (calle, ciudad, distrito) en un solo bloque para facilitar la entrada de datos.</p>
      `
    }
  ],
  recursos: [
    {
      tipo: "video",
      titulo: "Formularios en Access: creación y personalización",
      url: "https://www.youtube.com/watch?v=10QwQnYpF2F6F"
    },
    {
      tipo: "pdf",
      titulo: "Guía de formularios en Access",
      url: "https://support.microsoft.com/es-es/office/crear-un-formulario-en-access-5d8b4a0d-3e8a-4f6e-8b8b-8b8b8b8b8b8b"
    }
  ]
};
