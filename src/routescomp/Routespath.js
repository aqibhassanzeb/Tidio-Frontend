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
import {useDispatch} from 'react-redux'
import { setActiveToken, setActiveUser } from '../redux/features/UserSlice';
import InsideTidio from '../components/dashboard/pages/insideTidio/InsideTidio';
import Inbox from "../components/dashboard/pages/dashboardheader/inbox/Inbox"
import Account from '../components/dashboard/pages/dashboardheader/account/Account';
import ChatInbox from '../components/chatinbox/ChatInbox';
import ChatCard from '../components/dashboard/pages/dashboardheader/chatCard/ChatCard';
import ChatbotCreate from "../components/dashboard/pages/chatbotcreate/ChatbotCreate"

const Routespath = () => {

  const dispatch=useDispatch()
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
         <Route path="/chat" element={ <> <DashboardHeader/> <Sidebar><Chat /></Sidebar> </>}  />
         <Route path="/insidetidio" element={ <> <DashboardHeader/> <Sidebar><InsideTidio /></Sidebar> </>}  />
         <Route path="/contact" element={ <> <DashboardHeader/> <Sidebar><Contact /></Sidebar> </>  } />
         <Route path="/inbox" element={ <><DashboardHeader/> <Sidebar><Inbox/></Sidebar> </>  } />
         <Route path="/ChatbotCreate" element={ <><DashboardHeader/> <Sidebar><ChatbotCreate /></Sidebar> </>  } />
         <Route path="/acount" element={ <><DashboardHeader/> <Sidebar><Account /></Sidebar> </>  } />
         <Route path="/chatcard" element={ <><DashboardHeader/> <Sidebar><ChatCard /></Sidebar> </>  } />
         </Route>
        
        
        <Route path="/" exact element={<>   <Header />  <CustomerServices />  <Footer /> </>} />
        <Route path="/userlogin" element={ <>    <Login />  </>} />
        <Route path="/register" element={<>    <Register /> </> } />
        <Route path="/pricing" element={<> <Header /> <Pricing /> <Footer /> </>} />
        <Route path="/reset-pass" element={ <> <Header /> <ResetPass /> <Footer /> </>} />
       <Route path="/reset-pass/:token" element={<NewPassword />} />
        </Routes>


    </>
  )
}

export default Routespath