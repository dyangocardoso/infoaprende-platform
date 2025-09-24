/**
 * Tema 7: Gestión de usuarios y seguridad
 * Curso: Introducción al Sistema Operativo Windows
 */

export default {
  id: '7',
  titulo: "Gestión de usuarios y seguridad",
  tematica: "Cuentas de usuario, permisos, control parental y seguridad básica",
  duracion: "30-35 minutos",
  objetivos: [
    "Comprender los tipos de cuentas de usuario en Windows",
    "Crear, modificar y eliminar cuentas de usuario",
    "Configurar contraseñas y opciones de inicio de sesión",
    "Aplicar permisos y restricciones a usuarios",
    "Configurar el control parental y la seguridad familiar",
    "Adoptar buenas prácticas de seguridad básica"
  ],
  secciones: [
    {
      id: 1,
      titulo: "Tipos de cuentas de usuario",
      contenido: `
        <h3>👤 Tipos de Cuentas de Usuario</h3>
        <ul>
          <li><strong>Administrador:</strong> Control total sobre el sistema</li>
          <li><strong>Estándar:</strong> Uso cotidiano, permisos limitados</li>
          <li><strong>Invitado:</strong> Acceso temporal y muy restringido</li>
        </ul>
      `
    },
    {
      id: 2,
      titulo: "Gestión de cuentas de usuario",
      contenido: `
        <h4>👥 Crear, Modificar y Eliminar Cuentas</h4>
        <ul>
          <li>Acceder a Configuración &gt; Cuentas</li>
          <li>Agregar nueva cuenta (local o Microsoft)</li>
          <li>Modificar nombre, tipo o contraseña</li>
          <li>Eliminar cuentas no utilizadas</li>
        </ul>
      `
    },
    {
      id: 3,
      titulo: "Contraseñas y opciones de inicio de sesión",
      contenido: `
        <h4>🔒 Contraseñas y Seguridad</h4>
        <ul>
          <li>Establecer contraseñas seguras</li>
          <li>Opciones de inicio: PIN, imagen, huella digital</li>
          <li>Configurar preguntas de seguridad</li>
          <li>Recomendaciones para proteger la cuenta</li>
        </ul>
      `
    },
    {
      id: 4,
      titulo: "Permisos y restricciones",
      contenido: `
        <h4>🛡️ Permisos y Restricciones</h4>
        <ul>
          <li>Asignar permisos a carpetas y archivos</li>
          <li>Restringir acceso a configuraciones sensibles</li>
          <li>Controlar instalación de programas</li>
        </ul>
      `
    },
    {
      id: 5,
      titulo: "Control parental y seguridad familiar",
      contenido: `
        <h4>👪 Control Parental</h4>
        <ul>
          <li>Configurar límites de tiempo de uso</li>
          <li>Restringir contenido inapropiado</li>
          <li>Supervisar actividad de los menores</li>
          <li>Utilizar Microsoft Family Safety</li>
        </ul>
      `
    },
    {
      id: 6,
      titulo: "Buenas prácticas de seguridad",
      contenido: `
        <h4>✅ Buenas Prácticas de Seguridad</h4>
        <ul>
          <li>Actualizar Windows y programas regularmente</li>
          <li>No compartir contraseñas</li>
          <li>Utilizar cuentas separadas para cada usuario</li>
          <li>Activar autenticación en dos pasos si es posible</li>
        </ul>
      `
    }
  ],
  actividades: [
    "Crea una cuenta de usuario estándar y otra de administrador",
    "Configura una contraseña segura y preguntas de seguridad",
    "Restringe el acceso a una carpeta para otros usuarios",
    "Configura el control parental para un usuario menor de edad",
    "Actualiza Windows y revisa las opciones de seguridad"
  ],
  recursos: [
    {
      titulo: "Guía de gestión de usuarios en Windows",
      url: "/recursos/intro-windows/guia-gestion-usuarios.pdf",
      tipo: "pdf"
    },
    {
      titulo: "Video: Seguridad y control parental en Windows",
      url: "/videos/intro-windows/seguridad-control-parental.mp4",
      tipo: "video"
    }
  ],
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Cuál es la diferencia entre una cuenta estándar y una de administrador?",
        opciones: [
          "La estándar tiene control total, la de administrador es limitada",
          "La de administrador tiene control total, la estándar es limitada",
          "No hay diferencia",
          "La estándar puede instalar programas, la de administrador no"
        ],
        respuesta: 1
      },
      {
        pregunta: "¿Qué herramienta permite supervisar la actividad de menores?",
        opciones: [
          "Microsoft Family Safety",
          "Administrador de tareas",
          "Panel de control",
          "Windows Update"
        ],
        respuesta: 0
      },
      {
        pregunta: "¿Qué es recomendable para una buena seguridad?",
        opciones: [
          "No actualizar Windows",
          "Compartir contraseñas",
          "Utilizar cuentas separadas y contraseñas seguras",
          "Desactivar el control parental"
        ],
        respuesta: 2
      }
    ]
  }
};
