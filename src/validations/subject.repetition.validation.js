//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const subjectRepetitionCreate = {
  body: Joi.object().keys({
    studentName: Joi.string().required(),
    rollNo: Joi.string().required(),
    session: Joi.string().required(),
    sessionRegistration: Joi.string().required(),
    sessionCGPA: Joi.string().required(),
    adminRemark: Joi.string(),
    attach: Joi.object(),
    status: Joi.string().valid('REJECTED', 'APPROVED', 'PENDING'),
  }),
};

const subjectRepetitionDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const subjectRepetitionUpdate = {
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

const subjectRepetitionDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  subjectRepetitionCreate,
  subjectRepetitionDetails,
  subjectRepetitionUpdate,
  subjectRepetitionDelete,
};
