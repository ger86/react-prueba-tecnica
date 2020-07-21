import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import useUserContext from 'hooks/useUserContext';
import {USER_LIST} from 'config/routing/paths/user';
import AnonymousLayout from 'components/layout/AnonymousLayout';

PublicRoutes.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  path: PropTypes.string.isRequired
};

export default function PublicRoutes({children, path}) {
  const {user} = useUserContext();
  return (
    <Route path={path}>
      {!user && <AnonymousLayout>{children}</AnonymousLayout>}
      {Boolean(user) && <Redirect to={USER_LIST} />}
    </Route>
  );
}
