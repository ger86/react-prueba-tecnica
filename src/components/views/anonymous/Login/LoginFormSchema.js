import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email requerido'),
  password: Yup.string().required('Contraseña requerida')
});

export default LoginFormSchema;
