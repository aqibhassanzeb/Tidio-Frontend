import React from 'react'
import '../login/Login.css'
const Login = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>

          </div>
          <div className='col-6 border'>
            <div className='logindiv'>
            <div className='wraper'>
            <div className='logininputdiv'>
            <h2 className='fw-bold d-flex justify-content-center'>Log In</h2>
            <div className='bg-light'>
              <span >Icon</span>
              <span>Log in with facebook</span>
            </div>
                <input type="email" className='inputlogin' placeholder='Email' />
                <input type="password" className='inputlogin' placeholder='Password' />
                <button className='btn btn-primary m-auto btlog fs-5'>Log In</button>
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
