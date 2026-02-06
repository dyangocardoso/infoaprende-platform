import React, { useEffect, useState } from 'react';
import QuestionMCQ from './QuestionMCQ.jsx';
import * as evalSvc from '../services/evaluations.js';

export default function EvaluationRunner({ evaluationId, onFinish }) {
  const [evaluation, setEvaluation] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    evalSvc.getEvaluation(evaluationId)
      .then(ev => setEvaluation(ev))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [evaluationId]);

  function setAnswer(qId, value) {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  }

  async function submit() {
    try {
      const res = await evalSvc.submitEvaluation(evaluationId, answers);
      setResult(res);
    } catch (e) {
      console.error(e);
      alert('Error al enviar la prueba');
    }
  }

  if (loading) return <p>Cargando evaluación...</p>;
  if (!evaluation) return <p>No se encontró la evaluación.</p>;
  if (result) return (
    <div className="evaluation-result">
      <h3>Resultado: {result.score}/{result.total}</h3>
      <button className="btn" onClick={onFinish}>Cerrar</button>
    </div>
  );

  return (
    <div className="evaluation-runner">
      <h2>{evaluation.title}</h2>
      <p>{evaluation.description}</p>
      <div className="questions">
        {evaluation.questions.map(q => (
          <QuestionMCQ key={q.id} question={q} onAnswer={(v) => setAnswer(q.id, v)} />
        ))}
      </div>
      <div className="actions">
        <button className="btn primary" onClick={submit}>Enviar</button>
        <button className="btn" onClick={onFinish}>Abandonar</button>
      </div>
    </div>
  );
}
