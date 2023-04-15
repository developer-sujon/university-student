//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const { toJSON, paginate } = require('./plugins');

const enrollSchema = mongoose.Schema(
  {
    studentID: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    coursesID: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Courses',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// add plugin that converts mongoose to json
enrollSchema.plugin(toJSON);
enrollSchema.plugin(paginate);

/**
 * @typedef Enroll
 */
const Enroll = mongoose.model('Enroll', enrollSchema);

module.exports = Enroll;
