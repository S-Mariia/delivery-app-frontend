import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3003/api',
});

export const getListOfShops = async () => {
  const { data } = await instance.get('/shops');
  return data;
};

export const getGoodsFromShop = async shop => {
  const { data } = await instance.get(`/products/${shop}`);
  return data;
};

export const createOrder = async order => {
  const { data } = await instance.post('/orders', order);
  return data;
};
