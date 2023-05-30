import styled from 'styled-components';
import { errorColor } from 'shared/constants/colors';

export const List = styled.ul`
  max-height: 645px;
  overflow-y: scroll;
  padding: 15px;
  margin-bottom: 18px;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

export const Wrapper = styled.div`
  flex-grow: 1;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 120px;
  margin: 0 20px 4px auto;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: transparent;
  border-radius: 15px;
  border: 3px solid transparent;
  font-size: 18px;
  font-weight: 500;
  color: ${errorColor};
  transition: border 250ms linear;
  margin: 0 12px 0 auto;

  &:hover {
    border: 3px solid ${errorColor};
  }

  & > svg {
    fill: ${errorColor};
  }
`;

export const Warning = styled.div`
  padding-top: 12px;
  width: 600px;
  margin: 0 auto;
  font-size: 20px;
  color: ${errorColor};
`;
