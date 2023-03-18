import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';

// Slices go in here soon...

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
