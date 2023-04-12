//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const updateProfile = {
  body: Joi.object().keys({
    image: Joi.string().required(),
    name: Joi.string().required(),
    mobile: Joi.string().required(),
    address: Joi.string().required(),
  }),
};

module.exports = {
  updateProfile,
};
