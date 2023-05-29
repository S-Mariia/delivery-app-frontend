import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getListOfShops } from 'shared/services/api';

import { setCurrentShop } from 'redux/slice';
import { selectCurrentShop, selectCart } from 'redux/selectors';

import { List, StyledButton } from './Shops.styled';

const Shops = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [shopsList, setShopsList] = useState([]);
  const [error, setError] = useState(null);

  const currentShop = useSelector(selectCurrentShop);
  const cart = useSelector(selectCart);

  useEffect(() => {
    if (cart.length !== 0) {
      const shop = { id: cart[0].shopId };
    }
  }, [cart]);

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

  const handleClick = shop => {
    if (shop.name !== currentShop.name && cart.length > 0) {
      console.log('Cart is full');
      return;
    }
    dispatch(setCurrentShop(shop));
  };

  return (
    <List>
      {shopsList.map(({ name, _id: id }) => (
        <li key={id}>
          <StyledButton
            currentShop={currentShop.name}
            shop={name}
            onClick={() => handleClick({ name, id })}
          >
            {name}
          </StyledButton>
        </li>
      ))}
    </List>
  );
};

export default Shops;
