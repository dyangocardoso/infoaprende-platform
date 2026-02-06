import React, { useEffect, useState } from 'react';
import api from '../api/client.js';
import AttemptDetail from './AttemptDetail.jsx';

export default function AttemptHistory({ onClose }) {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let mounted = true;
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Necesitas iniciar sesión para ver el historial');
      setLoading(false);
      return;
    }

    // Obtener profile para conocer el id del usuario
    api.get('/api/users/profile', { requireAuth: true }).then(profileRes => {
      if (!mounted) return;
      if (!profileRes.ok) {
        setError(profileRes.data && profileRes.data.error ? profileRes.data.error : 'Error al obtener perfil');
        setLoading(false);
        return;
      }
      const userId = profileRes.data && profileRes.data.id;
      if (!userId) {
        setError('No se pudo determinar el id de usuario');
        setLoading(false);
        return;
      }

      api.get(`/api/users/${userId}/attempts`, { requireAuth: true }).then(res => {
        if (!mounted) return;
        if (!res.ok) {
          setError(res.data && res.data.error ? res.data.error : 'Error al obtener historial');
          setLoading(false);
          return;
        }
        setAttempts(res.data || []);
        setLoading(false);
      }).catch(e => {
        if (!mounted) return;
        setError(e.message || 'Error al obtener historial');
        setLoading(false);
      });

    }).catch(e => {
      if (!mounted) return;
      setError(e.message || 'Error al obtener perfil');
      setLoading(false);
    });

    return () => { mounted = false; };
  }, []);

  if (loading) return <p>Cargando historial...</p>;
  if (error) return (
    <div>
      <p className="error">{error}</p>
      <button className="btn" onClick={onClose}>Cerrar</button>
    </div>
  );

  if (selected) {
    return (
      <div>
        <button className="btn back" onClick={() => setSelected(null)}>← Volver al historial</button>
        <AttemptDetail attemptId={selected} onBack={() => setSelected(null)} />
      </div>
    );
  }

  if (!attempts.length) return (
    <div>
      <p>No tienes intentos registrados.</p>
      <button className="btn" onClick={onClose}>Cerrar</button>
    </div>
  );

  return (
    <div className="attempt-history">
      <h3>Mi Historial de Intentos</h3>
      <table className="attempt-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Evaluación</th>
            <th>Puntuación</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {attempts.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.evaluacion_id || a.evaluationId}</td>
              <td>{a.puntuacion ?? a.score}/{a.total ?? '-'}</td>
              <td>{a.estado || (a.score != null ? 'completado' : 'en-progreso')}</td>
              <td>{new Date(a.finished_at || a.createdAt).toLocaleString()}</td>
              <td><button className="btn small" onClick={() => setSelected(a.id)}>Ver</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
