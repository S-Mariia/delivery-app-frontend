import * as Yup from 'yup';

import { emailRegExp, phoneRegExp } from 'shared/constants/validationRegExp';

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegExp, 'Enter a correct email')
    .trim()
    .required('Please enter your email'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Enter a phone in a format +380000000000')
    .trim()
    .required('Please enter your phone number'),
});

export default validationSchema;
