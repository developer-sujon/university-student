//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const { toJSON, paginate } = require('./plugins');
const { status, scholarship } = require('../config/enums');

const scholarshipSchema = mongoose.Schema(
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
    scholarshipType: {
      type: String,
      required: true,
      enum: scholarship,
    },
    status: {
      type: String,
      enum: status,
      default: 'PENDING',
      required: true,
    },
    description: {
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
scholarshipSchema.plugin(toJSON);
scholarshipSchema.plugin(paginate);

/**
 * @typedef Scholarship
 */
const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

module.exports = Scholarship;
