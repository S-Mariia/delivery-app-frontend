import Shops from './Shops/Shops';
import GoodsList from './GoodsList/GoodsList';

import { Container } from 'shared/components/Container/Container.styled';
import { FlexWrapper } from './ShopsPage.styled';

const ShopsPage = () => {
  return (
    <Container>
      <FlexWrapper>
        <Shops />
        <GoodsList />
      </FlexWrapper>
    </Container>
  );
};

export default ShopsPage;
