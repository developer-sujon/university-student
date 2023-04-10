//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const leaveValidation = require('../../validations/leave.validation');
const leaveController = require('../../controllers/leave.controller');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post('/leaveCreate', auth(), roles(allRoles), validate(leaveValidation.leaveCreate), leaveController.leaveCreate);

router.get('/leaveList', auth(), roles(allRoles), leaveController.leaveList);
router.get('/leavedropDown', auth(), roles(allRoles), leaveController.leaveDropDown);

router.get(
  '/leaveDetails/:id',
  auth(),
  roles(allRoles),
  validate(leaveValidation.leaveDetails),
  leaveController.leaveDetails
);

router.patch(
  '/leaveUpdate/:id',
  auth(),
  roles(allRoles),
  validate(leaveValidation.leaveUpdate),
  leaveController.leaveUpdate
);

router.delete(
  '/leaveDelete/:id',
  auth(),
  roles(allRoles),
  validate(leaveValidation.leaveDelete),
  leaveController.leaveDelete
);

module.exports = router;
