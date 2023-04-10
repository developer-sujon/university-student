//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { scholarshipValidation } = require('../../validations');
const { scholarshipController } = require('../../controllers');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post(
  '/scholarshipCreate',
  auth(),
  roles(allRoles),
  validate(scholarshipValidation.scholarshipCreate),
  scholarshipController.scholarshipCreate
);

router.get('/scholarshipList', auth(), roles(allRoles), scholarshipController.scholarshipList);
router.get('/scholarshipdropDown', auth(), roles(allRoles), scholarshipController.scholarshipDropDown);

router.get(
  '/scholarshipDetails/:id',
  auth(),
  roles(allRoles),
  validate(scholarshipValidation.scholarshipDetails),
  scholarshipController.scholarshipDetails
);

router.patch(
  '/scholarshipUpdate/:id',
  auth(),
  roles(allRoles),
  validate(scholarshipValidation.scholarshipUpdate),
  scholarshipController.scholarshipUpdate
);

router.delete(
  '/scholarshipDelete/:id',
  auth(),
  roles(allRoles),
  validate(scholarshipValidation.scholarshipDelete),
  scholarshipController.scholarshipDelete
);

module.exports = router;
