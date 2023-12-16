import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContextProvier';

//Validate logged in users and redirect to related path
const PrivateRoute = ({ component }: { component: React.ReactElement }) => {
  const { authState } = useContext(AuthContext);

  return authState.isLoggedIn || true ? (
    component
  ) : (
    <Navigate to='/login' replace />
  );
};

export default PrivateRoute;
