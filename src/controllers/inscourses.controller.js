//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { inscoursesService } = require('../services');
/**
 * @desc inscourses create
 * @access private
 * @route /api/v1/inscourses/inscoursesCreate
 * @methud POST
 */

const inscoursesCreate = catchAsync(async (req, res) => {
  const data = await inscoursesService.inscoursesCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'inscourses create successful', data });
});

/**
 * @desc inscourses list
 * @access private
 * @route /api/v1/inscourses/inscoursesList
 * @methud GET
 */

const inscoursesList = catchAsync(async (req, res) => {
  const data = await inscoursesService.inscoursesList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc inscourses details
 * @access private
 * @route /api/v1/inscourses/inscoursesDetails/:id
 * @methud GET
 */

const inscoursesDetails = catchAsync(async (req, res) => {
  const data = await inscoursesService.inscoursesDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc inscourses update
 * @access private
 * @route /api/v1/inscourses/inscoursesUpdate/:id
 * @methud PATCH
 */

const inscoursesUpdate = catchAsync(async (req, res) => {
  const data = await inscoursesService.inscoursesUpdate(req);
  res.json({ status: true, message: 'inscourses update successful', data });
});

/**
 * @desc inscourses delete
 * @access private
 * @route /api/v1/inscourses/inscoursesDelete/:id
 * @methud DELETE
 */

const inscoursesDelete = catchAsync(async (req, res) => {
  const data = await inscoursesService.inscoursesDelete(req);
  res.json({ status: true, message: 'inscourses delete successful', data });
});

/**
 * @desc inscourses history delete
 * @access private
 * @route /api/v1/inscourses/insCoursesHistoryDelete/:id/:hid
 * @methud DELETE
 */

const insCoursesHistoryDelete = catchAsync(async (req, res) => {
  const data = await inscoursesService.insCoursesHistoryDelete(req);
  res.json({ status: true, message: 'inscourses delete successful', data });
});

module.exports = {
  inscoursesCreate,
  inscoursesList,
  inscoursesDetails,
  inscoursesUpdate,
  inscoursesDelete,
  insCoursesHistoryDelete,
};
