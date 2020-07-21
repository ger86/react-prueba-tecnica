import {generatePath} from 'react-router';
import {USER_VIEW} from 'const/backend';
import {ONE_HOUR_IN_MS} from 'const/time';
import useBackendClient from 'hooks/useBackendClient';

export default function useDoctor(userId) {
  const queryKey = [USER_VIEW, userId];
  const {apiRequestStatus, apiResponse} = useBackendClient(
    queryKey,
    {
      method: 'GET',
      path: generatePath(USER_VIEW, {id: userId})
    },
    {staleTime: ONE_HOUR_IN_MS}
  );
  return {apiRequestStatus, apiResponse, queryKey};
}
