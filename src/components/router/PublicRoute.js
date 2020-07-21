import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

const PublicRoute = ({component: Component, path, ...rest}) => {
  return (
    <Route
      exact
      path={path}
      render={(props) => (
        <Suspense fallback={<div>Cargando...</div>}>
          <Component {...props} />
        </Suspense>
      )}
      {...rest}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  path: PropTypes.string.isRequired
};

export default PublicRoute;
