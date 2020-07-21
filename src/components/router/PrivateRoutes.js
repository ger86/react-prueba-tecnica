import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import LoggedInLayout from 'components/layout/LoggedInLayout';
import useUserContext from 'hooks/useUserContext';
import {LOGIN} from 'config/routing/paths/anonymous';

PrivateRoutes.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  path: PropTypes.string.isRequired
};

export default function PrivateRoutes({children, path}) {
  const {user} = useUserContext();
  return (
    <Route path={path}>
      {Boolean(user) && <LoggedInLayout>{children}</LoggedInLayout>}
      {!user && <Redirect to={LOGIN} />}
    </Route>
  );
}
