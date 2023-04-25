//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { Session } = require('../models');
const { commonService } = require('.');

/**
 * @desc session create
 * @returns {Promise<Session>}
 */

const sessionCreate = (request) => {
  const { studentID, role } = request.user;
  return new Session({ studentID, ...request.body }).save();
};

/**
 * @desc session dropDown
 * @returns {Promise<[Session]>}
 */

const sessionDropDown = (request) => {
  // const { studentID, role } = request.user;

  const matchQuery = {};
  // if (role === 'STUDENT') {
  //   matchQuery.studentID = ObjectId(studentID);
  // }

  const projection = {
    label: '$sessionName',
    value: '$_id',
  };

  return commonService.findService(Session, matchQuery, projection);
};

/**
 * @desc session list
 * @returns {Promise<[Session]>}
 */

const sessionList = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {};
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }

  const projection = {
    role: 0,
  };

  return commonService.findService(Session, matchQuery, projection);
};

/**
 * @desc session details
 * @returns {Promise<Session>}
 */

const sessionDetails = (request) => {
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

  return commonService.findOneService(Session, matchQuery, projection);
};

/**
 * @desc session update
 * @returns {Promise<Session>}
 */

const sessionUpdate = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('session not found');
  return commonService.updateService(Session, matchQuery, request.body, errorMessage);
};

/**
 * @desc session delete
 * @returns {Promise<Session>}
 */

const sessionDelete = (request) => {
  const { studentID, role } = request.user;

  const matchQuery = {
    _id: ObjectId(request.params.id),
  };
  if (role === 'STUDENT') {
    matchQuery.studentID = ObjectId(studentID);
  }
  const errorMessage = request.t('session not found');
  return commonService.deleteService(Session, matchQuery, errorMessage);
};

module.exports = {
  sessionCreate,
  sessionDropDown,
  sessionList,
  sessionDetails,
  sessionUpdate,
  sessionDelete,
};
