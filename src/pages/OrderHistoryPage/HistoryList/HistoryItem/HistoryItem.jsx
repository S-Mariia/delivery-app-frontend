import {
  Item,
  ProductsWrapper,
  ProductCard,
  ProductDescription,
  ProductsList,
  OrderDetails,
  Price,
  Span,
  Text,
  Title,
} from './HistoryItem.styled';

import defaultImage from 'shared/images/burger.jpeg';

const getTotalPrice = order => {
  return order.reduce((acc, { quantity, price }) => quantity * price + acc, 0);
};

const HistoryItem = ({ item }) => {
  const { order } = item;
  return (
    <Item>
      <ProductsWrapper>
        <ProductsList>
          {order.map(({ imageUrl, name, price, quantity }, idx) => (
            <ProductCard key={idx}>
              <img src={imageUrl || defaultImage} alt={name} width={215} />
              <ProductDescription>
                <Title>{name}</Title>
                <Text>Quantity: {quantity}</Text>
                <Price>{price * quantity}₴</Price>
              </ProductDescription>
            </ProductCard>
          ))}
        </ProductsList>
      </ProductsWrapper>
      <OrderDetails>
        <Price>
          Total price: <Span>{getTotalPrice(order)}₴</Span>
        </Price>
      </OrderDetails>
    </Item>
  );
};

export default HistoryItem;
