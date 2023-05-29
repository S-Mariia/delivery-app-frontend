// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as api from '../../shared/services/api';

// export const fetchAllShops = createAsyncThunk(
//   'shops/fetchShops',
//   async (_, { rejectWithValue }) => {
//     try {
//       const result = await api.getListOfShops();
//       return result;
//     } catch (e) {
//       rejectWithValue(e.message);
//     }
//   }
// );

// export const fetchGoodsFromShop = createAsyncThunk(
//   'shops/fetchGoods',
//   async (shop, { rejectWithValue }) => {
//     try {
//       const result = await api.getGoodsFromShop(shop);
//       return result;
//     } catch (e) {
//       rejectWithValue(e.message);
//     }
//   }
// );
