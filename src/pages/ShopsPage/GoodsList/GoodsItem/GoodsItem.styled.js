import styled from 'styled-components';
import { accentColor } from 'shared/constants/colors';

export const Item = styled.li`
  padding: 12px;
  width: 355px;
  border-radius: 20px;
  box-shadow: -1px 3px 22px -4px rgba(42, 42, 42, 0.63);
  position: relative;
`;

export const StyledP = styled.p`
  width: 85%;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin: 14px auto 66px;
`;

export const Text = styled.p`
  position: absolute;
  left: 24px;
  bottom: 25px;
  font-size: 20px;
  color: #2a2a2a;
`;

export const Button = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: transparent;
  border-radius: 15px;
  border: 3px solid transparent;
  font-size: 18px;
  color: #2a2a2a;
  transition: border 250ms linear;

  &:hover {
    border: 3px solid ${accentColor};
  }
`;
