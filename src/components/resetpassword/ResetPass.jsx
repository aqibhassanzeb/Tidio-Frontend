import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetPassword } from '../../apis/Auth-api';

const ResetPass = () => {
    const [email, setEmail] = useState("")
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
  
  
    const submitHandle=(e)=>{
        e.preventDefault()
        setLoader(true)
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast.error("Invalid email !");
            setLoader(false)
            return
        }
        const payload= {email}
        resetPassword(payload).then((res) => {
                console.log("responce :",res.data.message)
                // toast.success(res.data.message)
                alert("Check your email for password reset link")
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
    <div className='container-fluid'>
        <ToastContainer />
        <div className='d-flex justify-content-center mt-5'>

        <h1>Forgot Password</h1>
        </div>
      <div className='d-flex justify-content-center mt-5 mb-5'>

         <form onSubmit={submitHandle}>

        <input onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email..." />
      { loader ? <button className='btn btn-primary float-end'>loading..</button>
      : 
      <button className='btn btn-primary float-end' type='submit'>Submit</button>}
      </form>
      </div>
      </div>
  )
}

export default ResetPass