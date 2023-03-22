import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';
import OffersSlice from './OffersSlice';

// Slices go in here soon...

const store = configureStore({
  // each store slice will export reducer
  reducer: {
    // name of the slice and slice object itself
    cart: cartSlice,
    offer: OffersSlice,
  },
});

export default store;
