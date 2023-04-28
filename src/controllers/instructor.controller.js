//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { instructorService } = require('../services');
/**
 * @desc instructor create
 * @access private
 * @route /api/v1/instructor/instructorCreate
 * @methud POST
 */

const instructorCreate = catchAsync(async (req, res) => {
  const data = await instructorService.instructorCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'instructor create successful', data });
});

/**
 * @desc instructor list
 * @access private
 * @route /api/v1/instructor/instructorList
 * @methud GET
 */

const instructorList = catchAsync(async (req, res) => {
  const data = await instructorService.instructorList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc instructor details
 * @access private
 * @route /api/v1/instructor/instructorDetails/:id
 * @methud GET
 */

const instructorDetails = catchAsync(async (req, res) => {
  const data = await instructorService.instructorDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc instructor update
 * @access private
 * @route /api/v1/instructor/instructorUpdate/:id
 * @methud PATCH
 */

const instructorUpdate = catchAsync(async (req, res) => {
  const data = await instructorService.instructorUpdate(req);
  res.json({ status: true, message: 'instructor update successful', data });
});

/**
 * @desc instructor delete
 * @access private
 * @route /api/v1/instructor/instructorDelete/:id
 * @methud DELETE
 */

const instructorDelete = catchAsync(async (req, res) => {
  const data = await instructorService.instructorDelete(req);
  res.json({ status: true, message: 'instructor delete successful', data });
});

module.exports = {
  instructorCreate,
  instructorList,
  instructorDetails,
  instructorUpdate,
  instructorDelete,
};
