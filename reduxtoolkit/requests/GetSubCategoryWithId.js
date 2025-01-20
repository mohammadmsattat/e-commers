import { createAsyncThunk } from '@reduxjs/toolkit';
import BaseUrl from '../../Api/BaseUrl' 


export const GetSubCategoryWithId = createAsyncThunk(
  'categories/fetchSubcategories',
  async ( id , { rejectWithValue }) => {
    if (!id) {
      return rejectWithValue("يجب تقديم معرف صالح للفئة");
    }
    try {
      const response = await BaseUrl.get(`/api/v1/categories/${id}/subcategories`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "حدث خطأ أثناء تنفيذ الطلب");
    }
  }
);


  