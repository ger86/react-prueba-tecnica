import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Loading from 'components/common/Loading';
import {default as apiStatusPropTypes} from 'propTypes/apiStatus';
import useStyles from './styles';

function LoadingIndicator() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Loading />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function ErrorIndicator() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography color="error">Error conectando con el servidor</Typography>
    </div>
  );
}

ApiSuspense.propTypes = {
  apiRequestStatus: PropTypes.oneOfType([apiStatusPropTypes, PropTypes.array]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
};

export default function ApiSuspense({apiRequestStatus, children}) {
  if (Array.isArray(apiRequestStatus)) {
    if (apiRequestStatus.filter((status) => status.isSending).length > 0) {
      return <LoadingIndicator />;
    }
    const failedRequests = apiRequestStatus.filter((status) => status.isFailed);
    if (failedRequests.length > 0) {
      return <ErrorIndicator />;
    }
  } else {
    if (apiRequestStatus.isSending) {
      return <LoadingIndicator />;
    }
    if (apiRequestStatus.isFailed) {
      return <ErrorIndicator />;
    }
  }

  return children();
}
