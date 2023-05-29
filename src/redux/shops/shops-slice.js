import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllShops, fetchGoodsFromShop } from './shops-operations';

const initialState = {
  currentShop: "McDonald's",
  shops: [],
  goods: [],
  areShopsLoading: false,
  areGoodsLoading: false,
  error: null,
};

const extraActions = [fetchAllShops, fetchGoodsFromShop];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchAllShopsFulfilledReducer = (state, { payload }) => {
  state.areShopsLoading = false;
  state.error = null;
  state.shops = payload;
};

const fetchGoodsFromShopFulfilledReducer = (state, { payload }) => {
  state.areGoodsLoading = false;
  state.error = null;
  state.goods = payload;
};

const fetchAllShopsPendingReducer = state => {
  state.areShopsLoading = true;
};

const fetchGoodsFromShopPendingReducer = state => {
  state.areGoodsLoading = true;
};

const anyRejectedReducer = (state, { payload }) => {
  state.areShopsLoading = false;
  state.areGoodsLoading = false;
  state.error = payload;
};

// export (down)
const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    setCurrentShop: (state, { payload }) => {
      state.currentShop = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllShops.fulfilled, fetchAllShopsFulfilledReducer)
      .addCase(fetchGoodsFromShop.fulfilled, fetchGoodsFromShopFulfilledReducer)
      .addCase(fetchAllShops.pending, fetchAllShopsPendingReducer)
      .addCase(fetchGoodsFromShop.pending, fetchGoodsFromShopPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer);
  },
});

export const { setCurrentShop } = shopsSlice.actions;

export default shopsSlice.reducer;
