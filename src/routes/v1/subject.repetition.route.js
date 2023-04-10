//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { subjectRepetitionValidation } = require('../../validations');
const { subjectRepetitionController } = require('../../controllers');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post(
  '/subjectRepetitionCreate',
  auth(),
  roles(allRoles),
  validate(subjectRepetitionValidation.subjectRepetitionCreate),
  subjectRepetitionController.subjectRepetitionCreate
);

router.get('/subjectRepetitionList', auth(), roles(allRoles), subjectRepetitionController.subjectRepetitionList);
router.get('/subjectRepetitiondropDown', auth(), roles(allRoles), subjectRepetitionController.subjectRepetitionDropDown);

router.get(
  '/subjectRepetitionDetails/:id',
  auth(),
  roles(allRoles),
  validate(subjectRepetitionValidation.subjectRepetitionDetails),
  subjectRepetitionController.subjectRepetitionDetails
);

router.patch(
  '/subjectRepetitionUpdate/:id',
  auth(),
  roles(allRoles),
  validate(subjectRepetitionValidation.subjectRepetitionUpdate),
  subjectRepetitionController.subjectRepetitionUpdate
);

router.delete(
  '/subjectRepetitionDelete/:id',
  auth(),
  roles(allRoles),
  validate(subjectRepetitionValidation.subjectRepetitionDelete),
  subjectRepetitionController.subjectRepetitionDelete
);

module.exports = router;
