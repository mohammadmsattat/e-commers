import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCategory } from '../requests/CategoryRequest';

const InitialCategory={
    Category: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const GetAllCategory = createSlice({
  name: 'Category',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllCategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAllCategory.fulfilled, (state, action) => {
        state.Category = action.payload;
        state.loading = false;

      })
      .addCase(fetchAllCategory.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default GetAllCategory.reducer;
