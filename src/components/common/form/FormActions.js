import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import {default as apiStatusPropTypes} from 'propTypes/apiStatus';

const defaultButtonProps = {
  variant: 'contained',
  color: 'primary',
  disabled: false,
  type: 'submit',
  fullWidth: false
};

const FormActions = ({
  buttonProps,
  isSending,
  apiStatus,
  isSuccess,
  successMessage,
  error,
  buttonText,
  buttonTextSending
}) => {
  const finalButtonProps = {
    ...defaultButtonProps,
    ...buttonProps
  };
  let sending = isSending || apiStatus?.isSending;
  let success = isSuccess || apiStatus?.isSuccess;

  let finalButtonText = sending ? 'Enviando' : 'Enviar';
  if (buttonText) {
    finalButtonText = sending ? buttonTextSending : buttonText;
  }
  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Button {...finalButtonProps} disabled={sending}>
          {finalButtonText}
        </Button>
      </Box>
      {sending && (
        <Box mt={2}>
          <LinearProgress />
        </Box>
      )}
      {error && (
        <Box mt={2}>
          <Alert severity="error">{typeof error === 'string' ? error : error.message}</Alert>
        </Box>
      )}
      {success && successMessage !== null && (
        <Box mt={2}>
          <Alert severity="success">{successMessage}</Alert>
        </Box>
      )}
    </>
  );
};

FormActions.propTypes = {
  buttonText: PropTypes.string,
  buttonTextSending: PropTypes.string,
  isSuccess: PropTypes.bool,
  isSending: PropTypes.bool,
  apiStatus: apiStatusPropTypes,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  buttonProps: PropTypes.object,
  successMessage: PropTypes.string
};

FormActions.defaultProps = {
  buttonText: null,
  buttonTextSending: null,
  error: null,
  isSuccess: false,
  successMessage: null,
  apiStatus: null,
  isSending: false
};

export default FormActions;
