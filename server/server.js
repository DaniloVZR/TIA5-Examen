const express = require('express');
const cors = require('cors');

// Importa la ruta del tipo de proyecto
const estudianteRouter = require('./routes/estudiante.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/estudiante', estudianteRouter); // Usa la ruta del módulo

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de red social' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
