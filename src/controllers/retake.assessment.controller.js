//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { retakeAssessmentService } = require('../services');
/**
 * @desc retakeAssessment create
 * @access private
 * @route /api/v1/retakeAssessment/retakeAssessmentCreate
 * @methud POST
 */

const retakeAssessmentCreate = catchAsync(async (req, res) => {
  const data = await retakeAssessmentService.retakeAssessmentCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'retakeAssessment create successful', data });
});

/**
 * @desc retakeAssessment dropDown
 * @access private
 * @route /api/v1/retakeAssessment/retakeAssessmentdropDown
 * @methud GET
 */

const retakeAssessmentDropDown = catchAsync(async (req, res) => {
  const data = await retakeAssessmentService.retakeAssessmentDropDown(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc retakeAssessment list
 * @access private
 * @route /api/v1/retakeAssessment/retakeAssessmentList
 * @methud GET
 */

const retakeAssessmentList = catchAsync(async (req, res) => {
  const data = await retakeAssessmentService.retakeAssessmentList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc retakeAssessment details
 * @access private
 * @route /api/v1/retakeAssessment/retakeAssessmentDetails/:id
 * @methud GET
 */

const retakeAssessmentDetails = catchAsync(async (req, res) => {
  const data = await retakeAssessmentService.retakeAssessmentDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc retakeAssessment update
 * @access private
 * @route /api/v1/retakeAssessment/retakeAssessmentUpdate/:id
 * @methud PATCH
 */

const retakeAssessmentUpdate = catchAsync(async (req, res) => {
  const data = await retakeAssessmentService.retakeAssessmentUpdate(req);
  res.json({ status: true, message: 'retakeAssessment update successful', data });
});

/**
 * @desc retakeAssessment delete
 * @access private
 * @route /api/v1/retakeAssessment/retakeAssessmentDelete/:id
 * @methud DELETE
 */

const retakeAssessmentDelete = catchAsync(async (req, res) => {
  const data = await retakeAssessmentService.retakeAssessmentDelete(req);
  res.json({ status: true, message: 'retakeAssessment delete successful', data });
});

module.exports = {
  retakeAssessmentCreate,
  retakeAssessmentDropDown,
  retakeAssessmentList,
  retakeAssessmentDetails,
  retakeAssessmentUpdate,
  retakeAssessmentDelete,
};
