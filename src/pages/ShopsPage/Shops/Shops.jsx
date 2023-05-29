import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getListOfShops } from 'shared/services/api';

import { setCurrentShopId } from 'redux/slice';
import { selectCurrentShopId, selectCart } from 'redux/selectors';

import { List, StyledButton } from './Shops.styled';

const Shops = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [shopsList, setShopsList] = useState([]);
  const [error, setError] = useState(null);

  const currentShopId = useSelector(selectCurrentShopId);
  const cart = useSelector(selectCart);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await getListOfShops();
        setShopsList(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShops();
  }, []);

  const handleClick = id => {
    if (id !== currentShopId && cart.length > 0) {
      console.log('Cart is full');
      return;
    }
    dispatch(setCurrentShopId(id));
  };

  return (
    <List>
      {shopsList.map(({ name, _id: id }) => (
        <li key={id}>
          <StyledButton
            currentShop={currentShopId}
            shop={id}
            onClick={() => handleClick(id)}
          >
            {name}
          </StyledButton>
        </li>
      ))}
    </List>
  );
};

export default Shops;
