import {useCallback, useMemo} from 'react';
import {useQuery} from 'react-query';
import CredentialsExpiredError from 'classes/errors/CredentialsExpiredError';
import useUserContext from 'hooks/useUserContext';
import backendClient from 'utils/backendClient';

const defaultOptions = {
  staleTime: 0
};

export default function useBackendClient(
  key,
  {method, path, postData, responseIsBlob = false},
  options = defaultOptions
) {
  const {user} = useUserContext();
  const query = useCallback(
    async function () {
      const response = await backendClient.sendRequest({
        method,
        path,
        data: postData,
        responseIsBlob
      });
      return response;
    },
    [method, path, postData, responseIsBlob]
  );

  const {data: apiResponse, error, isFetching, refetch, isLoading, isError, isSuccess} = useQuery(
    key,
    query,
    options
  );

  const apiRequestStatus = useMemo(
    () => ({
      isSending: isLoading,
      isSuccess: isSuccess && apiResponse?.isSuccessfull,
      isComplete: !isLoading,
      isFailed: isError || apiResponse?.isSuccessfull === false,
      responseCode: apiResponse?.status
    }),
    [apiResponse, isError, isLoading, isSuccess]
  );

  if (user) {
    if (!apiResponse?.isSuccessfull && apiResponse?.error instanceof CredentialsExpiredError) {
      throw apiResponse.error;
    }
  }

  return {apiRequestStatus, apiResponse, error, isFetching, refetch};
}
