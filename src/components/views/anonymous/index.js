import {lazy} from 'react';

const AppHome = lazy(() => import('components/views/anonymous/AppHome'));
const Login = lazy(() => import('components/views/anonymous/Login'));

export default {
  AppHome,
  Login
};
