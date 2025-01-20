import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl'

export const Loginrequest = createAsyncThunk(
    "user/insertuser",
    async ( Data, { rejectWithValue }) => {
        try {
    
            
            const response = await BaseUrl.post("/api/v1/auth/login", Data );    
            console.log(response.data);
               
                 

            return response.data; // إعادة البيانات المُعادة
        } catch (error) {
            return error.response.data; // معالجة الأخطاء
            
        }
    }
);