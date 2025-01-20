import { createSlice } from '@reduxjs/toolkit';
import { SearchProducts } from '../requests/SerachProducts';

const InitialCategory={
    data: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const SearchProduct = createSlice({
  name: 'SearchProducts',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(SearchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SearchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;

      })
      .addCase(SearchProducts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default SearchProduct.reducer;
