//External Lib Import
import { lazy, Suspense } from 'react';

//Internal Lib Import
import LazyLoader from '../components/LazyLoader';

const Dashboard = lazy(() => import('../screens/private/Dashboard'));
const Leave = lazy(() => import('../screens/private/Leave/Leave'));

const CreateUpdateLeave = lazy(() => import('../screens/private/Leave/CreateUpdateLeave'));

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
];

export default privateRoutes;
