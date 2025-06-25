const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// Ruta POST para registrar usuario
router.post('/register', registerUser);
router.post('/login', userController.loginUser);


module.exports = router;
