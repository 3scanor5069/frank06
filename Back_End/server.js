const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();


// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes); // Aquí conectas tu ruta

// Puerto
app.listen(3006, () => {
  console.log('Servidor corriendo en http://localhost:3006');
});
