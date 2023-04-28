//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { User } = require('../models');
const { commonService } = require('.');

/**
 * @desc instructor create
 * @returns {Promise<User>}
 */

const instructorCreate = (request) => {
  return new User({ ...request.body, role: 'INSTRUCTOR' }).save();
};

/**
 * @desc instructor list
 * @returns {Promise<[User]>}
 */

const instructorList = () => {
  const matchQuery = {
    role: 'INSTRUCTOR',
  };

  const projection = {
    role: 0,
  };

  return commonService.findService(User, matchQuery, projection);
};

/**
 * @desc instructor details
 * @returns {Promise<User>}
 */

const instructorDetails = (request) => {
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

  return commonService.findOneService(User, matchQuery, projection);
};

/**
 * @desc instructor update
 * @returns {Promise<User>}
 */

const instructorUpdate = (request) => {
  const matchQuery = {
    _id: ObjectId(request.params.id),
  };

  const errorMessage = request.t('instructor not found');
  return commonService.updateService(User, matchQuery, request.body, errorMessage);
};

/**
 * @desc instructor delete
 * @returns {Promise<User>}
 */

const instructorDelete = (request) => {
  const matchQuery = {
    _id: ObjectId(request.params.id),
  };

  const errorMessage = request.t('instructor not found');
  return commonService.deleteService(User, matchQuery, errorMessage);
};

module.exports = {
  instructorCreate,
  instructorList,
  instructorDetails,
  instructorUpdate,
  instructorDelete,
};
