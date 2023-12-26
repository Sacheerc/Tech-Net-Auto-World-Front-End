import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import InventoryItemForm from '../pages/inventoryManagement/InventoryItemForm';
import InventoryManagement from '../pages/inventoryManagement/InventoryManagement';
import UserManagement from '../pages/userManagement/UserManagement';
import VehicleDetailsForm from '../pages/vehicleManagement/VehicleDetailsForm';
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
    {
      path: '/vehiclemanagement/add',
      element: <VehicleDetailsForm />,
    },
  ],
};

export default MainRoutes;
