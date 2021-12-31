import { createSlice } from '@reduxjs/toolkit';

const initialState = { isCartShown: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartShown = !state.isCartShown;
    },
    showNotification(state, action) {
      state.notification = { ...action.payload };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
