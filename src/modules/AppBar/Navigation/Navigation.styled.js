import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 18px;
  &.active {
    color: yellow;
    font-size: 19px;
    font-weight: 700;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 12px;

  & > li {
    padding: 4px;
  }
`;
