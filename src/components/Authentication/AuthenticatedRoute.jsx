import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthenticatedRoute = ({ isAuthenticated, element, ...rest }) => {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default AuthenticatedRoute;
