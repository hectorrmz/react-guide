import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 'p1',
      title: 'Test',
      price: 6,
      description: 'This is a first product - amazing!',
    },
    {
      id: 'p2',
      title: 'Other Product',
      price: 3,
      description: 'This is a second product - amazing!',
    },
    {
      id: 'p3',
      title: 'Third Product',
      price: 2.5,
      description: 'This is a third product - amazing!',
    },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default productSlice;
