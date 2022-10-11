import React from 'react'
import '../login/Login.css'
const Login = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>

          </div>
          <div className='col-6'>
            <div className='logindiv'>
            <div className='wraper'>
              <h2 className='fw-bold'>Log In</h2>
              <div className='logininputdiv'>
                <input type="email" className='inputlogin' placeholder='Email' />
                <input type="password" className='inputlogin' placeholder='Password' />
                <button className='btn btn-primary'>Log In</button>
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
