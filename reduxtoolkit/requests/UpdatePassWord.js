import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 


export const Updatepassword = createAsyncThunk(
  'password/updatepassword',
  async (query) => {
    try {
        console.log(query);
        
      
      const response = await BaseUrl.put(`/api/v1/users/changeMyPassword`,query,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });      
console.log(response);

      return response         
    } 
    catch (error) {
      console.log(error.response);
      return 'error'

    }
  }
);


  