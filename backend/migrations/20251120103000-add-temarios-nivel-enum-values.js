'use strict';

// Migración para asegurar que el ENUM de la columna `nivel` en `temarios`
// contiene los valores autorizados. Esta migración intenta añadir los valores
// faltantes al tipo ENUM usado por la columna. Es específica para Postgres.

const ALLOWED_NIVELES = ['inicial', 'primario', 'secundario', 'tecnico', 'otros'];
const ENUM_TYPE_NAME = 'enum_temarios_nivel';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sequelize = queryInterface.sequelize;
    // Ejecutar dentro de una transacción
    await sequelize.transaction(async (t) => {
      for (const val of ALLOWED_NIVELES) {
        // Añadir valor si no existe (uso de DO block para comprobación segura)
        const sql = `DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_enum WHERE enumlabel = '${val}' AND enumtypid = '${ENUM_TYPE_NAME}'::regtype) THEN
    ALTER TYPE ${ENUM_TYPE_NAME} ADD VALUE '${val}';
  END IF;
END
$$;`;
        await queryInterface.sequelize.query(sql, { transaction: t });
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar valores de un ENUM en Postgres no es trivial y no se realiza aquí.
    // Para revertir esta migración se recomienda crear una migración que:
    //  - cree un nuevo tipo ENUM con los valores deseados,
    //  - altere la columna para usar ese tipo,
    //  - y elimine el tipo anterior.
    // Marcar como irreversible para evitar cambios accidentales.
    return Promise.resolve();
  }
};
