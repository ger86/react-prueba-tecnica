import React from 'react';
import ApiSuspense from 'components/common/ApiSuspense';
import useUserList from 'hooks/useUserList';
import UserListView from './UserListView';

function UserList() {
  const {apiRequestStatus: getUsersRequestStatus, apiResponse: getUsersResponse} = useUserList();
  return (
    <ApiSuspense apiRequestStatus={[getUsersRequestStatus]}>
      {() => <UserListView users={getUsersResponse.data} />}
    </ApiSuspense>
  );
}

export default UserList;
