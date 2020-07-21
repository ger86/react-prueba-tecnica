import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  circularProgress: {
    marginRight: theme.spacing(2)
  }
}));

Loading.propTypes = {
  text: PropTypes.string
};

Loading.defaultProps = {
  text: null
};

function Loading({text}) {
  const classes = useStyles();

  const message = text || 'Cargando';
  return (
    <Box className={classes.wrapper}>
      <CircularProgress className={classes.circularProgress} />
      <Typography>{message}</Typography>
    </Box>
  );
}

export default Loading;
