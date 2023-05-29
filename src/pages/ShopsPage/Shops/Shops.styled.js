import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledButton = styled.button`
  width: 160px;
  padding: 12px;
  background-color: ${({ shop, currentShop }) =>
    shop === currentShop ? '#82b114' : '#777b6e'};
  border-radius: 10px;
  border: none;
  /* background-color: #82b114; */
  /* #777b6e; */
`;
