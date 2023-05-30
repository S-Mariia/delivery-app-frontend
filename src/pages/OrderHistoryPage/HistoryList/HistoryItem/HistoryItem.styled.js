import styled from 'styled-components';

export const Item = styled.li`
  width: 93%;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 16px 8px;
  box-shadow: -1px 3px 22px -4px rgba(42, 42, 42, 0.63);
  border-radius: 20px;
  margin-bottom: 16px;
  display: flex;
`;

export const ProductsWrapper = styled.div`
  flex-grow: 1;
  padding: 5px;
  max-width: 850px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 3px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const ProductCard = styled.li`
  min-width: 400px;
  width: 400px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 4px 0px rgba(42, 42, 42, 1);
  border-radius: 10px;
  gap: 12px;
  overflow: hidden;
`;

export const ProductDescription = styled.div`
  width: 160px;
`;

export const OrderDetails = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 19px;
`;

export const Span = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

export const Title = styled.p`
  font-size: 19px;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 17px;
  margin-bottom: 12px;
`;
