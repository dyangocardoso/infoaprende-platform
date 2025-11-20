const express = require('express');
const router = express.Router();
const plantillaController = require('../controllers/plantilla.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin-new.middleware');
const docenteMiddleware = require('../middlewares/docente.middleware');

// Nota: la gestión de plantillas se reserva a admin
router.get('/', authMiddleware.verifyToken, adminMiddleware.requireAdmin, plantillaController.list);
router.post('/', authMiddleware.verifyToken, adminMiddleware.requireAdmin, plantillaController.create);
router.get('/:id', authMiddleware.verifyToken, adminMiddleware.requireAdmin, plantillaController.getById);
router.put('/:id', authMiddleware.verifyToken, adminMiddleware.requireAdmin, plantillaController.update);
router.delete('/:id', authMiddleware.verifyToken, adminMiddleware.requireAdmin, plantillaController.delete);
router.post('/:id/export', authMiddleware.verifyToken, adminMiddleware.requireAdmin, plantillaController.export);
// Nueva ruta para preview HTML (permitir admin o docente)
router.get('/:id/preview', authMiddleware.verifyToken, docenteMiddleware, plantillaController.preview);

module.exports = router;
