const express = require('express');
const router = express.Router();
const temarioController = require('../controllers/temario.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const docenteMiddleware = require('../middlewares/docente.middleware');

// Rutas para Temarios usando Sequelize (docente)
router.get('/niveles', authMiddleware.verifyToken, docenteMiddleware, temarioController.getNiveles);
router.get('/', authMiddleware.verifyToken, docenteMiddleware, temarioController.list);
router.post('/render', authMiddleware.verifyToken, docenteMiddleware, temarioController.renderFromPlantilla); // preview/generar HTML desde plantilla
router.post('/', authMiddleware.verifyToken, docenteMiddleware, temarioController.create);
router.get('/:id', authMiddleware.verifyToken, docenteMiddleware, temarioController.getById);
router.put('/:id', authMiddleware.verifyToken, docenteMiddleware, temarioController.update);
router.delete('/:id', authMiddleware.verifyToken, docenteMiddleware, temarioController.delete);
router.post('/:id/publish', authMiddleware.verifyToken, docenteMiddleware, temarioController.publish);

module.exports = router;
