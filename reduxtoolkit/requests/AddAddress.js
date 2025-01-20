import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl'

export const AddAdress = createAsyncThunk(
    "address/sendaddress",
    async (formData) => {
        try {
    

            
            const response = await BaseUrl.post("/api/v1/addresses", formData, {
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