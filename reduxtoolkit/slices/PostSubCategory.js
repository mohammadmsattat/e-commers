import { createSlice } from '@reduxjs/toolkit';
import { PostSubCategoryWithFile } from '../requests/PostSubCategoryRequest';

const InitialCategory={
    data: {},
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const PostSubCategory = createSlice({
  name: 'postSubCategory',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(PostSubCategoryWithFile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(PostSubCategoryWithFile.fulfilled, (state, action) => {
        state.data = action.payload;
        // console.log(state.data);
        
        state.loading = false;

      })
      .addCase(PostSubCategoryWithFile.rejected, (state, action) => {
        state.loading = false;
        state.error=action.error;
      });
  },
});

export default PostSubCategory.reducer;
