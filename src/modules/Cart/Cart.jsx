import { useSelector } from 'react-redux';

import { selectCart } from 'redux/cart/cart.selectors';

import CartItem from './CartItem/CarItem';

const Cart = () => {
  const cartItems = useSelector(selectCart);
  return (
    <ul>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Cart;
