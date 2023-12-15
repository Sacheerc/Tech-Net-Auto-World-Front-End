import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import UserManagement from '../pages/userManagement/UserManagement';
import PrivateRoute from './PrivateRoute';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <PrivateRoute component={<MainLayout />} />,
  children: [
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/usermanagement',
      element: <UserManagement />,
    },
  ],
};

export default MainRoutes;
