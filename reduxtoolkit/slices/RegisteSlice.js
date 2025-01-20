import { createSlice } from '@reduxjs/toolkit';
import { RegisteRequest } from '../requests/RegisterUser';

const InitialCategory={
    registe: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const RegisteSlice = createSlice({
  name: 'Registe',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(RegisteRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(RegisteRequest.fulfilled, (state, action) => {
        state.registe = action.payload;
        console.log(state.registe);
        
        state.loading = false;

      })
      .addCase(RegisteRequest.rejected, (state, action) => {
        state.loading = false;
        state.error=action.error;
      });
  },
});

export default RegisteSlice.reducer;
