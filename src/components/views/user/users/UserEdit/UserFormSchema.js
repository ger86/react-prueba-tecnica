import * as Yup from 'yup';

const UserFormSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'El nombre no debe ser inferior a los 2 caracteres')
    .max(50, 'El nombre no debe superar los 50 caracteres')
    .required('Campo requerido'),
  last_name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('form:errors.invalid_email').required('form:errors.required')
});

export default UserFormSchema;
