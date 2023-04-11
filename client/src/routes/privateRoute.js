//External Lib Import
import { lazy, Suspense } from 'react';

//Internal Lib Import
import LazyLoader from '../components/LazyLoader';

const Dashboard = lazy(() => import('../screens/private/Dashboard'));
const Leave = lazy(() => import('../screens/private/Leave/Leave'));
const Others = lazy(() => import('../screens/private/Others/Others'));
const SubjectRepetition = lazy(() => import('../screens/private/SubjectRepetition/SubjectRepetition'));
const RetakeAssessment = lazy(() => import('../screens/private/RetakeAssessment/RetakeAssessment'));
const Scholarship = lazy(() => import('../screens/private/Scholarship/Scholarship'));

const CreateUpdateLeave = lazy(() => import('../screens/private/Leave/CreateUpdateLeave'));
const CreateUpdateOthers = lazy(() => import('../screens/private/Others/CreateUpdateOthers'));
const CreateUpdateSubjectRepetition = lazy(() =>
  import('../screens/private/SubjectRepetition/CreateUpdateSubjectRepetition')
);
const CreateUpdateRetakeAssessment = lazy(() => import('../screens/private/RetakeAssessment/CreateUpdateRetakeAssessment'));
const CreateUpdateScholarship = lazy(() => import('../screens/private/Scholarship/CreateUpdateRetakeScholarship'));

const LazyLoading = ({ children }) => {
  return <Suspense fallback={<LazyLoader />}>{children}</Suspense>;
};

const privateRoutes = [
  {
    path: '/',
    element: (
      <LazyLoading>
        <Dashboard />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/dashboard',
    element: (
      <LazyLoading>
        <Dashboard />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/Leave',
    element: (
      <LazyLoading>
        <Leave />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/Leave-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateLeave />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/subject-repetition',
    element: (
      <LazyLoading>
        <SubjectRepetition />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/subject-repetition-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateSubjectRepetition />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/retake-assessment',
    element: (
      <LazyLoading>
        <RetakeAssessment />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/retake-assessment-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateRetakeAssessment />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/scholarship',
    element: (
      <LazyLoading>
        <Scholarship />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/scholarship-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateScholarship />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/others',
    element: (
      <LazyLoading>
        <Others />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
  {
    path: '/others-create-update',
    element: (
      <LazyLoading>
        <CreateUpdateOthers />
      </LazyLoading>
    ),
    roles: ['user', 'admin'],
    accessPermission: null,
  },
];

export default privateRoutes;
