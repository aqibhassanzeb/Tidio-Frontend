import React, {useState} from 'react'
import { BsFillChatRightFill, BsFillInboxFill } from 'react-icons/bs';
import { SiChatbot} from 'react-icons/si';
import { MdOutlinePermContactCalendar, MdSettings } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import '../sidebar/Sidebar.css'
import { AiFillCloseCircle } from 'react-icons/ai';

function Sidebar({children}) {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItems = [
        {
            path: '/inbox',
            name: 'Chat',
            icon: <BsFillInboxFill />
            
        },
       
        {
            path: '/contact',
            name: 'Home',
            icon: <HiHome />
        },
        // {
        //     path: '/chat',
        //     name: 'Chat',
        //     icon: <BsFillChatRightFill />
            
        // },
        {
            path: '/widget',
            name: 'Setting',
            icon: <MdSettings />
            
        },
        {
            path: '/ChatbotCreate',
            name: 'Chatbot',
            icon: <SiChatbot />
            
        }
        // {
        //     path: '/chatbot/id',
        //     name: 'Test Chatbot',
        //     icon: <SiChatbot />
            
        // }
    ]
    return (
        <>
            <div className='custom_container'>
                <div style={{width: isOpen ? "300px" : "60px"}} className='sidebar'>
                    <div className='top_section'>
                            <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                        <div style={{marginLeft: isOpen ? "150px" : "0px"}} className='bars'>
                        {isOpen ? (<>
                            
                            <div className='custom-cross' onClick={toggle}>
                            <div className='cro2' onClick={toggle}></div>
                            <div className='cro3' onClick={toggle}></div>
                            </div>
                            </>
                            )
                            :
                            <FaBars className='fabricon' onClick={toggle} />
                         }   
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