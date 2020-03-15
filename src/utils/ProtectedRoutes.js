import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './localStorage';

const ProtectedRoutes = ({ children, ...rest }) => {
  return (
    <Route {...rest}>{getToken() ? children : <Redirect to='login' />}</Route>
  );
};

export default ProtectedRoutes;
