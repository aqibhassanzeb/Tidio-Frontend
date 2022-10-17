import React, { useEffect } from 'react'
import { Routes, Route, } from "react-router-dom";
import CustomerServices from '../components/CustomerServices/CustomerServices';
import Chat from '../components/dashboard/pages/chat/Chat';
import Contact from '../components/dashboard/pages/contact/Contact';
import DashboardHeader from '../components/dashboard/pages/dashboardheader/DashboardHeader';
import Sidebar from '../components/dashboard/pages/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import Header from '../components/Header/Header';
import Login from '../components/login/Login';
import { NewPassword } from '../components/newpassword/NewPassword';
import Pricing from '../components/pricing/Pricing';
import Register from '../components/register/Register';
import ResetPass from '../components/resetpassword/ResetPass';
import ProtectedRoute from './ProtectedRoute';

const Routespath = () => {
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"))
  }, [Routespath])
  return (
    <>
     <Routes>

            <Route element={<ProtectedRoute />}>
            <Route path="/chat" element={ <>  <Sidebar><Chat /></Sidebar> </>}  />
            <Route path="/contact" element={ <>  <Sidebar><Contact /></Sidebar> </>  } />
            </Route>
        <Route path="/" exact element={<>   <Header />  <CustomerServices />  <Footer /> </>} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<> <Header /> <Pricing /> <Footer /> </>} />
        <Route path="/reset-pass" element={ <> <Header /> <ResetPass /> <Footer /> </>} />
       <Route path="/reset-pass/:token" element={<NewPassword />} />
    

          </Routes>


    </>
  )
}

export default Routespath