//  post email for send new code
import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl'

 export const Postemail = createAsyncThunk(
    'users/postemail',
     async (email) => {
      const response = await BaseUrl.post("/api/v1/auth/forgotPasswords",email);    
      return response.data;
      
    });
    //post code for reset password
     export const PostCode = createAsyncThunk(
        'users/postcode',
         async (code) => {
          const response = await BaseUrl.post("api/v1/auth/verifyResetCode",code);    
          return response.data;
          
        });
        //set new password
       export const PutnewPassword = createAsyncThunk(
            'users/putnewpassword',
             async (password) => {
              const response = await BaseUrl.post("/api/v1/auth/resetPassword",password);    
              return response.data;
              
            });
  