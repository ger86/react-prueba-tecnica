import React, {useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {generatePath} from 'react-router';
import {queryCache} from 'react-query';
import ApiSuspense from 'components/common/ApiSuspense';
import {USER_LIST, USER_DELETE} from 'const/backend';
import {USER_LIST as USER_LIST_PATH} from 'config/routing/paths/user';
import useBackendClientMutation from 'hooks/useBackendClientMutation';
import useUser from 'hooks/useUser';
import UserDeleteView from './UserDeleteView';

function DoctorDelete() {
  const {id: userId} = useParams();
  const history = useHistory();
  const [error, setError] = useState(null);
  const {
    apiRequestStatus: getUserRequestStatus,
    apiResponse: getUserResponse,
    queryKey
  } = useUser(userId);
  const {mutate: deleteDoctor, apiRequestStatus: postStatus} = useBackendClientMutation(
    async function (response) {
      if (response.isSuccessfull) {
        await queryCache.invalidateQueries(USER_LIST);
        return queryCache.removeQueries(queryKey);
      }
    }
  );

  async function handleConfirm() {
    const response = await deleteDoctor({
      method: 'DELETE',
      path: generatePath(USER_DELETE, {id: userId})
    });
    console.log(response);
    if (response.isSuccessfull) {
      history.push(USER_LIST_PATH);
    } else {
      setError(response.error);
    }
  }

  function handleCancel() {
    history.push(USER_LIST_PATH);
  }

  return (
    <ApiSuspense apiRequestStatus={getUserRequestStatus}>
      {() => (
        <UserDeleteView
          onConfirmDeletion={handleConfirm}
          onCancelDeletion={handleCancel}
          deleteStatus={postStatus}
          user={getUserResponse.data}
          error={error}
        />
      )}
    </ApiSuspense>
  );
}

export default DoctorDelete;
