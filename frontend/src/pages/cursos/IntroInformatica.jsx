import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgreso } from '../../hooks/useProgreso';
import './CursoBase.css';

export default function IntroInformatica() {
  const [selectedTema, setSelectedTema] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const navigate = useNavigate();
  const { getProgresoCurso, isTemaCompletado, isLeccionCompletada } = useProgreso();

  // Función para mostrar notificaciones
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const unidadData = {
    titulo: "Introducción a la Informática",
    icono: "fas fa-laptop-code",
    descripcion: "Descubre los fundamentos de la informática, desde su evolución histórica hasta los conceptos actuales de hardware y software",
    temas: [
      {
        id: 1,
        titulo: "Evolución histórica",
        tematica: "Hitos de la era digital",
        contenido: "Conoce los principales hitos en la evolución de la tecnología informática desde sus inicios hasta la era digital actual, incluyendo los pioneros que marcaron el desarrollo de la computación moderna.",
        actividades: [
          "Descubrir los primeros dispositivos de cálculo como el ábaco",
          "Conocer la pascalina de Blaise Pascal y la máquina de Leibniz",
          "Explorar la máquina analítica de Charles Babbage",
          "Aprender sobre Ada Lovelace, la primera programadora",
          "Entender los trabajos de Alan Turing y John von Neumann",
          "Conocer las primeras computadoras como ENIAC y UNIVAC",
          "Descubrir la revolución del microprocesador Intel 4004"
        ]
      },
      {
        id: 2,
        titulo: "Fundamentos y conceptos",
        tematica: "Informática, sistemas, computación, datos e información",
        contenido: "Comprende los conceptos fundamentales de la informática, la diferencia entre datos e información, y los elementos básicos de los sistemas computacionales que forman la base de la tecnología moderna.",
        actividades: [
          "Definir qué es la informática como ciencia",
          "Entender los componentes de un sistema de información",
          "Diferenciar entre datos e información",
          "Conocer el ciclo básico: Entrada → Procesamiento → Salida",
          "Identificar hardware, software, datos, personas y procedimientos",
          "Comprender el tratamiento automático de la información",
          "Reconocer la importancia de los algoritmos"
        ]
      },
      {
        id: 3,
        titulo: "Unidades de medida y almacenamiento",
        tematica: "Conversión y aplicación práctica",
        contenido: "Aprende las unidades de medida digital, desde bits hasta terabytes, y cómo aplicar las conversiones en situaciones prácticas del mundo real de la informática.",
        actividades: [
          "Entender el sistema binario y el concepto de bit",
          "Comprender que 8 bits forman 1 byte",
          "Aprender los múltiplos: KB, MB, GB, TB",
          "Realizar conversiones entre diferentes unidades",
          "Calcular el espacio que ocupan diferentes tipos de archivos",
          "Aplicar el conocimiento en dispositivos de almacenamiento",
          "Resolver problemas prácticos de capacidad"
        ]
      },
      {
        id: 4,
        titulo: "Hardware",
        tematica: "Clasificación por función: entrada, salida, procesamiento, almacenamiento, mixtos",
        contenido: "Identifica y clasifica los componentes físicos del computador según su función dentro del sistema, comprendiendo cómo cada tipo de dispositivo contribuye al funcionamiento integral.",
        actividades: [
          "Identificar dispositivos de entrada: teclado, ratón, micrófono",
          "Reconocer dispositivos de salida: monitor, impresora, altavoces",
          "Comprender dispositivos de procesamiento: CPU, GPU",
          "Clasificar dispositivos de almacenamiento: primario, secundario",
          "Explorar dispositivos mixtos: pantalla táctil, módem",
          "Entender la función específica de cada tipo",
          "Analizar la interacción entre todos los componentes"
        ]
      },
      {
        id: 5,
        titulo: "Software",
        tematica: "Clasificación, distribución y licencias",
        contenido: "Comprende los diferentes tipos de software, sus métodos de distribución y los tipos de licencias existentes, desde software propietario hasta software libre y open source.",
        actividades: [
          "Definir qué es el software y sus componentes",
          "Clasificar software de sistema: SO, controladores, utilidades",
          "Conocer software de aplicación: ofimática, multimedia, juegos",
          "Explorar software de programación: editores, compiladores, IDEs",
          "Entender las licencias propietarias y comerciales",
          "Conocer el software libre y sus libertades",
          "Diferenciar entre freeware, shareware y open source"
        ]
      },
      {
        id: 6,
        titulo: "Placa base y dispositivos de procesamiento",
        tematica: "Arquitectura y funciones",
        contenido: "Explora la arquitectura de la placa base y comprende el funcionamiento de los dispositivos de procesamiento, incluyendo CPU, memoria RAM y la arquitectura de von Neumann.",
        actividades: [
          "Conocer los componentes de la placa base (motherboard)",
          "Entender la arquitectura y funciones del CPU",
          "Comprender los tipos y características de la memoria RAM",
          "Explorar el chipset y sistema de buses",
          "Estudiar la arquitectura de von Neumann",
          "Identificar sockets, slots y conectores",
          "Analizar la comunicación entre componentes"
        ]
      },
      {
        id: 7,
        titulo: "Memoria y almacenamiento",
        tematica: "Tipos y tecnologías",
        contenido: "Distingue entre los diferentes tipos de memoria y tecnologías de almacenamiento disponibles, desde la jerarquía de memoria hasta las tecnologías más modernas como SSD y almacenamiento en la nube.",
        actividades: [
          "Comprender la jerarquía de memoria",
          "Caracterizar la memoria principal (RAM)",
          "Conocer el almacenamiento magnético (HDD)",
          "Explorar el almacenamiento sólido (SSD)",
          "Entender el almacenamiento óptico: CD, DVD, Blu-ray",
          "Conocer medios portátiles: USB, tarjetas SD",
          "Comparar velocidades, capacidades y tecnologías"
        ]
      }
    ]
  };

  const handleTemaClick = (tema) => {
    setSelectedTema(selectedTema?.id === tema.id ? null : tema);
  };

  const handleComenzarCursoCompleto = () => {
    console.log('🚀 INICIANDO handleComenzarCursoCompleto');
    
    try {
      const progreso = getProgresoCurso('intro-informatica');
      console.log('📊 Progreso obtenido:', progreso);
      
      // Validar que tenemos temas disponibles
      if (!unidadData.temas || unidadData.temas.length === 0) {
        console.error('❌ Error: No hay temas disponibles');
        showNotification('Error: No hay temas disponibles en este curso', 'error');
        return;
      }
      console.log('✅ Temas disponibles:', unidadData.temas.length);
      
      // Encontrar el primer tema no completado o el primer tema si todo está completado
      let siguienteTema = null;
      console.log('🔍 Buscando siguiente tema...');
      
      for (let tema of unidadData.temas) {
        const temaCompletado = isTemaCompletado('intro-informatica', tema.id);
        const leccionCompletada = isLeccionCompletada('intro-informatica', tema.id);
        console.log(`📚 Tema ${tema.id} "${tema.titulo}":`, {
          temaCompletado,
          leccionCompletada
        });
        
        // Si encontramos un tema no completado, ese es nuestro siguiente tema
        if (!temaCompletado) {
          siguienteTema = tema;
          console.log(`🎯 Siguiente tema encontrado: ${tema.titulo} (ID: ${tema.id})`);
          break;
        }
      }
      
      // Si no encontramos ningún tema incompleto, ir al primer tema
      if (!siguienteTema) {
        siguienteTema = unidadData.temas[0];
        console.log(`🔄 Todos los temas completados, volviendo al primer tema: ${siguienteTema.titulo}`);
      }
      
      // Validar que el tema siguiente existe
      if (!siguienteTema) {
        console.error('❌ Error: No se pudo determinar el siguiente tema');
        showNotification('Error: No se pudo determinar el siguiente tema', 'error');
        return;
      }
      
      // Mensaje personalizado según el progreso
      let mensaje = '';
      let navegarA = `/leccion/intro-informatica/${siguienteTema.id}`;
      console.log('🎯 URL de navegación calculada:', navegarA);
      
      if (progreso.porcentaje === 0) {
        // Primera vez
        mensaje = `🎓 ¡Bienvenido al curso "Introducción a la Informática"!\n\n` +
          `📚 Este curso incluye ${unidadData.temas.length} temas:\n` +
          unidadData.temas.map((tema, index) => `${index + 1}. ${tema.titulo}`).join('\n') +
          `\n\n¿Deseas comenzar con el Tema 1: "${siguienteTema.titulo}"?`;
        
        console.log('🆕 Curso nuevo - mostrar confirmación');
        
      } else if (progreso.porcentaje === 100) {
        // Curso completado
        mensaje = `🎉 ¡Felicidades! Ya has completado este curso al ${progreso.porcentaje}%.\n\n` +
          `¿Deseas revisar el curso desde el principio?`;
        
        console.log('🎉 Curso completado - mostrar confirmación');
        
      } else {
        // Curso en progreso
        mensaje = `📖 Continúas con tu progreso del ${progreso.porcentaje}% en este curso.\n\n` +
          `🎯 Siguiente tema: "${siguienteTema.titulo}"\n\n` +
          `¿Estás listo para continuar?`;
        
        console.log('📖 Curso en progreso - continuar con tema:', siguienteTema.titulo);
      }
      
      // Mostrar confirmación al usuario
      const confirmacion = window.confirm(mensaje);
      console.log('🤔 Confirmación del usuario:', confirmacion);
      
      if (confirmacion) {
        console.log('✅ Navegando a:', navegarA);
        
        // Mostrar notificación de acción
        let notificacionMsg = '';
        if (progreso.porcentaje === 0) {
          notificacionMsg = `🚀 Iniciando curso: ${siguienteTema.titulo}`;
        } else if (progreso.porcentaje === 100) {
          notificacionMsg = `🔄 Revisando curso desde el principio`;
        } else {
          notificacionMsg = `📖 Continuando con: ${siguienteTema.titulo}`;
        }
        
        showNotification(notificacionMsg, 'success');
        
        // Navegar con retry
        try {
          navigate(navegarA);
          console.log('🎉 Navegación ejecutada exitosamente con react-router');
        } catch (navError) {
          console.error('❌ Error en navigate:', navError);
          console.log('🔄 Intentando fallback con window.location');
          window.location.href = navegarA;
        }
      } else {
        console.log('❌ Usuario canceló la navegación');
      }
      
    } catch (error) {
      console.error('💥 Error en handleComenzarCursoCompleto:', error);
      showNotification('Error inesperado: ' + error.message, 'error');
    }
  };

  const handleComenzarTema = (tema) => {
    console.log('🎯 INICIANDO handleComenzarTema con tema:', tema);
    
    try {
      // Validar que el tema existe
      if (!tema || !tema.id) {
        console.error('❌ Error: Tema no válido', tema);
        showNotification('Error: Tema no válido', 'error');
        return;
      }
      
      const navegarA = `/leccion/intro-informatica/${tema.id}`;
      console.log('🎯 URL de navegación para tema específico:', navegarA);
      
      // Mensaje de confirmación personalizado
      const temaCompletado = isTemaCompletado('intro-informatica', tema.id);
      const accion = temaCompletado ? 'revisar' : 'comenzar';
      const mensaje = `¿Deseas ${accion} el tema "${tema.titulo}"?`;
      
      if (window.confirm(mensaje)) {
        const notificacionMsg = `📚 ${temaCompletado ? 'Revisando' : 'Iniciando'} tema: ${tema.titulo}`;
        showNotification(notificacionMsg, 'success');
        
        // Navegar al tema específico
        try {
          navigate(navegarA);
          console.log('✅ Navegación a tema específico exitosa');
        } catch (navError) {
          console.error('❌ Error en navigate para tema:', navError);
          console.log('🔄 Intentando fallback con window.location');
          window.location.href = navegarA;
        }
      } else {
        console.log('❌ Usuario canceló la navegación al tema');
      }
      
    } catch (error) {
      console.error('💥 Error en handleComenzarTema:', error);
      showNotification('Error inesperado: ' + error.message, 'error');
    }
  };

  const handleGuardarParaDespues = () => {
    // Guardar en localStorage que el usuario marcó este curso para después
    const cursosGuardados = JSON.parse(localStorage.getItem('cursosGuardados') || '[]');
    const cursoId = 'intro-informatica';
    
    if (!cursosGuardados.includes(cursoId)) {
      cursosGuardados.push(cursoId);
      localStorage.setItem('cursosGuardados', JSON.stringify(cursosGuardados));
      showNotification('📚 Curso guardado en tu lista "Para después". ¡Puedes continuar cuando quieras!', 'success');
    } else {
      showNotification('📋 Este curso ya está en tu lista "Para después".', 'info');
    }
  };

  const progresoCurso = getProgresoCurso('intro-informatica');

  // Determinar el texto y estado del botón principal
  const getBotonPrincipalInfo = () => {
    if (progresoCurso.porcentaje === 0) {
      return {
        texto: 'Comenzar Curso Completo',
        icono: 'fas fa-play-circle',
        clase: 'btn btn-success btn-lg',
        descripcion: 'Inicia tu primera experiencia con este curso'
      };
    } else if (progresoCurso.porcentaje === 100) {
      return {
        texto: 'Revisar Curso Completo',
        icono: 'fas fa-redo-alt',
        clase: 'btn btn-primary btn-lg',
        descripcion: 'Repasa todo el contenido del curso completado'
      };
    } else {
      // Encontrar próximo tema no completado
      let proximoTema = null;
      for (let tema of unidadData.temas) {
        if (!isTemaCompletado('intro-informatica', tema.id)) {
          proximoTema = tema;
          break;
        }
      }
      
      const descripcionTema = proximoTema 
        ? `Continúa con: ${proximoTema.titulo}` 
        : 'Continúa donde lo dejaste';
      
      return {
        texto: `Continuar Curso (${progresoCurso.porcentaje}%)`,
        icono: 'fas fa-play',
        clase: 'btn btn-warning btn-lg',
        descripcion: descripcionTema
      };
    }
  };

  const botonInfo = getBotonPrincipalInfo();

  const diagnosticarBotones = () => {
    console.log('=== DIAGNÓSTICO COMPLETO DE PROGRESO ===');
    
    // Verificar funciones del contexto
    console.log('Funciones disponibles:', {
      getProgresoCurso: typeof getProgresoCurso,
      isTemaCompletado: typeof isTemaCompletado,
      isLeccionCompletada: typeof isLeccionCompletada
    });

    // Probar getProgresoCurso
    try {
      const progreso = getProgresoCurso('intro-informatica');
      console.log('✅ getProgresoCurso funciona:', progreso);
    } catch (error) {
      console.error('❌ Error en getProgresoCurso:', error);
    }

    // Verificar progreso actual
    const progresoActual = getProgresoCurso('intro-informatica');
    console.log('📊 Progreso actual del curso:', progresoActual);
    
    // Probar funciones de tema
    console.log('📚 Estado de todos los temas:');
    unidadData.temas.forEach(tema => {
      try {
        const temaCompletado = isTemaCompletado('intro-informatica', tema.id);
        const leccionCompletada = isLeccionCompletada('intro-informatica', tema.id);
        console.log(`  Tema ${tema.id} "${tema.titulo}":`, {
          temaCompletado,
          leccionCompletada
        });
      } catch (error) {
        console.error(`❌ Error verificando tema ${tema.id}:`, error);
      }
    });

    // Simular la lógica del botón "Continuar curso"
    console.log('🔍 Simulando lógica del botón "Continuar curso":');
    let siguienteTema = null;
    for (let tema of unidadData.temas) {
      const temaCompletado = isTemaCompletado('intro-informatica', tema.id);
      console.log(`  Revisando tema ${tema.id}: completado=${temaCompletado}`);
      if (!temaCompletado) {
        siguienteTema = tema;
        console.log(`  ✅ Siguiente tema encontrado: ${tema.titulo} (ID: ${tema.id})`);
        break;
      }
    }
    
    if (!siguienteTema) {
      siguienteTema = unidadData.temas[0];
      console.log(`  🔄 Todos completados, volviendo al primer tema: ${siguienteTema.titulo}`);
    }
    
    const urlEsperada = `/leccion/intro-informatica/${siguienteTema.id}`;
    console.log(`  🎯 URL que debería generarse: ${urlEsperada}`);

    // Probar navegación
    console.log('Navigate function:', typeof navigate);
    
    // Verificar datos de unidad
    console.log('Datos de unidad válidos:', {
      tituloExiste: !!unidadData.titulo,
      temasCount: unidadData.temas?.length || 0,
      primeraTemaTitulo: unidadData.temas[0]?.titulo,
      temasIds: unidadData.temas?.map(t => t.id)
    });

    // Información del botón principal
    try {
      const botonInfo = getBotonPrincipalInfo();
      console.log('✅ Información del botón principal:', botonInfo);
    } catch (error) {
      console.error('❌ Error en getBotonPrincipalInfo:', error);
    }

    // Verificar localStorage
    const progresoLocal = localStorage.getItem('progreso-infoaprende');
    console.log('💾 Progreso en localStorage:', progresoLocal ? JSON.parse(progresoLocal) : 'No encontrado');

    showNotification('🔍 Diagnóstico completado. Revisa la consola para detalles completos.', 'info');
  };

  return (
    <div className="curso-container">
      {/* Notificaciones */}
      {notification.show && (
        <div className={`notification alert alert-${notification.type}`} style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          maxWidth: '400px',
          padding: '15px 20px',
          borderRadius: '8px',
          backgroundColor: notification.type === 'success' ? '#d4edda' : notification.type === 'error' ? '#f8d7da' : '#d1ecf1',
          border: `1px solid ${notification.type === 'success' ? '#c3e6cb' : notification.type === 'error' ? '#f5c6cb' : '#bee5eb'}`,
          color: notification.type === 'success' ? '#155724' : notification.type === 'error' ? '#721c24' : '#0c5460',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          {notification.message}
        </div>
      )}

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">🏠 Inicio</Link>
        <span> / </span>
        <span>{unidadData.titulo}</span>
      </nav>

      {/* Header de la unidad */}
      <header className="curso-header">
        <div className="curso-icon">
          <i className={unidadData.icono}></i>
        </div>
        <div className="curso-info">
          <h1>{unidadData.titulo}</h1>
          <p>{unidadData.descripcion}</p>
          <div className="curso-stats">
            <span><i className="fas fa-book"></i> {unidadData.temas.length} Temas</span>
            <span><i className="fas fa-clock"></i> 4-6 horas</span>
            <span><i className="fas fa-signal"></i> Intermedio</span>
            <span><i className="fas fa-chart-line"></i> {progresoCurso.porcentaje}% Completado</span>
          </div>
        </div>
      </header>

      {/* Lista de temas */}
      <div className="temas-container">
        <h2>📚 Contenido del Curso</h2>
        <div className="temas-list">
          {unidadData.temas.map((tema) => {
            const temaCompletado = isTemaCompletado('intro-informatica', tema.id);
            const leccionCompletada = isLeccionCompletada('intro-informatica', tema.id);
            
            return (
            <div key={tema.id} className={`tema-item ${selectedTema?.id === tema.id ? 'active' : ''} ${temaCompletado ? 'completed' : ''}`}>
              <div className="tema-header" onClick={() => handleTemaClick(tema)}>
                <div className={`tema-numero ${temaCompletado ? 'completed' : ''}`}>
                  {temaCompletado ? '✓' : tema.id}
                </div>
                <div className="tema-title">
                  <h3>
                    {tema.titulo}
                    {temaCompletado && <span className="completion-badge">Completado</span>}
                  </h3>
                  <p className="tema-subtitle">{tema.tematica}</p>
                </div>
                <div className="tema-toggle">
                  <i className={`fas fa-chevron-${selectedTema?.id === tema.id ? 'up' : 'down'}`}></i>
                </div>
              </div>
              
              {selectedTema?.id === tema.id && (
                <div className="tema-content">
                  <div className="tema-description">
                    <h4>📖 Descripción</h4>
                    <p>{tema.contenido}</p>
                  </div>
                  
                  <div className="tema-activities">
                    <h4>🎯 Actividades</h4>
                    <ul>
                      {tema.actividades.map((actividad, index) => (
                        <li key={index}>{actividad}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="tema-actions">
                    <Link to={`/contenido/intro-informatica/${tema.id}`}>
                      <button className="btn btn-info">
                        <i className="fas fa-book"></i> 
                        Contenido Teórico
                      </button>
                    </Link>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleComenzarTema(tema)}
                      title={leccionCompletada ? 'Revisar este tema específico' : 'Comenzar a estudiar este tema'}
                    >
                      <i className="fas fa-play"></i>
                      {leccionCompletada ? 'Revisar Tema' : 'Comenzar Tema'}
                    </button>
                    <Link to={`/quiz/intro-informatica/${tema.id}`}>
                      <button className="btn btn-warning">
                        <i className="fas fa-clipboard-check"></i>
                        Evaluación
                      </button>
                    </Link>
                    <button className="btn btn-outline">
                      <i className="fas fa-file-pdf"></i> Material de Apoyo
                    </button>
                  </div>
                </div>
              )}
            </div>
            );
          })}
        </div>
      </div>

      {/* Acciones del curso */}
      <div className="curso-actions">
        <button 
          className={botonInfo.clase}
          onClick={handleComenzarCursoCompleto}
          title={botonInfo.descripcion}
        >
          <i className={botonInfo.icono}></i> {botonInfo.texto}
        </button>
        <button 
          className="btn btn-outline btn-lg"
          onClick={handleGuardarParaDespues}
          title="Guarda este curso en tu lista para estudiarlo más tarde"
        >
          <i className="fas fa-bookmark"></i> Guardar para después
        </button>
        
        {/* Botón de diagnóstico completo - TEMPORAL */}
        <button 
          className="btn btn-info btn-sm"
          onClick={diagnosticarBotones}
          title="Diagnóstico completo de funcionalidades"
          style={{fontSize: '12px', padding: '8px 12px', marginRight: '10px'}}
        >
          <i className="fas fa-stethoscope"></i> Diagnóstico
        </button>

        {/* Botón para limpiar progreso - TEMPORAL */}
        <button 
          className="btn btn-danger btn-sm"
          onClick={() => {
            localStorage.removeItem('progreso-infoaprende');
            window.location.reload();
          }}
          title="Limpiar todo el progreso guardado"
          style={{fontSize: '12px', padding: '8px 12px', marginRight: '10px'}}
        >
          <i className="fas fa-trash"></i> Limpiar Progreso
        </button>
        
        {/* Información adicional del progreso */}
        {progresoCurso.porcentaje > 0 && (
          <div className="progreso-info">
            <small>
              <i className="fas fa-chart-line"></i> 
              Progreso: {progresoCurso.completadas} de {unidadData.temas.length} temas completados
            </small>
          </div>
        )}
      </div>
    </div>
  );
}
