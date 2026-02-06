const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

// GET /api/users/:id/attempts
// Devuelve intentos del usuario solicitado. Si el request lo hace otro usuario no-admin,
// sólo puede ver sus propios intentos. Requiere autenticación.
router.get('/:id/attempts', authMiddleware.verifyToken, async (req, res) => {
  try {
    const requestedUserId = Number(req.params.id);
    const requesterId = req.user && req.user.id;
    const requesterRole = req.user && (req.user.role || req.user.rol);

    if (!requestedUserId) return res.status(400).json({ error: 'Invalid user id' });

    // Si no es admin, sólo permitir ver propios intentos
    if (requesterId !== requestedUserId && requesterRole !== 'administrador' && requesterRole !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    if (global && global.Intento) {
      const intentos = await global.Intento.findAll({ where: { alumno_id: requestedUserId }, order: [['finished_at','DESC']] });
      const mapped = intentos.map(i => ({ id: i.id, evaluacion_id: i.evaluacion_id, puntuacion: i.puntuacion, estado: i.estado, started_at: i.started_at, finished_at: i.finished_at, respuestas: i.respuestas }));
      return res.json(mapped);
    }

    // Fallback in-memory
    const inMemory = require('../routes/evaluations.routes').__inMemoryStore;
    if (inMemory && Array.isArray(inMemory.submissions)) {
      const items = inMemory.submissions.filter(s => Number(s.alumno_id) === requestedUserId);
      return res.json(items.map(s => ({ id: s.id, evaluationId: s.evaluationId, score: s.score, total: s.total, createdAt: s.createdAt, answers: s.answers })));
    }

    return res.json([]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
