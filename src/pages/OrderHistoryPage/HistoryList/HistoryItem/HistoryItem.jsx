import {
  Item,
  ProductsWrapper,
  ProductCard,
  ProductDescription,
  ProductsList,
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
          {order.map((product, idx) => (
            <ProductCard key={idx}>
              <img src={defaultImage} alt={product.name} />
              <ProductDescription>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </ProductDescription>
            </ProductCard>
          ))}
        </ProductsList>
      </ProductsWrapper>
      <p>Total: {getTotalPrice(order)}</p>
    </Item>
  );
};

export default HistoryItem;
