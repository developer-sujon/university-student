//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const scholarshipCreate = {
  body: Joi.object().keys({
    subject: Joi.string().required(),
    instructor: Joi.string().required(),
    assessmentType: Joi.string().valid('QUIZ', 'MID_TERM', 'FINAL'),
    reason: Joi.string().required(),
    adminRemark: Joi.string(),
    attach: Joi.object(),
    status: Joi.string().valid('REJECTED', 'APPROVED', 'PENDING'),
  }),
};

const scholarshipDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const scholarshipUpdate = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    subject: Joi.string().required(),
    instructor: Joi.string().required(),
    assessmentType: Joi.string().valid('QUIZ', 'MID_TERM', 'FINAL'),
    reason: Joi.string().required(),
    adminRemark: Joi.string(),
    attach: Joi.object(),
    status: Joi.string().valid('REJECTED', 'APPROVED', 'PENDING'),
  }),
};

const scholarshipDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  scholarshipCreate,
  scholarshipDetails,
  scholarshipUpdate,
  scholarshipDelete,
};
