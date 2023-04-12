//Internal Lib Import
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

/**
 * @desc profile details
 * @access private
 * @route /api/v1/profile/profileDetails
 * @methud GET
 */

const profileDetails = catchAsync(async (req, res) => {
  const data = await userService.getUserById(req.user.userID);
  res.json({ status: true, message: null, data });
});

/**
 * @desc profile details
 * @access private
 * @route /api/v1/profile/updateProfile
 * @methud GET
 */

const updateProfile = catchAsync(async (req, res) => {
  const data = await userService.updateUserById(req.user.userID, req.body);
  res.json({ status: true, message: null, data });
});

module.exports = {
  profileDetails,
  updateProfile,
};
