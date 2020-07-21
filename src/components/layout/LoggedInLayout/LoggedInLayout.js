import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header';

function LoggedInLayout({children}) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

LoggedInLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

LoggedInLayout.defaultProps = {
  title: null
};

export default LoggedInLayout;
