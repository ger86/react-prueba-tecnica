import React, {memo} from 'react';
import {makeStyles} from '@material-ui/styles';
import logo from 'images/logo.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: 'white'
  },
  elementsWrapper: {
    width: '150px'
  },
  logo: {
    display: 'block',
    width: '150px',
    height: 'auto',
    marginBottom: theme.spacing(4)
  }
}));

function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.elementsWrapper}>
        <img src={logo} alt="Legit" className={classes.logo} />
      </div>
    </div>
  );
}

export default memo(Loader);
