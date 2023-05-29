import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import { selectCart } from 'redux/cart/cart.selectors';

import formFields from './form-fields';
import initialValues from './form-initual-values';
import validationSchema from './validation-schema';

import TextField from 'shared/components/TextField/TextField';
import { Wrapper } from './UserForm.styled';

const UserForm = () => {
  const cart = useSelector(selectCart);

  const handleSubmit = values => {
    const result = {
      customerData: { ...values },
      order: [...cart],
    };
    console.log(result);
    // console.log(values);
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
            <TextField errors={errors} touched={touched} {...formFields.name} />
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
            <TextField
              errors={errors}
              touched={touched}
              {...formFields.address}
            />
            {/* {console.dir(helpers)} */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default UserForm;
