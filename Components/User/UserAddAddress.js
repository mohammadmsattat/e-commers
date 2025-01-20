import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import {AddAdress} from '../../reduxtoolkit/requests/AddAddress'
const UserAddAddress = () => {

    const dispatch=useDispatch();
    
    // store variables
    const [AddName,setAddName]=useState("")
    const [detailes,setdetailes]=useState("")
    const [phone,setPhone]=useState("")
    const [city,setcity]=useState("")


        // on submit add address
    const submit=()=>{

        dispatch(AddAdress({"alias": AddName,
                            "details": detailes,
                            "phone": phone,
                            "city": city,}));
      
        setAddName("")
        setdetailes("")
        setPhone("")
        setcity("")

            
    }



    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
                <Col sm="8">
                    <input
                    value={AddName}
                    onChange={(e)=>setAddName(e.target.value)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                    />
                    <input
                    value={city}
                    onChange={(e)=>setcity(e.target.value)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="المدينة"
                    />
                    <textarea
                    value={detailes}
                    onChange={(e)=>setdetailes(e.target.value)}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="العنوان بالتفصيل"
                    />
                    <input
                    value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                    />

                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={submit} className="btn-save d-inline mt-2 ">اضافة عنوان</button>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddAddress
