//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const instructorValidation = require('../../validations/instructor.validation');
const instructorController = require('../../controllers/instructor.controller');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post(
  '/instructorCreate',
  auth(),
  roles(['ADMIN']),
  validate(instructorValidation.instructorCreate),
  instructorController.instructorCreate
);

router.get('/instructorList', auth(), roles(allRoles), instructorController.instructorList);

router.get(
  '/instructorDetails/:id',
  auth(),
  roles(allRoles),
  validate(instructorValidation.instructorDetails),
  instructorController.instructorDetails
);

router.patch(
  '/instructorUpdate/:id',
  auth(),
  roles(allRoles),
  validate(instructorValidation.instructorUpdate),
  instructorController.instructorUpdate
);

router.delete(
  '/instructorDelete/:id',
  auth(),
  roles(allRoles),
  validate(instructorValidation.instructorDelete),
  instructorController.instructorDelete
);

module.exports = router;
