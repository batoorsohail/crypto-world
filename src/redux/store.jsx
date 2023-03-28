import { configureStore } from '@reduxjs/toolkit';
import cryptoCoinsReducer from './coin/cryptoSlice';

const store = configureStore({
  reducer: {
    cryptoCoins: cryptoCoinsReducer,
  },
});

export default store;
