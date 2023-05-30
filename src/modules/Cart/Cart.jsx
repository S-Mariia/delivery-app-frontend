import { useSelector, useDispatch } from 'react-redux';

import { GiShoppingCart } from 'react-icons/gi';

import { clearCart } from 'redux/slice';

import { selectCart } from 'redux/selectors';

import { List, Paragraph, Button, Warning, Wrapper } from './Cart.styled';
import { CustomSpan } from './CartItem/CarItem.styled';

import CartItem from './CartItem/CarItem';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);
  const totalPrice = cartItems.reduce(
    (acc, { quantity, price }) => quantity * price + acc,
    0
  );
  return (
    <>
      {cartItems.length > 0 && (
        <Wrapper>
          <List>
            {cartItems.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
          </List>
          <Paragraph>
            Total: <CustomSpan>{totalPrice}₴</CustomSpan>
          </Paragraph>
          <Button
            type="button"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear <GiShoppingCart size={25} />
          </Button>
        </Wrapper>
      )}
      {cartItems.length === 0 && (
        <Warning>You haven't added any goods to the cart yet</Warning>
      )}
    </>
  );
};

export default Cart;
