import React, { useState } from 'react'
import "../dashboardheader/DashboardHeader.css"
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { GiMatterStates } from 'react-icons/gi';
import { RiContactsBook2Line } from 'react-icons/ri';
import { MdOutlineContactSupport } from 'react-icons/md';
import UserImage from '../../../../images/user.webp'
import Profile from './profile/Profile';
import { useSelector } from 'react-redux';
function DashboardHeader() { 
    const loginUser = useSelector(state => state.User.activeUser)
    const [toggle , setToggle]=useState(false)
    const [value, setValue] = useState("ONLINE")
    const [onlineMode, setOnlineMode] = useState(true)
    console.log("online mode :",onlineMode)
    return (
        <>
            <Navbar className='border'>
                <Navbar.Brand href="#home" className=' d-flex justify-content-center align-items-center'><HiHome className='dashbdicon'/> Dashboard</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end pr-4">
                    <Navbar.Text className='naviconbar '>
                      {/*  <MdOutlineContactSupport className='statsicon' />
                        <RiContactsBook2Line className='statsicon' />
    <GiMatterStates className='statsicon ' /> */}
                        <button className=' upgradebtn'>Upgrade</button>
                        <img className='user_img' src={loginUser?.imageUrl}  onClick={()=>setToggle(!toggle)}/>
                        <span className="textvalue" >{value}</span>
                       {toggle && <Profile setToggle={setToggle} value={value} setValue={setValue}/>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default DashboardHeader