
import { createSlice } from '@reduxjs/toolkit';
import { Updatepassword } from '../requests/UpdatePassWord';
import { UpdateProfileData } from '../requests/UpdateProfileData';

const InitialCategory={
    updatepassword: [],
    profileData: [],
    loading: false,
    error: null,
  }


// Authentication slice 
const UserProfile = createSlice({
  name: 'profile',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(Updatepassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Updatepassword.fulfilled, (state, action) => {
        state.updatepassword = action.payload;
        state.loading = false;

      })
      .addCase(Updatepassword.rejected, (state, action) => {
        state.loading = false;
      });

      builder
      .addCase(UpdateProfileData.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(UpdateProfileData.fulfilled, (state, action) => {
          state.profileData = action.payload;
          state.loading = false;
  
        })
        .addCase(UpdateProfileData.rejected, (state, action) => {
          state.loading = false;
        });

  },
});

export default UserProfile.reducer;
