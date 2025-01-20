import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllCategory } from '../../reduxtoolkit/requests/CategoryRequest'
import notify from '../../hooks/UseNotification' 
import {ToastContainer} from 'react-toastify'
import { PostSubCategoryWithFile } from '../../reduxtoolkit/requests/PostSubCategoryRequest'

const AdminAddSubCategory = () => {

    const Category=useSelector((state)=>state.Category.Category)
    const [CategoryId,SetCategoryId]=useState("0");
    const [name,setname]=useState("");

    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchAllCategory())
    },[]) 

    const setid=(event)=>{
        SetCategoryId(event.target.value)
        console.log(CategoryId);

    }
    const setName=(event)=>{
        setname(event.target.value)

    }

    const hndelSubmit=()=>{
        if(CategoryId==="0")
            {notify("choose Category","warn")
                return;
            }
        if(name==="")
            {notify("enter subCategory Name","warn")
                return;
            }

        dispatch(PostSubCategoryWithFile({
            name:name,
            category:CategoryId,
        }))
        console.log(CategoryId);
        
        setname("")
        SetCategoryId("0")
    }



    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                    onChange={(e)=>setName(e)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                    />
                    <select onChange={setid} name="languages" id="lang" className="select mt-3 px-2 ">
                        <option value="0">اختر تصنيف رئيسي</option>
                        {Category? (Category.map((item)=>{
                            return <option  key={item._id} value={item._id} >{item.name}</option>}
                        )):null}
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button  onClick={hndelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default AdminAddSubCategory
