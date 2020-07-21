import {useCallback, useMemo} from 'react';
import {useMutation} from 'react-query';
import backendClient from 'utils/backendClient';

const defaultHeaders = {};

export default function useBackendClientMutation(onSuccess = null) {
  const sendRequest = useCallback(async function sendRequest({
    method,
    path,
    postData,
    headers = defaultHeaders
  }) {
    const response = await backendClient.sendRequest({
      method,
      path,
      data: postData,
      headers
    });
    console.log(response);
    return response;
  },
  []);

  const options = useMemo(
    function () {
      const options = {};
      if (onSuccess) {
        options.onSuccess = onSuccess;
      }
      return options;
    },
    [onSuccess]
  );

  const [mutate, {isLoading, isError, isSuccess, data: apiResponse, error}] = useMutation(
    sendRequest,
    options
  );
  const apiRequestStatus = useMemo(
    () => ({
      isSending: isLoading,
      isSuccess: isSuccess && apiResponse?.isSuccessfull,
      isComplete: !isLoading,
      isFailed: isError || apiResponse?.isSuccessfull === false
    }),
    [apiResponse, isError, isLoading, isSuccess]
  );

  return {apiRequestStatus, apiResponse, error, mutate};
}
