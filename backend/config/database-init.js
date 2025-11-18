// Script completo para inicializar y verificar la base de datos
const bcrypt = require('bcryptjs');

async function initializeDatabase() {
  try {
    console.log('🚀 Iniciando configuración completa de la base de datos...');
    
    // Importar configuración de base de datos
    const { connectDB } = require('../config/database-smart');
    const sequelizeInstance = await connectDB();
    
    // Ejecutar migraciones programáticamente (si no se indica SKIP_MIGRATIONS)
    if (process.env.SKIP_MIGRATIONS === 'true') {
      console.log('⚠️  SKIP_MIGRATIONS=true -> Se omiten migraciones automáticas');
    } else {
      try {
        const { Umzug, SequelizeStorage } = require('umzug');
        const umzug = new Umzug({
          migrations: { glob: 'migrations/*.js' },
          context: sequelizeInstance.getQueryInterface(),
          storage: new SequelizeStorage({ sequelize: sequelizeInstance }),
          logger: console
        });

        console.log('🔄 Ejecutando migraciones pendientes (umzug)...');
        await umzug.up();
        console.log('✅ Migraciones aplicadas');
      } catch (mErr) {
        console.warn('⚠️  No se ejecutaron migraciones automáticas:', mErr.message);
      }
    }

    // Importar modelos
    const defineUserModel = require('../models/user.model');
    const defineCursoModel = require('../models/curso.model');
    const defineLeccionModel = require('../models/leccion.model');
    const defineProgresoModel = require('../models/progreso.model');
    
    console.log('📦 Creando modelos...');
    
    // Crear los modelos
    const User = defineUserModel(sequelizeInstance);
    const Curso = defineCursoModel(sequelizeInstance);
    const Leccion = defineLeccionModel(sequelizeInstance);
    const ProgresoUsuario = defineProgresoModel(sequelizeInstance);

    // Intentar cargar y definir modelos docentes/evaluaciones si existen
    let Temario, Evaluacion, Plantilla, Asignacion, Intento, Pregunta;
    try {
      const defineTemarioModel = require('../models/temario.sql.model');
      const defineEvaluacionModel = require('../models/evaluacion.sql.model');
      const definePlantillaModel = require('../models/plantilla.sql.model');
      const defineAsignacionModel = require('../models/asignacion.sql.model');
      const defineIntentoModel = require('../models/intento.sql.model');
      const definePreguntaModel = require('../models/pregunta.sql.model');

      Temario = defineTemarioModel(sequelizeInstance);
      Evaluacion = defineEvaluacionModel(sequelizeInstance);
      Plantilla = definePlantillaModel(sequelizeInstance);
      Asignacion = defineAsignacionModel(sequelizeInstance);
      Intento = defineIntentoModel(sequelizeInstance);
      Pregunta = definePreguntaModel(sequelizeInstance);

      // Exponer modelos docentes globalmente para controladores y rutas
      global.Temario = Temario;
      global.Evaluacion = Evaluacion;
      global.Plantilla = Plantilla;
      global.Asignacion = Asignacion;
      global.Intento = Intento;
      global.Pregunta = Pregunta;

      console.log('✅ Modelos docentes cargados y registrados globalmente');
    } catch (e) {
      console.warn('⚠️  Modelos docentes no disponibles o no definidos. Se omiten:', e.message);
    }

    // Configurar asociaciones
    setupAssociations(User, Curso, Leccion, ProgresoUsuario);

    // Asociaciones adicionales para los modelos docentes si se cargaron
    if (Temario && Evaluacion && Plantilla && Asignacion && Intento && Pregunta) {
      // Temario -> User
      Temario.belongsTo(User, { foreignKey: 'autor_id', as: 'autor' });
      User.hasMany(Temario, { foreignKey: 'autor_id', as: 'temarios' });

      // Evaluacion -> User
      Evaluacion.belongsTo(User, { foreignKey: 'autor_id', as: 'autor' });
      User.hasMany(Evaluacion, { foreignKey: 'autor_id', as: 'evaluaciones' });

      // Evaluacion -> Plantilla
      Evaluacion.belongsTo(Plantilla, { foreignKey: 'plantilla_id', as: 'plantilla' });
      Plantilla.hasMany(Evaluacion, { foreignKey: 'plantilla_id', as: 'evaluaciones' });

      // Asignacion -> Evaluacion
      Asignacion.belongsTo(Evaluacion, { foreignKey: 'evaluacion_id', as: 'evaluacion' });
      Evaluacion.hasMany(Asignacion, { foreignKey: 'evaluacion_id', as: 'asignaciones' });

      // Intento -> Evaluacion, Intento -> User
      Intento.belongsTo(Evaluacion, { foreignKey: 'evaluacion_id', as: 'evaluacion' });
      Evaluacion.hasMany(Intento, { foreignKey: 'evaluacion_id', as: 'intentos' });
      Intento.belongsTo(User, { foreignKey: 'alumno_id', as: 'alumno' });
      User.hasMany(Intento, { foreignKey: 'alumno_id', as: 'intentos' });

      // Pregunta -> Evaluacion
      Pregunta.belongsTo(Evaluacion, { foreignKey: 'evaluacion_id', as: 'evaluacion' });
      Evaluacion.hasMany(Pregunta, { foreignKey: 'evaluacion_id', as: 'pregunta_items' });

      console.log('✅ Asociaciones docentes configuradas');
    }

    // Sincronizar tablas (crear si no existen) sólo para modelos no gestionados por migraciones
    console.log('🔄 Sincronizando tablas...');
    await sequelizeInstance.sync({ force: false, alter: false });
    console.log('✅ Tablas sincronizadas correctamente');

    // Verificar si ya existen usuarios
    const userCount = await User.count();
    console.log(`👥 Usuarios existentes: ${userCount}`);

    if (userCount === 0) {
      if (process.env.SKIP_SEEDS === 'true') {
        console.log('⚠️  SKIP_SEEDS=true -> Se omiten la creación automática de datos iniciales (usuarios/cursos)');
      } else {
        console.log('🆕 Creando usuarios iniciales...');
        await createInitialData(User, Curso, Leccion);
      }
    } else {
      console.log('✅ Base de datos ya contiene datos');
    }

    // Verificar integridad de la base de datos
    await verifyDatabaseIntegrity(User, Curso, Leccion, ProgresoUsuario);
    
    console.log('🎉 Base de datos inicializada correctamente');
    return { User, Curso, Leccion, ProgresoUsuario, Temario, Evaluacion, Plantilla, Asignacion, Intento, Pregunta, sequelize: sequelizeInstance };
    
  } catch (error) {
    console.error('❌ Error inicializando base de datos:', error);
    throw error;
  }
}

