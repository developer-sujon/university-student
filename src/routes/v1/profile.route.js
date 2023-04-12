//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const { profileController } = require('../../controllers');
const { profileValidation } = require('../../validations');
const { roles: allRoles } = require('../../config/roles');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.get('/profileDetails', auth(), roles(allRoles), profileController.profileDetails);

router.patch(
  '/updateProfile',
  auth(),
  roles(allRoles),
  validate(profileValidation.updateProfile),
  profileController.updateProfile
);

module.exports = router;
