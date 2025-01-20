
import { createSlice } from '@reduxjs/toolkit';
import { Postemail,PostCode,PutnewPassword } from '../requests/AuthRequest';
 

const InitialCategory={
    email: [],
    code: [],
    newPassword: [],
    loading: false,
    error: null,
  }


// Authentication slice 
const Authentication = createSlice({
  name: 'Authentication',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(Postemail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Postemail.fulfilled, (state, action) => {
        state.email = action.payload;
        state.loading = false;

      })
      .addCase(Postemail.rejected, (state, action) => {
        state.loading = false;
      });

      builder
      .addCase(PostCode.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(PostCode.fulfilled, (state, action) => {
          state.code = action.payload;
          state.loading = false;
  
        })
        .addCase(PostCode.rejected, (state, action) => {
          state.loading = false;
        });

        builder
        .addCase(PutnewPassword.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(PutnewPassword.fulfilled, (state, action) => {
            state.newPassword = action.payload;
            state.loading = false;
    
          })
          .addCase(PutnewPassword.rejected, (state, action) => {
            state.loading = false;
          });
  },
});

export default Authentication.reducer;
