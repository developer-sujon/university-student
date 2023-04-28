//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId, password } = require('./custom.validation');

const instructorCreate = {
  body: Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    photo: Joi.string(),
  }),
};

const instructorDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const instructorUpdate = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required().email(),

    photo: Joi.string(),
  }),
};

const instructorDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  instructorCreate,
  instructorDetails,
  instructorUpdate,
  instructorDelete,
};
