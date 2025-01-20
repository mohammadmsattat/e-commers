import { createSlice } from '@reduxjs/toolkit';
import { GetBrand } from '../requests/BrandRequest';

const InitialCategory={
    brand: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const GetAllbrand = createSlice({
  name: 'brand',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetBrand.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetBrand.fulfilled, (state, action) => {
        state.Category = action.payload;
        state.loading = false;

      })
      .addCase(GetBrand.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default GetAllbrand.reducer;
