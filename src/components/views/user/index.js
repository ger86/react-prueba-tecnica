import {lazy} from 'react';

const UserList = lazy(() => import('components/views/user/users/UserList'));
const UserEdit = lazy(() => import('components/views/user/users/UserEdit'));
const UserDelete = lazy(() => import('components/views/user/users/UserDelete'));
const Logout = lazy(() => import('components/views/user/profile/Logout'));

export default {
  UserList,
  UserEdit,
  UserDelete,
  Logout
};
