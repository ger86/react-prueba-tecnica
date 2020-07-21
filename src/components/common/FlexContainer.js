import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: (props) => props.justifyContent,
    marginBottom: (props) => theme.spacing(props.mb),
    '& > *': {
      marginRight: (props) => (props.justifyContent === 'flex-start' ? theme.spacing(2) : '0'),
      marginLeft: (props) => (props.justifyContent === 'flex-end' ? theme.spacing(2) : '0')
    }
  }
}));

function FlexContainer({children, justifyContent, mb}) {
  const classes = useStyles({justifyContent, mb});
  return (
    <Box className={classes.wrapper} justifyContent={justifyContent}>
      {children}
    </Box>
  );
}

FlexContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  justifyContent: PropTypes.string,
  mb: PropTypes.number
};

FlexContainer.defaultProps = {
  justifyContent: 'flex-start',
  mb: 0
};

export default FlexContainer;
