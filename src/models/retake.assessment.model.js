//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const { toJSON, paginate } = require('./plugins');
const { status, assessment } = require('../config/enums');

const retakeAssessmentSchema = mongoose.Schema(
  {
    studentID: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    instructor: {
      type: String,
      required: true,
      trim: true,
    },
    assessmentType: {
      type: String,
      required: true,
      enum: assessment,
    },
    status: {
      type: String,
      enum: status,
      default: 'PENDING',
      required: true,
    },
    reason: {
      type: String,
      trim: true,
      required: true,
    },
    adminRemark: String,
    attach: Object,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// add plugin that converts mongoose to json
retakeAssessmentSchema.plugin(toJSON);
retakeAssessmentSchema.plugin(paginate);

/**
 * @typedef RetakeAssessment
 */
const RetakeAssessment = mongoose.model('RetakeAssessment', retakeAssessmentSchema);

module.exports = RetakeAssessment;
