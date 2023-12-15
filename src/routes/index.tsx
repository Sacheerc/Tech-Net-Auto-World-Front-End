import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const ThemeRoutes: React.FC = () => {
  return useRoutes([MainRoutes, AuthenticationRoutes]);
};

export default ThemeRoutes;
