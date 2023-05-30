import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://delivery-app-backend-ol34.onrender.com/api',
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

export const getOrderHistory = async ({ email, phone }) => {
  const { data } = await instance.get(`/orders?email=${email}&phone=${phone}`);
  return data;
};
