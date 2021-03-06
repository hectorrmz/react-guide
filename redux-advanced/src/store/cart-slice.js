import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalAmount: 0, totalQty: 0, changed: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items || [];
      state.totalAmount = action.payload.totalAmount;
      state.totalQty = action.payload.totalQty;
    },
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          qty: 1,
          total: newItem.price,
        });
      } else {
        existingItem.qty++;
        existingItem.total = existingItem.total + newItem.price;
      }

      state.totalAmount = state.items.reduce(
        (acc, next) => acc + next.total,
        0
      );

      state.totalQty++;

      state.changed = true;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem.qty === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.qty--;
        existingItem.total = existingItem.total - existingItem.price;
      }

      state.totalAmount = state.items.reduce(
        (acc, next) => acc + next.total,
        0
      );

      state.totalQty--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
