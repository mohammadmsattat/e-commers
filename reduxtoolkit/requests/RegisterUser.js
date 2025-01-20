import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl'

export const RegisteRequest = createAsyncThunk(
    "user/insertuser",
    async ( Data, { rejectWithValue }) => {
        try {
    
            
            const response = await BaseUrl.post("/api/v1/auth/signup", Data );    
            console.log(response.data);
               
                 

            return response.data; // إعادة البيانات المُعادة
        } catch (error) {
            return error.response.data; // معالجة الأخطاء
            
        }
    }
);