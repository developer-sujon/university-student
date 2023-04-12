//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { Scholarship } = require('../models');
const { commonService } = require('.');

/**
 * @desc scholarship create
 * @returns {Promise<Scholarship>}
 */

const scholarshipCreate = (request) => {
  const { studentID, role } = request.user;
  return new Scholarship({ studentID, ...request.body }).save();
};

/**
 * @desc scholarship dropDown
 * @returns {Promise<[Scholarship]>}
 */

const scholarshipDropDown = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    label: '$title',
    value: '$_id',
  };

  return commonService.findService(Scholarship, matchQuery, projection);
};

/**
 * @desc scholarship list
 * @returns {Promise<[Scholarship]>}
 */

const scholarshipList = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    role: 0,
  };

  return commonService.findService(Scholarship, matchQuery, projection);
};

/**
 * @desc scholarship details
 * @returns {Promise<Scholarship>}
 */

const scholarshipDetails = (request) => {
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

  return commonService.findOneService(Scholarship, matchQuery, projection);
};

/**
 * @desc scholarship update
 * @returns {Promise<Scholarship>}
 */

const scholarshipUpdate = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('scholarship not found');
  return commonService.updateService(Scholarship, matchQuery, request.body, errorMessage);
};

/**
 * @desc scholarship delete
 * @returns {Promise<Scholarship>}
 */

const scholarshipDelete = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('scholarship not found');
  return commonService.deleteService(Scholarship, matchQuery, errorMessage);
};

module.exports = {
  scholarshipCreate,
  scholarshipDropDown,
  scholarshipList,
  scholarshipDetails,
  scholarshipUpdate,
  scholarshipDelete,
};
