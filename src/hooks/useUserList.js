import {USER_LIST} from 'const/backend';
import {ONE_HOUR_IN_MS} from 'const/time';
import useBackendClient from 'hooks/useBackendClient';

export default function useUserList() {
  const {apiRequestStatus, apiResponse} = useBackendClient(
    USER_LIST,
    {
      method: 'GET',
      path: USER_LIST
    },
    {staleTime: ONE_HOUR_IN_MS}
  );
  return {apiRequestStatus, apiResponse};
}
