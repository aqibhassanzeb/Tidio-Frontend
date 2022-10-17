import React from 'react'
import "../dashboardheader/DashboardHeader.css"
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { GiMatterStates } from 'react-icons/gi';
import { RiContactsBook2Line } from 'react-icons/ri';
import { MdOutlineContactSupport } from 'react-icons/md';
import UserImage from '../../../../images/user.webp'
function DashboardHeader() {
    return (
        <>
            <Navbar className='border'>
                <Navbar.Brand href="#home" className=''><HiHome /> Dashboard</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end pr-4">
                    <Navbar.Text className='naviconbar '>
                    <MdOutlineContactSupport  className='statsicon'/>
                    <RiContactsBook2Line  className='statsicon'/>
                    <GiMatterStates className='statsicon '/>
                    <button className='btn btn-outline-danger'>Upgrade</button>
                       <img className='user_img' src={UserImage} />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default DashboardHeader