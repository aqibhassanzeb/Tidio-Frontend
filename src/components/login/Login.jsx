import React from 'react'
import '../login/Login.css'
import { IoLogoFacebook } from 'react-icons/io'
const Login = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row loginmaindiv'>
          <div className='col-6 backgroundcol'>
              <div className='loginsidetext'>
              <span>Don't have </span><br/>
              <span>an account?</span>
              <div className='btncreate'>
              Create free account
              <div className='createbtn'> </div>
              </div>
              </div>
          </div>
          <div className='col-6 '>
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
