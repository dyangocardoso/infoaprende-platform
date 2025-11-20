// Script para limpiar y recrear la base de datos
require('dotenv').config();

async function cleanAndRecreateDatabase() {
  try {
    console.log('🧹 Limpiando y recreando la base de datos...\n');
    
    // Importar configuración
    const { connectDB } = require('./config/database-smart');
    const sequelizeInstance = await connectDB();
    
    console.log('🗑️  Eliminando todas las tablas...');
    
    // Eliminar todas las tablas en el orden correcto (respetando foreign keys)
    await sequelizeInstance.getQueryInterface().dropTable('progreso_usuarios', { cascade: true });
    await sequelizeInstance.getQueryInterface().dropTable('lecciones', { cascade: true });
    await sequelizeInstance.getQueryInterface().dropTable('cursos', { cascade: true });
    await sequelizeInstance.getQueryInterface().dropTable('usuarios', { cascade: true });
    
    console.log('✅ Tablas eliminadas');
    
    // Importar modelos
    const defineUserModel = require('./models/user.model');
    const defineCursoModel = require('./models/curso.model');
    const defineLeccionModel = require('./models/leccion.model');
    const defineProgresoModel = require('./models/progreso.model');
    
    console.log('📦 Recreando modelos...');
    
    // Crear los modelos
    const User = defineUserModel(sequelizeInstance);
    const Curso = defineCursoModel(sequelizeInstance);
    const Leccion = defineLeccionModel(sequelizeInstance);
    const ProgresoUsuario = defineProgresoModel(sequelizeInstance);
    
    // Configurar asociaciones
    setupAssociations(User, Curso, Leccion, ProgresoUsuario);
    
    // Crear tablas frescas
    console.log('🔄 Creando tablas nuevas...');
    await sequelizeInstance.sync({ force: true });
    console.log('✅ Tablas creadas correctamente');
    
    // Crear usuarios iniciales
    console.log('👥 Creando usuarios iniciales...');
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash('123456', 10);
    
    const usuarios = await User.bulkCreate([
      {
        nombre: 'Administrador del Sistema',
        email: 'admin@infoaprende.com',
        password: hashedPassword,
        rol: 'administrador'
      },
      {
        nombre: 'Profesor InfoAprende',
        email: 'profesor@infoaprende.com',
        password: hashedPassword,
        rol: 'docente'
      },
      {
        nombre: 'María García',
        email: 'maria@estudiante.com',
        password: hashedPassword,
        grado: '4to Grado',
        rol: 'estudiante'
      },
      {
        nombre: 'Carlos López',
        email: 'carlos@estudiante.com',
        password: hashedPassword,
        grado: '5to Grado',
        rol: 'estudiante'
      },
      {
        nombre: 'Ana Martínez',
        email: 'ana@estudiante.com',
        password: hashedPassword,
        grado: '5to Grado',
        rol: 'estudiante'
      }
    ]);
    
    console.log(`✅ ${usuarios.length} usuarios creados`);
    
    // Crear cursos
    console.log('📚 Creando cursos...');
    const profesor = usuarios.find(u => u.rol === 'docente');
    
    const cursos = await Curso.bulkCreate([
      {
        titulo: 'Introducción a la Informática',
        descripcion: 'Curso básico de introducción a la informática para estudiantes de primaria.',
        instructor_id: profesor.id,
        grado: '4to Grado',
        activo: true
      },
      {
        titulo: 'Windows Básico',
        descripcion: 'Aprende los conceptos básicos del sistema operativo Windows.',
        instructor_id: profesor.id,
        grado: '5to Grado',
        activo: true
      },
      {
        titulo: 'Microsoft Word para Principiantes',
        descripcion: 'Aprende a usar Microsoft Word para crear documentos.',
        instructor_id: profesor.id,
        grado: '5to Grado',
        activo: true
      },
      {
        titulo: 'Paint y Creatividad Digital',
        descripcion: 'Desarrolla tu creatividad usando Paint.',
        instructor_id: profesor.id,
        grado: '4to Grado',
        activo: true
      }
    ]);
    
    console.log(`✅ ${cursos.length} cursos creados`);
    
    // Crear lecciones
    console.log('📖 Creando lecciones...');
    
    const lecciones = [];
    
    // Lecciones para Introducción a la Informática
    lecciones.push(...await Leccion.bulkCreate([
      {
        curso_id: cursos[0].id,
        titulo: '¿Qué es una computadora?',
        contenido: '<h2>¿Qué es una computadora?</h2><p>Una computadora es una máquina electrónica que puede procesar información de manera muy rápida.</p>',
        tipo: 'texto',
        orden: 1,
        duracion_estimada: 15
      },
      {
        curso_id: cursos[0].id,
        titulo: 'Partes de la computadora',
        contenido: '<h2>Partes de la computadora</h2><p>Las principales partes son: monitor, teclado, mouse y CPU.</p>',
        tipo: 'texto',
        orden: 2,
        duracion_estimada: 20
      },
      {
        curso_id: cursos[0].id,
        titulo: 'Ejercicio: Identifica las partes',
        contenido: '<h2>Ejercicio</h2><p>Identifica las diferentes partes de la computadora.</p>',
        tipo: 'ejercicio',
        orden: 3,
        duracion_estimada: 10
      }
    ]));
    
    // Lecciones para Windows
    lecciones.push(...await Leccion.bulkCreate([
      {
        curso_id: cursos[1].id,
        titulo: 'El escritorio de Windows',
        contenido: '<h2>El escritorio de Windows</h2><p>El escritorio es lo primero que vemos al encender la computadora.</p>',
        tipo: 'texto',
        orden: 1,
        duracion_estimada: 15
      },
      {
        curso_id: cursos[1].id,
        titulo: 'Navegando por archivos',
        contenido: '<h2>Navegando por archivos</h2><p>Aprende a usar el explorador de archivos.</p>',
        tipo: 'texto',
        orden: 2,
        duracion_estimada: 20
      }
    ]));
    
    // Lecciones para Word
    lecciones.push(...await Leccion.bulkCreate([
      {
        curso_id: cursos[2].id,
        titulo: 'Introducción a Word',
        contenido: '<h2>Introducción a Microsoft Word</h2><p>Word es un procesador de texto.</p>',
        tipo: 'texto',
        orden: 1,
        duracion_estimada: 15
      },
      {
        curso_id: cursos[2].id,
        titulo: 'Mi primer documento',
        contenido: '<h2>Creando tu primer documento</h2><p>Aprende a escribir y guardar documentos.</p>',
        tipo: 'ejercicio',
        orden: 2,
        duracion_estimada: 25
      }
    ]));
    
    // Lecciones para Paint
    lecciones.push(...await Leccion.bulkCreate([
      {
        curso_id: cursos[3].id,
        titulo: 'Conociendo Paint',
        contenido: '<h2>Conociendo Paint</h2><p>Paint es un programa para dibujar.</p>',
        tipo: 'texto',
        orden: 1,
        duracion_estimada: 15
      },
      {
        curso_id: cursos[3].id,
        titulo: 'Mi primer dibujo',
        contenido: '<h2>Mi primer dibujo</h2><p>Dibuja una casa usando las herramientas de Paint.</p>',
        tipo: 'ejercicio',
        orden: 2,
        duracion_estimada: 30
      }
    ]));
    
    console.log(`✅ ${lecciones.length} lecciones creadas`);
    
    // Crear algo de progreso
    console.log('📈 Creando progreso de ejemplo...');
    const estudiante = usuarios.find(u => u.rol === 'estudiante');
    
    if (estudiante) {
      await ProgresoUsuario.bulkCreate([
        {
          usuario_id: estudiante.id,
          curso_id: cursos[0].id,
          leccion_id: lecciones[0].id,
          completado: true,
          fecha_completado: new Date(),
          tiempo_dedicado: 15,
          puntuacion: 85
        },
        {
          usuario_id: estudiante.id,
          curso_id: cursos[0].id,
          leccion_id: lecciones[1].id,
          completado: true,
          fecha_completado: new Date(),
          tiempo_dedicado: 20,
          puntuacion: 92
        }
      ]);
      console.log('✅ Progreso de ejemplo creado');
    }
    
    console.log('\n🎉 Base de datos recreada exitosamente!');
    console.log('📊 Resumen final:');
    console.log(`   - ${usuarios.length} usuarios`);
    console.log(`   - ${cursos.length} cursos`);
    console.log(`   - ${lecciones.length} lecciones`);
    console.log(`   - Datos de progreso incluidos`);
    
    console.log('\n🔑 Credenciales de acceso:');
    console.log('   - Administrador: admin@infoaprende.com / 123456');
    console.log('   - Profesor: profesor@infoaprende.com / 123456');
    console.log('   - Estudiante: maria@estudiante.com / 123456');
    
    await sequelizeInstance.close();
    
  } catch (error) {
    console.error('❌ Error recreando la base de datos:', error);
    process.exit(1);
  }
}

