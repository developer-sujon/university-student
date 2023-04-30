//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const { toJSON, paginate } = require('./plugins');
const { status } = require('../config/enums');

const summerAssessmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    degree: {
      type: String,
      required: true,
      trim: true,
    },
    session: {
      type: String,
      required: true,
      trim: true,
    },
    currentSemester: {
      type: String,
      trim: true,
      required: true,
    },
    motive: {
      type: String,
      required: true,
    },
    enrolls: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: status,
      default: 'PENDING',
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
summerAssessmentSchema.plugin(toJSON);
summerAssessmentSchema.plugin(paginate);

/**
 * @typedef SummerAssessment
 */
const SummerAssessment = mongoose.model('SummerAssessment', summerAssessmentSchema);

module.exports = SummerAssessment;