function setupAssociations(User, Curso, Leccion, ProgresoUsuario) {
  console.log('🔗 Configurando asociaciones...');
  
  // Usuario -> Cursos (Un instructor puede tener muchos cursos)
  User.hasMany(Curso, {
    foreignKey: 'instructor_id',
    as: 'cursosImpartidos'
  });

  Curso.belongsTo(User, {
    foreignKey: 'instructor_id',
    as: 'instructor'
  });

  // Curso -> Lecciones (Un curso puede tener muchas lecciones)
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

  console.log('✅ Asociaciones configuradas');
}

async function createInitialData(User, Curso, Leccion) {
  console.log('🌱 Creando datos iniciales...');
  
  try {
    // Crear usuarios iniciales
    const hashedPassword = await bcrypt.hash('123456', 10);
    
    const admin = await User.create({
      nombre: 'Administrador del Sistema',
      email: 'admin@infoaprende.com',
      password: hashedPassword,
      grado: null,
      rol: 'administrador'
    });
    
    const profesor = await User.create({
      nombre: 'Profesor Demo',
      email: 'profesor@infoaprende.com',
      password: hashedPassword,
      grado: null,
      rol: 'docente'
    });
    
    const estudiante = await User.create({
      nombre: 'Estudiante Demo',
      email: 'estudiante@infoaprende.com',
      password: hashedPassword,
      grado: '5to Grado',
      rol: 'estudiante'
    });
    
    console.log('👥 Usuarios creados:');
    console.log(`   - Admin: ${admin.email}`);
    console.log(`   - Profesor: ${profesor.email}`);
    console.log(`   - Estudiante: ${estudiante.email}`);
    
    // Crear cursos iniciales
    const cursoIntro = await Curso.create({
      titulo: 'Introducción a la Informática',
      descripcion: 'Curso básico de introducción a la informática para estudiantes de primaria',
      instructor_id: profesor.id,
      grado: '5to Grado',
      activo: true
    });
    
    const cursoWindows = await Curso.create({
      titulo: 'Windows Básico',
      descripcion: 'Aprende los conceptos básicos del sistema operativo Windows',
      instructor_id: profesor.id,
      grado: '5to Grado',
      activo: true
    });
    
    console.log('📚 Cursos creados:');
    console.log(`   - ${cursoIntro.titulo}`);
    console.log(`   - ${cursoWindows.titulo}`);
    
    // Crear lecciones para el curso de Introducción
    const lecciones = await Leccion.bulkCreate([
      {
        curso_id: cursoIntro.id,
        titulo: '¿Qué es una computadora?',
        contenido: 'Una computadora es una máquina que puede procesar información...',
        tipo: 'texto',
        orden: 1,
        duracion_estimada: 15
      },
      {
        curso_id: cursoIntro.id,
        titulo: 'Partes de la computadora',
        contenido: 'Las principales partes de una computadora son: monitor, teclado, mouse...',
        tipo: 'texto',
        orden: 2,
        duracion_estimada: 20
      },
      {
        curso_id: cursoIntro.id,
        titulo: 'Ejercicio: Identifica las partes',
        contenido: 'Identifica las diferentes partes de la computadora en la imagen',
        tipo: 'ejercicio',
        orden: 3,
        duracion_estimada: 10
      }
    ]);
    
    console.log(`📖 ${lecciones.length} lecciones creadas para el curso de Introducción`);
    
    console.log('✅ Datos iniciales creados correctamente');
    
  } catch (error) {
    console.error('❌ Error creando datos iniciales:', error);
    throw error;
  }
}

