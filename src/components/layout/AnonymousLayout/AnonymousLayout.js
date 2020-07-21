import React from 'react';
import PropTypes from 'prop-types';
import {Container, ContentWrapper} from './styled';

AnonymousLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]).isRequired
};

function AnonymousLayout({children}) {
  return (
    <Container container>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
}

export default AnonymousLayout;
