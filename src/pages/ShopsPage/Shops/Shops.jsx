import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-hot-toast';

import { getListOfShops } from 'shared/services/api';

import { setCurrentShopId } from 'redux/slice';
import { selectCurrentShopId, selectCart } from 'redux/selectors';

import { List, StyledButton } from './Shops.styled';

const Shops = ({ setError }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [shopsList, setShopsList] = useState([]);

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
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShops();
  }, [setError]);

  const handleClick = id => {
    if (id !== currentShopId && cart.length > 0) {
      toast('Complete the purchase in the current store first', {
        icon: '',
        style: {
          borderRadius: '10px',
          background: '#723333',
          color: '#FFF',
        },
      });
      return;
    }
    dispatch(setCurrentShopId(id));
  };

  return (
    <>
      {shopsList.length > 0 && (
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
      )}
    </>
  );
};

export default Shops;
