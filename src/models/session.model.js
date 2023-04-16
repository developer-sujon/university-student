//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const { toJSON, paginate } = require('./plugins');

const sessionSchema = mongoose.Schema(
  {
    sessionName: {
      type: String,
      required: true,
      trim: true,
    },
    sessionYear: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// add plugin that converts mongoose to json
sessionSchema.plugin(toJSON);
sessionSchema.plugin(paginate);

/**
 * @typedef Session
 */
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
