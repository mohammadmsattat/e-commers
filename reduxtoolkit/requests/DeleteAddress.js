import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 


export const DeletAddress = createAsyncThunk(
  'delete/deleteaddres',
  async (id) => {
    try {
   
      const response = await BaseUrl.delete(`/api/v1/addresses/${id}`,  {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
           
        },
    });  
      console.log(response);
      
           
      return response.data;
    } 
    catch (error) {
      console.log(error.response.data);
      return 'error'

    }
  }
);


  