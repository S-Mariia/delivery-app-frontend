import styled from 'styled-components';

export const Item = styled.li`
  width: 1100px;
  padding: 12px 16px;
  border: 1px solid #2a2a2a;
  margin-bottom: 12px;
  display: flex;
`;

export const ProductsWrapper = styled.div`
  width: 850px;
  outline: 2px solid red;
  max-width: 850px;
  overflow: scroll;
`;

export const ProductsList = styled.ul`
  display: flex;
  align-items: center;
  /* gap: 12px; */
`;

export const ProductCard = styled.li`
  min-width: 400px;
  width: 400px;
  display: flex;
  align-items: center;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  gap: 12px;
`;

export const ProductDescription = styled.div`
  width: 100px;
`;
