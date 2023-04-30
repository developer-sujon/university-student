//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { SummerAssessment } = require('../models');
const { commonService } = require('.');

/**
 * @desc summerAssessment create
 * @returns {Promise<SummerAssessment>}
 */

const summerAssessmentCreate = (request) => {
  const { studentID, role } = request.user;
  return new SummerAssessment({ studentID, ...request.body }).save();
};

/**
 * @desc summerAssessment dropDown
 * @returns {Promise<[SummerAssessment]>}
 */

const summerAssessmentDropDown = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    label: '$title',
    value: '$_id',
  };

  return commonService.findService(SummerAssessment, matchQuery, projection);
};

/**
 * @desc summerAssessment list
 * @returns {Promise<[SummerAssessment]>}
 */

const summerAssessmentList = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    role: 0,
  };

  return commonService.findService(SummerAssessment, matchQuery, projection);
};

/**
 * @desc summerAssessment details
 * @returns {Promise<SummerAssessment>}
 */

const summerAssessmentDetails = (request) => {
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

  return commonService.findOneService(SummerAssessment, matchQuery, projection);
};

/**
 * @desc summerAssessment update
 * @returns {Promise<SummerAssessment>}
 */

const summerAssessmentUpdate = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('summerAssessment not found');
  return commonService.updateService(SummerAssessment, matchQuery, request.body, errorMessage);
};

/**
 * @desc summerAssessment delete
 * @returns {Promise<SummerAssessment>}
 */

const summerAssessmentDelete = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('summerAssessment not found');
  return commonService.deleteService(SummerAssessment, matchQuery, errorMessage);
};

module.exports = {
  summerAssessmentCreate,
  summerAssessmentDropDown,
  summerAssessmentList,
  summerAssessmentDetails,
  summerAssessmentUpdate,
  summerAssessmentDelete,
};
