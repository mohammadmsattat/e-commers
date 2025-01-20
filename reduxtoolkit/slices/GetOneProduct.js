import { createSlice } from '@reduxjs/toolkit';
import { GetOneProduct } from '../requests/GetOneProduct';

const InitialCategory={
    Product: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const OneProduct = createSlice({
  name: 'Product',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetOneProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetOneProduct.fulfilled, (state, action) => {
        state.Product = action.payload;
        state.loading = false;

      })
      .addCase(GetOneProduct.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default OneProduct.reducer;
