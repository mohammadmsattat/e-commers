import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 


export const DeleteProduct = createAsyncThunk(
  'product/deleteproduct',
  async (id,{ rejectWithValue }) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
      const response = await BaseUrl.delete(`/api/v1/products/${id}`,config); 
      return response;
    } 
    catch (error) {            
            return rejectWithValue(error.response.data)

    }
  }
);


  