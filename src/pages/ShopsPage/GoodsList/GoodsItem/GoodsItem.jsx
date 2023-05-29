import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemFromCart } from 'redux/cart/cart-slice';
import { selectCart } from 'redux/cart/cart.selectors';

import defaultImage from 'shared/images/burger.jpeg';

import { Item, Button } from './GoodsItem.styled';

const GoodsItem = ({ good }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const inCart = cart.find(productFromCart => productFromCart._id === good._id);

  return (
    <Item>
      <img src={defaultImage} alt={good.name} />
      <p>{good.name}</p>
      <p>Price: {good.price}</p>
      {!inCart && (
        <Button
          type="button"
          onClick={() => {
            dispatch(addItemToCart(good));
          }}
        >
          Add to Cart
        </Button>
      )}
      {inCart && (
        <Button
          type="button"
          onClick={() => {
            dispatch(removeItemFromCart(good._id));
          }}
        >
          Remove from Cart
        </Button>
      )}
    </Item>
  );
};

export default GoodsItem;
