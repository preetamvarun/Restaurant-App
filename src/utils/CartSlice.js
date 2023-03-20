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
      let idx = 0;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].name === action.payload) {
          idx = i;
          break;
        }
      }
      state.items.splice(idx, 1);
    },
    clearCart: (state) => {
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
