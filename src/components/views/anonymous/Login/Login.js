import React from 'react';
import {useFormik} from 'formik';
import {LOGIN} from 'const/backend';
import useBackendClientMutation from 'hooks/useBackendClientMutation';
import useUserContext from 'hooks/useUserContext';
import LoginFormSchema from './LoginFormSchema';
import LoginView from './LoginView';

const initialValues = {
  email: '',
  password: ''
};

const mapFormValuesToApiFormat = (values) => ({
  email: values.email,
  password: values.password
});

function Login() {
  const {doLogin} = useUserContext();
  const {mutate: postLogin, apiRequestStatus: status} = useBackendClientMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: LoginFormSchema,
    onSubmit: async (values, {setErrors}) => {
      const response = await postLogin({
        method: 'POST',
        path: LOGIN,
        postData: mapFormValuesToApiFormat(values)
      });
      if (!response.isSuccessfull) {
        setErrors({general: 'Login erróneo'});
      } else {
        await doLogin(response.data);
      }
    }
  });

  return <LoginView apiRequestStatus={status} formik={formik} />;
}

export default Login;
