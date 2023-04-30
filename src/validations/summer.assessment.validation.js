//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const summerAssessmentCreate = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    degree: Joi.string().required(),
    session: Joi.string().required(),
    currentSemester: Joi.string().required(),
    motive: Joi.string().required(),
    enrolls: Joi.array(),
    attach: Joi.object(),
    status: Joi.string().valid('REJECTED', 'APPROVED', 'PENDING'),
  }),
};

const summerAssessmentDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const summerAssessmentUpdate = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    degree: Joi.string().required(),
    session: Joi.string().required(),
    currentSemester: Joi.string().required(),
    motive: Joi.string().required(),
    enrolls: Joi.array(),
    attach: Joi.object(),
    status: Joi.string().valid('REJECTED', 'APPROVED', 'PENDING'),
  }),
};

const summerAssessmentDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  summerAssessmentCreate,
  summerAssessmentDetails,
  summerAssessmentUpdate,
  summerAssessmentDelete,
};
