import { useSelector, useDispatch } from 'react-redux';

import { selectCart } from 'redux/selectors';
import { clearCart } from 'redux/slice';

import CartItem from './CartItem/CarItem';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCart);
  return (
    <>
      {cartItems.length > 0 && (
        <>
          <ul>
            {cartItems.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear cart
          </button>
        </>
      )}
      {cartItems.length === 0 && (
        <p>You haven't added any goods to the cart yet</p>
      )}
    </>
  );
};

export default Cart;
