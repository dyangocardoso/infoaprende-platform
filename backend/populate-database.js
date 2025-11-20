// Script para poblar la base de datos con datos de ejemplo
require('dotenv').config();

async function populateDatabase() {
  try {
    console.log('🌱 Poblando base de datos con datos de ejemplo...\n');
    
    // Importar el inicializador
    const { initializeDatabase } = require('./config/database-init');
    
    // Inicializar base de datos
    const { User, Curso, Leccion, ProgresoUsuario, sequelize } = await initializeDatabase();
    
    // Verificar si ya hay cursos
    const cursoCount = await Curso.count();
    if (cursoCount > 0) {
      console.log('✅ La base de datos ya tiene cursos. No es necesario poblarla.');
      await sequelize.close();
      return;
    }
    
    console.log('📚 Creando cursos de ejemplo...\n');
    
    // Buscar un profesor para asignar los cursos
    let profesor = await User.findOne({ where: { rol: 'docente' } });
    
    if (!profesor) {
      // Crear un profesor si no existe
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash('profesor123', 10);
      
      profesor = await User.create({
        nombre: 'Profesor InfoAprende',
        email: 'profesor@infoaprende.com',
        password: hashedPassword,
        rol: 'docente'
      });
      console.log('👨‍🏫 Profesor creado:', profesor.email);
    }
    
    // Crear cursos
    const cursos = await Curso.bulkCreate([
      {
        titulo: 'Introducción a la Informática',
        descripcion: 'Curso básico de introducción a la informática para estudiantes de primaria. Aprende los conceptos fundamentales sobre computadoras y tecnología.',
        instructor_id: profesor.id,
        grado: '4to Grado',
        activo: true
      },
      {
        titulo: 'Windows Básico',
        descripcion: 'Aprende los conceptos básicos del sistema operativo Windows, navegación de archivos y uso de programas básicos.',
        instructor_id: profesor.id,
        grado: '5to Grado',
        activo: true
      },
      {
        titulo: 'Microsoft Word para Principiantes',
        descripcion: 'Aprende a usar Microsoft Word para crear documentos, formato de texto y funciones básicas.',
        instructor_id: profesor.id,
        grado: '5to Grado',
        activo: true
      },
      {
        titulo: 'Paint y Creatividad Digital',
        descripcion: 'Desarrolla tu creatividad usando Paint para crear dibujos digitales y arte básico.',
        instructor_id: profesor.id,
        grado: '4to Grado',
        activo: true
      }
    ]);
    
    console.log(`✅ ${cursos.length} cursos creados`);
    
    // Crear lecciones para cada curso
    console.log('\n📖 Creando lecciones...\n');
    
    // Lecciones para Introducción a la Informática
    const leccionesIntro = await Leccion.bulkCreate([
      {
        curso_id: cursos[0].id,
        titulo: '¿Qué es una computadora?',
        contenido: `
          <h2>¿Qué es una computadora?</h2>
          <p>Una computadora es una máquina electrónica que puede procesar información de manera muy rápida.</p>
          
          <h3>Partes principales:</h3>
          <ul>
            <li><strong>Monitor:</strong> La pantalla donde vemos las imágenes</li>
            <li><strong>Teclado:</strong> Para escribir letras y números</li>
            <li><strong>Mouse:</strong> Para señalar y hacer clic</li>
            <li><strong>CPU:</strong> El "cerebro" de la computadora</li>
          </ul>
          
          <p>¡Las computadoras nos ayudan a aprender, jugar y trabajar!</p>
        `,
        tipo: 'texto',
        orden: 1,
        duracion_estimada: 15
      },
      {
        curso_id: cursos[0].id,
        titulo: 'Encender y apagar la computadora',
        contenido: `
          <h2>Cómo encender y apagar la computadora</h2>
          
          <h3>Para encender:</h3>
          <ol>
            <li>Busca el botón de encendido (generalmente redondo con un símbolo)</li>
            <li>Presiona el botón una vez</li>
            <li>Espera a que aparezca la pantalla de inicio</li>
          </ol>
          
          <h3>Para apagar:</h3>
          <ol>
            <li>Haz clic en el botón de Inicio</li>
            <li>Selecciona "Apagar"</li>
            <li>Espera a que la computadora se apague completamente</li>
          </ol>
          
          <p><strong>¡Importante!</strong> Nunca apagues la computadora desconectándola directamente.</p>
        `,
        tipo: 'texto',
        orden: 2,
        duracion_estimada: 10
      },
      {
        curso_id: cursos[0].id,
        titulo: 'El escritorio de Windows',
        contenido: `
          <h2>El escritorio de Windows</h2>
          <p>El escritorio es lo primero que vemos al encender la computadora.</p>
          
          <h3>Elementos del escritorio:</h3>
          <ul>
            <li><strong>Iconos:</strong> Pequeñas imágenes que representan programas</li>
            <li><strong>Barra de tareas:</strong> La barra en la parte inferior</li>
            <li><strong>Botón de Inicio:</strong> Para abrir programas</li>
            <li><strong>Papelera de reciclaje:</strong> Donde van los archivos eliminados</li>
          </ul>
        `,
        tipo: 'texto',
        orden: 3,
        duracion_estimada: 12
      }
    ]);
    
    // Lecciones para Windows Básico
    const leccionesWindows = await Leccion.bulkCreate([
      {
        curso_id: cursos[1].id,
        titulo: 'Navegando por Windows',
        contenido: `
          <h2>Navegando por Windows</h2>
          <p>Aprende a moverte por el sistema operativo Windows de manera eficiente.</p>
          
          <h3>Conceptos básicos:</h3>
          <ul>
            <li>Ventanas: Cada programa se abre en una ventana</li>
            <li>Carpetas: Contenedores para organizar archivos</li>
            <li>Archivos: Documentos, imágenes, música, etc.</li>
          </ul>
        `,
        tipo: 'texto',
        orden: 1,
        duracion_estimada: 20
      },
      {
        curso_id: cursos[1].id,
        titulo: 'Explorador de archivos',
        contenido: `
          <h2>El Explorador de archivos</h2>
          <p>Es la herramienta principal para ver y organizar tus archivos.</p>
          
          <h3>Cómo abrir el explorador:</h3>
          <ol>
            <li>Haz clic en el ícono de carpeta en la barra de tareas</li>
            <li>O presiona las teclas Windows + E</li>
          </ol>
          
          <h3>Partes del explorador:</h3>
          <ul>
            <li>Panel izquierdo: Carpetas principales</li>
            <li>Panel derecho: Contenido de la carpeta seleccionada</li>
          </ul>
        `,
        tipo: 'texto',
        orden: 2,
        duracion_estimada: 15
      }
    ]);
    
    // Lecciones para Word
    const leccionesWord = await Leccion.bulkCreate([
      {
        curso_id: cursos[2].id,
        titulo: 'Introducción a Microsoft Word',
        contenido: `
          <h2>¡Bienvenido a Microsoft Word!</h2>
          <p>Word es un procesador de texto que te permite escribir documentos, cartas, reportes y mucho más.</p>
          
          <h3>¿Para qué se usa Word?</h3>
          <ul>
            <li>Escribir cartas y documentos</li>
            <li>Hacer tareas escolares</li>
            <li>Crear invitaciones</li>
            <li>Escribir historias</li>
          </ul>
        `,
        tipo: 'texto',
        orden: 1,
        duracion_estimada: 10
      },
      {
        curso_id: cursos[2].id,
        titulo: 'Escribiendo mi primer documento',
        contenido: `
          <h2>Creando tu primer documento</h2>
          
          <h3>Pasos para empezar:</h3>
          <ol>
            <li>Abre Microsoft Word</li>
            <li>Verás una página en blanco</li>
            <li>Empieza a escribir tu texto</li>
            <li>Para guardar: Ctrl + S</li>
          </ol>
          
          <h3>Ejercicio práctico:</h3>
          <p>Escribe una carta a tu mejor amigo contándole sobre tu día.</p>
        `,
        tipo: 'ejercicio',
        orden: 2,
        duracion_estimada: 20
      }
    ]);
    
    // Lecciones para Paint
    const leccionesPaint = await Leccion.bulkCreate([
      {
        curso_id: cursos[3].id,
        titulo: 'Conociendo Paint',
        contenido: `
          <h2>¡Bienvenido a Paint!</h2>
          <p>Paint es un programa para dibujar y crear arte digital de manera fácil y divertida.</p>
          
          <h3>Herramientas básicas:</h3>
          <ul>
            <li><strong>Pincel:</strong> Para dibujar líneas</li>
            <li><strong>Lápiz:</strong> Para líneas más finas</li>
            <li><strong>Borrador:</strong> Para borrar</li>
            <li><strong>Balde de pintura:</strong> Para rellenar colores</li>
          </ul>
        `,
        tipo: 'texto',
        orden: 1,
        duracion_estimada: 15
      },
      {
        curso_id: cursos[3].id,
        titulo: 'Mi primer dibujo',
        contenido: `
          <h2>Creando tu primer dibujo</h2>
          
          <h3>Ejercicio: Dibuja una casa</h3>
          <ol>
            <li>Abre Paint</li>
            <li>Usa la herramienta rectángulo para el cuerpo de la casa</li>
            <li>Usa la herramienta línea para el techo</li>
            <li>Agrega una puerta y ventanas</li>
            <li>¡Colorea tu dibujo!</li>
          </ol>
          
          <p>¡Sé creativo y diviértete!</p>
        `,
        tipo: 'ejercicio',
        orden: 2,
        duracion_estimada: 25
      }
    ]);
    
    console.log(`✅ Lecciones creadas:`);
    console.log(`   - Introducción a la Informática: ${leccionesIntro.length} lecciones`);
    console.log(`   - Windows Básico: ${leccionesWindows.length} lecciones`);
    console.log(`   - Microsoft Word: ${leccionesWord.length} lecciones`);
    console.log(`   - Paint y Creatividad: ${leccionesPaint.length} lecciones`);
    
    // Crear un estudiante de ejemplo y algo de progreso
    console.log('\n👨‍🎓 Creando progreso de ejemplo...');
    
    let estudiante = await User.findOne({ where: { rol: 'estudiante' } });
    
    if (estudiante) {
      // Crear progreso para algunas lecciones
      await ProgresoUsuario.bulkCreate([
        {
          usuario_id: estudiante.id,
          curso_id: cursos[0].id,
          leccion_id: leccionesIntro[0].id,
          completado: true,
          fecha_completado: new Date(),
          tiempo_dedicado: 15,
          puntuacion: 85
        },
        {
          usuario_id: estudiante.id,
          curso_id: cursos[0].id,
          leccion_id: leccionesIntro[1].id,
          completado: true,
          fecha_completado: new Date(),
          tiempo_dedicado: 12,
          puntuacion: 92
        },
        {
          usuario_id: estudiante.id,
          curso_id: cursos[0].id,
          leccion_id: leccionesIntro[2].id,
          completado: false,
          tiempo_dedicado: 5,
          puntuacion: 0
        }
      ]);
      
      console.log('✅ Progreso de ejemplo creado');
    }
    
    console.log('\n🎉 ¡Base de datos poblada exitosamente!');
    console.log('📊 Resumen:');
    console.log(`   - ${cursos.length} cursos creados`);
    console.log(`   - ${leccionesIntro.length + leccionesWindows.length + leccionesWord.length + leccionesPaint.length} lecciones totales`);
    console.log(`   - Datos de progreso de ejemplo incluidos`);
    
    await sequelize.close();
    
  } catch (error) {
    console.error('❌ Error poblando la base de datos:', error);
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  populateDatabase();
}

module.exports = { populateDatabase };
