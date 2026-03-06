import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LinearProgress } from '@mui/material';
import { Navigate } from 'react-router';

export const privateRoute = (Component) => (props) => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <LinearProgress />;
  }

  return isAuthenticated ? (
    React.createElement(Component, props)
  ) : (
    <Navigate
      to={`/login?redirect_to=${encodeURIComponent(window.location.pathname + window.location.search)}`}
    />
  );
};
