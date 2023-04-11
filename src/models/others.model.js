//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const { toJSON, paginate } = require('./plugins');
const { status } = require('../config/enums');

const othersSchema = mongoose.Schema(
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
    description: {
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
othersSchema.plugin(toJSON);
othersSchema.plugin(paginate);

/**
 * @typedef Others
 */
const Others = mongoose.model('Others', othersSchema);

module.exports = Others;
