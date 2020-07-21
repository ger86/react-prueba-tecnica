import React from 'react';
import {Redirect} from 'react-router-dom';
import {USER_LIST} from 'config/routing/paths/user';
import {LOGIN} from 'config/routing/paths/anonymous';
import useUserContext from 'hooks/useUserContext';

export default function AppHome() {
  const {user} = useUserContext();
  if (user) {
    return <Redirect to={USER_LIST} />;
  }
  return <Redirect to={LOGIN} />;
}
