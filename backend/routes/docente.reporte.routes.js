const express = require('express');
const router = express.Router();
const Evaluacion = require('../models/evaluacion.model');
const Intento = require('../models/intento.model');
const Asignacion = require('../models/asignacion.model');
const authMiddleware = require('../middlewares/auth.middleware');
const docenteMiddleware = require('../middlewares/docente.middleware');
const mongoose = require('mongoose');

// Overview de una evaluación: intentos, media, desviación, tasa aprobado
router.get('/evaluacion/:id/overview', authMiddleware, docenteMiddleware, async (req, res) => {
  try {
    const evalId = mongoose.Types.ObjectId(req.params.id);
    const agg = await Intento.aggregate([
      { $match: { evaluacion: evalId, estado: 'completado' } },
      { $group: { _id: '$evaluacion', avgScore: { $avg: '$puntuacion' }, stdDev: { $stdDevSamp: '$puntuacion' }, count: { $sum: 1 }, passed: { $sum: { $cond: [{ $gte: ['$puntuacion', 60] }, 1, 0] } } } }
    ]);
    res.json(agg[0] || { avgScore: 0, stdDev: 0, count: 0, passed: 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Reporte por alumno para una evaluación
router.get('/evaluacion/:id/alumnos', authMiddleware, docenteMiddleware, async (req, res) => {
  try {
    const evalId = req.params.id;
    const agg = await Intento.aggregate([
      { $match: { evaluacion: mongoose.Types.ObjectId(evalId) } },
      { $group: { _id: '$alumno', attempts: { $sum: 1 }, best: { $max: '$puntuacion' } } }
    ]);
    res.json(agg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Progreso por temario (asumimos relaciones externas a implementar)
router.get('/temario/:id/progreso', authMiddleware, docenteMiddleware, async (req, res) => {
  try {
    // Placeholder: devolver estructura vacía. Implementar según modelo de lecciones/progreso.
    res.json({ message: 'Endpoint en desarrollo - definir esquema de lecciones y progreso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
