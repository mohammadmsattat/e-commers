import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl'

export const EditProductrequest = createAsyncThunk(
    "data/sendDataWithFile",
    async ({id,formData}, { rejectWithValue }) => {
        try {
           
            
            const response = await BaseUrl.put(`/api/v1/products/${id}`, formData,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });            
            console.log(response.data);
            
            return response.data; // إعادة البيانات المُعادة
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data); // معالجة الأخطاء
            
        }
    }
);