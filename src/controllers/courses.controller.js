//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { coursesService } = require('../services');
/**
 * @desc courses create
 * @access private
 * @route /api/v1/courses/coursesCreate
 * @methud POST
 */

const coursesCreate = catchAsync(async (req, res) => {
  const data = await coursesService.coursesCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'courses create successful', data });
});

/**
 * @desc courses dropDown
 * @access private
 * @route /api/v1/courses/coursesdropDown
 * @methud GET
 */

const coursesDropDown = catchAsync(async (req, res) => {
  const data = await coursesService.coursesDropDown(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc courses list
 * @access private
 * @route /api/v1/courses/coursesList
 * @methud GET
 */

const coursesList = catchAsync(async (req, res) => {
  const data = await coursesService.coursesList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc courses details
 * @access private
 * @route /api/v1/courses/coursesDetails/:id
 * @methud GET
 */

const coursesDetails = catchAsync(async (req, res) => {
  const data = await coursesService.coursesDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc courses update
 * @access private
 * @route /api/v1/courses/coursesUpdate/:id
 * @methud PATCH
 */

const coursesUpdate = catchAsync(async (req, res) => {
  const data = await coursesService.coursesUpdate(req);
  res.json({ status: true, message: 'courses update successful', data });
});

/**
 * @desc courses delete
 * @access private
 * @route /api/v1/courses/coursesDelete/:id
 * @methud DELETE
 */

const coursesDelete = catchAsync(async (req, res) => {
  const data = await coursesService.coursesDelete(req);
  res.json({ status: true, message: 'courses delete successful', data });
});

module.exports = {
  coursesCreate,
  coursesDropDown,
  coursesList,
  coursesDetails,
  coursesUpdate,
  coursesDelete,
};
