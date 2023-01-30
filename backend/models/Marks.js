const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
  studentId: { type: String },
  name: { type: String },
  english: { type: Number },
  maths: { type: Number },
  history: { type: Number },
  science: { type: Number },
  ict: { type: Number },
  overallMarks: { type: Number },
  isPass: { type: Boolean },
  grade: { type: String }
});

const marksModel = mongoose.model('Marks', marksSchema);
module.exports = marksModel;