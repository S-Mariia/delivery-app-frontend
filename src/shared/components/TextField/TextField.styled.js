import styled from 'styled-components';
import { Field } from 'formik';

import { accentColor, errorColor } from 'shared/constants/colors';

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #2a2a2a;
`;

export const Input = styled(Field)`
  width: 100%;
  padding-left: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  border: 2px solid
    ${({ name, errors, touched }) => {
      return errors[name] && touched[name] ? errorColor : accentColor;
    }};
  border-radius: 20px;
`;

export const TextErrorCss = styled.span`
  color: ${errorColor};
  font-size: 16px;
  margin-top: 8px;
`;

export const Wrapper = styled.div`
  margin-bottom: 16px;
`;
