const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

// Endpoints públicos mínimos: list, get, submit
// Implementación simple usando la base de datos global si existe; si no, usar objetos en memoria.

// In-memory store como fallback
let inMemory = {
  evaluations: [
    {
      id: 'sample-1',
      title: 'Evaluación de ejemplo: Nociones básicas',
      description: 'Prueba corta de opción múltiple sobre componentes básicos',
      timeLimit: 10,
      questions: [
        { id: 'q1', type: 'mcq', text: '¿Qué dispositivo muestra la información?', options: ['Monitor','CPU','Teclado'], answer: 'Monitor' },
        { id: 'q2', type: 'mcq', text: '¿Qué dispositivo controla el cursor?', options: ['Ratón','Teclado','Bocinas'], answer: 'Ratón' }
      ]
    }
  ],
  submissions: []
};

// Helper: normalizar pregunta desde distintos formatos
function normalizeQuestion(q, idx) {
  return {
    id: q.id || q.itemId || String(idx),
    type: q.type || q.tipo || 'mcq',
    text: q.text || q.enunciado || q.question || '',
    options: q.options || q.opciones || null,
    correct: q.answer || q.respuesta_correcta || q.correct || null,
    peso: q.peso || q.weight || 1
  };
}

// GET /api/evaluations
router.get('/', async (req, res) => {
  try {
    if (global && global.PruebaEvaluativa) {
      // Listar pruebas publicadas desde la base de datos
      const pruebas = await global.PruebaEvaluativa.findAll({ where: { publicado: true } });
      const list = pruebas.map(p => ({
        id: p.id,
        title: p.titulo || p.title,
        description: p.descripcion || p.descripcion,
        timeLimit: p.tiempo_limite_min || p.timeLimit
      }));
      return res.json(list);
    }
    return res.json(inMemory.evaluations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/evaluations/:id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    if (global && global.PruebaEvaluativa) {
      const prueba = await global.PruebaEvaluativa.findByPk(id);
      if (!prueba) return res.status(404).json({ error: 'Not found' });
      const preguntasRaw = prueba.preguntas || [];
      const preguntas = (preguntasRaw).map((q, idx) => {
        const n = normalizeQuestion(q, idx);
        // devolver sin la clave 'correct' para no filtrar respuestas
        return { id: n.id, type: n.type, text: n.text, options: n.options };
      });

      return res.json({
        id: prueba.id,
        title: prueba.titulo,
        description: prueba.descripcion,
        timeLimit: prueba.tiempo_limite_min,
        questions: preguntas
      });
    }

    const ev = inMemory.evaluations.find(e => e.id === id);
    if (!ev) return res.status(404).json({ error: 'Not found' });
    const safe = { ...ev, questions: ev.questions.map(q => ({ id: q.id, type: q.type, text: q.text, options: q.options })) };
    res.json(safe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/evaluations/:id/submit
// Requiere autenticación: el intento quedará asociado a req.user.id
router.post('/:id/submit', authMiddleware.verifyToken, async (req, res) => {
  try {
    if (!req.user || !req.user.id) return res.status(401).json({ error: 'Unauthorized' });
    const id = req.params.id;
    const body = req.body || {};
    const answers = body.answers || {};

    if (global && global.PruebaEvaluativa) {
      const prueba = await global.PruebaEvaluativa.findByPk(id);
      if (!prueba) return res.status(404).json({ error: 'Not found' });

      const preguntasRaw = prueba.preguntas || [];
      let totalWeight = 0;
      let score = 0;

      const normalized = preguntasRaw.map((q, idx) => normalizeQuestion(q, idx));
      for (const q of normalized) {
        const peso = Number(q.peso) || 1;
        totalWeight += peso;
        const given = answers[q.id];
        if (q.type === 'mcq' || q.type === 'tf') {
          if (given != null && q.correct != null && String(given).trim().toLowerCase() === String(q.correct).trim().toLowerCase()) {
            score += peso;
          }
        } else {
          // respuestas abiertas: no puntuamos automáticamente (se dejan para revisión docente)
        }
      }

      if (totalWeight === 0) totalWeight = normalized.length || 1;

      // Guardar intento si el modelo Intento está disponible
      let submissionId = null;
      if (global && global.Intento) {
        const intento = await global.Intento.create({
          evaluacion_id: prueba.id,
          alumno_id: req.user.id,
          respuestas: answers,
          puntuacion: score,
          estado: 'completado',
          finished_at: new Date()
        });
        submissionId = intento.id;
      } else {
        const submission = { id: `s_${Date.now()}`, evaluationId: prueba.id, alumno_id: req.user.id, answers, score, total: totalWeight, createdAt: new Date().toISOString() };
        inMemory.submissions.push(submission);
        submissionId = submission.id;
      }

      return res.json({ score, total: totalWeight, submissionId });
    }

    // Fallback in-memory (pero igual requerimos usuario autenticado)
    const ev = inMemory.evaluations.find(e => e.id === id);
    if (!ev) return res.status(404).json({ error: 'Not found' });

    let total = ev.questions.length;
    let correct = 0;
    for (const q of ev.questions) {
      const given = answers[q.id];
      if (q.type === 'mcq') {
        if (given && String(given).trim().toLowerCase() === String(q.answer).trim().toLowerCase()) correct++;
      }
    }
    const score = correct;
    const submission = { id: `s_${Date.now()}`, evaluationId: id, alumno_id: req.user.id, answers, score, total, createdAt: new Date().toISOString() };
    inMemory.submissions.push(submission);
    res.json({ score, total, submissionId: submission.id });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Exponer inMemory para otros routers (fallback)
router.__inMemoryStore = inMemory;

module.exports = router;
