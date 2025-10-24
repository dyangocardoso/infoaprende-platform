/**
 * Tema 1: Algoritmos y uso básico
 * Migrado automáticamente desde sistema monolítico
 */

export default {
  "id": "1",
  "titulo": "Algoritmos y uso básico",
  "duracion": "15-20 minutos",
  "objetivos": [
    "Comprender qué es un algoritmo",
    "Aprender la secuencia correcta de encendido",
    "Dominar el procedimiento de apagado seguro",
    "Aplicar algoritmos básicos en el uso del computador"
  ],
  "secciones": [
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
      `
    },
    {
      id: 3,
      titulo: "Algoritmo de Apagado",
      contenido: `
        <h3>🔄 Apagar el Computador Correctamente</h3>
        
        <div class="algoritmo-apagado">
          <h4>📋 Pasos para Apagar:</h4>
          <ol>
            <li><strong>Guardar trabajo:</strong>
              <ul>
                <li>Guardar todos los documentos abiertos</li>
                <li>Cerrar programas importantes</li>
              </ul>
            </li>
            <li><strong>Usar menú de Windows:</strong>
              <ul>
                <li>Clic en botón "Inicio"</li>
                <li>Seleccionar "Apagar"</li>
                <li>Elegir "Apagar" del menú</li>
              </ul>
            </li>
            <li><strong>Esperar apagado completo:</strong>
              <ul>
                <li>No tocar nada durante el proceso</li>
                <li>Esperar que luces se apaguen</li>
                <li>Ventiladores dejan de funcionar</li>
              </ul>
            </li>
            <li><strong>Apagar periféricos:</strong>
              <ul>
                <li>Apagar monitor</li>
                <li>Apagar altavoces externos</li>
              </ul>
            </li>
          </ol>
        </div>

        <div class="metodos-apagado">
          <h4>🎛️ Diferentes Métodos:</h4>
          <ul>
            <li><strong>Apagar:</strong> Cierra todo completamente</li>
            <li><strong>Reiniciar:</strong> Apaga y enciende automáticamente</li>
            <li><strong>Suspender:</strong> Ahorra energía, arranque rápido</li>
            <li><strong>Hibernar:</strong> Guarda sesión, apagado completo</li>
          </ul>
        </div>
      `
    }
  ],
  recursos: {
    documentos: [
      { titulo: 'Guía práctica: Algoritmos básicos', url: '/recursos/nociones-computador/algoritmos-guia.pdf' }
    ],
    enlaces: [
      { titulo: 'Algoritmo - Wikipedia', url: 'https://es.wikipedia.org/wiki/Algoritmo' },
      { titulo: 'Ejemplos de algoritmos cotidianos', url: 'https://www.example.com/algoritmos-ejemplos' }
    ],
    videos: [
      { titulo: 'Introducción a los algoritmos', url: 'https://www.youtube.com/watch?v=8jvJcF0kq8k' }
    ]
  }
};
