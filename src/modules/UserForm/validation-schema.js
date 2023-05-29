import * as Yup from 'yup';

const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\+380\d{9}$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Enter a name that is at least 2 letters long')
    .max(32, 'Please shorten your name to 32 characters or less')
    .matches(nameRegex, 'A name can only contain letters')
    .trim()
    .required('Please enter your name'),
  email: Yup.string()
    .matches(emailRegex, 'Enter a correct email')
    .trim()
    .required('Please enter your email'),
  phone: Yup.string()
    .matches(phoneRegex, 'Enter a phone in a format +380000000000')
    .trim()
    .required('Please enter your phone number'),
  address: Yup.string()
    .min(4, 'Please include more details')
    .trim()
    .required('Please enter your address'),
});

export default validationSchema;
