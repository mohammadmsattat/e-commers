import { createSlice } from '@reduxjs/toolkit';
import { EditProductrequest } from '../requests/EditProduct';

const InitialCategory={
    data: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const EditProductSlice = createSlice({
  name: 'EditProduct',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(EditProductrequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(EditProductrequest.fulfilled, (state, action) => {
        state.data = action.payload;
        console.log(state.data);
        
        state.loading = false;

      })
      .addCase(EditProductrequest.rejected, (state, action) => {
        state.loading = false;
        state.error=action.error;
      });
  },
});

export default EditProductSlice.reducer;
