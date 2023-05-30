import { useState } from 'react';

import Shops from './Shops/Shops';
import GoodsList from './GoodsList/GoodsList';

import { Container } from 'shared/components/Container/Container.styled';
import { FlexWrapper } from './ShopsPage.styled';

const ShopsPage = () => {
  const [error, setError] = useState(null);

  return (
    <Container>
      {!error && (
        <FlexWrapper>
          <Shops setError={setError} />
          <GoodsList />
        </FlexWrapper>
      )}
      {error && <p>Something went wrong ({error}). Please reload the page.</p>}
    </Container>
  );
};

export default ShopsPage;