async function verifyDatabaseIntegrity(User, Curso, Leccion, ProgresoUsuario) {
  console.log('🔍 Verificando integridad de la base de datos...');
  
  try {
    // Verificar conteos
    const userCount = await User.count();
    const cursoCount = await Curso.count();
    const leccionCount = await Leccion.count();
    const progresoCount = await ProgresoUsuario.count();
    
    console.log('📊 Estadísticas de la base de datos:');
    console.log(`   - Usuarios: ${userCount}`);
    console.log(`   - Cursos: ${cursoCount}`);
    console.log(`   - Lecciones: ${leccionCount}`);
    console.log(`   - Registros de progreso: ${progresoCount}`);
    
    // Verificar que hay al menos un administrador
    const adminCount = await User.count({ where: { rol: 'administrador' } });
    if (adminCount === 0) {
      console.warn('⚠️  No hay usuarios administradores en el sistema');
    } else {
      console.log(`✅ Administradores encontrados: ${adminCount}`);
    }
    
    // Verificar relaciones
    if (cursoCount > 0) {
      const cursoConInstructor = await Curso.findOne({
        include: [{
          model: User,
          as: 'instructor'
        }]
      });
      
      if (cursoConInstructor && cursoConInstructor.instructor) {
        console.log('✅ Relaciones Usuario-Curso funcionando');
      }
    }
    
    if (leccionCount > 0) {
      const leccionConCurso = await Leccion.findOne({
        include: [{
          model: Curso,
          as: 'curso'
        }]
      });
      
      if (leccionConCurso && leccionConCurso.curso) {
        console.log('✅ Relaciones Curso-Lección funcionando');
      }
    }
    
    console.log('✅ Verificación de integridad completada');
    
  } catch (error) {
    console.error('❌ Error verificando integridad:', error);
    throw error;
  }
}

// Función para crear un usuario administrador si no existe
async function createAdminUser(email = 'admin@infoaprende.com', password = 'admin123') {
  try {
    const { User } = global;
    if (!User) {
      console.error('❌ Modelo User no está disponible');
      return;
    }
    
    // Verificar si ya existe
    const existingAdmin = await User.findOne({ 
      where: { 
        email: email,
        rol: 'administrador' 
      } 
    });
    
    if (existingAdmin) {
      console.log('✅ Usuario administrador ya existe:', email);
      return existingAdmin;
    }
    
    // Crear nuevo administrador
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await User.create({
      nombre: 'Administrador',
      email: email,
      password: hashedPassword,
      rol: 'administrador'
    });
    
    console.log('✅ Usuario administrador creado:', email);
    console.log('🔑 Contraseña:', password);
    return admin;
    
  } catch (error) {
    console.error('❌ Error creando usuario administrador:', error);
    throw error;
  }
}

module.exports = {
  initializeDatabase,
  createAdminUser,
  setupAssociations,
  verifyDatabaseIntegrity
};
