//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { summerAssessmentValidation } = require('../../validations');
const { summerAssessmentController } = require('../../controllers');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post(
  '/summerAssessmentCreate',
  auth(),
  roles(allRoles),
  validate(summerAssessmentValidation.summerAssessmentCreate),
  summerAssessmentController.summerAssessmentCreate
);

router.get('/summerAssessmentList', auth(), roles(allRoles), summerAssessmentController.summerAssessmentList);
router.get('/summerAssessmentdropDown', auth(), roles(allRoles), summerAssessmentController.summerAssessmentDropDown);

router.get(
  '/summerAssessmentDetails/:id',
  auth(),
  roles(allRoles),
  validate(summerAssessmentValidation.summerAssessmentDetails),
  summerAssessmentController.summerAssessmentDetails
);

router.patch(
  '/summerAssessmentUpdate/:id',
  auth(),
  roles(allRoles),
  validate(summerAssessmentValidation.summerAssessmentUpdate),
  summerAssessmentController.summerAssessmentUpdate
);

router.patch(
  '/summerAssessmentApply/:id',
  auth(),
  roles(allRoles),
  validate(summerAssessmentValidation.summerAssessmentApply),
  summerAssessmentController.summerAssessmentApply
);

router.delete(
  '/summerAssessmentDelete/:id',
  auth(),
  roles(allRoles),
  validate(summerAssessmentValidation.summerAssessmentDelete),
  summerAssessmentController.summerAssessmentDelete
);

module.exports = router;
