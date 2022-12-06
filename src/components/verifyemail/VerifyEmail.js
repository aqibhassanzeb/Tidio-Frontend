import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { verifyEmail } from '../../apis/Auth-api';

const VerifyEmail = () => {
    let {token}=useParams()
    const [loading, setLoading] = useState(false)

    const handleSubmit=()=>{
        setLoading(true)
        verifyEmail(token).then(res=>{
            setLoading(false)
            toast(res.data?.message)
        }).catch(err=>{
            toast.error(err.response?.data.message)
            console.log(err)
            setLoading(false)
        })
    }

    return (
        <div>
            <ToastContainer />
         <button disabled={loading} className="btn btn-primary" onClick={handleSubmit}>Verify Email</button>   
        </div>
    )
}

export default VerifyEmail
