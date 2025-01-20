import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl'

export const PostProduct = createAsyncThunk(
    "data/sendDataWithFile",
    async (formData, { rejectWithValue }) => {
        try {
    
            
            const response = await BaseUrl.post("/api/v1/products", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data", // تحديد نوع البيانات
                },
            });  
                      

            return response; // إعادة البيانات المُعادة
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data); // معالجة الأخطاء
            
        }
    }
);