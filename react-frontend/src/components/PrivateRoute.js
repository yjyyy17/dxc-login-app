import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({requiredRoles, ...rest }) => {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  return (
    <>
      {username && requiredRoles.includes(role) ? (
        {...rest.children}
      ) : username && !requiredRoles.includes(role) ? (
        <Navigate to="/home" />
      ) : (<Navigate to="/login" />)}
    </>
  );
};

export default PrivateRoute;
