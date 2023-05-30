import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/services/api';
import { toast } from 'react-hot-toast';

export const getOrderHistory = createAsyncThunk(
  'history/getHistory',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.getOrderHistory(data);
      if (response.length === 0) {
        toast(
          `User with email: ${data.email} and phone ${data.phone} has not made any purchases yet`,
          {
            icon: '',
            style: {
              borderRadius: '10px',
              background: '#723333',
              color: '#FFF',
            },
          }
        );
      }

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
