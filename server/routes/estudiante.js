const express = require('express');
const router = express.Router();
const estudianteRepository = require('../repositories/estudianteRepository');

// GET todos los estudiantes
router.get('/', async (req, res) => {
  try {
    const estudiantes = await estudianteRepository.getAll();
    res.status(200).json(estudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: 'Error al obtener los estudiantes', 
      error: error.message 
    });
  }
});

// GET estudiante por ID
router.get('/:id', async (req, res) => {
  try {
    const estudiante = await estudianteRepository.getById(req.params.id);
    if (estudiante) {
      res.status(200).json(estudiante);
    } else {
      res.status(404).json({ message: 'Estudiante no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: 'Error al buscar el estudiante', 
      error: error.message 
    });
  }
});

// POST crear nuevo estudiante
router.post('/', async (req, res) => {
  try {
    const nuevoEstudiante = await estudianteRepository.create(req.body);
    res.status(201).json({ 
      message: 'Estudiante creado exitosamente',
      estudiante: nuevoEstudiante
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ 
      message: 'Error al crear estudiante', 
      error: error.message 
    });
  }
});

// PUT actualizar estudiante
router.put('/:id', async (req, res) => {
  try {
    const estudianteActualizado = await estudianteRepository.update(req.params.id, req.body);
    if (estudianteActualizado) {
      res.status(200).json({ 
        message: 'Estudiante actualizado exitosamente',
        estudiante: estudianteActualizado
      });
    } else {
      res.status(404).json({ message: 'Estudiante no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ 
      message: 'Error al actualizar estudiante', 
      error: error.message 
    });
  }
});

// DELETE eliminar estudiante
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await estudianteRepository.delete(req.params.id);
    if (eliminado) {
      res.status(200).json({ message: 'Estudiante eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Estudiante no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: 'Error al eliminar estudiante', 
      error: error.message 
    });
  }
});

module.exports = router;