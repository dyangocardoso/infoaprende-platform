import React from 'react';

export default function QuestionMCQ({ question, onAnswer }) {
  return (
    <div className="question-mcq">
      <p className="q-text">{question.text}</p>
      <div className="options">
        {question.options && question.options.map((opt, i) => (
          <label key={i} className="option">
            <input type="radio" name={`q_${question.id}`} value={opt} onChange={() => onAnswer(opt)} /> {opt}
          </label>
        ))}
        {!question.options && (
          <input type="text" placeholder="Respuesta" onChange={e => onAnswer(e.target.value)} />
        )}
      </div>
    </div>
  );
}
