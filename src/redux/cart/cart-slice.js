import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      state.items.push({ ...payload, quantity: '1' });
    },
    removeItemFromCart: (state, { payload }) => {
      state.items = state.items.filter(item => item._id !== payload);
    },
    updateItemQuantity: (state, { payload }) => {
      state.items = state.items.map(item => {
        return item._id !== payload._id
          ? item
          : { ...item, quantity: payload.quantity };
      });
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
