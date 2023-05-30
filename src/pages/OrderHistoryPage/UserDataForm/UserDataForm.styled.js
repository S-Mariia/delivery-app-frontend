import styled from 'styled-components';
import { accentColor } from 'shared/constants/colors';

export const Wrapper = styled.div`
  width: 350px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormLabel = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${accentColor};
  margin-bottom: 24px;
`;
