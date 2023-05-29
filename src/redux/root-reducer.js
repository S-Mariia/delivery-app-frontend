// import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import deliveryReducer from './slice';
// import cartReducer from './cart/cart-slice';
// import shopsReducer from './shops/shops-slice';

const persistConfig = {
  key: 'cart',
  storage: storage,
  whitelist: ['cart'],
};

const rootReducer = persistReducer(persistConfig, deliveryReducer);

export default rootReducer;
