import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 

export const CategoryForSerach = createAsyncThunk(
  'users/fetchUsers',
   async () => {
    const response = await BaseUrl.get(`/api/v1/categories`);  
    
      
    return response.data;
    
  });