import React from 'react'
import { useParams } from 'react-router-dom'

const VerifyEmail = () => {
    let {token}=useParams()

    const handleSubmit=()=>{
        console.log("handle submit")
        console.log(token)
    }

    return (
        <div>
         <button className="btn btn-primary" onClick={handleSubmit}>Verify Email</button>   
        </div>
    )
}

export default VerifyEmail
