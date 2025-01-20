import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 


export const SearchProducts = createAsyncThunk(
  'Products/fetchsearchProducts',
  async (query) => {
    try {
      
      const response = await BaseUrl.get(`/api/v1/products?${query}`);      

      return response.data         
    } 
    catch (error) {
      console.log(error.response.data);
      return 'error'

    }
  }
);


  