import React, { useEffect, useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
import { ToastContainer } from 'react-toastify';
import notify from '../../hooks/UseNotification';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Updatepassword } from '../../reduxtoolkit/requests/UpdatePassWord';
import { UpdateProfileData } from '../../reduxtoolkit/requests/UpdateProfileData';

const UserProfile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let user = []
    if (localStorage.getItem("user") !== null)
        user = JSON.parse(localStorage.getItem("user"))

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [loading, setLoading] = useState(true)


    const onChangeName = (event) => {
        event.persist();
        setName(event.target.value)
    }

    const onChangeEmail = (event) => {
        event.persist();
        setEmail(event.target.value)
    }
    const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value)
    }

    const handelSubmit = async () => {

        let body
        if (user.email === email) {
            body = {
                name,
                phone
            }
        } else {
            body = {
                name,
                email,
                phone
            }
        }
        setLoading(true)
        await dispatch(UpdateProfileData(body))
        setLoading(false)
        setShow(false);
        console.log(body);
        
        //   window.location.reload(false);
    }

    const res = useSelector(state => state.UserProfile.profileData)
    useEffect(() => {
        if (loading === false) {
            console.log(res);
            
            if ( res.status === 200) {
                notify("تم الحديث بنجاح", "success")

                localStorage.setItem("user", JSON.stringify(res.data.data.user))
                setTimeout(() => {
                    window.location.reload(false);
                }, 1500);

            } else {
                notify("فشل عملية التحديث", "warn")
            }
        }
    }, [loading])



    ///change user password

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loadingPass, setLoadingPass] = useState(true)


    const onChangeOldPass = (event) => {
        event.persist();
        setOldPassword(event.target.value)
    }

    const onChangeNewPass = (event) => {
        event.persist();
        setNewPassword(event.target.value)
    }
    const onChangeConfirmPass = (event) => {
        event.persist();
        setConfirmNewPassword(event.target.value)
    }

    const changePassword = async () => {

        if (confirmNewPassword != newPassword) {
            notify("تاكيد كلمة المرور غير متطابق", "warn")
            return
        }
        setLoadingPass(true)
        console.log({
            currentPassword: oldPassword,
            password: newPassword,
            passwordConfirm: confirmNewPassword
        });
        
        await dispatch(Updatepassword({
            currentPassword: oldPassword,
            password: newPassword,
            passwordConfirm: confirmNewPassword
        }))
        setLoadingPass(false)
    }

    const resPass = useSelector(state => state.UserProfile.updatepassword)
    useEffect(() => {
        if (loadingPass === false) {
            console.log(resPass)
            if (resPass && resPass.status === 200) {
                notify("تم تغير كلمة المرور بنجاح", "success")
                setTimeout(() => {
                    localStorage.removeItem("user")
                    localStorage.removeItem("token")
                    navigate('/login')
                }, 1500);

            } else {
                notify("فشل عملية التحديث", "warn")
            }
        }
    }, [loadingPass])


    return (
        <div>
            <div className="admin-content-text">الصفحه الشخصية</div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title> <div className='font'>تعديل البيانات الشخصية</div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="اسم المستخدم"
                    />
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        type="email"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="الايميل"
                    />
                    <input
                        value={phone}
                        onChange={onChangePhone}
                        type="phone"
                        className="input-form font d-block mt-3 px-3"
                        placeholder="الهاتف"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                        تراجع
                    </Button>
                    <Button className='font' variant="dark" onClick={handelSubmit}>
                        حفظ التعديل
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">الاسم:</div>
                        <div className="p-1 item-delete-edit">{user.name}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div onClick={handleShow} className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> تعديل</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">رقم الهاتف:</div>
                        <div className="p-1 item-delete-edit">{user.phone}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">الايميل:</div>
                        <div className="p-1 item-delete-edit">{user.email}</div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">تغير كملة المرور</div>
                        <input
                            value={oldPassword}
                            onChange={onChangeOldPass}
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="ادخل كلمة المرور القديمة"
                        />
                        <input
                            value={newPassword}
                            onChange={onChangeNewPass}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="ادخل كلمة المرور الجديده"
                        />
                        <input
                            value={confirmNewPassword}
                            onChange={onChangeConfirmPass}
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="تاكيد كلمة المرور الجديدة"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                        <button onClick={changePassword} className="btn-save d-inline mt-2 ">حفظ كلمة السر</button>
                    </Col>
                </Row>
            </div>
            <ToastContainer />
        </div>
    )
}

export default UserProfile
