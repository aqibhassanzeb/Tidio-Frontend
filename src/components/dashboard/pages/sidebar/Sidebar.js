import React, { useState } from 'react'
import { BsFillChatRightFill, BsFillInboxFill } from 'react-icons/bs';
import { SiChatbot } from 'react-icons/si';
import { MdMoveToInbox, MdSettings, MdContacts } from 'react-icons/md';
import { HiHome, HiGlobeAmericas } from 'react-icons/hi';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import '../sidebar/Sidebar.css'
import { AiFillCloseCircle } from 'react-icons/ai';

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
}

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [iconActive, setIconActive] = useState("");
    // const [forceUpdate, setForceUpdate] = useState(false);

    const menuItems = [
        {
            path: '/inbox',
            name: 'Chat',
            icon: <MdMoveToInbox />,

        },

        {
            path: '/home',
            name: 'Home',
            icon: <HiHome />,

        },
        {
            path: '/contact',
            name: 'Contact List',
            icon: <MdContacts />,

        },

        {
            path: '/widget',
            name: 'Setting',
            icon: <MdSettings />,


        },
        {
            path: '/ChatbotCreate',
            name: 'Chatbot',
            icon: <SiChatbot />,


        },
        {
            path: '/billing',
            name: 'Billing',
            icon: <FaGlobeAmericas />,


        },
        
    ]

    const forceUpdate = useForceUpdate();

    const handleClick = (value) => {
        console.log("handle click :", value)
        setIconActive(value);
        forceUpdate();
        // setForceUpdate(!forceUpdate)
    }

    return (
        <>
            <div className='custom_container'>
                <div style={{ width: isOpen ? "300px" : "60px" }} className='sidebar'>
                    {/*  <div className='top_section'>
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
                        </div>*/}
                    {menuItems.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" onClick={() => handleClick(index)}>
                            <div className={iconActive == index ? "iconactive" : "iconsid"}>{item.icon} </div>
                            <span className='link_text '>{item.name}</span>
                            {/* <div className='link_text '>{item.name}</div> */}
                        </NavLink>
                    ))}
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Sidebar