import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getListOfShops } from 'shared/services/shops-api';

import { setCurrentShop } from 'redux/shops/shops-slice';
import { selectCurrentShop } from 'redux/shops/shops-selectors';
import { selectCart } from 'redux/cart/cart.selectors';

import { List, StyledButton } from './Shops.styled';

const Shops = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [shopsList, setShopsList] = useState([]);
  const [error, setError] = useState(null);

  const currentShop = useSelector(selectCurrentShop);
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

  const handleClick = shop => {
    if (shop !== currentShop && cart.length > 0) {
      console.log('Cart is full');
      return;
    }
    dispatch(setCurrentShop(shop));
  };

  return (
    <List>
      {shopsList.map((shop, idx) => (
        <li key={idx}>
          <StyledButton
            currentShop={currentShop}
            shop={shop}
            onClick={() => handleClick(shop)}
          >
            {shop}
          </StyledButton>
        </li>
      ))}
    </List>
  );
};

export default Shops;
