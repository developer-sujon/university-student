//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const { toJSON, paginate } = require('./plugins');
const { status, assessment } = require('../config/enums');

const subjectRepetitionSchema = mongoose.Schema(
  {
    studentID: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    studentName: {
      type: String,
      required: true,
      trim: true,
    },
    rollNo: {
      type: String,
      required: true,
      trim: true,
    },
    session: {
      type: String,
      required: true,
      trim: true,
    },
    sessionRegistration: {
      type: String,
      required: true,
      trim: true,
    },
    sessionCGPA: {
      type: String,
      required: true,
      trim: true,
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
subjectRepetitionSchema.plugin(toJSON);
subjectRepetitionSchema.plugin(paginate);

/**
 * @typedef SubjectRepetition
 */
const SubjectRepetition = mongoose.model('SubjectRepetition', subjectRepetitionSchema);

module.exports = SubjectRepetition;
