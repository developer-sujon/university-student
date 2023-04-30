//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const inscoursesCreate = {
  body: Joi.object().keys({
    coursesCode: Joi.string().required(),
    coursesName: Joi.string().required(),
    coursesSession: Joi.string().required(),
    coursesProgram: Joi.string().required(),
    coursesInstructor: Joi.string().required(),
    resources: Joi.array(),
    coursesHistory: Joi.array(),
  }),
};

const inscoursesDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const inscoursesUpdate = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    coursesCode: Joi.string().required(),
    coursesName: Joi.string().required(),
    coursesSession: Joi.string().required(),
    coursesProgram: Joi.string().required(),
    coursesInstructor: Joi.string().required(),
    resources: Joi.array(),
    coursesHistory: Joi.array(),
  }),
};

const inscoursesDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const insCoursesHistoryDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
    hid: Joi.string().required(),
  }),
};

module.exports = {
  inscoursesCreate,
  inscoursesDetails,
  inscoursesUpdate,
  inscoursesDelete,
  insCoursesHistoryDelete,
};
