//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const coursesCreate = {
  body: Joi.object().keys({
    coursesCode: Joi.string().required(),
    coursesName: Joi.string().required(),
    coursesInstructor: Joi.string().required(),
    seatsLimit: Joi.number().required(),
    registrationDeadline: Joi.date().required(),
    allowSessions: Joi.array().required(),
  }),
};

const coursesDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const coursesUpdate = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    coursesCode: Joi.string().required(),
    coursesName: Joi.string().required(),
    coursesInstructor: Joi.string().required(),
    seatsLimit: Joi.number().required(),
    registrationDeadline: Joi.date().required(),
    allowSessions: Joi.array().required(),
  }),
};

const coursesDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  coursesCreate,
  coursesDetails,
  coursesUpdate,
  coursesDelete,
};
