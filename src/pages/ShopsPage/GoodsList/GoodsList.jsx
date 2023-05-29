/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getGoodsFromShop } from 'shared/services/api';

import { selectCurrentShop } from 'redux/shops/shops-selectors';

import GoodsItem from './GoodsItem/GoodsItem';
import { Wrapper, List } from './GoodsList.styled';

const GoodsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [goods, setGoods] = useState([]);
  const [error, setError] = useState(null);

  const currentShop = useSelector(selectCurrentShop);

  useEffect(() => {
    const fetchGoods = async shop => {
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

    fetchGoods(currentShop);
  }, [currentShop]);

  return (
    <Wrapper>
      <List>
        {goods.map(good => {
          return <GoodsItem key={good._id} good={good} />;
        })}
      </List>
    </Wrapper>
  );
};

export default GoodsList;
