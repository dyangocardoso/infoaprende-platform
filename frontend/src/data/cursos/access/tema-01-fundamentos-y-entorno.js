export default {
  id: '1',
  titulo: "Fundamentos y entorno",
  tematica: "Conceptos y barras",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es Microsoft Access y sus ventajas",
    "Identificar los elementos principales del entorno de Access",
    "Diferenciar las vistas principales de Access",
    "Realizar los primeros pasos para crear una base de datos"
  ],
  descripcion: "Conceptos básicos de Access, entorno de trabajo, barras de herramientas, cinta de opciones, panel de navegación y vistas.",
  actividades: [
    "¿Qué es Access? Usos y ventajas",
    "Identificar las barras y paneles principales",
    "Explorar las vistas de Access"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es Microsoft Access?",
      contenido: `
        <h3>¿Qué es Microsoft Access?</h3>
        <p>Microsoft Access es un sistema de gestión de bases de datos relacional desarrollado por Microsoft. Permite crear, gestionar y consultar bases de datos de manera sencilla, integrando herramientas visuales para el diseño de tablas, formularios, consultas e informes.</p>
        <ul>
          <li><strong>Ventajas:</strong></li>
          <li>Interfaz amigable y visual</li>
          <li>Integración con otras aplicaciones de Microsoft Office</li>
          <li>Ideal para pequeñas y medianas empresas o proyectos educativos</li>
          <li>Permite automatización mediante macros y VBA</li>
        </ul>
      `
    },
    {
      id: 2,
      titulo: "Entorno de trabajo de Access",
      contenido: `
        <h3>Entorno de trabajo de Access</h3>
        <ul>
          <li><strong>Barra de título:</strong> Muestra el nombre de la base de datos y la aplicación.</li>
          <li><strong>Cinta de opciones:</strong> Agrupa las herramientas y comandos en pestañas (Archivo, Inicio, Crear, Datos externos, Herramientas de base de datos, etc.).</li>
          <li><strong>Panel de navegación:</strong> Permite acceder a tablas, consultas, formularios e informes.</li>
          <li><strong>Área de trabajo:</strong> Espacio donde se visualizan y editan los objetos seleccionados.</li>
          <li><strong>Barra de estado:</strong> Muestra información contextual y accesos rápidos.</li>
        </ul>
      `
    },
    {
      id: 3,
      titulo: "Vistas principales en Access",
      contenido: `
        <h3>Vistas principales en Access</h3>
        <ul>
          <li><strong>Vista Hoja de datos:</strong> Permite ver y editar los datos directamente en forma de tabla.</li>
          <li><strong>Vista Diseño:</strong> Permite modificar la estructura de tablas, consultas, formularios o informes.</li>
          <li><strong>Vista Formulario/Informe:</strong> Muestra los datos en un formato personalizado para facilitar la entrada o presentación de información.</li>
        </ul>
      `
    },
    {
      id: 4,
      titulo: "Primeros pasos: Crear una base de datos",
      contenido: `
        <h3>Primeros pasos: Crear una base de datos</h3>
        <ol>
          <li>Abrir Access y seleccionar "Base de datos en blanco".</li>
          <li>Asignar un nombre y ubicación al archivo.</li>
          <li>Crear la primera tabla y definir los campos.</li>
          <li>Guardar y comenzar a trabajar con otros objetos (consultas, formularios, informes).</li>
        </ol>
      `
    }
  ],
  recursos: [
    {
      tipo: "video",
      titulo: "Introducción a Access",
      url: "https://www.youtube.com/watch?v=QwQnYpF2F6A"
    },
    {
      tipo: "pdf",
      titulo: "Guía rápida de Access",
      url: "https://support.microsoft.com/es-es/office/gu%C3%ADa-r%C3%A1pida-de-microsoft-access-2013-2016-2019-y-microsoft-365-1e6a1e7a-8a3e-4b8b-9c4e-8c6b8b8b8b8b"
    }
  ]
};
