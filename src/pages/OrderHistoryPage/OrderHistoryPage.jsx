import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearOrderHistory } from 'redux/slice';

import UserDataForm from './UserDataForm/UserDataForm';
import HistoryList from './HistoryList/HistoryList';

import { Container } from 'shared/components/Container/Container.styled';

const OrderHistoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearOrderHistory());
  }, [dispatch]);

  return (
    <Container>
      <UserDataForm />
      <HistoryList />
    </Container>
  );
};

export default OrderHistoryPage;
