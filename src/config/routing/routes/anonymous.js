import views from 'components/views/anonymous';
import paths from 'config/routing/paths/anonymous';

export const APP_HOME = {
  isPrivate: false,
  component: views.AppHome,
  path: paths.APP_HOME
};

export const LOGIN = {
  isPrivate: false,
  component: views.Login,
  path: paths.LOGIN
};

const routes = [LOGIN, APP_HOME];

export default routes;
