import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Input = styled(Field)`
  width: 100%;
  padding-left: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  border: 1px solid
    ${({ name, errors, touched }) => {
      return errors[name] && touched[name] ? 'red' : 'blue';
    }};
  border-radius: 20px;
`;

export const TextErrorCss = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;
