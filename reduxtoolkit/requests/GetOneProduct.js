import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 


export const GetOneProduct = createAsyncThunk(
  'Product/fetchOneProduct',
  async (id,{ rejectWithValue }) => {
    try {
      const response = await BaseUrl.get(`/api/v1/products/${id}`); 
           
      return response.data.data;
    } 
    catch (error) {
            return rejectWithValue(error.response.data)

    }
  }
);


  