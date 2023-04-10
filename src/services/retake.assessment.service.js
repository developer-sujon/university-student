//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { RetakeAssessment } = require('../models');
const { commonService } = require('.');

/**
 * @desc retakeAssessment create
 * @returns {Promise<RetakeAssessment>}
 */

const retakeAssessmentCreate = (request) => {
  const { studentID } = request.user;
  return new RetakeAssessment({ studentID, ...request.body }).save();
};

/**
 * @desc retakeAssessment dropDown
 * @returns {Promise<[RetakeAssessment]>}
 */

const retakeAssessmentDropDown = (request) => {
  const { studentID } = request.user;
  const matchQuery = {
    studentID: ObjectId(studentID),
  };

  const projection = {
    label: '$title',
    value: '$_id',
  };

  return commonService.findService(RetakeAssessment, matchQuery, projection);
};

/**
 * @desc retakeAssessment list
 * @returns {Promise<[RetakeAssessment]>}
 */

const retakeAssessmentList = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
  };

  const projection = {
    studentID: 0,
  };

  return commonService.findService(RetakeAssessment, matchQuery, projection);
};

/**
 * @desc retakeAssessment details
 * @returns {Promise<RetakeAssessment>}
 */

const retakeAssessmentDetails = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };

  const projection = {
    studentID: 0,
  };

  return commonService.findOneService(RetakeAssessment, matchQuery, projection);
};

/**
 * @desc retakeAssessment update
 * @returns {Promise<RetakeAssessment>}
 */

const retakeAssessmentUpdate = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };
  const errorMessage = request.t('retakeAssessment not found');
  return commonService.updateService(RetakeAssessment, matchQuery, request.body, errorMessage);
};

/**
 * @desc retakeAssessment delete
 * @returns {Promise<RetakeAssessment>}
 */

const retakeAssessmentDelete = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };
  const errorMessage = request.t('retakeAssessment not found');
  return commonService.deleteService(RetakeAssessment, matchQuery, errorMessage);
};

module.exports = {
  retakeAssessmentCreate,
  retakeAssessmentDropDown,
  retakeAssessmentList,
  retakeAssessmentDetails,
  retakeAssessmentUpdate,
  retakeAssessmentDelete,
};
