//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const leaveCreate = {
  body: Joi.object().keys({
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    duration: Joi.number().min(1).max(30).required(),
    subject: Joi.string().required(),
    reason: Joi.string().required(),
    adminRemark: Joi.string(),
    attach: Joi.object(),
    status: Joi.string().valid('REJECTED', 'APPROVED', 'PENDING'),
  }),
};

const leaveDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const leaveUpdate = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
    duration: Joi.number().min(1).max(30).required(),
    subject: Joi.string().required(),
    reason: Joi.string().required(),
    adminRemark: Joi.string(),
    attach: Joi.object(),
    status: Joi.string().valid('REJECTED', 'APPROVED', 'PENDING'),
  }),
};

const leaveDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  leaveCreate,
  leaveDetails,
  leaveUpdate,
  leaveDelete,
};
