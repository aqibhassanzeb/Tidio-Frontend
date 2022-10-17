import React from 'react'
import "../dashboardheader/DashboardHeader.css"
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import UserImage from '../../../../images/user.webp'
function DashboardHeader() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home"><HiHome /> Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end pr-4">
                    <Navbar.Text>
                       <img className='user_img' src={UserImage} />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default DashboardHeader