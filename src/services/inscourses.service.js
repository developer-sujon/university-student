//External Lib Import
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

//Internal Lib Import
const { InsCourses } = require('../models');
const { commonService } = require('.');

/**
 * @desc inscourses create
 * @returns {Promise<InsCourses>}
 */

const inscoursesCreate = (request) => {
  return new InsCourses({ ...request.body, role: 'inscourses' }).save();
};

/**
 * @desc inscourses list
 * @returns {Promise<[InsCourses]>}
 */

const inscoursesList = () => {
  const matchQuery = {};

  const projection = {
    role: 0,
  };

  return commonService.findService(InsCourses, matchQuery, projection);
};

/**
 * @desc inscourses details
 * @returns {Promise<InsCourses>}
 */

const inscoursesDetails = (request) => {
  const matchQuery = {
    _id: ObjectId(request.params.id),
  };

  const projection = {
    role: 0,
  };

  return commonService.findOneService(InsCourses, matchQuery, projection);
};

/**
 * @desc inscourses update
 * @returns {Promise<InsCourses>}
 */

const inscoursesUpdate = (request) => {
  const matchQuery = {
    _id: ObjectId(request.params.id),
  };

  const errorMessage = request.t('inscourses not found');
  return commonService.updateService(InsCourses, matchQuery, request.body, errorMessage);
};

/**
 * @desc inscourses delete
 * @returns {Promise<InsCourses>}
 */

const inscoursesDelete = (request) => {
  const matchQuery = {
    _id: ObjectId(request.params.id),
  };

  const errorMessage = request.t('inscourses not found');
  return commonService.deleteService(InsCourses, matchQuery, errorMessage);
};

module.exports = {
  inscoursesCreate,
  inscoursesList,
  inscoursesDetails,
  inscoursesUpdate,
  inscoursesDelete,
};
