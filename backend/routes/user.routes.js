const express = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const requireRole = require('../middlewares/role.middleware');
const router = express.Router();

// Autenticación (rutas públicas)
router.post('/register', authController.register);
router.post('/login', authController.login);

// Rutas protegidas que requieren autenticación
router.use(authMiddleware); // Todas las rutas siguientes requieren autenticación

// Perfil del usuario autenticado
router.get('/profile', (req, res) => {
  res.json({ 
    user: req.user,
    message: 'Perfil obtenido correctamente'
  });
});

// Gestión de usuarios (solo docentes)
router.get('/', requireRole('docente'), userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', requireRole('docente'), userController.deleteUser);

// Rutas específicas por rol
router.get('/docentes/privado', requireRole('docente'), (req, res) => {
  res.json({ 
    message: 'Área privada de docentes - Solo docentes pueden ver esto',
    user: req.user,
    timestamp: new Date().toISOString()
  });
});

router.get('/estudiantes/privado', requireRole('estudiante'), (req, res) => {
  res.json({ 
    message: 'Área privada de estudiantes - Solo estudiantes pueden ver esto',
    user: req.user,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
