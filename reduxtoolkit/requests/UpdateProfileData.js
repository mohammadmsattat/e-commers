import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 


export const UpdateProfileData = createAsyncThunk(
  'data/updateprofiledata',
  async (query) => {
    try {
        console.log(query);
        
      
      const response = await BaseUrl.put("/api/v1/users/updateMe",query,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });      

      return response         
    } 
    catch (error) {
      console.log(error);
      return 'error'

    }
  }
);


  