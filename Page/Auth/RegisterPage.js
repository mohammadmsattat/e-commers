import React ,{useEffect, useState}from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import notify from '../../hooks/UseNotification' 
import { useDispatch, useSelector } from 'react-redux'
import { RegisteRequest } from '../../reduxtoolkit/requests/RegisterUser'
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {

    // signup states define
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [phone,setphone]=useState("")
    const [password,setpassword]=useState("")
    const [confirmpassword,setconfirmpassword]=useState("")


    const onchangename=(e)=>{
        setname(e.target.value)
    }
    const onchangeemail=(e)=>{
      setemail(e.target.value)

    }
    const onchangepassword=(e)=>{
      setpassword(e.target.value)

    }
    const onchangeconfirmpassword=(e)=>{
      setconfirmpassword(e.target.value)

    }
    const onchangephone=(e)=>{
      setphone(e.target.value)
    }

    const dispatch=useDispatch();
    const regiteRespnse=useSelector((state)=> state.Registe.registe)
    const loading=useSelector((state)=> state.Registe.loading)

    

    

    // signup request meyhod
    const registe=async()=>{
      if(name===""||email===""||password===""||confirmpassword==="")
      {
        notify("enter the other field","error")
      }
     
       await dispatch(RegisteRequest({
        name: name,
        email:email,
        password:password,
        passwordConfirm:confirmpassword,
        phone:phone
      }))
  
    }
    useEffect(() => {
      if (loading === false) {
          if (regiteRespnse) {
              console.log(regiteRespnse)
              if (regiteRespnse.token) {
                  localStorage.setItem("token", regiteRespnse.token)
                  notify("تم تسجيل الحساب بنجاح", "success")
                  setTimeout(() => {
                      // Navigate('/login')
                  }, 2000);
              }

              if (regiteRespnse.errors) {
                  if (regiteRespnse.errors[0].msg === "E-mail already in use")
                      notify("هذا الايميل مسجل من قبل", "error")
              }
              if (regiteRespnse.errors) {
                  if (regiteRespnse.errors[0].msg === "accept only egypt phone numbers")
                      notify("يجب ان يكون الرقم مصري مكون من 11 رقم", "error")
              }

              if (regiteRespnse.errors) {
                  if (regiteRespnse.errors[0].msg === "must be at least 6 chars")
                      notify("يجب ان لاقل كلمه السر عن 6 احرف او ارقام", "error")
              }

              if (regiteRespnse.errors) {
                if (regiteRespnse.errors[0].msg === "Password confirmation is incorrect")
                    notify("Password confirmation is incorrect ", "error")
            }

          }
      }
  }, [loading])


    return (
        <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input
            onChange={onchangename}
              placeholder="اسم المستخدم..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              onChange={onchangeemail}
              placeholder="الايميل..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              onChange={onchangephone}
              placeholder="الهاتف.."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
            onChange={onchangepassword}
              placeholder="كلمه السر..."
              type="password"
              className="user-input text-center mx-auto"
            />
             <input
             onChange={onchangeconfirmpassword}
              placeholder="تاكيد كلمه السر ..."
              type="password"
              className="user-input text-center mt-3 mx-auto"
            />
            <button onClick={registe} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
            <label className="mx-auto my-4">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
        <ToastContainer/>
      </Container>
    )
}

export default RegisterPage
