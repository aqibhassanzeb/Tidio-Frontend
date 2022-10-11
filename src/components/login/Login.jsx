import React, { useState } from 'react'
import '../login/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { userLogin } from '../../apis/Auth-api';


const Login = () => {
  const navigate =useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)
  const handleLogin =()=>{
    if(!email && !password){
      return toast.error("please fill the fields");
  }
  setLoader(true)
  const payload={email,password}
  userLogin(payload).then((res)=>{
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("user",JSON.stringify(res.data.user))
      navigate('/')
     
  }).catch(err=>{
      if(err.response.data.error){
      //    console.log(err.response.data.message) 
         toast.error(err.response.data.error);
      }
      console.log(err)}
  )
  setLoader(false)
  }
  return (
    <>
      <div className='container'>
      <ToastContainer />
        <div className='row'>
          <div className='col-6'>

          </div>
          <div className='col-6'>
            <div className='logindiv'>
            <div className='wraper'>
              <h2 className='fw-bold'>Log In</h2>
              <div className='logininputdiv'>
                <input type="email" className='inputlogin' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
                <input type="password" className='inputlogin' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} />
                <button disabled={loader} className='btn btn-primary' onClick={handleLogin}>{loader ? "loading..": "Login"}</button>
                <a href=''>Forget Password</a>
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
