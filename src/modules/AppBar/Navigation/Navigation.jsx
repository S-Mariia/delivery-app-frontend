import { List, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledLink to="/">Shop</StyledLink>
        </li>
        <li>
          <StyledLink to="/cart">Shopping Cart</StyledLink>
        </li>
      </List>
    </nav>
  );
};

export default Navigation;
