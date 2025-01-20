import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 

export const fetchAllCategory = createAsyncThunk(
  'users/fetchUsers',
   async (p) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  }
    const response = await BaseUrl.get(`/api/v1/categories?limit=8&page=${p}`,config);  
    
    
      
    return response.data.data;
    
  });

  