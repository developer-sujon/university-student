//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { Enroll } = require('../models');
const { commonService } = require('.');

/**
 * @desc enroll create
 * @returns {Promise<Enroll>}
 */

const enrollCreate = (request) => {
  const { studentID } = request.user;
  return new Enroll({ studentID, ...request.body }).save();
};

/**
 * @desc enroll dropDown
 * @returns {Promise<[Enroll]>}
 */

const enrollDropDown = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    label: '$title',
    value: '$_id',
  };

  return commonService.findService(Enroll, matchQuery, projection);
};

/**
 * @desc enroll list
 * @returns {Promise<[Enroll]>}
 */

const enrollList = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    role: 0,
  };

  const populateOne = { path: 'studentID', select: 'name email address _id' };
  const populateTwo = {
    path: 'coursesID',
    select: 'coursesCode coursesName coursesInstructor seatsLimit allowSessions',
  };

  return commonService.findServicePopulateTwo(Enroll, matchQuery, projection, populateOne, populateTwo);
};

/**
 * @desc enroll details
 * @returns {Promise<Enroll>}
 */

const enrollDetails = (request) => {
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

  return commonService.findOneService(Enroll, matchQuery, projection);
};

/**
 * @desc enroll update
 * @returns {Promise<Enroll>}
 */

const enrollUpdate = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('enroll not found');
  return commonService.updateService(Enroll, matchQuery, request.body, errorMessage);
};

/**
 * @desc enroll delete
 * @returns {Promise<Enroll>}
 */

const enrollDelete = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('enroll not found');
  return commonService.deleteService(Enroll, matchQuery, errorMessage);
};

module.exports = {
  enrollCreate,
  enrollDropDown,
  enrollList,
  enrollDetails,
  enrollUpdate,
  enrollDelete,
};
