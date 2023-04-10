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
  const { studentID } = request.user;
  return new Scholarship({ studentID, ...request.body }).save();
};

/**
 * @desc scholarship dropDown
 * @returns {Promise<[Scholarship]>}
 */

const scholarshipDropDown = (request) => {
  const { studentID } = request.user;
  const matchQuery = {
    studentID: ObjectId(studentID),
  };

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
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
  };

  const projection = {
    studentID: 0,
  };

  return commonService.findService(Scholarship, matchQuery, projection);
};

/**
 * @desc scholarship details
 * @returns {Promise<Scholarship>}
 */

const scholarshipDetails = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };

  const projection = {
    studentID: 0,
  };

  return commonService.findOneService(Scholarship, matchQuery, projection);
};

/**
 * @desc scholarship update
 * @returns {Promise<Scholarship>}
 */

const scholarshipUpdate = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };
  const errorMessage = request.t('scholarship not found');
  return commonService.updateService(Scholarship, matchQuery, request.body, errorMessage);
};

/**
 * @desc scholarship delete
 * @returns {Promise<Scholarship>}
 */

const scholarshipDelete = (request) => {
  const { studentID } = request.user;

  const matchQuery = {
    studentID: ObjectId(studentID),
    _id: ObjectId(request.params.id),
  };
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
