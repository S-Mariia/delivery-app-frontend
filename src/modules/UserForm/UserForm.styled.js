import styled from 'styled-components';
import { accentColor, mainColor } from 'shared/constants/colors';

export const Wrapper = styled.div`
  width: 350px;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 16px;
  background-color: ${accentColor};
  border-radius: 15px;
  border: 3px solid transparent;
  font-size: 18px;
  font-weight: 500;
  color: ${mainColor};
  transition: border 250ms linear;
  margin: 26px auto 0;
`;

export const Label = styled.p`
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 18px;
  color: ${accentColor};
  border-bottom: 1px solid ${accentColor};
`;
