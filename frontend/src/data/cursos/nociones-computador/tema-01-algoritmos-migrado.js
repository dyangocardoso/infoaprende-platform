/**
 * Tema 1: Algoritmos y uso básico del computador (MIGRADO)
 * Curso: Nociones generales del computador
 * Contenido migrado del sistema monolítico original
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
        
        <div class="algoritmo-encendido">
          <h4>📋 Pasos para Encender:</h4>
          <ol>
            <li><strong>Verificar conexiones:</strong>
              <ul>
                <li>Cable de alimentación conectado</li>
                <li>Monitor enchufado y conectado</li>
                <li>Teclado y ratón conectados</li>
              </ul>
            </li>
            <li><strong>Encender periféricos:</strong>
              <ul>
                <li>Presionar botón del monitor</li>
                <li>Activar altavoces (si son externos)</li>
              </ul>
            </li>
            <li><strong>Encender la CPU:</strong>
              <ul>
                <li>Localizar botón de encendido (Power)</li>
                <li>Presionar una sola vez</li>
                <li>Esperar sin tocar nada</li>
              </ul>
            </li>
            <li><strong>Esperar el arranque:</strong>
              <ul>
                <li>Ver luces de actividad</li>
                <li>Escuchar ventiladores funcionando</li>
                <li>Aguardar pantalla de carga</li>
              </ul>
            </li>
          </ol>
        </div>

        <div class="advertencias">
          <h4>⚠️ Qué NO hacer:</h4>
          <ul>
            <li>No presionar el botón múltiples veces</li>
            <li>No desconectar cables durante el encendido</li>
            <li>No mover el computador mientras arranca</li>
            <li>No usar durante tormentas eléctricas</li>
          </ul>
        </div>
      `,
      actividades: [
        {
          tipo: "identificacion",
          descripcion: "Identifica los componentes necesarios para el encendido",
          elementos: [
            "Botón de encendido de la CPU",
            "Botón de encendido del monitor", 
            "Cables de alimentación",
            "Conexiones de entrada"
          ]
        }
      ]
    },
    {
      id: 3,
      titulo: "Algoritmo de Apagado",
      contenido: `
        <h3>⚡ Apagar el Computador Correctamente</h3>
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
