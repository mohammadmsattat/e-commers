import { createSlice } from '@reduxjs/toolkit';
import { DeleteProduct } from '../requests/DeleteProduct';

const InitialCategory={
    deleted: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const deleteProduct = createSlice({
  name: 'deleteproduct',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(DeleteProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        state.deleted = action.payload;
        state.loading = false;

      })
      .addCase(DeleteProduct.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default deleteProduct.reducer;
