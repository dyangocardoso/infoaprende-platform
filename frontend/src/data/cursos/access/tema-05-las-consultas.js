export default {
  id: '5',
  titulo: "Las consultas",
  tematica: "Fundamentos y consultas especializadas",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es una consulta en Access y su utilidad",
    "Diferenciar los tipos de consultas disponibles",
    "Crear y ejecutar consultas de selección, acción y multitabla",
    "Aplicar funciones de resumen y referencias cruzadas"
  ],
  descripcion: "Tipos de consultas, creación y ejecución, vista diseño, campos, expresiones, orden, condiciones, parámetros, consultas multitabla, combinación y composición externa. Consultas de resumen, referencias cruzadas y de acción.",
  actividades: [
    "Crear consultas de selección y acción",
    "Usar funciones de agregado y agrupación",
    "Diseñar consultas multitabla y referencias cruzadas"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es una consulta en Access?",
      contenido: `
        <h3>¿Qué es una consulta en Access?</h3>
        <p>Una consulta es una herramienta que permite extraer, analizar y manipular datos almacenados en una o varias tablas. Facilita la obtención de información específica mediante criterios, ordenamientos y cálculos.</p>
      `
    },
    {
      id: 2,
      titulo: "Tipos de consultas",
      contenido: `
        <h3>Tipos de consultas</h3>
        <ul>
          <li><strong>Consulta de selección:</strong> Extrae datos de una o varias tablas según criterios definidos.<br><em>Ejemplo:</em> Mostrar todos los clientes de Lima.</li>
          <li><strong>Consulta de acción:</strong> Modifica datos (actualización, eliminación, creación de nuevas tablas o inserción de registros).<br><em>Ejemplo:</em> Eliminar todos los pedidos anteriores a 2020.</li>
          <li><strong>Consulta de referencias cruzadas:</strong> Resume datos en formato de tabla dinámica.<br><em>Ejemplo:</em> Mostrar el total de ventas por mes y por vendedor.</li>
          <li><strong>Consulta de parámetros:</strong> Solicita valores al usuario para filtrar resultados.<br><em>Ejemplo:</em> Pedir al usuario un año y mostrar los pedidos de ese año.</li>
          <li><strong>Consulta de resumen (agregada):</strong> Calcula totales, promedios, mínimos, máximos, etc.<br><em>Ejemplo:</em> Calcular el promedio de ventas por producto.</li>
        </ul>
      `
    },
    {
      id: 3,
      titulo: "Creación y ejecución de consultas",
      contenido: `
        <h3>Creación y ejecución de consultas</h3>
        <ol>
          <li>Ve a la pestaña 'Crear' y selecciona 'Diseño de consulta'.</li>
          <li>Agrega las tablas o consultas necesarias.</li>
          <li>Arrastra los campos que deseas mostrar.</li>
          <li>Define criterios, orden y expresiones si es necesario.</li>
          <li>Haz clic en 'Vista Hoja de datos' para ver los resultados.</li>
          <li>Guarda la consulta para reutilizarla.</li>
        </ol>
      `
    },
    {
      id: 4,
      titulo: "Consultas multitabla y combinaciones",
      contenido: `
        <h3>Consultas multitabla y combinaciones</h3>
        <ul>
          <li><strong>Combinación interna:</strong> Solo muestra registros que tienen coincidencia en ambas tablas.</li>
          <li><strong>Combinación externa:</strong> Muestra todos los registros de una tabla y los coincidentes de la otra.</li>
        </ul>
        <p><em>Ejemplo:</em> Mostrar todos los clientes y, si existen, sus pedidos (combinación externa).</p>
      `
    },
    {
      id: 5,
      titulo: "Consultas de acción",
      contenido: `
        <h3>Consultas de acción</h3>
        <ul>
          <li><strong>Consulta de actualización:</strong> Cambia valores existentes.<br><em>Ejemplo:</em> Actualizar el campo 'Estado' a 'Inactivo' para clientes sin pedidos en 2 años.</li>
          <li><strong>Consulta de eliminación:</strong> Borra registros según un criterio.<br><em>Ejemplo:</em> Eliminar productos descontinuados.</li>
          <li><strong>Consulta de datos anexados:</strong> Agrega registros a otra tabla.<br><em>Ejemplo:</em> Copiar clientes nuevos a una tabla de historial.</li>
          <li><strong>Consulta de creación de tabla:</strong> Crea una nueva tabla con los resultados.<br><em>Ejemplo:</em> Generar una tabla con los mejores vendedores del año.</li>
        </ul>
      `
    }
  ],
  recursos: [
    {
      tipo: "video",
      titulo: "Consultas en Access: tipos y ejemplos",
      url: "https://www.youtube.com/watch?v=9QwQnYpF2F6E"
    },
    {
      tipo: "pdf",
      titulo: "Guía de consultas en Access",
      url: "https://support.microsoft.com/es-es/office/introducci%C3%B3n-a-las-consultas-en-access-1c1f5b7a-2a5f-4d3a-8c6b-8b8b8b8b8b8"
    }
  ]
};
