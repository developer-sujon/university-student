//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { retakeAssessmentValidation } = require('../../validations');
const { retakeAssessmentController } = require('../../controllers');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post(
  '/retakeAssessmentCreate',
  auth(),
  roles(allRoles),
  validate(retakeAssessmentValidation.retakeAssessmentCreate),
  retakeAssessmentController.retakeAssessmentCreate
);

router.get('/retakeAssessmentList', auth(), roles(allRoles), retakeAssessmentController.retakeAssessmentList);
router.get('/retakeAssessmentdropDown', auth(), roles(allRoles), retakeAssessmentController.retakeAssessmentDropDown);

router.get(
  '/retakeAssessmentDetails/:id',
  auth(),
  roles(allRoles),
  validate(retakeAssessmentValidation.retakeAssessmentDetails),
  retakeAssessmentController.retakeAssessmentDetails
);

router.patch(
  '/retakeAssessmentUpdate/:id',
  auth(),
  roles(allRoles),
  validate(retakeAssessmentValidation.retakeAssessmentUpdate),
  retakeAssessmentController.retakeAssessmentUpdate
);

router.delete(
  '/retakeAssessmentDelete/:id',
  auth(),
  roles(allRoles),
  validate(retakeAssessmentValidation.retakeAssessmentDelete),
  retakeAssessmentController.retakeAssessmentDelete
);

module.exports = router;
