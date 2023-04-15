//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const coursesValidation = require('../../validations/courses.validation');
const coursesController = require('../../controllers/courses.controller');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post(
  '/coursesCreate',
  auth(),
  roles(allRoles),
  validate(coursesValidation.coursesCreate),
  coursesController.coursesCreate
);

router.get('/coursesList', auth(), roles(allRoles), coursesController.coursesList);
router.get('/coursesdropDown', auth(), roles(allRoles), coursesController.coursesDropDown);

router.get(
  '/coursesDetails/:id',
  auth(),
  roles(allRoles),
  validate(coursesValidation.coursesDetails),
  coursesController.coursesDetails
);

router.patch(
  '/coursesUpdate/:id',
  auth(),
  roles(allRoles),
  validate(coursesValidation.coursesUpdate),
  coursesController.coursesUpdate
);

router.delete(
  '/coursesDelete/:id',
  auth(),
  roles(allRoles),
  validate(coursesValidation.coursesDelete),
  coursesController.coursesDelete
);

module.exports = router;
