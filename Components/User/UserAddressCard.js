import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../images/delete.png'
import { DeletAddress } from '../../reduxtoolkit/requests/DeleteAddress'
import { useDispatch } from 'react-redux';

const UserAddressCard = ({home,description,id,phone}) => {

    const dicpatch=useDispatch();

    const Adddelete=()=>{
        dicpatch(DeletAddress(id))
    }



    
    return (
        <div className="user-address-card my-3 px-2">
            <Row className="d-flex justify-content-between  ">
                <Col xs="1">
                    <div className="p-2">{home}</div>
                </Col>
                <Col xs="4" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <div className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                                <p className="item-delete-edit"> تعديل</p>
                            </Link>
                        </div>
                        <div className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p onClick={Adddelete} style={{cursor: 'pointer'}} className="item-delete-edit"> ازاله</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "14px",
                        }}>
                       {description}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                       {phone}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddressCard
