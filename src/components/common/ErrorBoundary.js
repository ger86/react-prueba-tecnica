/* eslint-disable react/prop-types */
import React from 'react';
import {Redirect} from 'react-router-dom';
import CredentialsExpiredError from 'classes/errors/CredentialsExpiredError';
import {LOGOUT} from 'config/routing/paths/user';

class ErrorBoundary extends React.Component {
  state = {
    error: null
  };

  componentDidCatch(error) {
    console.log(error);
    this.setState({error});
  }

  render() {
    if (this.state.error) {
      if (this.state.error instanceof CredentialsExpiredError) {
        return <Redirect to={LOGOUT} />;
      }
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
