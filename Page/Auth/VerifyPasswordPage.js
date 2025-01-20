import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {PostCode} from '../../reduxtoolkit/requests/AuthRequest'
import { useNavigate } from 'react-router-dom'
import notify from '../../hooks/UseNotification';
const VerifyPasswordPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [code, setCode] = useState('')
    const loading =useSelector((state)=> state.Authentication.loading)


    const OnChangeCode = (e) => {
        setCode(e.target.value)
    }

    const onSubmit = async () => {
        if (code === "") {
            notify("من فضلك ادخل الكود", "error")
            return
        }
        await dispatch(PostCode({
            resetCode: code
        }))
    }

    const res = useSelector(state => state.Authentication.code)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.status === "Success") {
                    notify("كود التفعيل صحيح", "success")
                    setTimeout(() => {
                        navigate("/user/reset-password")
                    }, 1500);
                }
                if (res.status === "fail") {
                    notify("الكود خاطئ او انتهت صلاحيته", "error")
                }
            }
        }
    }, [loading])
    return (
        <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">ادخل الكود المرسل فى الايميل</label>
                    <input
                        value={code}
                        onChange={OnChangeCode}
                        placeholder="ادخل الكود..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />

                    <button onClick={onSubmit} className="btn-login mx-auto mt-2">تاكيد</button>

                </Col>

            </Row>
            <ToastContainer />
        </Container>
    )
}
export default VerifyPasswordPage