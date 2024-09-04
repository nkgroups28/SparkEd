// src/models/QuizResult.js

import mongoose from 'mongoose';

const QuizResultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: { type: String, required: true },
  totalMarks: { type: Number, required: true },
  answers: { type: Map, of: String, required: true },
}, { timestamps: true });

export default mongoose.models.QuizResult || mongoose.model('QuizResult', QuizResultSchema);
