import Navigation from './Navigation/Navigation';

import { Header } from './AppBar.styled';
import { Container } from 'shared/components/Container/Container.styled';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <Navigation />
      </Container>
    </Header>
  );
};

export default AppBar;
