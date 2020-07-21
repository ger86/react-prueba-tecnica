/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  errorButton: {
    backgroundColor: (props) =>
      props.variant === 'contained' ? theme.palette.error.main : 'transparent',
    color: (props) =>
      props.variant === 'contained' ? theme.palette.common.white : theme.palette.error.main,
    '&:hover': {
      backgroundColor: (props) =>
        props.variant === 'contained' ? theme.palette.error.dark : 'transparent',
      color: (props) =>
        props.variant === 'contained' ? theme.palette.common.white : theme.palette.error.dark
    },
    border: (props) => (props.variant === 'outlined' ? `1px solid ${theme.palette.error.main}` : '0')
  }
}));

function ButtonError({children, ...props}) {
  const classes = useStyles({variant: props.variant});
  return (
    <Button className={classes.errorButton} {...props}>
      {children}
    </Button>
  );
}

export default ButtonError;
