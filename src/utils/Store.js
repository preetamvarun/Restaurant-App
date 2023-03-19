import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';

// Slices go in here soon...

const store = configureStore({
  // each store slice will export reducer
  reducer: {
    // name of the slice and slice object itself
    cart: cartSlice,
  },
});

export default store;
