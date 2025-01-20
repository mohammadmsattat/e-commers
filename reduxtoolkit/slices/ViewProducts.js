import { createSlice } from '@reduxjs/toolkit';
import { GetProducts } from '../requests/GetProducts';

const InitialCategory={
    Products: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const ViewProducts = createSlice({
  name: 'Products',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.Products = action.payload;
        
        state.loading = false;

      })
      .addCase(GetProducts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default ViewProducts.reducer;
