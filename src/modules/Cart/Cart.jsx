import { useSelector } from 'react-redux';

import { selectCart } from 'redux/selectors';

import CartItem from './CartItem/CarItem';

const Cart = () => {
  const cartItems = useSelector(selectCart);
  return (
    <ul>
      {cartItems.map(item => (
        <CartItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default Cart;
