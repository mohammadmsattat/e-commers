import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl'

export const GetAdress = createAsyncThunk(
    "address/getDataWithFile",
    async () => {
        try {
    
            
            const response = await BaseUrl.get("/api/v1/addresses", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });  
                                  

            return response; // إعادة البيانات المُعادة
        } catch (error) {
            console.log(error.response.data);
            return error.response; // معالجة الأخطاء
            
        }
    }
);