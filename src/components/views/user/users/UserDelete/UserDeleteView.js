import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FlexContainer from 'components/common/FlexContainer';
import ButtonError from 'components/common/ButtonError';
import FormSubmitError from 'components/common/form/FormSubmitError';
import {default as userPropTypes} from 'propTypes/user';
import {default as apiRequestStatusPropTypes} from 'propTypes/apiStatus';

const UserDeleteView = ({user, deleteStatus, onConfirmDeletion, onCancelDeletion, error}) => {
  return (
    <Card>
      <CardContent>
        <Typography paragraph>{`Borrar ${user.first_name} ${user.last_name}`}</Typography>
        <Typography paragraph>¿Estás seguro?</Typography>
        <FlexContainer>
          <Button onClick={onCancelDeletion} variant="contained">
            Cancelar
          </Button>
          <ButtonError onClick={onConfirmDeletion} variant="contained">
            Confirmar
          </ButtonError>
        </FlexContainer>

        {deleteStatus.isSending && (
          <Box mt={2}>
            <LinearProgress />
          </Box>
        )}
        {error && <FormSubmitError message={error} />}
      </CardContent>
    </Card>
  );
};

UserDeleteView.propTypes = {
  user: userPropTypes.isRequired,
  deleteStatus: apiRequestStatusPropTypes.isRequired,
  error: PropTypes.string,
  onCancelDeletion: PropTypes.func.isRequired,
  onConfirmDeletion: PropTypes.func.isRequired
};

UserDeleteView.defaultProps = {
  error: null
};

export default UserDeleteView;
