import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart-slice';
import shopsReducer from './shops/shops-slice';

const persistConfig = {
  key: 'cart',
  storage: storage,
  whitelist: ['items'],
};

const rootReducer = combineReducers({
  cart: persistReducer(persistConfig, cartReducer),
  shops: shopsReducer,
});

export default rootReducer;
