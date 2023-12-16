import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import InventoryManagement from '../pages/inventoryManagement/InventoryManagement';
import UserManagement from '../pages/userManagement/UserManagement';
import VehicleManagement from '../pages/vehicleManagement/VehicleManagement';
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
    {
      path: '/inventorymanagement',
      element: <InventoryManagement />,
    },
    {
      path: '/vehiclemanagement',
      element: <VehicleManagement />,
    },
  ],
};

export default MainRoutes;
