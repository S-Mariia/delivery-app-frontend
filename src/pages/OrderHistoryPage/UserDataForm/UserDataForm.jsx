import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import formFields from './form-fields';
import initialValues from './form-initial-values';
import validationSchema from './validation-schema';

import { getOrderHistory } from 'redux/operations';

import TextField from 'shared/components/TextField/TextField';
import { Wrapper } from './UserDataForm.styled';

const UserDataForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    const { email, phone } = values;
    const updatedPhone = phone.slice(1);
    dispatch(getOrderHistory({ email, phone: updatedPhone }));
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <TextField
              errors={errors}
              touched={touched}
              {...formFields.email}
            />
            <TextField
              errors={errors}
              touched={touched}
              {...formFields.phone}
            />
            <button type="submit">Get history</button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default UserDataForm;
