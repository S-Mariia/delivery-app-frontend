import * as Yup from 'yup';

const nameRegExp = /^[a-zA-Z ]+$/;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegExp = /^\+380\d{9}$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Enter a name that is at least 2 letters long')
    .max(32, 'Please shorten your name to 32 characters or less')
    .matches(nameRegExp, 'A name can only contain letters')
    .trim()
    .required('Please enter your name'),
  email: Yup.string()
    .matches(emailRegExp, 'Enter a correct email')
    .trim()
    .required('Please enter your email'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Enter a phone in a format +380000000000')
    .trim()
    .required('Please enter your phone number'),
  address: Yup.string()
    .min(4, 'Please include more details')
    .trim()
    .required('Please enter your address'),
});

export default validationSchema;
