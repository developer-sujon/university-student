//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const enrollValidation = require('../../validations/enroll.validation');
const enrollController = require('../../controllers/enroll.controller');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post(
  '/enrollCreate',
  auth(),
  roles(['STUDENT']),
  validate(enrollValidation.enrollCreate),
  enrollController.enrollCreate
);

router.get('/enrollList', auth(), roles(['ADMIN']), enrollController.enrollList);
router.get('/enrolldropDown', auth(), roles(['ADMIN']), enrollController.enrollDropDown);

router.get(
  '/enrollDetails/:id',
  auth(),
  roles(['ADMIN']),
  validate(enrollValidation.enrollDetails),
  enrollController.enrollDetails
);

router.patch(
  '/enrollUpdate/:id',
  auth(),
  roles(['ADMIN']),
  validate(enrollValidation.enrollUpdate),
  enrollController.enrollUpdate
);

router.delete(
  '/enrollDelete/:id',
  auth(),
  roles(['ADMIN']),
  validate(enrollValidation.enrollDelete),
  enrollController.enrollDelete
);

module.exports = router;
