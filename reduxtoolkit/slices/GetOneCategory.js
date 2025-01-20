import { createSlice } from '@reduxjs/toolkit';
import { GetOnecategory } from '../requests/GetOneCategory';

const InitialCategory={
    category: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const Onecategory = createSlice({
  name: 'oneCategory',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(GetOnecategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetOnecategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loading = false;

      })
      .addCase(GetOnecategory.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default Onecategory.reducer;
