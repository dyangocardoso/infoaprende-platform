import React, { useEffect, useState } from 'react';
import EvaluationRunner from '../components/EvaluationRunner.jsx';
import AttemptHistory from '../components/AttemptHistory.jsx';
import * as evalSvc from '../services/evaluations.js';
import '../styles/pruebas-evaluativas.css';

export default function PruebasEvaluativas() {
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [running, setRunning] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    let mounted = true;
    evalSvc.listEvaluations()
      .then(data => {
        if (mounted) setEvaluations(data || []);
      })
      .catch(err => setError(err.message || 'Error al cargar evaluaciones'))
      .finally(() => setLoading(false));
    return () => { mounted = false; };
  }, []);

  if (showHistory) {
    return (
      <div className="pruebas-page">
        <button className="btn back" onClick={() => setShowHistory(false)}>← Volver a lista</button>
        <AttemptHistory onClose={() => setShowHistory(false)} />
      </div>
    );
  }

  if (running) {
    return (
      <div className="pruebas-page">
        <button className="btn back" onClick={() => setRunning(null)}>← Volver a lista</button>
        <EvaluationRunner evaluationId={running} onFinish={() => setRunning(null)} />
      </div>
    );
  }

  return (
    <div className="pruebas-page">
      <h2>Pruebas Evaluativas</h2>
      <div style={{ marginBottom: 12 }}>
        <button className="btn" onClick={() => setShowHistory(true)}>Mi historial</button>
      </div>
      {loading && <p>Cargando...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !evaluations.length && <p>No hay evaluaciones disponibles.</p>}
      <div className="eval-list">
        {evaluations.map(ev => (
          <div className="eval-card" key={ev._id || ev.id}>
            <h3>{ev.title}</h3>
            {ev.description && <p className="muted">{ev.description}</p>}
            <div className="card-actions">
              <button className="btn" onClick={() => setRunning(ev._id || ev.id)}>Iniciar</button>
              {ev.timeLimit && <small className="muted">Tiempo: {ev.timeLimit} min</small>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
