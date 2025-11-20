export default {
  id: '3',
  titulo: "Relaciones",
  tematica: "Creación, modificación y eliminación",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es una relación en Access y su utilidad",
    "Diferenciar los tipos de relaciones entre tablas",
    "Crear, modificar y eliminar relaciones correctamente",
    "Aplicar la integridad referencial para mantener la coherencia de los datos"
  ],
  descripcion: "Tipos de relaciones: uno a uno, uno a varios, varios a varios. Integridad referencial.",
  actividades: [
    "Crear relaciones entre tablas",
    "Modificar y eliminar relaciones",
    "Configurar integridad referencial"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es una relación en Access?",
      contenido: `
        <h3>¿Qué es una relación en Access?</h3>
        <p>Una relación es un vínculo que se establece entre dos tablas para asociar los datos de ambas. Permite organizar la información y evitar la duplicidad, facilitando la integridad y consistencia de la base de datos.</p>
      `
    },
    {
      id: 2,
      titulo: "Tipos de relaciones",
      contenido: `
        <h3>Tipos de relaciones</h3>
        <ul>
          <li><strong>Uno a uno:</strong> Un registro de la tabla A se relaciona con un solo registro de la tabla B y viceversa.<br>Ejemplo: Una tabla 'Personas' y una tabla 'Pasaportes', donde cada persona tiene un único pasaporte y cada pasaporte pertenece a una sola persona.</li>
          <li><strong>Uno a varios:</strong> Un registro de la tabla A puede estar relacionado con varios registros de la tabla B, pero un registro de la tabla B solo puede estar relacionado con uno de la tabla A. Es el tipo más común.<br>Ejemplo: Una tabla 'Clientes' y una tabla 'Pedidos', donde cada cliente puede tener muchos pedidos, pero cada pedido pertenece a un solo cliente.</li>
          <li><strong>Varios a varios:</strong> Varios registros de la tabla A pueden estar relacionados con varios registros de la tabla B. Se implementa mediante una tabla intermedia.<br>Ejemplo: Una tabla 'Estudiantes' y una tabla 'Cursos', donde un estudiante puede inscribirse en varios cursos y cada curso puede tener varios estudiantes. Se utiliza una tabla intermedia llamada 'Inscripciones' que contiene los campos 'id_estudiante' y 'id_curso'.</li>
        </ul>
      `
    },
    {
      id: 3,
      titulo: "Creación de relaciones",
      contenido: `
        <h3>Creación de relaciones</h3>
        <ol>
          <li>Ve a la pestaña 'Herramientas de base de datos' y selecciona 'Relaciones'.</li>
          <li>Agrega las tablas que deseas relacionar.</li>
          <li>Arrastra el campo clave primaria de una tabla al campo relacionado de la otra tabla.</li>
          <li>Se abrirá un cuadro de diálogo para definir el tipo de relación y la integridad referencial.</li>
        </ol>
      `
    },
    {
      id: 4,
      titulo: "Integridad referencial",
      contenido: `
        <h3>Integridad referencial</h3>
        <p>La integridad referencial es una regla que garantiza que las relaciones entre tablas sean válidas. Evita que existan registros huérfanos y mantiene la coherencia de los datos. Al activarla, Access impide eliminar o modificar registros relacionados si existen dependencias.</p>
      `
    },
    {
      id: 5,
      titulo: "Modificar y eliminar relaciones",
      contenido: `
        <h3>Modificar y eliminar relaciones</h3>
        <p>Puedes modificar o eliminar relaciones desde la ventana de 'Relaciones'. Haz clic sobre la línea de relación y selecciona la opción deseada. Es importante revisar el impacto en los datos antes de realizar cambios.</p>
      `
    }
  ],
  recursos: [
    {
      tipo: "video",
      titulo: "Relaciones entre tablas en Access",
      url: "https://www.youtube.com/watch?v=7QwQnYpF2F6C"
    },
    {
      tipo: "pdf",
      titulo: "Guía de relaciones e integridad referencial",
      url: "https://support.microsoft.com/es-es/office/crear-editar-o-eliminar-una-relaci%C3%B3n-entre-tablas-en-access-8a6a1e7a-8a3e-4b8b-9c4e-8c6b8b8b8b8b"
    }
  ]
};
