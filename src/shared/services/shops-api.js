import data from '../../goods.json';
import shopsList from '../../shops.json';

export const getListOfShops = async () => {
  const shops = await shopsList;
  return shops;
};

export const getGoodsFromShop = async shop => {
  const goods = await data.filter(good => good.shop === shop);
  return goods;
};
