import { createSlice } from '@reduxjs/toolkit';
import { Loginrequest } from '../requests/Login';

const InitialCategory={
    login: [],
    loading: false,
    error: null,
  }
// تعريف الـ Thunk


// إنشاء Slice
const LoginSlice = createSlice({
  name: 'login',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(Loginrequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Loginrequest.fulfilled, (state, action) => {
        state.login = action.payload;
        console.log(state.registe);
        
        state.loading = false;

      })
      .addCase(Loginrequest.rejected, (state, action) => {
        state.loading = false;
        state.error=action.error;
      });
  },
});

export default LoginSlice.reducer;
