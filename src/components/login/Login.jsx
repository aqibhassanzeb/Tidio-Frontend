import React, { useState } from 'react'
import '../login/Login.css'
import { IoLogoFacebook } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { socailLogin, userLogin } from '../../apis/Auth-api';
import ReactFacebookLogin from 'react-facebook-login';
import { FACEBOOK_APP_ID } from '../../config';


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState(false)
  const [facebookLoading, setFacebookLoading] = useState(false);

  // Manual Login 

  const handleLogin =()=>{
    setLoader(true)
    if(!email && !password){
      return toast.error("please fill the fields");
    }
    const payload = { email, password }
    userLogin(payload).then((res) => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.user))
      navigate('/')
     
  }).catch(err=>{
      if(err.response.data.error){
         toast.error(err.response.data.error);
      }
      console.log(err)
      setLoader(false)
    }
    )
  }

  // Facebook Login 

  const responseFacebook = async (response) => {
    const { email,userID:socailLoginUserId, picture, name } = response;
    console.log(response);
    // try {
    //   const imageUrl = picture?.data?.url;
    //   const res = await socailLogin({loginStatus:"facebook", socailLoginUserId, imageUrl, email, name});
    //   localStorage.setItem("token",res.data.token)
    //   localStorage.setItem("user",JSON.stringify(res.data.user))
    //   navigate('/')
    // } catch (err) {
    //     console.log(err)
    // } finally {
    //   setFacebookLoading(false);
    // }
  };

  return (
    <>

      <div className='container-fluid'>
     < ToastContainer/>
        <div className='row loginmaindiv'>
          <div className='col-md-6 backgroundcol'>
            <div className='loginsidetext'>
              <span>Don't have </span><br />
              <span>an account?</span>
              <div type="button" className='btncreate' onClick={() => navigate('/register')}>
                Create free account
                <div className='createbtn'> </div>
              </div>
            </div>
          </div>
         
          <div className='col-md-6 '>
            <div className='logindiv mt-5'>
              <div className='wraper mt-5'>
                <div className='logininputdiv mt-5'>
                  <h2 >Log In</h2>
                  {/* <div className=' logoicondiv'> */}
                  {/* <ReactFacebookLogin
                      appId={FACEBOOK_APP_ID}
                      autoLoad={false}
                      callback={responseFacebook}
                      fields="name,email,picture"
                      render={(renderProps) => (
                        <>
                          {facebookLoading ? (
                            <div className="auth_social social_loader">
                              <h1>Loading...</h1>
                            </div>
                          ) : (
                            <h1
                              src="/assets/bg/facebook.jpeg"
                              className="auth_social"
                              onClick={() => {
                                setFacebookLoading(true);
                                renderProps.onClick();
                              }}
                            >Facebook Login</h1>
                          )}
                        </>
                      )}
                    /> */}
                    
                  {/* </div> */}
                  {/* <div className='d-flex justify-content-center m-3'>
                    <span className='dot'>.............</span>OR<span className='dot'>.............</span>
                  </div> */}
                  <input type="email" className='inputlogin' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
                  <input type="password" className='inputlogin' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} value={password} />
                 { loader ? <button className='btn btn-primary btlog fs-5' >Loading...</button>: <button className='btn btn-primary btlog fs-5' onClick={()=>handleLogin()}>Log In</button>}
                  <Link to='/reset-pass'  className=' forget'>Forget Password?</Link>
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
