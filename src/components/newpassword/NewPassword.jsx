import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { newPassword } from '../../apis/Auth-api';

export const NewPassword = () => {


    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
  
    const { token } = useParams()
  
    const updatePassHandle=(e)=>{
        e.preventDefault()
        if (!password) {
            return toast.error("Please Enter Password")
        }
        if (!cpassword) {
            return toast.error("Please Enter Confirm Password")
        }
        if (password !== cpassword) {
            return toast.error("Password and Confirm Password does not match")
        }
        if (password.length < 6) {
            return toast.error("Password must be atleast 6 characters")
        }
        setLoader(true)
        const payload= {password,token}
        newPassword(payload).then((res) => {
                console.log("responce :",res.data.message)
                toast.success(res.data.message)
                // alert("Check your email for password reset link")
            navigate('/userlogin')
           
        }).catch(err=>{
          if(err.response.data.error){
            toast.error(err.response.data.error);
            setLoader(false)
         }
            console.log(err)
            setLoader(false)
        }
        )
    }

  return (
    <div className='container'>
    <ToastContainer />
    <div className='row text-center' style={{ marginTop: '150px' }}>
        <h3 >New Password</h3>
    </div>
    <div className='row mt-5 d-flex justify-content-center'>
        <div className='col-lg-6 col-sm-12'>
            <div className="formdivnews">
                <form onSubmit={updatePassHandle}>
                    <label>Password</label>
                    <input type="password" className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <label className='mt-4'>Confirm Password</label>
                    <input type="password" className="form-control"
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}

                    />
                    {loader ? <button className="btn btn-primary float-end" disabled>Loading...</button> :
                        <button className="btn btn-primary float-end" type='submit'>Submit</button>}
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
