import React, { useState } from 'react'
import '../login/Login.css'
import { IoLogoFacebook } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { userLogin } from '../../apis/Auth-api';


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)
  const handleLogin = () => {
    if (!email && !password) {
      return toast.error("please fill the fields");
    }
    setLoader(true)
    const payload = { email, password }
    userLogin(payload).then((res) => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      navigate('/')

    }).catch(err => {
      if (err.response.data.error) {
        //    console.log(err.response.data.message) 
        toast.error(err.response.data.error);
      }
      console.log(err)
    }
    )
    setLoader(false)
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row loginmaindiv'>
          <div className='col-7 backgroundcol'>
            <div className='loginsidetext'>
              <span>Don't have </span><br />
              <span>an account?</span>
              <div className='btncreate'>
                Create free account
                <div className='createbtn'> </div>
              </div>
            </div>
          </div>
          <div className='col-5 '>
            <div className='logindiv'>
              <div className='wraper '>
                <div className='logininputdiv'>
                  <h2 >Log In</h2>
                  <div className=' logoicondiv'>
                    <  IoLogoFacebook className='fbicon ' />
                    <span >Log in with facebook</span>
                    <div className='backcolor'></div>
                  </div>
                  <div className='d-flex justify-content-center m-3'>
                    <span className='dot'>.............</span>OR<span className='dot'>.............</span>
                  </div>
                  <input type="email" className='inputlogin' placeholder='Email' />
                  <input type="password" className='inputlogin' placeholder='Password' />
                  <button className='btn btn-primary btlog fs-5'>Log In</button>
                  <a href='' className=' forget'>Forget Password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