function setupAssociations(User, Curso, Leccion, ProgresoUsuario) {
  // Usuario -> Cursos
  User.hasMany(Curso, {
    foreignKey: 'instructor_id',
    as: 'cursosImpartidos'
  });

  Curso.belongsTo(User, {
    foreignKey: 'instructor_id',
    as: 'instructor'
  });

  // Curso -> Lecciones
  Curso.hasMany(Leccion, {
    foreignKey: 'curso_id',
    as: 'lecciones'
  });

  Leccion.belongsTo(Curso, {
    foreignKey: 'curso_id',
    as: 'curso'
  });

  // Usuario -> Progreso
  User.hasMany(ProgresoUsuario, {
    foreignKey: 'usuario_id',
    as: 'progresos'
  });

  ProgresoUsuario.belongsTo(User, {
    foreignKey: 'usuario_id',
    as: 'usuario'
  });

  // Curso -> Progreso
  Curso.hasMany(ProgresoUsuario, {
    foreignKey: 'curso_id',
    as: 'progresos'
  });

  ProgresoUsuario.belongsTo(Curso, {
    foreignKey: 'curso_id',
    as: 'curso'
  });

  // Leccion -> Progreso
  Leccion.hasMany(ProgresoUsuario, {
    foreignKey: 'leccion_id',
    as: 'progresos'
  });

  ProgresoUsuario.belongsTo(Leccion, {
    foreignKey: 'leccion_id',
    as: 'leccion'
  });
}

// Ejecutar si se llama directamente
if (require.main === module) {
  cleanAndRecreateDatabase();
}

module.exports = { cleanAndRecreateDatabase };
