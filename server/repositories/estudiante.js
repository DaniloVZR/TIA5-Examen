const db = require('../config/database');
const estudiante = require('../models/estudiante');

class estudianteRepository {
  async getAll() {
    const { rows } = await db.query('SELECT * FROM estudiante');
    return rows.map(row => new estudiante(
      row.id,
      row.numero_identificacion,
      row.nombres,
      row.apellidos,
      row.fecha_nacimiento,
      row.genero,
      row.telefono,
      row.email,
      row.fotografia,
      row.redes_sociales,
      row.fecha_registro
    ));
  }

  async getById(id) {
    const { rows } = await db.query('SELECT * FROM estudiante WHERE id = $1', [id]);
    if (rows.length === 0) return null;
    const row = rows[0];
    return new estudiante(
      row.id,
      row.numero_identificacion,
      row.nombres,
      row.apellidos,
      row.fecha_nacimiento,
      row.genero,
      row.telefono,
      row.email,
      row.fotografia,
      row.redes_sociales,
      row.fecha_registro
    );
  }

  async create(estudianteData) {
    const { rows } = await db.query(
      `INSERT INTO estudiante (
        numero_identificacion, nombres, apellidos, fecha_nacimiento,
        genero, telefono, email, fotografia, redes_sociales, fecha_registro
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        estudianteData.numeroIdentificacion,
        estudianteData.nombres,
        estudianteData.apellidos,
        estudianteData.fechaNacimiento,
        estudianteData.genero,
        estudianteData.telefono,
        estudianteData.email,
        estudianteData.fotografia,
        estudianteData.redesSociales,
        estudianteData.fechaRegistro || new Date().toISOString().split('T')[0]
      ]
    );
    const row = rows[0];
    return new estudiante(
      row.id,
      row.numero_identificacion,
      row.nombres,
      row.apellidos,
      row.fecha_nacimiento,
      row.genero,
      row.telefono,
      row.email,
      row.fotografia,
      row.redes_sociales,
      row.fecha_registro
    );
  }

  async update(id, estudianteData) {
    const { rows } = await db.query(
      `UPDATE estudiante SET
        numero_identificacion = $1,
        nombres = $2,
        apellidos = $3,
        fecha_nacimiento = $4,
        genero = $5,
        telefono = $6,
        email = $7,
        fotografia = $8,
        redes_sociales = $9,
        fecha_registro = $10
      WHERE id = $11 RETURNING *`,
      [
        estudianteData.numeroIdentificacion,
        estudianteData.nombres,
        estudianteData.apellidos,
        estudianteData.fechaNacimiento,
        estudianteData.genero,
        estudianteData.telefono,
        estudianteData.email,
        estudianteData.fotografia,
        estudianteData.redesSociales,
        estudianteData.fechaRegistro,
        id
      ]
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return new estudiante(
      row.id,
      row.numero_identificacion,
      row.nombres,
      row.apellidos,
      row.fecha_nacimiento,
      row.genero,
      row.telefono,
      row.email,
      row.fotografia,
      row.redes_sociales,
      row.fecha_registro
    );
  }

  async delete(id) {
    const { rowCount } = await db.query('DELETE FROM estudiante WHERE id = $1', [id]);
    return rowCount > 0;
  }
}

module.exports = new estudianteRepository();