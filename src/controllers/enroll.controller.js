//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { enrollService } = require('../services');
/**
 * @desc enroll create
 * @access private
 * @route /api/v1/enroll/enrollCreate
 * @methud POST
 */

const enrollCreate = catchAsync(async (req, res) => {
  const data = await enrollService.enrollCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'enroll create successful', data });
});

/**
 * @desc enroll dropDown
 * @access private
 * @route /api/v1/enroll/enrolldropDown
 * @methud GET
 */

const enrollDropDown = catchAsync(async (req, res) => {
  const data = await enrollService.enrollDropDown(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc enroll list
 * @access private
 * @route /api/v1/enroll/enrollList
 * @methud GET
 */

const enrollList = catchAsync(async (req, res) => {
  const data = await enrollService.enrollList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc enroll list by coursesID
 * @access private
 * @route /api/v1/enroll/enrollListByCoursesID/:coursesID
 * @methud GET
 */

const enrollListByCoursesID = catchAsync(async (req, res) => {
  const data = await enrollService.enrollListByCoursesID(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc enroll details
 * @access private
 * @route /api/v1/enroll/enrollDetails/:id
 * @methud GET
 */

const enrollDetails = catchAsync(async (req, res) => {
  const data = await enrollService.enrollDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc enroll update
 * @access private
 * @route /api/v1/enroll/enrollUpdate/:id
 * @methud PATCH
 */

const enrollUpdate = catchAsync(async (req, res) => {
  const data = await enrollService.enrollUpdate(req);
  res.json({ status: true, message: 'enroll update successful', data });
});

/**
 * @desc enroll delete
 * @access private
 * @route /api/v1/enroll/enrollDelete/:id
 * @methud DELETE
 */

const enrollDelete = catchAsync(async (req, res) => {
  const data = await enrollService.enrollDelete(req);
  res.json({ status: true, message: 'enroll delete successful', data });
});

module.exports = {
  enrollCreate,
  enrollDropDown,
  enrollList,
  enrollDetails,
  enrollUpdate,
  enrollDelete,
  enrollListByCoursesID,
};
