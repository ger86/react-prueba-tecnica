import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormActions from 'components/common/form/FormActions';
import TextField from 'components/common/form/ThemedTextField';
import useButtonProps from 'hooks/useButtonProps';
import {buildErrorMessageGetter, buildHasError} from 'utils/formikUtils';

const UserProfileView = ({formik, apiRequestStatus}) => {
  const buttonProps = useButtonProps(apiRequestStatus, false);
  const hasError = buildHasError(formik.touched, formik.errors);
  const getErrorMessage = buildErrorMessageGetter(formik.touched, formik.errors);

  return (
    <Card>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Nombre"
            id="first_name"
            name="first_name"
            aria-describedby="first_name"
            error={hasError('first_name')}
            helperText={getErrorMessage('first_name')}
            onChange={formik.handleChange}
            value={formik.values.first_name}
          />
          <TextField
            label="Apellidos"
            id="last_name"
            name="last_name"
            aria-describedby="last_name"
            error={hasError('last_name')}
            helperText={getErrorMessage('last_name')}
            onChange={formik.handleChange}
            value={formik.values.last_name}
          />
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
          />
          <Box mt={2}>
            <FormActions
              apiStatus={apiRequestStatus}
              buttonProps={buttonProps}
              successMessage="Usuario actualizado correctamente"
              error={formik.errors.general}
            />
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

UserProfileView.propTypes = {
  apiRequestStatus: PropTypes.object.isRequired,
  formik: PropTypes.object.isRequired
};

export default UserProfileView;
