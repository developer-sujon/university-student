//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { SubjectRepetition } = require('../models');
const { commonService } = require('.');

/**
 * @desc subjectRepetition create
 * @returns {Promise<SubjectRepetition>}
 */

const subjectRepetitionCreate = (request) => {
  const { studentID } = request.user;
  return new SubjectRepetition({ studentID, ...request.body }).save();
};

/**
 * @desc subjectRepetition dropDown
 * @returns {Promise<[SubjectRepetition]>}
 */

const subjectRepetitionDropDown = (request) => {
  const { studentID } = request.user;
  const matchQuery = {
    studentID: ObjectId(studentID),
  };

  const projection = {
    label: '$title',
    value: '$_id',
  };

  return commonService.findService(SubjectRepetition, matchQuery, projection);
};

/**
 * @desc subjectRepetition list
 * @returns {Promise<[SubjectRepetition]>}
 */

const subjectRepetitionList = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
  };

  const projection = {
    studentID: 0,
  };

  return commonService.findService(SubjectRepetition, matchQuery, projection);
};

/**
 * @desc subjectRepetition details
 * @returns {Promise<SubjectRepetition>}
 */

const subjectRepetitionDetails = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };

  const projection = {
    studentID: 0,
  };

  return commonService.findOneService(SubjectRepetition, matchQuery, projection);
};

/**
 * @desc subjectRepetition update
 * @returns {Promise<SubjectRepetition>}
 */

const subjectRepetitionUpdate = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };
  const errorMessage = request.t('subjectRepetition not found');
  return commonService.updateService(SubjectRepetition, matchQuery, request.body, errorMessage);
};

/**
 * @desc subjectRepetition delete
 * @returns {Promise<SubjectRepetition>}
 */

const subjectRepetitionDelete = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };
  const errorMessage = request.t('subjectRepetition not found');
  return commonService.deleteService(SubjectRepetition, matchQuery, errorMessage);
};

module.exports = {
  subjectRepetitionCreate,
  subjectRepetitionDropDown,
  subjectRepetitionList,
  subjectRepetitionDetails,
  subjectRepetitionUpdate,
  subjectRepetitionDelete,
};
