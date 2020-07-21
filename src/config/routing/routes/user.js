import views from 'components/views/user';
import paths from 'config/routing/paths/user';

export const USER_LIST = {
  isPrivate: true,
  component: views.UserList,
  path: paths.USER_LIST
};

export const USER_EDIT = {
  isPrivate: true,
  component: views.UserEdit,
  path: paths.USER_EDIT
};

export const USER_DELETE = {
  isPrivate: true,
  component: views.UserDelete,
  path: paths.USER_DELETE
};

export const LOGOUT = {
  isPrivate: true,
  component: views.Logout,
  path: paths.LOGOUT
};

const routes = [USER_LIST,USER_EDIT, USER_DELETE, LOGOUT];

export default routes;
