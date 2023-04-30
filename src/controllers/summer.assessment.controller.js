//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { summerAssessmentService } = require('../services');
/**
 * @desc summerAssessment create
 * @access private
 * @route /api/v1/summerAssessment/summerAssessmentCreate
 * @methud POST
 */

const summerAssessmentCreate = catchAsync(async (req, res) => {
  const data = await summerAssessmentService.summerAssessmentCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'summerAssessment create successful', data });
});

/**
 * @desc summerAssessment dropDown
 * @access private
 * @route /api/v1/summerAssessment/summerAssessmentdropDown
 * @methud GET
 */

const summerAssessmentDropDown = catchAsync(async (req, res) => {
  const data = await summerAssessmentService.summerAssessmentDropDown(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc summerAssessment list
 * @access private
 * @route /api/v1/summerAssessment/summerAssessmentList
 * @methud GET
 */

const summerAssessmentList = catchAsync(async (req, res) => {
  const data = await summerAssessmentService.summerAssessmentList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc summerAssessment details
 * @access private
 * @route /api/v1/summerAssessment/summerAssessmentDetails/:id
 * @methud GET
 */

const summerAssessmentDetails = catchAsync(async (req, res) => {
  const data = await summerAssessmentService.summerAssessmentDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc summerAssessment update
 * @access private
 * @route /api/v1/summerAssessment/summerAssessmentUpdate/:id
 * @methud PATCH
 */

const summerAssessmentUpdate = catchAsync(async (req, res) => {
  const data = await summerAssessmentService.summerAssessmentUpdate(req);
  res.json({ status: true, message: 'summerAssessment update successful', data });
});

/**
 * @desc summerAssessment delete
 * @access private
 * @route /api/v1/summerAssessment/summerAssessmentDelete/:id
 * @methud DELETE
 */

const summerAssessmentDelete = catchAsync(async (req, res) => {
  const data = await summerAssessmentService.summerAssessmentDelete(req);
  res.json({ status: true, message: 'summerAssessment delete successful', data });
});

module.exports = {
  summerAssessmentCreate,
  summerAssessmentDropDown,
  summerAssessmentList,
  summerAssessmentDetails,
  summerAssessmentUpdate,
  summerAssessmentDelete,
};
