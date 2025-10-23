export default {
  id: '9',
  titulo: "Macros",
  tematica: "Automatización y lógica",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué es una macro en Access y su utilidad",
    "Crear y ejecutar macros para automatizar tareas",
    "Configurar acciones, argumentos y condiciones en macros",
    "Depurar y optimizar macros para mejorar procesos"
  ],
  descripcion: "Crear y ejecutar macros, acciones comunes, argumentos, flujo, condiciones, grupos, submacros, bucles, atajos, depuración.",
  actividades: [
    "Crear una macro básica",
    "Automatizar tareas con macros",
    "Depurar y optimizar macros"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es una macro en Access?",
      contenido: `
        <h3>¿Qué es una macro en Access?</h3>
        <p>Una macro es una herramienta que permite automatizar tareas repetitivas o complejas en Access, ejecutando una serie de acciones de forma secuencial. Facilita la lógica y el control de procesos sin necesidad de programar en VBA.</p>
      `
    },
    {
      id: 2,
      titulo: "Creación de macros",
      contenido: `
        <h3>Creación de macros</h3>
        <p>Puedes crear macros desde la pestaña 'Crear' eligiendo 'Macro'. Se abre el diseñador de macros donde puedes agregar acciones como abrir formularios, aplicar filtros, mostrar mensajes, etc.</p>
        <p><em>Ejemplo:</em> Crear una macro que abra el formulario 'Clientes' y muestre un mensaje de bienvenida.</p>
      `
    },
    {
      id: 3,
      titulo: "Acciones, argumentos y flujo",
      contenido: `
        <h3>Acciones, argumentos y flujo</h3>
        <p>Cada macro está compuesta por acciones (como abrir, guardar, imprimir), que pueden tener argumentos (parámetros) para personalizar su funcionamiento. Puedes establecer condiciones (If) para ejecutar acciones solo si se cumple un criterio, agrupar acciones, crear submacros y usar bucles para repetir procesos.</p>
      `
    },
    {
      id: 4,
      titulo: "Automatización de tareas",
      contenido: `
        <h3>Automatización de tareas</h3>
        <p>Las macros se pueden asociar a eventos de formularios, informes o controles (por ejemplo, al hacer clic en un botón). Esto permite automatizar tareas como validar datos, actualizar registros o generar reportes automáticamente.</p>
        <p><em>Ejemplo:</em> Una macro que, al guardar un pedido, actualiza el stock del producto y muestra un mensaje de confirmación.</p>
      `
    },
    {
      id: 5,
      titulo: "Depuración y optimización de macros",
      contenido: `
        <h3>Depuración y optimización de macros</h3>
        <p>Access permite depurar macros mostrando mensajes de error o usando la acción 'DetenerMacro' para identificar problemas. Es recomendable organizar las macros en submacros y documentar cada acción para facilitar el mantenimiento.</p>
      `
    }
  ],
  recursos: [
    {
      tipo: "video",
      titulo: "Macros en Access: automatización y ejemplos",
      url: "https://www.youtube.com/watch?v=13QwQnYpF2F6I"
    },
    {
      tipo: "pdf",
      titulo: "Guía de macros en Access",
      url: "https://support.microsoft.com/es-es/office/crear-una-macro-de-base-de-datos-4e7b62c6-8b8b-4c3a-8c6b-8b8b8b8b8b8b"
    }
  ]
};
