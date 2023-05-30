import { useDispatch, useSelector } from 'react-redux';
import { GiShoppingCart } from 'react-icons/gi';

import { addItemToCart, removeItemFromCart } from 'redux/slice';
import { selectCart } from 'redux/selectors';

import defaultImage from 'shared/images/burger.jpeg';

import { Item, Button, StyledP, Text } from './GoodsItem.styled';

const GoodsItem = ({ good }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const inCart = cart.find(productFromCart => productFromCart._id === good._id);

  return (
    <Item>
      <img src={good.imageUrl || defaultImage} alt={good.name} />
      <StyledP>{good.name}</StyledP>
      <Text>{good.price}₴</Text>
      {!inCart && (
        <Button
          type="button"
          onClick={() => {
            dispatch(addItemToCart(good));
          }}
        >
          Add to <GiShoppingCart size={26} />
        </Button>
      )}
      {inCart && (
        <Button
          type="button"
          onClick={() => {
            dispatch(removeItemFromCart(good._id));
          }}
        >
          Remove from <GiShoppingCart size={26} />
        </Button>
      )}
    </Item>
  );
};

export default GoodsItem;
