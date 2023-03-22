import { createSlice } from '@reduxjs/toolkit';

const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offerItems: [],
    restaurantCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      if (state.offerItems.length < state.restaurantCount)
        state.offerItems.push(action.payload);
    },
    setRestaurantCount: (state, action) => {
      state.restaurantCount = action.payload;
    },
  },
});

export const { addItem, setRestaurantCount } = offersSlice.actions;
export default offersSlice.reducer;
