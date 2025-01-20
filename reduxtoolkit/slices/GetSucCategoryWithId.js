import { createSlice } from '@reduxjs/toolkit';
import { GetSubCategoryWithId } from '../requests/GetSubCategoryWithId';

const InitialCategory={
    SubCategory: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const GetSubcategory = createSlice({
  name: 'subCategory',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetSubCategoryWithId.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetSubCategoryWithId.fulfilled, (state, action) => {
        state.SubCategory = action.payload;        
        state.loading = false;

      })
      .addCase(GetSubCategoryWithId.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default GetSubcategory.reducer;
