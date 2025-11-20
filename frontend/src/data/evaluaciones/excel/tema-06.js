const excelTema06 = {
  titulo: "Evaluación: Referencias Absolutas y Relativas",
  preguntas: [
    {
      id: 1,
      pregunta: "¿Qué es una referencia relativa en Excel?",
      opciones: [
        "Una referencia que cambia al copiar la fórmula a otra celda",
        "Una referencia que nunca cambia",
        "Un tipo de formato de celda",
        "Un gráfico"
      ],
      respuestaCorrecta: 0,
      explicacion: "Las referencias relativas se ajustan automáticamente al copiar la fórmula."
    },
    {
      id: 2,
      pregunta: "¿Cómo se representa una referencia absoluta?",
      opciones: [
        "$A$1",
        "A1",
        "#A1",
        "A$1"
      ],
      respuestaCorrecta: 0,
      explicacion: "El símbolo $ antes de la letra y el número indica referencia absoluta."
    },
    {
      id: 3,
      pregunta: "¿Para qué sirve una referencia absoluta?",
      opciones: [
        "Para mantener fija una celda al copiar la fórmula",
        "Para cambiar el color de la celda",
        "Para insertar imágenes",
        "Para imprimir la hoja"
      ],
      respuestaCorrecta: 0,
      explicacion: "Permite que una celda específica no cambie al copiar la fórmula a otras celdas."
    },
    {
      id: 4,
      pregunta: "¿Qué ocurre si copias la fórmula =A1+B1 desde la celda C1 a C2?",
      opciones: [
        "La fórmula se convierte en =A2+B2",
        "La fórmula no cambia",
        "La fórmula se borra",
        "La fórmula se convierte en =A1+B2"
      ],
      respuestaCorrecta: 0,
      explicacion: "Las referencias relativas cambian según la posición a la que se copia la fórmula."
    }
  ]
};

export default excelTema06;
