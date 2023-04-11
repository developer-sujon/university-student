//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { othersValidation } = require('../../validations');
const { othersController } = require('../../controllers');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post(
  '/othersCreate',
  auth(),
  roles(allRoles),
  validate(othersValidation.othersCreate),
  othersController.othersCreate
);

router.get('/othersList', auth(), roles(allRoles), othersController.othersList);
router.get('/othersdropDown', auth(), roles(allRoles), othersController.othersDropDown);

router.get(
  '/othersDetails/:id',
  auth(),
  roles(allRoles),
  validate(othersValidation.othersDetails),
  othersController.othersDetails
);

router.patch(
  '/othersUpdate/:id',
  auth(),
  roles(allRoles),
  validate(othersValidation.othersUpdate),
  othersController.othersUpdate
);

router.delete(
  '/othersDelete/:id',
  auth(),
  roles(allRoles),
  validate(othersValidation.othersDelete),
  othersController.othersDelete
);

module.exports = router;
