import React, { useEffect, useState } from 'react'
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
import { useDispatch } from 'react-redux'
import { setActiveToken, setActiveUser } from '../redux/features/UserSlice';
import InsideTidio from '../components/dashboard/pages/insideTidio/InsideTidio';
import Inbox from "../components/dashboard/pages/dashboardheader/inbox/Inbox"
import Account from '../components/dashboard/pages/dashboardheader/account/Account';
import ChatInbox from '../components/chatinbox/ChatInbox';
import ChatCard from '../components/dashboard/pages/dashboardheader/chatCard/ChatCard';
import Widget from '../components/dashboard/pages/widget/Widget'
import ChatbotCreate from '../components/dashboard/pages/chatbotcreate/ChatbotCreate';
import Chatbot2 from '../components/dashboard/pages/chatbotcreate/Chatbot2';
import TermsAndCondition from './../components/register/termsAndCondition/TermsAndCondition';
import PrivacyPolicy from './../components/register/privacyPolicy/PrivacyPolicy';
import OfflineTime from './../components/dashboard/pages/widget/offlineTime/OfflineTime';

const Routespath = () => {

  const dispatch = useDispatch();
  const [iconActive, setIconActive] = useState("");

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    let usertoken = localStorage.getItem("token")
    user && dispatch(setActiveUser(user))
    usertoken && dispatch(setActiveToken(usertoken))
  }, [Routespath])

  return (
    <>
      <Routes>


        <Route element={<ProtectedRoute />}>
          <Route path="/chat" element={<> <Sidebar  > <DashboardHeader /><Chat /></Sidebar> </>} />
          <Route path="/insidetidio" element={<>  <Sidebar><DashboardHeader /><InsideTidio /></Sidebar> </>} />
          <Route path="/contact" element={<>  <Sidebar><DashboardHeader /><Contact /></Sidebar> </>} />
          <Route path="/inbox" element={<> <Sidebar><Inbox /></Sidebar> </>} />
          <Route path="/ChatbotCreate" element={<> <Sidebar><DashboardHeader /><ChatbotCreate /></Sidebar> </>} />
          <Route path="/acount" element={<> <Sidebar><DashboardHeader /><Account /></Sidebar> </>} />
          <Route path="/widget" element={<> <Sidebar><DashboardHeader /><Widget /></Sidebar> </>} />
          <Route path="/chatcard" element={<> <Sidebar><DashboardHeader /><ChatCard /></Sidebar> </>} />
        </Route>


        <Route path="/" exact element={<>   <Header />  <CustomerServices />  <Footer /> </>} />
        <Route path="/userlogin" element={<>    <Login />  </>} />
        <Route path="/register" element={<>    <Register /> </>} />
        <Route path="/pricing" element={<> <Header /> <Pricing /> <Footer /> </>} />
        <Route path="/chatbot/id" element={<Chatbot2 />} />
        <Route path="/reset-pass" element={<> <Header /> <ResetPass /> <Footer /> </>} />
        <Route path="/reset-pass/:token" element={<NewPassword />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/offtime" element={<OfflineTime />} />
      </Routes>


    </>
  )
}

export default Routespath