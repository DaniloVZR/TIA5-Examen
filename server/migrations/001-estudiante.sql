CREATE TABLE estudiante (
    id SMALLSERIAL PRIMARY KEY,
    numero_identificacion VARCHAR(20) UNIQUE NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    genero VARCHAR(10) NOT NULL CHECK (genero IN ('masculino', 'femenino', 'otro')),
    telefono VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    fotografia TEXT,
    redes_sociales VARCHAR(100) NOT NULL,
    fecha_registro DATE NOT NULL DEFAULT CURRENT_DATE
);