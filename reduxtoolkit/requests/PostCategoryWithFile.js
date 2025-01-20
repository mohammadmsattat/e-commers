import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl'

export const PostCategoryWithFile = createAsyncThunk(
    "data/sendDataWithFile",
    async ({ file, name }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append("name", name); // إضافة اسم المستخدم
            formData.append("image", file); // إضافة الملف (الصورة)

            const response = await BaseUrl.post("/api/v1/categories", formData, {
                headers: {
                    
                    "Content-Type": "multipart/form-data", 
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log(response);
            

            return response; // إعادة البيانات المُعادة
        } catch (error) {
            console.log(error);
            
            return error.response; // معالجة الأخطاء
        }
    }
);