const mongoose = require('mongoose');
const { Schema } = mongoose;

const OpcionSchema = new Schema({
  texto: { type: String, required: true, trim: true },
  valor: { type: String, trim: true }
}, { _id: false });

const PreguntaSchema = new Schema({
  tipo: { type: String, required: true, enum: ['mcq', 'tf', 'short'], default: 'mcq' },
  enunciado: { type: String, required: true, trim: true },
  opciones: [OpcionSchema], // para MCQ
  respuestaCorrecta: Schema.Types.Mixed, // puede ser string, array dependiendo del tipo
  peso: { type: Number, default: 1 }
}, { _id: true });

const EvaluacionSchema = new Schema({
  titulo: { type: String, required: true, trim: true },
  nivel: { type: String, required: true, enum: ['inicial', 'primario', 'secundario', 'tecnico', 'otros'] },
  descripcion: { type: String, trim: true },
  preguntas: [PreguntaSchema],
  tiempoLimiteMin: { type: Number, default: 0 },
  ponderacionTotal: { type: Number, default: 0 },
  autor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  estado: { type: String, enum: ['borrador', 'publicada'], default: 'borrador' },
  plantilla: { type: Schema.Types.ObjectId, ref: 'Plantilla' }
}, { timestamps: true });

// Índices
EvaluacionSchema.index({ autor: 1 });
EvaluacionSchema.index({ nivel: 1 });
EvaluacionSchema.index({ estado: 1 });

module.exports = mongoose.model('Evaluacion', EvaluacionSchema);
