
import mongoose from 'mongoose';

const scholarshipSchema = new mongoose.Schema({
  cumulativeScholarshipAmount: {
    type: Number,
    required: true,
  },
  individualScholarshipAmount: {
    type: Number,
    required: true,
  },
  minPercentageRequired: {
    type: Number,
    required: true,
  },
  yearOfStudy: {
    type: Number,
    required: true,
  },
  extracurricularActivities: {
    type: [String],
    required: true,
  },
  financialNeed: {
    type: Boolean,
    required: true,
  },
  residencyStatus: {
    type: String,
    required: true,
  }
});

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

export default Scholarship;
