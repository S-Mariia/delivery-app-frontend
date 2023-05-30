import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { errorColor } from 'shared/constants/colors';

export const Button = styled(Link)`
  font-size: 18px;
  color: ${errorColor};
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 12px;
`;

export const Message = styled.p`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  margin-bottom: 30px;
`;
