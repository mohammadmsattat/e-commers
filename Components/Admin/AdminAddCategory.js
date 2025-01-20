import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from '../../images/avatar.png'
import { useDispatch ,useSelector} from 'react-redux'
import { PostCategoryWithFile } from '../../reduxtoolkit/requests/PostCategoryWithFile'
import '../../index.css'
import Spinner from 'react-bootstrap/Spinner';

const AdminAddCategory = () => {

    const [image,SetImage]=useState(avatar)
    const [CategoryName,SetCategoryName]=useState('')
    const [Sendimage,SetSendImage]=useState()


    const Category=useSelector((state)=>state.PostCategory.data)
    const loading=useSelector((state)=>state.PostCategory.loading)
    
    const dispatch=useDispatch();

    const OnAddImage=(event)=>{
        if(event.target.files && event.target.files[0])
        {
          SetImage(URL.createObjectURL(event.target.files[0]))
          SetSendImage(event.target.files[0])
          
        }
        
    }
    const CategoryInput=(e)=>{
            SetCategoryName(e.target.value)            
    }

    const handleSubmit =  async(e) => {
        e.preventDefault();

        // التحقق من وجود الملف
        if (!image&&!CategoryName) {
           window.alert("Please complete a data");
            return;
        }

        // إرسال البيانات مع الملف
       await dispatch(PostCategoryWithFile({name:CategoryName,file:Sendimage}));
        SetImage(avatar)         

  
     };

  

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>

                    <div>
                        <label for="upload-Phopto">
                            <img
                                src={image}
                                alt="fzx"
                                height='100px'
                                width='120px'
                                style={{cursor:'pointer'}}
                            />

                        </label>
                        <input
                            type='file'
                            name='photo'
                            onChange={OnAddImage}
                            id="upload-Phopto"
                        />
                    </div>



                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        onChange={CategoryInput}
                        placeholder="اسم التصنيف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button
                    onClick={handleSubmit}
                     className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            {loading&&<Spinner animation="grow" />}
        </div>
    )
}

export default AdminAddCategory
