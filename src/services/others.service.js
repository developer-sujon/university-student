//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { Others } = require('../models');
const { commonService } = require('.');

/**
 * @desc others create
 * @returns {Promise<Others>}
 */

const othersCreate = (request) => {
  const { studentID } = request.user;
  return new Others({ studentID, ...request.body }).save();
};

/**
 * @desc others dropDown
 * @returns {Promise<[Others]>}
 */

const othersDropDown = (request) => {
  const { studentID } = request.user;
  const matchQuery = {
    studentID: ObjectId(studentID),
  };

  const projection = {
    label: '$title',
    value: '$_id',
  };

  return commonService.findService(Others, matchQuery, projection);
};

/**
 * @desc others list
 * @returns {Promise<[Others]>}
 */

const othersList = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
  };

  const projection = {
    studentID: 0,
  };

  return commonService.findService(Others, matchQuery, projection);
};

/**
 * @desc others details
 * @returns {Promise<Others>}
 */

const othersDetails = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };

  const projection = {
    studentID: 0,
  };

  return commonService.findOneService(Others, matchQuery, projection);
};

/**
 * @desc others update
 * @returns {Promise<Others>}
 */

const othersUpdate = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };
  const errorMessage = request.t('others not found');
  return commonService.updateService(Others, matchQuery, request.body, errorMessage);
};

/**
 * @desc others delete
 * @returns {Promise<Others>}
 */

const othersDelete = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };
  const errorMessage = request.t('others not found');
  return commonService.deleteService(Others, matchQuery, errorMessage);
};

module.exports = {
  othersCreate,
  othersDropDown,
  othersList,
  othersDetails,
  othersUpdate,
  othersDelete,
};
