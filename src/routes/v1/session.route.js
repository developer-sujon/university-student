//Internal Lib Import
const express = require('express');

//External Lib Import
const { auth, roles } = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const sessionValidation = require('../../validations/session.validation');
const sessionController = require('../../controllers/session.controller');
const { roles: allRoles } = require('../../config/roles');

const router = express.Router();

router.post(
  '/sessionCreate',
  auth(),
  roles(allRoles),
  validate(sessionValidation.sessionCreate),
  sessionController.sessionCreate
);

router.get('/sessionList', auth(), roles(allRoles), sessionController.sessionList);
router.get('/sessiondropDown', /*auth(), roles(allRoles),*/ sessionController.sessionDropDown);

router.get(
  '/sessionDetails/:id',
  auth(),
  roles(allRoles),
  validate(sessionValidation.sessionDetails),
  sessionController.sessionDetails
);

router.patch(
  '/sessionUpdate/:id',
  auth(),
  roles(allRoles),
  validate(sessionValidation.sessionUpdate),
  sessionController.sessionUpdate
);

router.delete(
  '/sessionDelete/:id',
  auth(),
  roles(allRoles),
  validate(sessionValidation.sessionDelete),
  sessionController.sessionDelete
);

module.exports = router;
