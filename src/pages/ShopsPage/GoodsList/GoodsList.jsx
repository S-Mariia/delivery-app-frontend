/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { toast } from 'react-hot-toast';

import { getGoodsFromShop } from 'shared/services/api';

import { selectCurrentShopId } from 'redux/selectors';

import GoodsItem from './GoodsItem/GoodsItem';
import Loader from 'shared/components/Loader/Loader';

import { Wrapper, List } from './GoodsList.styled';

const GoodsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [goods, setGoods] = useState([]);
  const [error, setError] = useState(null);

  const currentShopId = useSelector(selectCurrentShopId);

  useEffect(() => {
    const fetchGoods = async shop => {
      if (!currentShopId) return;
      try {
        setIsLoading(true);
        setError(null);
        const result = await getGoodsFromShop(shop);
        setGoods(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoods(currentShopId);
  }, [currentShopId]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {!isLoading && (
        <List>
          {goods.map(good => {
            return <GoodsItem key={good._id} good={good} />;
          })}
        </List>
      )}
      {error &&
        toast('Complete the purchase in the current store first', {
          icon: '',
          style: {
            borderRadius: '10px',
            background: '#723333',
            color: '#FFF',
          },
        })}
    </Wrapper>
  );
};

export default GoodsList;
