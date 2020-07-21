import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {Alert, AlertTitle} from '@material-ui/lab';

const FormSubmitError = ({message}) => {
  const errorsToDisplay = Array.isArray(message) ? message : [message];
  return (
    <Box mt={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {errorsToDisplay.map((error, index) => (
          <Typography key={`error-${index}`} paragraph>
            {error?.message || error}
          </Typography>
        ))}
      </Alert>
    </Box>
  );
};

FormSubmitError.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]).isRequired
};

export default FormSubmitError;
