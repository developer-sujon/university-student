//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { subjectRepetitionService } = require('../services');
/**
 * @desc subjectRepetition create
 * @access private
 * @route /api/v1/subjectRepetition/subjectRepetitionCreate
 * @methud POST
 */

const subjectRepetitionCreate = catchAsync(async (req, res) => {
  const data = await subjectRepetitionService.subjectRepetitionCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'subjectRepetition create successful', data });
});

/**
 * @desc subjectRepetition dropDown
 * @access private
 * @route /api/v1/subjectRepetition/subjectRepetitiondropDown
 * @methud GET
 */

const subjectRepetitionDropDown = catchAsync(async (req, res) => {
  const data = await subjectRepetitionService.subjectRepetitionDropDown(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc subjectRepetition list
 * @access private
 * @route /api/v1/subjectRepetition/subjectRepetitionList
 * @methud GET
 */

const subjectRepetitionList = catchAsync(async (req, res) => {
  const data = await subjectRepetitionService.subjectRepetitionList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc subjectRepetition details
 * @access private
 * @route /api/v1/subjectRepetition/subjectRepetitionDetails/:id
 * @methud GET
 */

const subjectRepetitionDetails = catchAsync(async (req, res) => {
  const data = await subjectRepetitionService.subjectRepetitionDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc subjectRepetition update
 * @access private
 * @route /api/v1/subjectRepetition/subjectRepetitionUpdate/:id
 * @methud PATCH
 */

const subjectRepetitionUpdate = catchAsync(async (req, res) => {
  const data = await subjectRepetitionService.subjectRepetitionUpdate(req);
  res.json({ status: true, message: 'subjectRepetition update successful', data });
});

/**
 * @desc subjectRepetition delete
 * @access private
 * @route /api/v1/subjectRepetition/subjectRepetitionDelete/:id
 * @methud DELETE
 */

const subjectRepetitionDelete = catchAsync(async (req, res) => {
  const data = await subjectRepetitionService.subjectRepetitionDelete(req);
  res.json({ status: true, message: 'subjectRepetition delete successful', data });
});

module.exports = {
  subjectRepetitionCreate,
  subjectRepetitionDropDown,
  subjectRepetitionList,
  subjectRepetitionDetails,
  subjectRepetitionUpdate,
  subjectRepetitionDelete,
};
