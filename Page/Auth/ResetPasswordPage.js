import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import notify from '../../hooks/UseNotification';
import {PutnewPassword} from '../../reduxtoolkit/requests/AuthRequest'

const RsetPasswordPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState('')
    const [confirmPassword, setComfirmPassword] = useState('')
    const loading =useSelector((state)=> state.Authentication.loading)


    const OnChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const OnChangeConfirmPassword = (e) => {
        setComfirmPassword(e.target.value)
    }
    const onSubmit = async () => {
        if (password === "") {
            notify("من فضلك ادخل كلمة السر", "error")
            return
        }
        if (password != confirmPassword) {
            notify("كلمة السر غير متطابقه مع تاكيد كلمع السر", "error")
            return
        }

        await dispatch(PutnewPassword({
            email: localStorage.getItem("user-email"),
            newPassword: password
        }))
    }

    const res = useSelector(state => state.Authentication.newPassword)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.status === "Success") {
                    notify("تم تغير كلمة السر بنجاح", "success")
                    setTimeout(() => {
                        navigate("/login")
                    }, 1500);
                }
                if (res.status === "fail") {
                    notify("من فضلك اطلب كود جديد", "error")
                }
            }
        }
    }, [loading])
    return (
        <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">ادخل كلمه السر الجديده</label>
                    <input
                        value={password}
                        onChange={OnChangePassword}
                        placeholder="ادخل كلمه السر الجديدة"
                        type="password"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        value={confirmPassword}
                        onChange={OnChangeConfirmPassword}
                        placeholder="تاكيد كلمه السر الجديدة"
                        type="password"
                        className="user-input my-3 text-center mx-auto"
                    />

                    <button onClick={onSubmit} className="btn-login mx-auto mt-2">حفظ</button>

                </Col>

            </Row>
            <ToastContainer />
        </Container>
    )
}


export default RsetPasswordPage