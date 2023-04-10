//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const retakeAssessmentCreate = {
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

const retakeAssessmentDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const retakeAssessmentUpdate = {
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

const retakeAssessmentDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  retakeAssessmentCreate,
  retakeAssessmentDetails,
  retakeAssessmentUpdate,
  retakeAssessmentDelete,
};
