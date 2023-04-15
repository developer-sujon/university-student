//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const { toJSON, paginate } = require('./plugins');

const coursesSchema = mongoose.Schema(
  {
    coursesCode: {
      type: String,
      required: true,
      trim: true,
    },
    coursesName: {
      type: String,
      required: true,
      trim: true,
    },
    coursesInstructor: {
      type: String,
      required: true,
      trim: true,
    },
    seatsLimit: {
      type: Number,
      trim: true,
      required: true,
    },
    allowSessions: [],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// add plugin that converts mongoose to json
coursesSchema.plugin(toJSON);
coursesSchema.plugin(paginate);

/**
 * @typedef Courses
 */
const Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses;
