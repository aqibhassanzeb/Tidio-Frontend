import React, {useState} from 'react'
import { BsFillChatRightFill, BsFillInboxFill } from 'react-icons/bs';
import { MdOutlinePermContactCalendar, MdSettings } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../sidebar/Sidebar.css'

function Sidebar({children}) {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItems = [
        {
            path: '/inbox',
            name: 'Inbox',
            icon: <BsFillInboxFill />
            
        },
        {
            path: '#/',
            name: 'dashboard',
            icon: <HiHome />
        },
        {
            path: '/contact',
            name: 'contact',
            icon: <MdOutlinePermContactCalendar />
        },
        {
            path: '/chat',
            name: 'chat',
            icon: <BsFillChatRightFill />
            
        },
        {
            path: '/ChatbotCreate',
            name: 'list',
            icon: <MdSettings />
            
        },
        {
            path: '/chatcard',
            name: 'Chatbot',
            icon: <MdSettings />
            
        }
    ]
    return (
        <>
            <div className='custom_container'>
                <div style={{width: isOpen ? "300px" : "60px"}} className='sidebar'>
                    <div className='top_section'>
                            <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                        <div style={{marginLeft: isOpen ? "150px" : "0px"}} className='bars'>
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    {menuItems.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeClassName="active" >
                            <div className='icon icon_showtext'>{item.icon}</div>
                            <div className='link_text'>{item.name}</div>
                        </NavLink>
                    ))}
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Sidebar