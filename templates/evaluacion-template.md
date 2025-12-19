# Plantilla de Evaluación

Usa esta plantilla como referencia para crear evaluaciones con la CLI o manualmente.

---

id: curso-evaluacion-01-ejemplo
curso: paint
numero: '01'
titulo: 'Evaluación inicial'
descripcion: 'Evalúa comprensión básica'
creadoEn: '2025-01-01T00:00:00.000Z'

preguntas:
  - id: q1
    tipo: multiple-choice
    enunciado: '¿Cuánto es 2+2?'
    opciones:
      - '1'
      - '2'
      - '3'
      - '4'
    respuestaCorrecta: 3
    puntos: 1

criteriosEvaluacion:
  - criterio: 'Dominio teórico'
    peso: 50
  - criterio: 'Aplicación práctica'
    peso: 50

---

Puedes generar una evaluación con la CLI:

npm run create-tema -- --curso=paint --numero=01 --titulo="Evaluación inicial" --tipo=evaluacion
