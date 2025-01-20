import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 

export const GetBrand = createAsyncThunk(
  'users/fetchUsers',
   async () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  }
    const response = await BaseUrl.get("/api/v1/categories",config);    
    return response.data.data;
    
  });

  