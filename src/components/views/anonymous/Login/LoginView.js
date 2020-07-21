import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormActions from 'components/common/form/FormActions';
import useButtonProps from 'hooks/useButtonProps';
import textFieldProps from 'theme/textFieldProps';
import {buildErrorMessageGetter, buildHasError} from 'utils/formikUtils';

function LoginView({apiRequestStatus, formik}) {
  const buttonProps = useButtonProps(apiRequestStatus);
  const hasError = buildHasError(formik.touched, formik.errors);
  const getErrorMessage = buildErrorMessageGetter(formik.touched, formik.errors);

  return (
    <>
      <Typography variant="h1">¡Bienvenido!</Typography>
      <Box mt={4}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            id="email"
            name="email"
            type="email"
            aria-describedby="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={hasError('email')}
            helperText={getErrorMessage('email')}
            {...textFieldProps}
          />
          <Typography><small>Usuario: eve.holt@reqres.in</small></Typography>
          <TextField
            label="Contraseña"
            id="password"
            name="password"
            type="password"
            aria-describedby="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={hasError('password')}
            helperText={getErrorMessage('password')}
            {...textFieldProps}
          />
          <Box mt={2}>
            <FormActions
              isSending={apiRequestStatus.isSending || apiRequestStatus.isSuccess}
              buttonProps={buttonProps}
              error={formik.errors.general}
            />
          </Box>
        </form>
      </Box>
    </>
  );
}

LoginView.propTypes = {
  apiRequestStatus: PropTypes.object.isRequired,
  formik: PropTypes.object.isRequired
};

export default LoginView;
