//External Lib Import
const httpStatus = require('http-status');

//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { othersService } = require('../services');
/**
 * @desc others create
 * @access private
 * @route /api/v1/others/othersCreate
 * @methud POST
 */

const othersCreate = catchAsync(async (req, res) => {
  const data = await othersService.othersCreate(req);
  res.status(httpStatus.CREATED).json({ status: true, message: 'others create successful', data });
});

/**
 * @desc others dropDown
 * @access private
 * @route /api/v1/others/othersdropDown
 * @methud GET
 */

const othersDropDown = catchAsync(async (req, res) => {
  const data = await othersService.othersDropDown(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc others list
 * @access private
 * @route /api/v1/others/othersList
 * @methud GET
 */

const othersList = catchAsync(async (req, res) => {
  const data = await othersService.othersList(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc others details
 * @access private
 * @route /api/v1/others/othersDetails/:id
 * @methud GET
 */

const othersDetails = catchAsync(async (req, res) => {
  const data = await othersService.othersDetails(req);
  res.json({ status: true, message: null, data });
});

/**
 * @desc others update
 * @access private
 * @route /api/v1/others/othersUpdate/:id
 * @methud PATCH
 */

const othersUpdate = catchAsync(async (req, res) => {
  const data = await othersService.othersUpdate(req);
  res.json({ status: true, message: 'others update successful', data });
});

/**
 * @desc others delete
 * @access private
 * @route /api/v1/others/othersDelete/:id
 * @methud DELETE
 */

const othersDelete = catchAsync(async (req, res) => {
  const data = await othersService.othersDelete(req);
  res.json({ status: true, message: 'others delete successful', data });
});

module.exports = {
  othersCreate,
  othersDropDown,
  othersList,
  othersDetails,
  othersUpdate,
  othersDelete,
};
