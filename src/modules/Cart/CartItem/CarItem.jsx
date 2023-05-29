import { useDispatch } from 'react-redux';

import { removeItemFromCart, updateItemQuantity } from 'redux/cart/cart-slice';

import { Item, Button } from './CarItem.styled';
import defaultImage from 'shared/images/burger.jpeg';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const quantity = e.target.value;
    //   console.log({ id: item.id, quantity });
    dispatch(updateItemQuantity({ id: item.id, quantity }));
  };

  return (
    <Item>
      <img src={defaultImage} alt={item.name} />
      <p>{item.name}</p>
      <p>Price: {item.price}</p>
      <input type="number" value={item.quantity} onChange={handleInputChange} />
      <Button
        type="button"
        onClick={() => {
          dispatch(removeItemFromCart(item.id));
        }}
      >
        Remove from Cart
      </Button>
    </Item>
  );
};

export default CartItem;
