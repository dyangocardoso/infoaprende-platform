-- Script de configuración inicial para InfoAprende PostgreSQL
-- Ejecutar este script después de instalar PostgreSQL

-- Crear la base de datos
CREATE DATABASE infoaprende;

-- Conectarse a la base de datos infoaprende
\c infoaprende;

-- Crear enum para roles de usuario
CREATE TYPE user_role AS ENUM ('estudiante', 'docente', 'administrador');

-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    grado VARCHAR(100),
    rol user_role DEFAULT 'estudiante',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de cursos
CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    instructor_id INTEGER REFERENCES usuarios(id),
    grado VARCHAR(100),
    activo BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de lecciones/contenidos
CREATE TABLE lecciones (
    id SERIAL PRIMARY KEY,
    curso_id INTEGER REFERENCES cursos(id) ON DELETE CASCADE,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT,
    tipo VARCHAR(50) DEFAULT 'texto', -- texto, video, quiz, ejercicio
    orden INTEGER DEFAULT 0,
    activo BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de progreso del usuario
CREATE TABLE progreso_usuarios (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
    curso_id INTEGER REFERENCES cursos(id) ON DELETE CASCADE,
    leccion_id INTEGER REFERENCES lecciones(id) ON DELETE CASCADE,
    completado BOOLEAN DEFAULT false,
    fecha_completado TIMESTAMP,
    tiempo_dedicado INTEGER DEFAULT 0, -- en minutos
    puntuacion INTEGER DEFAULT 0,
    UNIQUE(usuario_id, leccion_id)
);

-- Crear tabla de insignias
CREATE TABLE insignias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    icono VARCHAR(255),
    criterio JSONB, -- criterios para obtener la insignia
    activo BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de insignias de usuarios
CREATE TABLE usuario_insignias (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
    insignia_id INTEGER REFERENCES insignias(id) ON DELETE CASCADE,
    fecha_obtenida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(usuario_id, insignia_id)
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_rol ON usuarios(rol);
CREATE INDEX idx_cursos_instructor ON cursos(instructor_id);
CREATE INDEX idx_progreso_usuario ON progreso_usuarios(usuario_id);
CREATE INDEX idx_progreso_curso ON progreso_usuarios(curso_id);
CREATE INDEX idx_lecciones_curso ON lecciones(curso_id);

-- Crear función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Crear triggers para updated_at
CREATE TRIGGER update_usuarios_updated_at BEFORE UPDATE ON usuarios
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cursos_updated_at BEFORE UPDATE ON cursos
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insertar datos de ejemplo
INSERT INTO usuarios (nombre, email, password, grado, rol) VALUES 
('Administrador Sistema', 'admin@infoaprende.com', '$2a$10$hashedpassword', NULL, 'administrador'),
('Profesor Demo', 'profesor@infoaprende.com', '$2a$10$hashedpassword', NULL, 'docente'),
('Estudiante Demo', 'estudiante@infoaprende.com', '$2a$10$hashedpassword', '5to Grado', 'estudiante');

INSERT INTO insignias (nombre, descripcion, icono, criterio) VALUES 
('Primera Lección', 'Completaste tu primera lección', '🎯', '{"lecciones_completadas": 1}'),
('Estudiante Dedicado', 'Completaste 10 lecciones', '📚', '{"lecciones_completadas": 10}'),
('Maestro Programador', 'Completaste un curso de programación', '💻', '{"cursos_completados": 1, "tipo": "programacion"}');

-- Comentarios sobre la estructura
COMMENT ON TABLE usuarios IS 'Tabla principal de usuarios del sistema';
COMMENT ON TABLE cursos IS 'Cursos disponibles en la plataforma';
COMMENT ON TABLE lecciones IS 'Contenido de los cursos (lecciones individuales)';
COMMENT ON TABLE progreso_usuarios IS 'Seguimiento del progreso de cada usuario';
COMMENT ON TABLE insignias IS 'Insignias disponibles en el sistema';
COMMENT ON TABLE usuario_insignias IS 'Insignias obtenidas por cada usuario';

-- Vista para estadísticas de progreso
CREATE VIEW vista_progreso_curso AS
SELECT 
    u.id as usuario_id,
    u.nombre,
    c.id as curso_id,
    c.titulo as curso_titulo,
    COUNT(l.id) as total_lecciones,
    COUNT(CASE WHEN p.completado = true THEN 1 END) as lecciones_completadas,
    ROUND(
        (COUNT(CASE WHEN p.completado = true THEN 1 END) * 100.0 / 
         NULLIF(COUNT(l.id), 0)), 2
    ) as porcentaje_completado
FROM usuarios u
CROSS JOIN cursos c
LEFT JOIN lecciones l ON c.id = l.curso_id AND l.activo = true
LEFT JOIN progreso_usuarios p ON u.id = p.usuario_id AND l.id = p.leccion_id
WHERE u.rol = 'estudiante' AND c.activo = true
GROUP BY u.id, u.nombre, c.id, c.titulo
ORDER BY u.nombre, c.titulo;

COMMENT ON VIEW vista_progreso_curso IS 'Vista para obtener el progreso de cada usuario en cada curso';
