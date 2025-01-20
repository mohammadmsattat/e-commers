import { createSlice } from '@reduxjs/toolkit';
import { PostCategoryWithFile } from '../requests/PostCategoryWithFile';

const InitialCategory={
    data: {},
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const PostCategory = createSlice({
  name: 'Category',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(PostCategoryWithFile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(PostCategoryWithFile.fulfilled, (state, action) => {
        state.data = action.payload;
        // console.log(state.data);
        
        state.loading = false;

      })
      .addCase(PostCategoryWithFile.rejected, (state, action) => {
        state.loading = false;
        state.error=action.error;
      });
  },
});

export default PostCategory.reducer;
