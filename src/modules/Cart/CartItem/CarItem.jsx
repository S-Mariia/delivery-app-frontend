import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GiShoppingCart } from 'react-icons/gi';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { removeItemFromCart, updateItemQuantity } from 'redux/slice';

import {
  Item,
  Button,
  Description,
  Title,
  Price,
  Span,
  QuantityWraper,
  Btn,
  CustomSpan,
} from './CarItem.styled';
import defaultImage from 'shared/images/burger.jpeg';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecreaseQuantity = () => {
    if (quantity === 1 || quantity === '1') {
      return;
    }
    dispatch(
      updateItemQuantity({ _id: item._id, quantity: Number(quantity) - 1 })
    );
    setQuantity(Number(quantity) - 1);
  };
  const handleIncreaseQuantity = () => {
    dispatch(
      updateItemQuantity({ _id: item._id, quantity: Number(quantity) + 1 })
    );
    setQuantity(Number(quantity) + 1);
  };

  return (
    <Item>
      <img src={item.imageUrl || defaultImage} alt={item.name} width={260} />
      <Description>
        <Title>{item.name}</Title>
        <Price>
          Price: <Span>{item.price * item.quantity}₴</Span>
        </Price>
        <QuantityWraper>
          <Btn onClick={handleDecreaseQuantity}>
            <FaMinus size={20} />
          </Btn>
          <CustomSpan>{quantity}</CustomSpan>
          <Btn onClick={handleIncreaseQuantity}>
            <FaPlus size={20} />
          </Btn>
        </QuantityWraper>
        <Button
          type="button"
          onClick={() => {
            dispatch(removeItemFromCart(item._id));
          }}
        >
          Remove from <GiShoppingCart size={26} />
        </Button>
      </Description>
    </Item>
  );
};

export default CartItem;
