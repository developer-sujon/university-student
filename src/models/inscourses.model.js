//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const { toJSON, paginate } = require('./plugins');

const InsCoursesSchema = mongoose.Schema(
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
    seatLimit: {
      type: Number,
    },
    registrationDeadline: {
      type: Date,
    },
    resources: [],
    coursesHistory: [],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// add plugin that converts mongoose to json
InsCoursesSchema.plugin(toJSON);
InsCoursesSchema.plugin(paginate);

/**
 * @typedef Courses
 */
const InsCourses = mongoose.model('InsCourses', InsCoursesSchema);

module.exports = InsCourses;
