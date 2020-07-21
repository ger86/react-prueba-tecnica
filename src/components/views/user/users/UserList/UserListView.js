import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Link, generatePath, useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ThemedMaterialTable from 'components/common/ThemedMaterialTable';
import {USER_CREATE, USER_EDIT, USER_DELETE} from 'config/routing/paths/user';
import {default as userPropTypes} from 'propTypes/user';

const tableOptions = {
  showTitle: false
};

UserListView.propTypes = {
  users: PropTypes.arrayOf(userPropTypes).isRequired
};

function UserListView({users}) {
  const history = useHistory();
  const columns = useMemo(
    () => [
      {title: 'Nombre', field: 'first_name'},
      {title: 'Apellidos', field: 'last_name'},
      {title: 'Email', field: 'email'}
    ],
    []
  );

  return (
    <Container>
      <ThemedMaterialTable
        actions={[
          {
            icon: () => <EditIcon />,
            tooltip: 'Editar',
            onClick: (event, rowData) => history.push(generatePath(USER_EDIT, {id: rowData.id}))
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: 'Eliminar',
            onClick: (event, rowData) => history.push(generatePath(USER_DELETE, {id: rowData.id}))
          },
          {
            icon: () => (
              <Button
                component={Link}
                to={USER_CREATE}
                variant="contained"
                disableElevation
                color="secondary"
              >
                Añadir
              </Button>
            ),
            isFreeAction: true
          }
        ]}
        options={tableOptions}
        columns={columns}
        data={users}
      />
    </Container>
  );
}

export default UserListView;
