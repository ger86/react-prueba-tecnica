import {BACKEND_URL} from 'const/backend';
import ApiResponse from 'classes/ApiResponse';
import ApiError from 'classes/errors/ApiError';
import CredentialsExpiredError from 'classes/errors/CredentialsExpiredError';
import authTokensLocalStorage from 'utils/authTokensLocalStorage';

const backendClient = (function () {
  let _authTokens = authTokensLocalStorage.get();

  const makeRequest = function (method, url, data, headers = new Headers()) {
    let body = JSON.stringify(data);
    headers.append('Content-Type', 'application/json');
    const requestParams = {method, body, headers};
    return new Request(url, requestParams);
  };

  const setAuthTokens = function (authTokens) {
    if (authTokens === null) {
      authTokensLocalStorage.delete();
    } else {
      authTokensLocalStorage.set(authTokens);
    }
    _authTokens = authTokens;
  };

  const sendRequest = async function ({method, path, data, headers = {}}) {
    const requestHeaders = new Headers(headers);
    if (_authTokens?.token) {
      requestHeaders.append('Authorization', `Bearer ${_authTokens.token}`);
    }
    const request = makeRequest(method, `${BACKEND_URL}${path}`, data, requestHeaders);

    const response = await fetch(request);
    if (response.status === 401) {
      return new ApiResponse(
        false,
        null,
        response.status,
        new CredentialsExpiredError('Missing renew token')
      );
    } else {
      let responseData = {};
      if (response.status !== 204) {
        responseData = await response.json();
      }
      return new ApiResponse(
        response.ok,
        response.ok ? responseData?.data || responseData : null,
        response.status,
        response.ok ? null : new ApiError(responseData?.message, responseData?.data)
      );
    }
  };

  const hasAuthTokens = function () {
    return Boolean(_authTokens);
  };

  return {
    sendRequest,
    setAuthTokens,
    hasAuthTokens
  };
})();

export default backendClient;
