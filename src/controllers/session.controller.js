//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { sessionService } = require('../services');
/**
 * @desc session create
 * @access private
 * @route /api/v1/session/sessionCreate
 * @methud POST
 */

const sessionCreate = catchAsync(async (req, res) => {
  const data = await sessionService.sessionCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'session create successful', data });
});

/**
 * @desc session dropDown
 * @access private
 * @route /api/v1/session/sessiondropDown
 * @methud GET
 */

const sessionDropDown = catchAsync(async (req, res) => {
  const data = await sessionService.sessionDropDown(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc session list
 * @access private
 * @route /api/v1/session/sessionList
 * @methud GET
 */

const sessionList = catchAsync(async (req, res) => {
  const data = await sessionService.sessionList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc session details
 * @access private
 * @route /api/v1/session/sessionDetails/:id
 * @methud GET
 */

const sessionDetails = catchAsync(async (req, res) => {
  const data = await sessionService.sessionDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc session update
 * @access private
 * @route /api/v1/session/sessionUpdate/:id
 * @methud PATCH
 */

const sessionUpdate = catchAsync(async (req, res) => {
  const data = await sessionService.sessionUpdate(req);
  res.json({ status: true, message: 'session update successful', data });
});

/**
 * @desc session delete
 * @access private
 * @route /api/v1/session/sessionDelete/:id
 * @methud DELETE
 */

const sessionDelete = catchAsync(async (req, res) => {
  const data = await sessionService.sessionDelete(req);
  res.json({ status: true, message: 'session delete successful', data });
});

module.exports = {
  sessionCreate,
  sessionDropDown,
  sessionList,
  sessionDetails,
  sessionUpdate,
  sessionDelete,
};
