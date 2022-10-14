import React, { useEffect } from 'react'
import { Routes, Route,} from "react-router-dom";
import CustomerServices from '../components/CustomerServices/CustomerServices';
import Login from '../components/login/Login';
import { NewPassword } from '../components/newpassword/NewPassword';
import Pricing from '../components/pricing/Pricing';
import Register from '../components/register/Register';
import ResetPass from '../components/resetpassword/ResetPass';

const Routespath = () => {
    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"))
      },[Routespath])
 return(
    <Routes>
      <Route path="/" exact element={<CustomerServices/>} />
      <Route path="/userlogin" element={<Login />} />
      <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/pricing" element={<Pricing />} />
     <Route path="/reset-pass" element={<ResetPass />} />
     <Route path="/reset-pass/:token" element={<NewPassword />} />


    </Routes>
 )
}

export default Routespath