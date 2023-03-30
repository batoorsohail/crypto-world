import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const coinsUrl = 'https://api.coinstats.app/public/v1/coins';

export const getCryptoCoinsAsync = createAsyncThunk(
  'cryptoCoins/getCryptoCoins',
  async () => {
    const resp = await axios.get(coinsUrl);
    return resp.data.coins;
  },
);

const cryptoCoinsSlice = createSlice({
  name: 'cryptoCoins',
  initialState: {
    cryptoCoins: [],
    error: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoCoinsAsync.pending, (state) => {
        const tempState = state;
        tempState.status = 'loading';
      })
      .addCase(getCryptoCoinsAsync.fulfilled, (state, actions) => {
        const tempState = state;
        tempState.status = 'succeed';
        tempState.cryptoCoins = actions.payload;
      })
      .addCase(getCryptoCoinsAsync.rejected, (state, actions) => {
        const tempState = state;
        tempState.status = 'failed';
        tempState.error = actions.error.message;
      });
  },
});

export const cryptoCoinsActions = createAsyncThunk.actions;
export default cryptoCoinsSlice.reducer;
