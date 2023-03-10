import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { isAuthenticated } from './index';
const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
