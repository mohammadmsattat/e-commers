import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import notify from '../../hooks/UseNotification';
import {Postemail} from '../../reduxtoolkit/requests/AuthRequest'


const ForgetPasswordPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const loading =useSelector((state)=> state.Authentication.loading)


    const OnChangeEmail = (e) => {
        
        setEmail(e.target.value)
    }

    const onSubmit = async () => {
        if (email === "") {
            notify("من فضلك ادخل الايميل", "error")
            return
        }
        localStorage.setItem("user-email" ,email)
        await dispatch(Postemail({email}))
    }

    const res = useSelector(state => state.Authentication.email)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.status === "Success") {
                    notify("تم ارسال الكود للايميل بنجاح", "success")
                    setTimeout(() => {
                        navigate("/user/verify-code")
                    }, 1000);
                }
                if (res.status === "fail") {
                    notify("هذا الحساب غير موجود لدينا", "error")
                }
            }
        }
    }, [loading])

    return (
        <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">نسيت كلمة السر</label>
                    <input
                        value={email}
                        onChange={OnChangeEmail}
                        placeholder="ادخل الايميل..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />

                    <button onClick={onSubmit} className="btn-login mx-auto mt-2">ارسال الكود</button>

                </Col>

            </Row>
            <ToastContainer />
        </Container>
    )
}

export default ForgetPasswordPage