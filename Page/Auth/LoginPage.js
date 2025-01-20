import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Loginrequest } from '../../reduxtoolkit/requests/Login'
import {ToastContainer} from 'react-toastify'
import notify from '../../hooks/UseNotification'
// import { usena } from 'react-router-dom'


const LoginPage = () => {

    // log in variabels
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
   
    // set lohin variabels
    const onchangeemail=(e)=>{
            setemail(e.target.value)
    }
    const onchangepassword=(e)=>{
        setpassword(e.target.value)
    }

    const dispatch=useDispatch()
    const loginres=useSelector((state)=> state.Login.login)
    const loading=useSelector((state)=> state.Login.loading)

    

    const onsubmit=async()=>{
         await dispatch(Loginrequest({
            "email":email,
             "password":password
        }))

       
            
    }
    useEffect(() => {
     
            
        if (loading === false) {
            if (loginres) {
                // console.log(res)
                if (loginres.token) {
                    console.log(loginres.token);
                    
                    localStorage.setItem("token", loginres.token)
                    localStorage.setItem("user",JSON.stringify(loginres.data))
                    notify("تم تسجيل الدخول بنجاح", "success")
                    setTimeout(() => {
                        window.location.pathname='/'
                    }, 2000);
                }

                if (loginres.errors) {
                    if (loginres.errors[0].msg === "E-mail already in use")
                        notify("هذا الايميل مسجل من قبل", "error")
                }
                if (loginres.errors) {
                    if (loginres.errors[0].msg === "accept only egypt phone numbers")
                        notify("يجب ان يكون الرقم مصري مكون من 11 رقم", "error")
                }

                if (loginres.errors) {
                    if (loginres.errors[0].msg === "must be at least 6 chars")
                        notify("يجب ان لاقل كلمه السر عن 6 احرف او ارقام", "error")
                }


            }
        }
    }, [loading])




    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">تسجيل الدخول</label>
                        <input
                        onChange={onchangeemail}
                            placeholder="الايميل..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                            onChange={onchangepassword}
                            placeholder="كلمه السر..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button onClick={onsubmit} className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                        <label className="mx-auto my-4">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    اضغط هنا
                                </span>
                            </Link>
                        </label>

                        <label className="mx-auto my-4">

                            <Link to="/user/forget-password" style={{ textDecoration: 'none', color: 'red' }}>
                                         هل نسيت كلمه السر
                                            </Link>
                        </label>
                    </Col>


                </Row>
                <ToastContainer/>
            </Container>
    )
}

export default LoginPage
