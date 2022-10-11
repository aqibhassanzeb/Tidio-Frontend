import React, { useEffect } from 'react'
import { Routes, Route,} from "react-router-dom";
import CustomerServices from '../components/CustomerServices/CustomerServices';
import Login from '../components/login/Login';
import Register from '../components/register/Register';

const Routespath = () => {
    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"))
      },[Routespath])
 return( 
    <Routes>
      <Route path="/" exact element={<CustomerServices/>} />
      <Route path="/userlogin" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
 )
}

export default Routespath