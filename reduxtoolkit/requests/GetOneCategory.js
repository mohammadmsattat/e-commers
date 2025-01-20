import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 


export const GetOnecategory = createAsyncThunk(
  'category/fetchOnecategory',
  async (id,{ rejectWithValue }) => {
    try {
      const response = await BaseUrl.get(`/api/v1/categories/${id}`); 
      return response.data.data;
    } 
    catch (error) {            
            return rejectWithValue(error.response.data)

    }
  }
);


  