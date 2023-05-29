import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentShop: { name: "McDonald's", id: '6474c77b526f0fb3d4c4fe3b' },
  // currentShop: { name: '', id: '' },
  cart: [],
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setCurrentShop: (state, { payload }) => {
      state.currentShop = payload;
    },
    addItemToCart: (state, { payload }) => {
      state.cart.push({ ...payload, quantity: '1' });
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(item => item._id !== payload);
    },
    updateItemQuantity: (state, { payload }) => {
      state.cart = state.cart.map(item => {
        return item._id !== payload._id
          ? item
          : { ...item, quantity: payload.quantity };
      });
    },
  },
});

export const {
  setCurrentShop,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} = deliverySlice.actions;

export default deliverySlice.reducer;
