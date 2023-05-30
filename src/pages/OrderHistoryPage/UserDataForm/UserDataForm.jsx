import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import formFields from './form-fields';
import initialValues from './form-initial-values';
import validationSchema from './validation-schema';

import { getOrderHistory } from 'redux/operations';

import TextField from 'shared/components/TextField/TextField';
import { FormLabel, Wrapper } from './UserDataForm.styled';
import { Button } from 'modules/UserForm/UserForm.styled';

const UserDataForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    const { email, phone } = values;
    const updatedPhone = phone.slice(1);
    dispatch(getOrderHistory({ email, phone: updatedPhone }));
  };

  return (
    <Wrapper>
      <FormLabel>
        In order to view the history of your orders, fill out the form.
      </FormLabel>
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
            <Button type="submit">Get history</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default UserDataForm;
