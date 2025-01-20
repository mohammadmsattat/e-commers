import { configureStore } from '@reduxjs/toolkit';
import GetAllCategory from './slices/GetAllcategory'
import PostCategory from './slices/PostCategoty'
import PostSubCategory from './slices/PostSubCategory'
import GetSubcategory from './slices/GetSucCategoryWithId'
import PostProductSlice from './slices/PostProduct'
import ViewProducts from './slices/ViewProducts'
import OneProduct from '../reduxtoolkit/slices/GetOneProduct'
import Onecategory from '../reduxtoolkit/slices/GetOneCategory'
import deleteProduct from '../reduxtoolkit/slices/DeleteProduct'
import EditProductSlice from './slices/EditProduct'
import SearchProduct from './slices/SearchProducts'
import GetAllbrand from './slices/BrandSlice'
import SearchCategory from './slices/SearchCategory'
import RegisteSlice from './slices/RegisteSlice'
import LoginSlice from './slices/Loginslice'
import Authentication from './slices/AuthSlice'
import AddressSlice from './slices/AdressSlice'
import UserProfile from './slices/UserProfile'


const Store=configureStore({
    reducer:{
        Category:GetAllCategory,
        GetAllbrand:GetAllbrand,
        PostCategory:PostCategory,
        PostSubCategory:PostSubCategory,
        Subcategory:GetSubcategory,
        PostProduct:PostProductSlice,
        ViewProducts:ViewProducts,
        OneProduct:OneProduct,
        Onecategory:Onecategory,
        deleteProduct:deleteProduct,
        EditProduct:EditProductSlice,
        searchProducts:SearchProduct,
        SearchCategory:SearchCategory,
        Registe:RegisteSlice,
        Login:LoginSlice,
        Authentication:Authentication,
        Address:AddressSlice,
        UserProfile:UserProfile,
    }
    ,devTools:true
});

export default Store;