import React from 'react';
import {Formik} from 'formik';
import {queryCache} from 'react-query';
import {generatePath, useParams} from 'react-router';
import ApiSuspense from 'components/common/ApiSuspense';
import {USER_LIST, USER_EDIT} from 'const/backend';
import useBackendClientMutation from 'hooks/useBackendClientMutation';
import useUser from 'hooks/useUser';
import UserFormSchema from './UserFormSchema';
import UserEditView from './UserEditView';

function UserEdit() {
  const {id: userId} = useParams();
  const {apiRequestStatus: getUserRequestStatus, apiResponse: getUserResponse, queryKey} = useUser(
    userId
  );
  const {mutate: editUser, apiRequestStatus: status} = useBackendClientMutation(async function (
    response
  ) {
    if (response.isSuccessfull) {
      await queryCache.invalidateQueries(USER_LIST);
      return queryCache.setQueryData(queryKey, response);
    }
  });

  async function handleSubmit(values, {setErrors}) {
    const response = await editUser({
      method: 'POST',
      path: generatePath(USER_EDIT, {id: userId}),
      postData: values
    });

    if (!response.isSuccessfull) {
      setErrors({general: 'Error actualizando el usuario'});
    }
  }

  return (
    <ApiSuspense apiRequestStatus={getUserRequestStatus}>
      {() => (
        <Formik
          validationSchema={UserFormSchema}
          initialValues={getUserResponse.data}
          onSubmit={handleSubmit}
        >
          {(props) => <UserEditView formik={props} apiRequestStatus={status} />}
        </Formik>
      )}
    </ApiSuspense>
  );
}

export default UserEdit;
