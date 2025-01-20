import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import notify from '../../hooks/UseNotification' 
import {ToastContainer} from 'react-toastify'
import MultiImageInput from 'react-multiple-image-input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategory } from '../../reduxtoolkit/requests/CategoryRequest';
import { CompactPicker } from 'react-color'
import { GetSubCategoryWithId } from '../../reduxtoolkit/requests/GetSubCategoryWithId';
import {EditProductrequest} from '../../reduxtoolkit/requests/EditProduct'
import { useParams } from "react-router"
import { GetOneProduct } from '../../reduxtoolkit/requests/GetOneProduct';



const AdminEditProducts = () => {
    const {id}=useParams();
    

    
   
    const [images,setImages]=useState([]) // images input
    
    // other inputs states
    const [prodName,setprodName]=useState('')//product name
    const [prodDiscriptiop,setprodDiscriptiop]=useState('')
    const [prodPriceBefor,setprodPriceBefor]=useState('')
    const [prodPriceAfter,setprodPriceAfter]=useState('')

    const [qty,setqty]=useState('')//product quantity

    const [subcatId,setsubcatId]=useState([])// product subCategory
    const [selectedsubcatId,setselectedsubcatId]=useState([])

    const [options,setOptions]=useState([])// options of subcategory


   
    const [colors,setcolors]=useState(''); // store color options
    
    const [CategoryId,SetCategoryId]=useState("0");//   category id

    const [show,setShow]=useState(false);// show color options

   
    //select state for product 
    const oneproduct=useSelector((state)=>state.OneProduct.Product)
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(GetOneProduct(id))
    },[])     
    
    

    // set product data
    useEffect(()=>{
        setprodName(oneproduct.title)
        setprodDiscriptiop(oneproduct.description)
        setprodPriceBefor(oneproduct.price)
        setprodPriceAfter(oneproduct.sold)
        setqty(oneproduct.quantity)
        setcolors(oneproduct.availableColors)
        SetCategoryId(oneproduct.category)
        // setImages(oneproduct.images)
                
      },[oneproduct])
   

    //  selected category id store
    
    // store category from slice
    const Category=useSelector((state)=>state.Category.Category)

    
    
    // state of sub category
    const subCategory=useSelector((state)=>state.Subcategory.SubCategory)
    


    const onChangecomplete=(color)=>{
        setcolors([...colors,color.hex])
        setShow(!show)        
    }

    const removeColor=(color)=>{
       const newarray= colors.filter((e)=> e!==color)
       setcolors(newarray)
    }

    const onSelect = (selectedList) => {
        setselectedsubcatId(selectedList)

    }
    const onRemove = (selectedList) => {
        setselectedsubcatId(selectedList)

    }
    

    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
      };

  


            // set category id
    const  setid=async(e)=>{
        if(CategoryId!==0){
           await dispatch(GetSubCategoryWithId(e.target.value))
        }
        SetCategoryId(e.target.value)
        
    }

    useEffect(()=>{
        
        if(CategoryId!==0)
            if(subCategory)
                setOptions(subCategory)
    },[CategoryId])
    // notify("choose Category","warn")

    const dataURLtoFile = (dataurl, filename) => {
        var arr = dataurl.split(","),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
      };
    //   url photo to base64
    const imageUrlToBase64 = async (url) => {
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const base64data = reader.result;
            resolve(base64data);
          };
          reader.onerror = reject;
        });
      };


    // HandelSubmit Method for request
    const HandelSubmit=async(event)=>{

        
        event.preventDefault();


        
        //  const ArrayOfImages=Array.from(Array(Object.keys(images).length).keys()).map(
            
        //     (i,index)=>{
        //         console.log(i.length);
                
        //       return dataURLtoFile(images[index],Math.random()+".png")
        //    }        
        // )        
    
            const formData = new FormData();
            formData.append("title", prodName); 
            // formData.append("imageCover",ArrayOfImages[0]);     
            formData.append("description", prodDiscriptiop); 
            formData.append("price", prodPriceBefor); 
            formData.append("sold", prodPriceAfter); 
            formData.append("quantity", qty); 
            formData.append("category", CategoryId); 
        
            // ArrayOfImages.map((i)=>formData.append("images", i))
            colors.map((colors)=>formData.append("availableColors", colors))
            selectedsubcatId.map((i)=>formData.append("subcategory", i._id))
        
            const dataObject = Object.fromEntries(formData.entries());
            console.log(dataObject);  
            formData.append("id",id)  ;
            await dispatch(EditProductrequest({id,formData}));
        
      
   } 
   

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>

                    <MultiImageInput
                            
                            images={images}
                            setImages={setImages}
                            cropConfig={{ crop, ruleOfThirds: true }}
                            theme={"light"}
                            allowCrop={false}
                            max={4}
                             />
                    <input
                        value={prodName}
                        onChange={(e)=>setprodName(e.target.value)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                     value={prodDiscriptiop}
                     onChange={(e)=>setprodDiscriptiop(e.target.value)}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    <input
                         value={prodPriceBefor}
                         onChange={(e)=>setprodPriceBefor(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                     value={prodPriceAfter}
                     onChange={(e)=>setprodPriceAfter(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر بعد الخصم"
                    />
                    <input
                     value={qty}
                     onChange={(e)=>setqty(e.target.value)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                    />
                    <select
                        onChange={setid}
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">اختر تصنيف رئيسي</option>
                        {Category? (Category.map((item)=>{
                            return <option  key={item._id} value={item._id} >{item.name}</option>}
                        )):null}
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">الماركة</option>
                        <option value="val2">التصنيف الماركة الاولي</option>
                        <option value="val2">التصنيف الماركة الثانيه</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                    {
                        colors? (colors.map((color,index)=>{
                           return <div
                           key={index}
                            onClick={()=>removeColor(color)}
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: color }}></div>}
                        )):null
                    }

                        <img onClick={()=> setShow(!show)} 
                             src={add} alt="" width="30px" height="35px" 
                             className="" style={{cursor:'pointer'}} />
                        
                            {
                                show?  <CompactPicker onChangeComplete={onChangecomplete}/>:null
                            }

                       
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={HandelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
           <ToastContainer/>
        </div>
    )
}

export default AdminEditProducts
