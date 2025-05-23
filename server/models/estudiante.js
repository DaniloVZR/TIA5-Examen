class estudiante {
  constructor(
    id,
    numero_identificacion,
    nombres,
    apellidos,
    fecha_nacimiento,
    genero,
    telefono,
    email,
    fotografia,
    redes_sociales,
    fecha_registro
  ) {
    this.id = id;
    this.numero_identificacion = numero_identificacion;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.fecha_nacimiento = fecha_nacimiento;
    this.genero = genero;
    this.telefono = telefono;
    this.email = email;
    this.fotografia = fotografia;
    this.redes_sociales = redes_sociales;
    this.fecha_registro = fecha_registro;
  }
}

  
  module.exports = estudiante;