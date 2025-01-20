import { createSlice } from '@reduxjs/toolkit';
import { CategoryForSerach } from '../requests/CategoryForSearch';

const InitialCategory={
    data: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const SearchCategory = createSlice({
  name: 'SearchCategory',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(CategoryForSerach.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(CategoryForSerach.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;

      })
      .addCase(CategoryForSerach.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default SearchCategory.reducer;

