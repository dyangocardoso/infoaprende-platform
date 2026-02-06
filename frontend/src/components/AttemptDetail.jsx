import React, { useEffect, useState } from 'react';
import api from '../api/client.js';

export default function AttemptDetail({ attemptId, onBack }) {
  const [attempt, setAttempt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!attemptId) {
      setError('ID de intento no proporcionado');
      setLoading(false);
      return;
    }

    api.get(`/api/attempts/${attemptId}`, { requireAuth: true })
      .then(res => {
        if (!mounted) return;
        if (!res.ok) {
          setError(res.data && res.data.error ? res.data.error : 'Error al obtener detalle');
        } else {
          setAttempt(res.data);
        }
      })
      .catch(e => {
        if (!mounted) return;
        setError(e.message || 'Error al obtener detalle');
      })
      .finally(() => { if (mounted) setLoading(false); });

    return () => { mounted = false; };
  }, [attemptId]);

  if (loading) return <p>Cargando detalle del intento...</p>;
  if (error) return (
    <div>
      <p className="error">{error}</p>
      <button className="btn" onClick={onBack}>Volver</button>
    </div>
  );

  if (!attempt) return (
    <div>
      <p>No se encontró el intento.</p>
      <button className="btn" onClick={onBack}>Volver</button>
    </div>
  );

  return (
    <div className="attempt-detail">
      <h3>Detalle del intento {attempt.id}</h3>
      <p><strong>Evaluación:</strong> {attempt.evaluacion_id || attempt.evaluationId}</p>
      <p><strong>Alumno:</strong> {attempt.alumno_id || attempt.alumnoId}</p>
      <p><strong>Puntuación:</strong> {attempt.puntuacion ?? attempt.score ?? '-'}</p>
      <p><strong>Estado:</strong> {attempt.estado || (attempt.puntuacion != null ? 'completado' : 'en-progreso')}</p>
      <p><strong>Iniciado:</strong> {attempt.started_at ? new Date(attempt.started_at).toLocaleString() : ''}</p>
      <p><strong>Finalizado:</strong> {attempt.finished_at ? new Date(attempt.finished_at).toLocaleString() : (attempt.createdAt ? new Date(attempt.createdAt).toLocaleString() : '')}</p>

      <h4>Respuestas</h4>
      <pre style={{ whiteSpace: 'pre-wrap', background: '#f6f6f6', padding: 8 }}>{JSON.stringify(attempt.respuestas || attempt.answers || attempt.respuestas || attempt.answers, null, 2)}</pre>

      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={onBack}>Volver</button>
      </div>
    </div>
  );
}
