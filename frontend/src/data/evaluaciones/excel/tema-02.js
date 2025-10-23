const excelTema02 = {
  titulo: "Evaluación: Fórmulas y Funciones",
  preguntas: [
    {
      id: 1,
      pregunta: "¿Cómo debe comenzar una fórmula en Excel?",
      opciones: [
        "Con una letra",
        "Con el signo igual (=)",
        "Con un número",
        "Con un espacio"
      ],
      respuestaCorrecta: 1,
      explicacion: "Todas las fórmulas en Excel deben comenzar con el signo igual (=) para que Excel las reconozca como cálculos."
    },
    {
      id: 2,
      pregunta: "¿Qué hace la función SUMA en Excel?",
      opciones: [
        "Resta números",
        "Suma todos los valores en un rango de celdas",
        "Multiplica valores",
        "Divide números"
      ],
      respuestaCorrecta: 1,
      explicacion: "La función SUMA(rango) calcula la suma total de todos los valores numéricos en el rango de celdas especificado."
    },
    {
      id: 3,
      pregunta: "¿Cuál es la sintaxis correcta para sumar las celdas A1 a A5?",
      opciones: [
        "SUMA A1:A5",
        "=SUMA(A1:A5)",
        "SUMA(A1-A5)",
        "=A1+A2+A3+A4+A5 solamente"
      ],
      respuestaCorrecta: 1,
      explicacion: "La sintaxis correcta es =SUMA(A1:A5), donde los dos puntos (:) indican un rango desde A1 hasta A5."
    },
    {
      id: 4,
      pregunta: "¿Qué función se usa para calcular el promedio de un rango?",
      opciones: [
        "SUMA",
        "PROMEDIO",
        "CONTAR",
        "MULTIPLICAR"
      ],
      respuestaCorrecta: 1,
      explicacion: "La función PROMEDIO calcula el valor promedio (media aritmética) de los números en un rango de celdas."
    }
  ]
};

export default excelTema02;
