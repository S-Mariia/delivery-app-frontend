import styled from 'styled-components';
import {
  accentColor,
  mainColor,
  additionalColor,
} from 'shared/constants/colors';

export const Wrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledButton = styled.button`
  width: 200px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: inherit;
  font-size: 20px;
  color: ${({ shop, currentShop }) =>
    shop === currentShop ? mainColor : '#2a2a2a'};
  background-color: ${({ shop, currentShop }) =>
    shop === currentShop ? accentColor : additionalColor};
  border-radius: 16px;
  border: none;
`;
