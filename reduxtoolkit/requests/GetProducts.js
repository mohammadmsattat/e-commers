import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 


export const GetProducts = createAsyncThunk(
  'Products/fetchProducts',
  async () => {
    try {
   
      const response = await BaseUrl.get("/api/v1/products"); 
      
           
      return response.data;
    } 
    catch (error) {
      console.log(error.response.data);
      return 'error'

    }
  }
);


  