export default {
  id: '4',
  titulo: "Propiedades de campos",
  tematica: "Tipos de propiedades, definición y características",
  duracion: "20-25 minutos",
  objetivos: [
    "Comprender qué son las propiedades de los campos en Access",
    "Configurar tamaño, formato y máscaras de entrada",
    "Definir valores predeterminados y reglas de validación",
    "Aplicar índices para optimizar búsquedas"
  ],
  descripcion: "Tamaño del campo, formato, máscara de entrada, valores predeterminados, validación, índices.",
  actividades: [
    "Configurar tamaño y formato de campos",
    "Aplicar máscaras de entrada",
    "Definir valores predeterminados y validaciones"
  ],
  secciones: [
    {
      id: 1,
      titulo: "¿Qué son las propiedades de los campos?",
      contenido: `
        <h3>¿Qué son las propiedades de los campos?</h3>
        <p>Las propiedades de los campos en Access permiten controlar cómo se almacenan, visualizan y validan los datos en una tabla. Configurar correctamente estas propiedades mejora la integridad y la usabilidad de la base de datos.</p>
      `
    },
    {
      id: 2,
      titulo: "Tamaño del campo",
      contenido: `
        <h3>Tamaño del campo</h3>
        <p>Define la cantidad máxima de caracteres o el rango de valores que puede almacenar un campo.</p>
        <p><strong>Ejemplo:</strong> Un campo 'Nombre' de tipo texto corto puede limitarse a 50 caracteres para evitar nombres excesivamente largos. Un campo 'Edad' de tipo numérico puede restringirse a valores enteros entre 0 y 120.</p>
      `
    },
    {
      id: 3,
      titulo: "Formato",
      contenido: `
        <h3>Formato</h3>
        <p>Permite especificar cómo se mostrarán los datos.</p>
        <p><strong>Ejemplo:</strong> Un campo de fecha puede tener el formato 'dd/mm/aaaa' para mostrar '14/10/2025', o 'mmmm aaaa' para mostrar 'octubre 2025'. Para números, puedes mostrar separadores de miles (1,000) o símbolos de moneda ($1,500.00).</p>
      `
    },
    {
      id: 4,
      titulo: "Máscara de entrada",
      contenido: `
        <h3>Máscara de entrada</h3>
        <p>Es una plantilla que guía al usuario sobre cómo debe ingresar los datos.</p>
        <p><strong>Ejemplo:</strong> Una máscara para un número de teléfono puede ser '(999) 000-0000', obligando a seguir ese patrón. Si el usuario ingresa '987654321', Access lo mostrará como '(987) 654-321'. Para un DNI peruano, la máscara podría ser '00000000'.</p>
        <ul>
          <li>0: Dígito obligatorio (0-9).</li>
          <li>9: Dígito opcional (0-9).</li>
          <li>#: Dígito, espacio, + o - opcional.</li>
          <li>L: Letra obligatoria (A-Z, sin números).</li>
          <li>?: Letra opcional.</li>
          <li>A: Carácter alfanumérico obligatorio (letra o número).</li>
          <li>a: Carácter alfanumérico opcional.</li>
          <li>&: Cualquier carácter o espacio obligatorio.</li>
          <li>C: Cualquier carácter o espacio opcional.</li>
          <li>. , : ; - / : Separadores literales.</li>
          <li>\: Para mostrar el carácter siguiente como literal (por ejemplo, \* muestra un asterisco).</li>
        </ul>
        <p>Esto permite personalizar la entrada según el tipo de dato que se espera en cada campo.</p>
      `
    },
    {
      id: 5,
      titulo: "Valor predeterminado",
      contenido: `
        <h3>Valor predeterminado</h3>
        <p>Es el valor que se asigna automáticamente a un campo cuando se crea un nuevo registro, a menos que el usuario lo cambie.</p>
        <p><strong>Ejemplo:</strong> En un campo 'País', puedes establecer 'Perú' como valor predeterminado, de modo que todos los nuevos registros tengan ese país salvo que se indique otro.</p>
      `
    },
    {
      id: 6,
      titulo: "Regla de validación",
      contenido: `
        <h3>Regla de validación</h3>
        <p>Permite definir condiciones que deben cumplir los datos ingresados.</p>
        <p><strong>Ejemplo:</strong> En un campo 'Edad', puedes establecer la regla '&gt;= 18' para aceptar solo mayores de edad. Si el usuario ingresa '15', Access mostrará un mensaje de error. También puedes usar la regla 'LIKE "[A-Z]*"' para aceptar solo letras mayúsculas en un campo de código.</p>
      `
    },
    {
      id: 7,
      titulo: "Índices",
      contenido: `
        <h3>Índices</h3>
        <p>Un índice acelera la búsqueda y el ordenamiento de los datos en una tabla.</p>
        <p><strong>Ejemplo:</strong> Si tienes una tabla 'Clientes' y consultas frecuentemente por el campo 'DNI', puedes indexar ese campo para que las búsquedas sean más rápidas. Sin embargo, no es recomendable indexar todos los campos porque puede afectar el rendimiento en tablas muy grandes.</p>
      `
    }
  ],
  recursos: [
    {
      tipo: "video",
      titulo: "Propiedades de campos en Access",
      url: "https://www.youtube.com/watch?v=8QwQnYpF2F6D"
    },
    {
      tipo: "pdf",
      titulo: "Configurar propiedades de campos",
      url: "https://support.microsoft.com/es-es/office/introducci%C3%B3n-a-las-propiedades-de-campo-en-access-20ee0b1c-7b8a-4c3a-8c6b-8b8b8b8b8b"
    }
  ]
};
