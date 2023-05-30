import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { selectCart } from 'redux/selectors';
import { clearCart } from 'redux/slice';

import formFields from './form-fields';
import initialValues from './form-initual-values';
import validationSchema from './validation-schema';

import { createOrder } from 'shared/services/api';

import TextField from 'shared/components/TextField/TextField';
import { Wrapper, Button, Label } from './UserForm.styled';

import Modal from 'shared/components/Modal/Modal';
import CongratsModal from 'modules/CongratsModal/CongratsModal';

const UserForm = () => {
  const [formSent, setFormSet] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const navigate = useNavigate();

  const handleSubmit = async values => {
    const result = {
      customerData: { ...values },
      order: [...cart],
    };
    if (cart.length === 0) {
      toast('Add something to card first', {
        style: {
          borderRadius: '10px',
          background: 'darkred',
          color: '#fff',
        },
      });
      return;
    }
    try {
      setError(false);
      await createOrder(result);
      dispatch(clearCart());
      setFormSet(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Wrapper>
      <Label>Enter your details to complete the order</Label>
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
            <Button type="submit">Make an order</Button>
          </Form>
        )}
      </Formik>

      {error &&
        toast(error, {
          icon: '🤯',
          style: {
            borderRadius: '10px',
            background: 'darkred',
            color: '#FFF',
          },
        })}
      {formSent && (
        <Modal
          onClose={() => {
            navigate('/');
          }}
        >
          <CongratsModal />
        </Modal>
      )}
    </Wrapper>
  );
};

export default UserForm;
