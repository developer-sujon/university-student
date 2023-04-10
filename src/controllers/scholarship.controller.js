//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { scholarshipService } = require('../services');
/**
 * @desc scholarship create
 * @access private
 * @route /api/v1/scholarship/scholarshipCreate
 * @methud POST
 */

const scholarshipCreate = catchAsync(async (req, res) => {
  const data = await scholarshipService.scholarshipCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'scholarship create successful', data });
});

/**
 * @desc scholarship dropDown
 * @access private
 * @route /api/v1/scholarship/scholarshipdropDown
 * @methud GET
 */

const scholarshipDropDown = catchAsync(async (req, res) => {
  const data = await scholarshipService.scholarshipDropDown(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc scholarship list
 * @access private
 * @route /api/v1/scholarship/scholarshipList
 * @methud GET
 */

const scholarshipList = catchAsync(async (req, res) => {
  const data = await scholarshipService.scholarshipList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc scholarship details
 * @access private
 * @route /api/v1/scholarship/scholarshipDetails/:id
 * @methud GET
 */

const scholarshipDetails = catchAsync(async (req, res) => {
  const data = await scholarshipService.scholarshipDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc scholarship update
 * @access private
 * @route /api/v1/scholarship/scholarshipUpdate/:id
 * @methud PATCH
 */

const scholarshipUpdate = catchAsync(async (req, res) => {
  const data = await scholarshipService.scholarshipUpdate(req);
  res.json({ status: true, message: 'scholarship update successful', data });
});

/**
 * @desc scholarship delete
 * @access private
 * @route /api/v1/scholarship/scholarshipDelete/:id
 * @methud DELETE
 */

const scholarshipDelete = catchAsync(async (req, res) => {
  const data = await scholarshipService.scholarshipDelete(req);
  res.json({ status: true, message: 'scholarship delete successful', data });
});

module.exports = {
  scholarshipCreate,
  scholarshipDropDown,
  scholarshipList,
  scholarshipDetails,
  scholarshipUpdate,
  scholarshipDelete,
};
