//External Lib Import
const express = require('express');

//Internal Lib Import
const authRoute = require('./auth.route');
const profileRoute = require('./profile.route');
const leaveRoute = require('./leave.route');
const retakeAssessmentRoute = require('./retake.assessment.route');
const subjectRepetitionRoute = require('./subject.repetition.route');
const scholarshipRoute = require('./scholarship.route');
const dashboardRoute = require('./dashboard.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/profile',
    route: profileRoute,
  },
  {
    path: '/leave',
    route: leaveRoute,
  },
  {
    path: '/retakeAssessment',
    route: retakeAssessmentRoute,
  },
  {
    path: '/subjectRepetition',
    route: subjectRepetitionRoute,
  },
  {
    path: '/scholarship',
    route: scholarshipRoute,
  },
  {
    path: '/dashboard',
    route: dashboardRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
