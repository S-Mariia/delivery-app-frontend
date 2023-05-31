import { createSlice } from '@reduxjs/toolkit';
import { getOrderHistory } from './operations';

const initialState = {
  currentShopId: '6474c77b526f0fb3d4c4fe3b',
  cart: [],
  history: [],
  isHistoryLoading: false,
  historyError: null,
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
    clearCart: state => {
      state.cart = [];
    },
    updateItemQuantity: (state, { payload }) => {
      state.cart = state.cart.map(item => {
        return item._id !== payload._id
          ? item
          : { ...item, quantity: payload.quantity };
      });
    },
    clearOrderHistory: state => {
      state.history = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getOrderHistory.pending, state => {
        state.isHistoryLoading = true;
        state.historyError = null;
      })
      .addCase(getOrderHistory.fulfilled, (state, { payload }) => {
        state.history = payload;
        state.isHistoryLoading = false;
      })
      .addCase(getOrderHistory.rejected, (state, { payload }) => {
        state.history = [];
        state.isHistoryLoading = false;
        state.historyError = payload;
      });
  },
});

export const {
  setCurrentShopId,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
  clearOrderHistory,
} = deliverySlice.actions;

export default deliverySlice.reducer;
