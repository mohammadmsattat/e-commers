
import { createSlice } from '@reduxjs/toolkit';
import { AddAdress } from '../requests/AddAddress';
import { GetAdress } from '../requests/GetAddress'; 
import { DeletAddress } from '../requests/DeleteAddress';

const InitialCategory={
    AddAdress: [],
    allAdress: [],
    delete: [],
    loading: false,
    error: null,
  }


// Authentication slice 
const AddressSlice = createSlice({
  name: 'Authentication',
  initialState:InitialCategory ,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(AddAdress.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddAdress.fulfilled, (state, action) => {
        state.AddAdress = action.payload;
        state.loading = false;

      })
      .addCase(AddAdress.rejected, (state, action) => {
        state.loading = false;
      });

      builder
      .addCase(GetAdress.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(GetAdress.fulfilled, (state, action) => {
          state.allAdress = action.payload;
          state.loading = false;
  
        })
        .addCase(GetAdress.rejected, (state, action) => {
          state.loading = false;
        });

        builder
        .addCase(DeletAddress.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(DeletAddress.fulfilled, (state, action) => {
            state.delete = action.payload;
            state.loading = false;
    
          })
          .addCase(DeletAddress.rejected, (state, action) => {
            state.loading = false;
          });
  },
});

export default AddressSlice.reducer;
