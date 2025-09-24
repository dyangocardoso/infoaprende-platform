/**
 * Tema 1: Algoritmos y uso básico del computador
 * Curso: Nociones generales del computad      contenido: `
        <h3>🔄 Apagar el Computador Correctamente</h3>
        <p>El apagado incorrecto puede causar pérdida de datos y daños al sistema:</p>`
 */

export default {
  id: '1',
  titulo: "Algoritmos y uso básico",
  duracion: "15-20 minutos",
  objetivos: [
    "Comprender qué es un algoritmo",
    "Aprender la secuencia correcta de encendido",
    "Dominar el procedimiento de apagado seguro",
    "Aplicar algoritmos básicos en el uso del computador"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué es un Algoritmo?",
      contenido: `
        <h3>🧠 Concepto de Algoritmo</h3>
        <p>Un <strong>algoritmo</strong> es una secuencia ordenada de pasos para resolver un problema o realizar una tarea.</p>
        
        <h4>Características de un algoritmo:</h4>
        <ul>
          <li><strong>Finito:</strong> Tiene un inicio y un final</li>
          <li><strong>Preciso:</strong> Cada paso está claramente definido</li>
          <li><strong>Ordenado:</strong> Los pasos siguen una secuencia lógica</li>
          <li><strong>Efectivo:</strong> Lleva a la solución del problema</li>
        </ul>

        <div class="ejemplo-cotidiano">
          <h4>💡 Ejemplo Cotidiano</h4>
          <p><strong>Algoritmo para hacer un sándwich:</strong></p>
          <ol>
            <li>Tomar dos rebanadas de pan</li>
            <li>Aplicar mantequilla en una rebanada</li>
            <li>Colocar jamón y queso</li>
            <li>Cerrar con la otra rebanada</li>
            <li>Cortar por la mitad</li>
          </ol>
        </div>
      `,
      actividades: [
        {
          tipo: "reflexion",
          pregunta: "Escribe el algoritmo que sigues para llegar a la escuela",
          ayuda: "Piensa en cada paso desde que sales de casa"
        }
      ]
    },
    {
      id: 2,
      titulo: "Algoritmo de Encendido",
      contenido: `
        <h3>🔌 Encender el Computador Correctamente</h3>
        <p>Seguir el orden correcto es importante para no dañar el equipo:</p>
        
        <div class="algoritmo-encendido">
          <h4>📋 Pasos para Encender:</h4>
          <ol>
            <li><strong>Verificar conexiones:</strong> Asegurar que todos los cables estén conectados</li>
            <li><strong>Encender periféricos:</strong> Monitor, bocinas, impresora (si hay)</li>
            <li><strong>Presionar botón de encendido:</strong> En la CPU/torre del computador</li>
            <li><strong>Esperar carga:</strong> Dejar que el sistema operativo inicie completamente</li>
            <li><strong>Verificar funcionamiento:</strong> Comprobar que todo funciona correctamente</li>
          </ol>
        </div>

        <div class="tips-importantes">
          <h4>⚠️ Puntos Importantes:</h4>
          <ul>
            <li>Nunca forzar el botón de encendido</li>
            <li>Esperar a que aparezca el escritorio antes de usar</li>
            <li>Si no enciende, verificar conexión eléctrica</li>
          </ul>
        </div>
      `,
      multimedia: {
        imagen: "/images/teoria/encendido-computador.jpg",
        video: "/videos/tutorial-encendido.mp4"
      },
      actividades: [
        {
          tipo: "practica",
          descripcion: "Simula el proceso de encendido con tu computador",
          pasos: [
            "Observa las conexiones",
            "Identifica el botón de encendido",
            "Practica el procedimiento sin encender realmente"
          ]
        }
      ]
    },
    {
      id: 3,
      titulo: "Algoritmo de Apagado",
      contenido: `
        <h3>� Apagar el Computador Correctamente</h3>
        <p>El apagado incorrecto puede causar pérdida de datos y daños al sistema:</p>
        
        <div class="algoritmo-apagado">
          <h4>📋 Pasos para Apagar:</h4>
          <ol>
            <li><strong>Guardar trabajo:</strong> Cerrar programas y guardar documentos</li>
            <li><strong>Cerrar aplicaciones:</strong> Salir de todos los programas abiertos</li>
            <li><strong>Usar menú Inicio:</strong> Hacer clic en "Inicio" → "Apagar"</li>
            <li><strong>Esperar apagado completo:</strong> No desconectar hasta que se apague totalmente</li>
            <li><strong>Apagar periféricos:</strong> Monitor, bocinas, impresora</li>
          </ol>
        </div>

        <div class="advertencias">
          <h4>🚫 Nunca Hacer:</h4>
          <ul>
            <li>Desconectar el cable de alimentación directamente</li>
            <li>Presionar el botón de encendido por varios segundos (solo en emergencias)</li>
            <li>Apagar cuando hay programas guardando información</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "identificacion",
          pregunta: "¿Qué problemas puede causar el apagado incorrecto?",
          opciones: [
            "Pérdida de datos no guardados",
            "Corrupción del sistema operativo", 
            "Daño en el disco duro",
            "Todas las anteriores"
          ],
          respuestaCorrecta: 3
        }
      ]
    }
  ],
  recursos: {
    documentos: [
      {
        titulo: "Guía de Algoritmos Básicos",
        url: "/docs/algoritmos-basicos.pdf",
        tipo: "pdf"
      }
    ],
    enlaces: [
      {
        titulo: "¿Qué es un algoritmo? - Khan Academy",
        url: "https://es.khanacademy.org/computing/computer-science/algorithms",
        tipo: "externo"
      }
    ],
    videos: [
      {
        titulo: "Encendido y apagado seguro del PC",
        url: "/videos/encendido-apagado.mp4",
        duracion: "3:45"
      }
    ]
  },
  evaluacion: {
    tipo: "cuestionario",
    preguntas: [
      {
        pregunta: "¿Qué es un algoritmo?",
        tipo: "opcion_multiple",
        opciones: [
          "Un programa de computadora",
          "Una secuencia ordenada de pasos",
          "Un tipo de software",
          "Una parte del hardware"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Cuál es el primer paso para encender un computador?",
        tipo: "opcion_multiple",
        opciones: [
          "Presionar el botón de encendido",
          "Abrir el navegador",
          "Verificar las conexiones",
          "Encender el monitor"
        ],
        respuestaCorrecta: 2
      }
    ]
  }
};
