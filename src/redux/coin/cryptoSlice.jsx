import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.coinstats.app/public/v1/coins';

export const getCryptos = createAsyncThunk(
  'getCrypto/info',
  async () => {
    const response = axios.get(url);
    return response.data.coins;
  },
);

const initialState = {
  cryptoCoins: [],
  status: 'idle',
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCryptos.pending, (state) => {
      state.status = 'loading';
    }).addCase(getCryptos.fulfilled, (state, action) => {
      state.status = 'succeed';
      state.dragonStore = action.payload;
    }).addCase(getCryptos.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const cryptoCoinsAction = cryptoSlice.actions;
export default cryptoSlice.reducer;
