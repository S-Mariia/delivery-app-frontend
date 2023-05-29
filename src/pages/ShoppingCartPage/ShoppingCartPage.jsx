import UserForm from 'modules/UserForm/UserForm';
import Cart from '../../modules/Cart/Cart';

import { Container } from 'shared/components/Container/Container.styled';
import { FlexWrapper } from './ShoppingCartPage.styled';

const ShoppingCartPage = () => {
  return (
    <Container>
      <FlexWrapper>
        <UserForm />
        <Cart />
      </FlexWrapper>
    </Container>
  );
};

export default ShoppingCartPage;
