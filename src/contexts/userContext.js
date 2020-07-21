/* eslint-disable react/prop-types */
import React, {createContext, useCallback, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import AppLoading from 'components/common/AppLoading';
import {LOGIN} from 'config/routing/paths/anonymous';
import {USER_LIST} from 'config/routing/paths/user';
import backendClient from 'utils/backendClient';

const fakeUser = {
  first_name: 'Gerardo',
  last_name: 'Fernández Moreno'
};

const UserContext = createContext({
  user: null,
  setUser: () => {}
});

export default UserContext;

export const UserContextProvider = (props) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const loading = Boolean(backendClient.hasAuthTokens()) && !user;
  
  const doLogout = useCallback(
    async function () {
      backendClient.setAuthTokens(null);
      setUser(null);
      history.push(LOGIN);
    },
    [history]
  );

  const fetchUser = useCallback(
    function () {
      setTimeout(() => setUser(fakeUser), 300);
    },
    [setUser]
  );

  const doLogin = useCallback(
    async function (authTokens) {
      backendClient.setAuthTokens(authTokens);
      fetchUser();
      history.push(USER_LIST);
    },
    [fetchUser, history]
  );

  useEffect(() => {
    if (backendClient.hasAuthTokens() && !user) {
      fetchUser();
    }
  }, [fetchUser, user]);

  return (
    <UserContext.Provider
      value={{
        doLogin,
        doLogout,
        user
      }}
    >
      {loading ? <AppLoading /> : props.children}
    </UserContext.Provider>
  );
};
