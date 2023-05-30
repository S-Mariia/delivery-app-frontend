import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mainColor, additionalAccentColor } from 'shared/constants/colors';

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  color: ${mainColor};
  &.active {
    color: ${additionalAccentColor};
    font-size: 21px;
    font-weight: 700;
    border-bottom: 3px solid ${additionalAccentColor};
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 14px;

  & > li {
    padding: 4px;
  }
`;
