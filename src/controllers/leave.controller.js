//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { leaveService } = require('../services');
/**
 * @desc leave create
 * @access private
 * @route /api/v1/leave/leaveCreate
 * @methud POST
 */

const leaveCreate = catchAsync(async (req, res) => {
  const data = await leaveService.leaveCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'leave create successful', data });
});

/**
 * @desc leave dropDown
 * @access private
 * @route /api/v1/leave/leavedropDown
 * @methud GET
 */

const leaveDropDown = catchAsync(async (req, res) => {
  const data = await leaveService.leaveDropDown(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc leave list
 * @access private
 * @route /api/v1/leave/leaveList
 * @methud GET
 */

const leaveList = catchAsync(async (req, res) => {
  const data = await leaveService.leaveList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc leave details
 * @access private
 * @route /api/v1/leave/leaveDetails/:id
 * @methud GET
 */

const leaveDetails = catchAsync(async (req, res) => {
  const data = await leaveService.leaveDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc leave update
 * @access private
 * @route /api/v1/leave/leaveUpdate/:id
 * @methud PATCH
 */

const leaveUpdate = catchAsync(async (req, res) => {
  const data = await leaveService.leaveUpdate(req);
  res.json({ status: true, message: 'leave update successful', data });
});

/**
 * @desc leave delete
 * @access private
 * @route /api/v1/leave/leaveDelete/:id
 * @methud DELETE
 */

const leaveDelete = catchAsync(async (req, res) => {
  const data = await leaveService.leaveDelete(req);
  res.json({ status: true, message: 'leave delete successful', data });
});

module.exports = {
  leaveCreate,
  leaveDropDown,
  leaveList,
  leaveDetails,
  leaveUpdate,
  leaveDelete,
};
