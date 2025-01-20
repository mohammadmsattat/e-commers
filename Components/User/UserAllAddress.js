import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { GetAdress } from '../../reduxtoolkit/requests/GetAddress'


const UserAllAddress = () => {

    const dicpatch=useDispatch()


    const Addresses=useSelector((state)=> state.Address.allAdress.data)
    

    useEffect(()=>{
        dicpatch(GetAdress())
    },[])

    return (
        <div>
            <div className="admin-content-text pb-4">دفتر العنوانين</div>
            {
                Addresses? (
                    Addresses.data.map((item)=>{
                        return <UserAddressCard  home={item.alias} 
                                                    description={item.details} 
                                                    id={item._id} 
                                                    phone={item.phone}
                                                        
                                                    />
                    })
                ):null
            }

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress
