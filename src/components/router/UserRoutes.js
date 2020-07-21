import React from 'react';
import {Switch} from 'react-router-dom';
import anonymous from 'config/routing/routes/anonymous';
import user from 'config/routing/routes/user';
import PrivateRoute from './PrivateRoute';
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';
import PublicRoutes from './PublicRoutes';

export default function UserRoutes() {
  return (
    <Switch>
      <PrivateRoutes path="/u">
        {user.map((route) => (
          <PrivateRoute key={route.path} {...route} />
        ))}
      </PrivateRoutes>
      <PublicRoutes path="/">
        {anonymous.map((route) => (
          <PublicRoute key={route.path} {...route} />
        ))}
      </PublicRoutes>
    </Switch>
  );
}
