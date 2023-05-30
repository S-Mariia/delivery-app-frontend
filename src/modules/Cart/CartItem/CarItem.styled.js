import styled from 'styled-components';
import { accentColor } from 'shared/constants/colors';

export const Item = styled.li`
  position: relative;
  padding: 18px;
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: flex-end;
  border-radius: 20px;
  box-shadow: -1px 3px 22px -4px rgba(42, 42, 42, 0.63);
  margin-bottom: 12px;
`;

export const Button = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
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

export const Description = styled.div`
  padding-bottom: 16px;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  width: 85%;
  margin-bottom: 20px;
`;

export const Price = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const QuantityWraper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Btn = styled.button`
  border: none;
  background-color: transparent;
`;

export const CustomSpan = styled.span`
  font-size: 23px;
  font-weight: 500;
`;
