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

const Routespath = () => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
  }, [Routespath])
  return (
    <>

      {true ? <Routes>
        <Route path="/" exact element={<>   <Header />  <CustomerServices />  <Footer /> </>} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<> <Header /> <Pricing /> <Footer /> </>} />
        <Route path="/reset-pass" element={ <> <Header /> <ResetPass /> <Footer /> </>} />
       <Route path="/reset-pass/:token" element={<NewPassword />} />
      </Routes>

        : <Sidebar>
          <Routes>
            <Route path="/chat" element={ <> <DashboardHeader /><Chat /> </>}  />
            <Route path="/contact" element={ <> <DashboardHeader /><Contact /> </>} />
          </Routes>
        </Sidebar>}
    </>
  )
}

export default Routespath