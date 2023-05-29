import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentShopId: '6474c77b526f0fb3d4c4fe3b',
  cart: [],
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setCurrentShopId: (state, { payload }) => {
      state.currentShopId = payload;
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
  setCurrentShopId,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} = deliverySlice.actions;

export default deliverySlice.reducer;
