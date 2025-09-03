import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgresoContext = createContext();

export const useProgreso = () => {
  const context = useContext(ProgresoContext);
  if (!context) {
    throw new Error('useProgreso debe ser usado dentro de ProgresoProvider');
  }
  return context;
};

export const ProgresoProvider = ({ children }) => {
  const [progreso, setProgreso] = useState({
    cursosCompletados: [],
    temasCompletados: [],
    leccionesCompletadas: [],
    puntosTotales: 0,
    tiempoEstudio: 0, // en minutos
    racha: 0, // días consecutivos
    logros: []
  });

  // Cargar progreso desde localStorage al iniciar
  useEffect(() => {
    const progresoGuardado = localStorage.getItem('progreso-infoaprende');
    if (progresoGuardado) {
      setProgreso(JSON.parse(progresoGuardado));
    }
  }, []);

  // Guardar progreso en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('progreso-infoaprende', JSON.stringify(progreso));
  }, [progreso]);

  // Marcar lección como completada
  const completarLeccion = (cursoId, temaId, puntos = 10) => {
    const leccionId = `${cursoId}-${temaId}`;
    
    setProgreso(prev => {
      // Evitar duplicados
      if (prev.leccionesCompletadas.includes(leccionId)) {
        return prev;
      }

      const nuevasLecciones = [...prev.leccionesCompletadas, leccionId];
      const nuevosPuntos = prev.puntosTotales + puntos;
      
      // Verificar si se completó un tema (todas las lecciones del tema)
      const temasData = {
        'nociones-computador': 3, // Corregido: son 3 temas
        'intro-informatica': 7, // Nuevo curso con 7 temas
        'intro-windows': 9,
        'paint': 3,
        'paint-3d': 5,
        'word': 8,
        'powerpoint': 7,
        'excel': 7
      };
      
      // Marcar el tema como completado
      const temaCompletado = `${cursoId}-${temaId}`;
      const nuevosTemasCompletados = prev.temasCompletados.includes(temaCompletado) 
        ? prev.temasCompletados 
        : [...prev.temasCompletados, temaCompletado];

      // Verificar si se completó un curso completo
      const totalTemasDelCurso = temasData[cursoId] || 0;
      const temasCompletadosDelCurso = nuevosTemasCompletados.filter(t => t.startsWith(cursoId)).length;
      const cursoCompleto = temasCompletadosDelCurso >= totalTemasDelCurso;
      
      const nuevoscursosCompletados = cursoCompleto && !prev.cursosCompletados.includes(cursoId)
        ? [...prev.cursosCompletados, cursoId]
        : prev.cursosCompletados;

      // Verificar logros
      const nuevosLogros = verificarLogros(prev.logros, {
        leccionesCompletadas: nuevasLecciones.length,
        cursosCompletados: nuevoscursosCompletados.length,
        puntosTotales: nuevosPuntos
      });

      return {
        ...prev,
        leccionesCompletadas: nuevasLecciones,
        temasCompletados: nuevosTemasCompletados,
        cursosCompletados: nuevoscursosCompletados,
        puntosTotales: nuevosPuntos,
        logros: nuevosLogros
      };
    });
  };

  // Obtener progreso de un curso específico
  const getProgresoCurso = (cursoId) => {
    const temasData = {
      'nociones-computador': 3, // Corregido: son 3 temas, no 4
      'intro-informatica': 7, // Nuevo curso con 7 temas
      'intro-windows': 9,
      'paint': 3,
      'paint-3d': 5,
      'word': 8,
      'powerpoint': 7,
      'excel': 7
    };

    const totalTemas = temasData[cursoId] || 0;
    const temasCompletados = progreso.temasCompletados.filter(t => t.startsWith(cursoId)).length;
    const porcentaje = totalTemas > 0 ? Math.round((temasCompletados / totalTemas) * 100) : 0;

    return {
      totalTemas,
      completadas: temasCompletados, // Consistencia en nomenclatura
      temasCompletados,
      porcentaje,
      completado: progreso.cursosCompletados.includes(cursoId)
    };
  };

  // Verificar si una lección está completada
  const isLeccionCompletada = (cursoId, temaId) => {
    const leccionId = `${cursoId}-${temaId}`;
    return progreso.leccionesCompletadas.includes(leccionId);
  };

  // Verificar si un tema está completado
  const isTemaCompletado = (cursoId, temaId) => {
    const temaId_completo = `${cursoId}-${temaId}`;
    return progreso.temasCompletados.includes(temaId_completo);
  };

  // Agregar tiempo de estudio
  const agregarTiempoEstudio = (minutos) => {
    setProgreso(prev => ({
      ...prev,
      tiempoEstudio: prev.tiempoEstudio + minutos
    }));
  };

  // Verificar y otorgar logros
  const verificarLogros = (logrosActuales, stats) => {
    const todosLosLogros = [
      {
        id: 'primera-leccion',
        titulo: 'Primer Paso',
        descripcion: 'Completaste tu primera lección',
        icono: '🎯',
        condicion: stats.leccionesCompletadas >= 1
      },
      {
        id: 'cinco-lecciones',
        titulo: 'En Racha',
        descripcion: 'Completaste 5 lecciones',
        icono: '🔥',
        condicion: stats.leccionesCompletadas >= 5
      },
      {
        id: 'primer-curso',
        titulo: 'Graduado',
        descripcion: 'Completaste tu primer curso',
        icono: '🎓',
        condicion: stats.cursosCompletados >= 1
      },
      {
        id: 'cien-puntos',
        titulo: 'Centurión',
        descripcion: 'Alcanzaste 100 puntos',
        icono: '💯',
        condicion: stats.puntosTotales >= 100
      },
      {
        id: 'tres-cursos',
        titulo: 'Experto',
        descripcion: 'Completaste 3 cursos',
        icono: '⭐',
        condicion: stats.cursosCompletados >= 3
      }
    ];

    const logrosObtenidos = logrosActuales.slice();
    
    todosLosLogros.forEach(logro => {
      if (logro.condicion && !logrosObtenidos.find(l => l.id === logro.id)) {
        logrosObtenidos.push({
          ...logro,
          fechaObtenido: new Date().toISOString()
        });
      }
    });

    return logrosObtenidos;
  };

  // Reiniciar progreso (para testing)
  const reiniciarProgreso = () => {
    setProgreso({
      cursosCompletados: [],
      temasCompletados: [],
      leccionesCompletadas: [],
      puntosTotales: 0,
      tiempoEstudio: 0,
      racha: 0,
      logros: []
    });
    localStorage.removeItem('progreso-infoaprende');
  };

  const value = {
    progreso,
    completarLeccion,
    getProgresoCurso,
    isLeccionCompletada,
    isTemaCompletado,
    agregarTiempoEstudio,
    reiniciarProgreso
  };

  return (
    <ProgresoContext.Provider value={value}>
      {children}
    </ProgresoContext.Provider>
  );
};
