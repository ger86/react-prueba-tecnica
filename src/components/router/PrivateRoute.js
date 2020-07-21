import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, path, ...rest}) => {
  return (
    <Route
      exact
      path={path}
      render={(props) => {
        return (
          <Suspense fallback={<div>Cargando...</div>}>
            <Component {...props} />
          </Suspense>
        );
      }}
      {...rest}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  path: PropTypes.string.isRequired
};

export default PrivateRoute;
