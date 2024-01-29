import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import InventoryItemForm from '../pages/inventoryManagement/InventoryItemForm';
import InventoryManagement from '../pages/inventoryManagement/InventoryManagement';
import UserForm from '../pages/userManagement/UserForm';
import UserManagement from '../pages/userManagement/UserManagement';
import ServiceRecordsManagement from '../pages/vehicleManagement/ServiceRecordManagement';
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
      path: '/usermanagement/add',
      element: <UserForm user={null} />,
    },
    {
      path: '/inventorymanagement',
      element: <InventoryManagement />,
    },
    {
      path: '/inventorymanagement/add',
      element: <InventoryItemForm inventory={null} />,
    },
    {
      path: '/vehiclemanagement',
      element: <VehicleManagement />,
    },
    {
      path: '/vehiclemanagement/add',
      element: <VehicleDetailsForm vehicle={null} />,
    },
    {
      path: '/servicerecords/management',
      element: <ServiceRecordsManagement />,
    },
  ],
};

export default MainRoutes;
