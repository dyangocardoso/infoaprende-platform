const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

// GET /api/attempts/:id
// Devuelve detalle de un intento por id. Requiere autenticación.
router.get('/:id', authMiddleware.verifyToken, async (req, res) => {
  try {
    const attemptId = req.params.id;
    const requesterId = req.user && req.user.id;
    const requesterRole = req.user && (req.user.role || req.user.rol);

    if (!attemptId) return res.status(400).json({ error: 'Invalid attempt id' });

    // Intento desde DB si modelo Intento existe
    if (global && global.Intento) {
      // Buscar por PK
      const intento = await global.Intento.findByPk(attemptId);
      if (!intento) return res.status(404).json({ error: 'Attempt not found' });

      // Permisos: el alumno dueño o administrador
      if (Number(intento.alumno_id) !== Number(requesterId) && requesterRole !== 'administrador' && requesterRole !== 'admin') {
        return res.status(403).json({ error: 'Forbidden' });
      }

      return res.json({
        id: intento.id,
        evaluacion_id: intento.evaluacion_id,
        alumno_id: intento.alumno_id,
        respuestas: intento.respuestas,
        puntuacion: intento.puntuacion,
        estado: intento.estado,
        started_at: intento.started_at,
        finished_at: intento.finished_at
      });
    }

    // Fallback in-memory
    const evalsRouter = require('./evaluations.routes');
    const inMemory = evalsRouter.__inMemoryStore || { submissions: [] };
    const item = (inMemory.submissions || []).find(s => String(s.id) === String(attemptId));
    if (!item) return res.status(404).json({ error: 'Attempt not found' });

    if (Number(item.alumno_id) !== Number(requesterId) && requesterRole !== 'administrador' && requesterRole !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    return res.json(item);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
