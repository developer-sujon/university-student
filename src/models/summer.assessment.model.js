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
    enrolls: {
      type: [
        {
          studentID: {
            type: String,
            trim: true,
          },
          degree: {
            type: String,
            trim: true,
          },
          session: {
            type: String,
            trim: true,
          },
          currentSemester: {
            type: String,
            trim: true,
          },
          motive: {
            type: String,
          },
          status: {
            type: String,
            enum: status,
            default: 'PENDING',
            required: true,
          },
        },
      ],
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
