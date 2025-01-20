import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from "./Components/Uitily/Footer";
import LoginPage from './Page/Auth/LoginPage';
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserAllAddresPage from './Page/User/UserAllAddresPage';
import UserAddAddressPage from './Page/User/UserAddAddressPage';
import UserEditAddressPage from './Page/User/UserEditAddressPage';
import UserProfilePage from "./Page/User/UserProfilePage";
import AdminEditProductsPage from "./Page/Admin/AdminEditProduct";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";
import RsetPasswordPage from "./Page/Auth/ResetPasswordPage";
import { useEffect, useState } from "react";
import UseProtectedRoute from "./Components/Uitily/UseProtectedRoute";
import CategoryProducts from "./Components/Category/CategoryProducts";

function App() {

  // login variabels
  const [user,setuser]=useState(JSON.parse(localStorage.getItem("user")))
  const [isuser,setIsuser]=useState()
  const [isAdmin,setIsAdmin]=useState()

  // test who is loggedin
  useEffect(()=>{
    

    if(user!=null)
      {   
        if(user.role==="user")
        {
          setIsuser(true)
          setIsAdmin(false)
    
        }else{
          setIsuser(false)
          setIsAdmin(true)
        }
    
      }else{
        setIsuser(false)
        setIsAdmin(false)  
      }

      
      
  },[])
 
  
      
  return (
    <div className="font" >
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/user/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<RsetPasswordPage />} />
          <Route path="/categoryProducts"  element={<CategoryProducts/>}/>

          
          <Route  element={<UseProtectedRoute auth={isAdmin}/>} >
              <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
              <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
              <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
              <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
              <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
              <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
              <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
              <Route path="/admin/products/:id" element={<AdminEditProductsPage />} />  
          </Route>
          
          <Route  element={<UseProtectedRoute auth={isuser}/> }>
              <Route path="/user/allorders" element={<UserAllOrdersPage />} />
              <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
              <Route path="/user/addresses" element={<UserAllAddresPage />} />
              <Route path="/user/add-address" element={<UserAddAddressPage />} />
              <Route path="/user/edit-address" element={<UserEditAddressPage />} />  
              <Route path="/user/profile" element={<UserProfilePage />} /> 
          </Route>

          

          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
