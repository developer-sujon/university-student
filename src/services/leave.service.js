//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { Leave } = require('../models');
const { commonService } = require('.');

/**
 * @desc leave create
 * @returns {Promise<Leave>}
 */

const leaveCreate = (request) => {
  const { studentID, role } = request.user;
  return new Leave({ studentID, ...request.body }).save();
};

/**
 * @desc leave dropDown
 * @returns {Promise<[Leave]>}
 */

const leaveDropDown = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    label: '$title',
    value: '$_id',
  };

  return commonService.findService(Leave, matchQuery, projection);
};

/**
 * @desc leave list
 * @returns {Promise<[Leave]>}
 */

const leaveList = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    role: 0,
  };

  return commonService.findService(Leave, matchQuery, projection);
};

/**
 * @desc leave details
 * @returns {Promise<Leave>}
 */

const leaveDetails = (request) => {
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

  return commonService.findOneService(Leave, matchQuery, projection);
};

/**
 * @desc leave update
 * @returns {Promise<Leave>}
 */

const leaveUpdate = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('leave not found');
  return commonService.updateService(Leave, matchQuery, request.body, errorMessage);
};

/**
 * @desc leave delete
 * @returns {Promise<Leave>}
 */

const leaveDelete = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('leave not found');
  return commonService.deleteService(Leave, matchQuery, errorMessage);
};

module.exports = {
  leaveCreate,
  leaveDropDown,
  leaveList,
  leaveDetails,
  leaveUpdate,
  leaveDelete,
};
