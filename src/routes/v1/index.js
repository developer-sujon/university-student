//External Lib Import
const express = require('express');

//Internal Lib Import
const authRoute = require('./auth.route');
const profileRoute = require('./profile.route');
const leaveRoute = require('./leave.route');
const retakeAssessmentRoute = require('./retake.assessment.route');
const subjectRepetitionRoute = require('./subject.repetition.route');
const scholarshipRoute = require('./scholarship.route');
const othersRoute = require('./others.route');
const dashboardRoute = require('./dashboard.route');
const sessionRoute = require('./session.route');
const coursesRoute = require('./courses.route');
const enrollRoute = require('./enroll.route');

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
    path: '/others',
    route: othersRoute,
  },
  {
    path: '/dashboard',
    route: dashboardRoute,
  },
  {
    path: '/session',
    route: sessionRoute,
  },
  {
    path: '/courses',
    route: coursesRoute,
  },
  {
    path: '/enroll',
    route: enrollRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
