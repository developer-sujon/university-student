//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const othersCreate = {
  body: Joi.object().keys({
    subject: Joi.string().required(),
    description: Joi.string().required(),
    adminRemark: Joi.string(),
    attach: Joi.object(),
    status: Joi.string().valid('REJECTED', 'APPROVED', 'PENDING'),
  }),
};

const othersDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const othersUpdate = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    subject: Joi.string().required(),
    description: Joi.string().required(),
    adminRemark: Joi.string(),
    attach: Joi.object(),
    status: Joi.string().valid('REJECTED', 'APPROVED', 'PENDING'),
  }),
};

const othersDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  othersCreate,
  othersDetails,
  othersUpdate,
  othersDelete,
};
