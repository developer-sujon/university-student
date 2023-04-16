//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { Courses } = require('../models');
const { commonService } = require('.');

/**
 * @desc courses create
 * @returns {Promise<Courses>}
 */

const coursesCreate = (request) => {
  const { studentID, role } = request.user;
  return new Courses({ studentID, ...request.body }).save();
};

/**
 * @desc courses dropDown
 * @returns {Promise<[Courses]>}
 */

const coursesDropDown = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    label: '$title',
    value: '$_id',
  };

  return commonService.findService(Courses, matchQuery, projection);
};

/**
 * @desc courses list
 * @returns {Promise<[Courses]>}
 */

const coursesList = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  // if (role === 'STUDENT') {
  //   matchQuery.studentID = ObjectId(studentID);
  // }

  const projection = {
    role: 0,
  };

  return commonService.findService(Courses, matchQuery, projection);
};

/**
 * @desc courses details
 * @returns {Promise<Courses>}
 */

const coursesDetails = (request) => {
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

  return commonService.findOneService(Courses, matchQuery, projection);
};

/**
 * @desc courses update
 * @returns {Promise<Courses>}
 */

const coursesUpdate = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('courses not found');
  return commonService.updateService(Courses, matchQuery, request.body, errorMessage);
};

/**
 * @desc courses delete
 * @returns {Promise<courses>}
 */

const coursesDelete = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('courses not found');
  return commonService.deleteService(Courses, matchQuery, errorMessage);
};

module.exports = {
  coursesCreate,
  coursesDropDown,
  coursesList,
  coursesDetails,
  coursesUpdate,
  coursesDelete,
};
