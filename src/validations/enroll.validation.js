//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const enrollCreate = {
  body: Joi.object().keys({
    coursesID: Joi.string().custom(objectId).required(),
  }),
};

const enrollDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const enrollListByCoursesID = {
  params: Joi.object().keys({
    coursesID: Joi.string().custom(objectId).required(),
  }),
};

const enrollUpdate = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    coursesID: Joi.string().custom(objectId).required(),
  }),
};

const enrollDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  enrollCreate,
  enrollDetails,
  enrollUpdate,
  enrollDelete,
  enrollListByCoursesID,
};
