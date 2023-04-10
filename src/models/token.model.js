//External Lib Import
const mongoose = require('mongoose');

//Internal Lib Import
const {
  toJSON
} = require('./plugins');
const {
  tokenTypes
} = require('../config/tokens');

const tokenSchema = mongoose.Schema({
  token: {
    type: String,
    required: true,
    index: true,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  blacklisted: {
    type: Boolean,
    default: false,
  },
  visibility: {
    type: Boolean,
    default: true,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
