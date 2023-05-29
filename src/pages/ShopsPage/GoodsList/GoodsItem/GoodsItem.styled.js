import styled from 'styled-components';

export const Item = styled.li`
  padding: 12px;
  width: 340px;
  border-radius: 20px;
  border: 1px solid #2a2a2a;
`;

export const Button = styled.button`
  margin-top: 12px; // delete!!!!!!!!!!!!!!!!!
  padding: 12px 16px;
  background-color: transparent;
  border-radius: 10px;
  border: 4px solid yellow;
  transition: background-color 300ms linear;

  &:hover {
    background-color: yellow;
  }
`;
