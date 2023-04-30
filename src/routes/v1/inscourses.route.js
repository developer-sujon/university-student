//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const inscoursesValidation = require('../../validations/inscourses.validation');
const inscoursesController = require('../../controllers/inscourses.controller');

const router = express.Router();

router.post(
  '/inscoursesCreate',
  auth(),
  roles(['ADMIN', 'INSTRUCTOR']),
  validate(inscoursesValidation.inscoursesCreate),
  inscoursesController.inscoursesCreate
);

router.get('/inscoursesList', auth(), roles(['ADMIN', 'INSTRUCTOR']), inscoursesController.inscoursesList);

router.get(
  '/inscoursesDetails/:id',
  auth(),
  roles(['ADMIN', 'INSTRUCTOR']),
  validate(inscoursesValidation.inscoursesDetails),
  inscoursesController.inscoursesDetails
);

router.patch(
  '/inscoursesUpdate/:id',
  auth(),
  roles(['ADMIN', 'INSTRUCTOR']),
  validate(inscoursesValidation.inscoursesUpdate),
  inscoursesController.inscoursesUpdate
);

router.delete(
  '/inscoursesDelete/:id',
  auth(),
  roles(['ADMIN', 'INSTRUCTOR']),
  validate(inscoursesValidation.inscoursesDelete),
  inscoursesController.inscoursesDelete
);

module.exports = router;
