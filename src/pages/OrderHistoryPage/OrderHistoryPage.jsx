import UserDataForm from './UserDataForm/UserDataForm';
import HistoryList from './HistoryList/HistoryList';

import { Container } from 'shared/components/Container/Container.styled';

const OrderHistoryPage = () => {
  return (
    <Container>
      <UserDataForm />
      <HistoryList />
    </Container>
  );
};

export default OrderHistoryPage;
