/**
 * Test rápido del sistema modular
 * Verifica que el contenido se puede cargar dinámicamente
 */

import React from 'react';

const TestModular = () => {
  const [contenido, setContenido] = React.useState(null);
  const [error, setError] = React.useState(null);

  const probarCarga = async () => {
    try {
      console.log('🧪 Probando carga dinámica...');
      
      // Importar curso dinámicamente
      const modulo = await import('../data/cursos/nociones-computador/index.js');
      console.log('✅ Módulo cargado:', modulo);
      
      // Verificar estructura
      if (modulo.temas && modulo.cursoInfo) {
        setContenido({
          info: modulo.cursoInfo,
          temas: Object.keys(modulo.temas),
          primerTema: modulo.temas['1']
        });
        console.log('✅ Estructura válida');
      } else {
        throw new Error('Estructura de módulo inválida');
      }
      
    } catch (err) {
      console.error('❌ Error:', err);
      setError(err.message);
    }
  };

  React.useEffect(() => {
    probarCarga();
  }, []);

  if (error) {
    return (
      <div style={{ padding: '20px', border: '2px solid red', margin: '20px' }}>
        <h3>❌ Error en Test Modular</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!contenido) {
    return <div>🔄 Cargando test...</div>;
  }

  return (
    <div style={{ padding: '20px', border: '2px solid green', margin: '20px' }}>
      <h3>✅ Test Modular Exitoso</h3>
      <p><strong>Curso:</strong> {contenido.info.titulo}</p>
      <p><strong>Temas disponibles:</strong> {contenido.temas.join(', ')}</p>
      <p><strong>Primer tema:</strong> {contenido.primerTema?.titulo}</p>
      <p><strong>Secciones en tema 1:</strong> {contenido.primerTema?.secciones?.length}</p>
    </div>
  );
};

export default TestModular;
