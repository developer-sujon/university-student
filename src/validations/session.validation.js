//External Lib Import
const Joi = require('joi');

//Internal Lib Import
const { objectId } = require('./custom.validation');

const sessionCreate = {
  body: Joi.object().keys({
    sessionName: Joi.string().required(),
  }),
};

const sessionDetails = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const sessionUpdate = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    sessionName: Joi.string().required(),
  }),
};

const sessionDelete = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  sessionCreate,
  sessionDetails,
  sessionUpdate,
  sessionDelete,
};
