import React from 'react'
import { Routes, Route,} from "react-router-dom";
import Login from '../components/login/Login';
import Register from '../components/register/Register';

const Routespath = () => {
 return( 
    <Routes>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
 )
}

export default Routespath