import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl'

export const PostSubCategoryWithFile = createAsyncThunk(
    "data/sendDataWithFile",
    async (parmas, { rejectWithValue }) => {
        try {

            const response = await BaseUrl.post("/api/v1/subcategories", parmas);
            console.log(response);
            

            return response; // إعادة البيانات المُعادة
        } catch (error) {
            return rejectWithValue(error.response.data); // معالجة الأخطاء
        }
    }
);