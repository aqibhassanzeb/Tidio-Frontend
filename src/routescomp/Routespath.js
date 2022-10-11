import React from 'react'
import { Routes, Route,} from "react-router-dom";
import Register from '../components/register/Register';

const Routespath = () => {
 return( 
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
 )
}

export default Routespath