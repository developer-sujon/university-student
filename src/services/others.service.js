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
  const { studentID, role } = request.user;
  return new Others({ studentID, ...request.body }).save();
};

/**
 * @desc others dropDown
 * @returns {Promise<[Others]>}
 */

const othersDropDown = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

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
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    role: 0,
  };

  return commonService.findService(Others, matchQuery, projection);
};

/**
 * @desc others details
 * @returns {Promise<Others>}
 */

const othersDetails = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    role: 0,
  };

  return commonService.findOneService(Others, matchQuery, projection);
};

/**
 * @desc others update
 * @returns {Promise<Others>}
 */

const othersUpdate = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('others not found');
  return commonService.updateService(Others, matchQuery, request.body, errorMessage);
};

/**
 * @desc others delete
 * @returns {Promise<Others>}
 */

const othersDelete = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
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
