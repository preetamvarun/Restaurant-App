import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  // action : reducer function
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

/*
  cartSlice = {
    actions : {
      addItem,
      removeItem,
      clearCart
    }
    reducer : reducers
  }
*/

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
