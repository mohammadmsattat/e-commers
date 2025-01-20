import { createSlice } from '@reduxjs/toolkit';
import { PostProduct } from '../requests/PostProduct';

const InitialCategory={
    data: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const PostProductSlice = createSlice({
  name: 'Product',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(PostProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(PostProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        // console.log(state.data);
        
        state.loading = false;

      })
      .addCase(PostProduct.rejected, (state, action) => {
        state.loading = false;
        state.error=action.error;
      });
  },
});

export default PostProductSlice.reducer;
