import QuotationTemplate from '../components/pdfTemplates/QuotationTemplate';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import InventoryItemForm from '../pages/inventoryManagement/InventoryItemForm';
import InventoryManagement from '../pages/inventoryManagement/InventoryManagement';
import UserManagement from '../pages/userManagement/UserManagement';
import Quotation from '../pages/vehicleManagement/Quotation';
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
    {
      path: '/vehiclemanagement/quotation/add',
      element: <Quotation />,
    },
    {
      path: '/vehiclemanagement/quotation/add/pdf',
      element: <QuotationTemplate
        name='Sachintha Rathnayake'
        phone='0719247080'
        validFor='2 Months'
        make='Toyota'
        model='Auqa'
        color='Pure White'
        vehNo='CAQ-6219'
        jobNo='123456'
        quoteItems={[]}
      />,
    },
  ],
};

export default MainRoutes;
