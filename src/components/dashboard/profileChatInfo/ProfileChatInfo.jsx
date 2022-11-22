import React, { useState } from 'react'
import '../profileChatInfo/ProfileChatInfo.css'
import profimageem from '../../../images/horse.jpg'
import { FaCross, FaUserAlt } from 'react-icons/fa';
import { BsFillTelephoneFill, BsPersonLinesFill, BsThreeDotsVertical } from 'react-icons/bs';
import { MdForwardToInbox, MdLaptopChromebook } from 'react-icons/md';
import { BiCurrentLocation } from 'react-icons/bi';
import { RiUserShared2Line } from 'react-icons/ri';
import { IoMdArrowDropdown, IoMdClose } from 'react-icons/io';
import ProfileModal from '../../modals/profileModal/ProfileModal';
import CrossModal from '../../modals/CrossModal/CrossModal';
const ProfileChatInfo = () => {
    const [toggleDiv, setToggleDiv] = useState(false);
    const [show, setShow] = useState(false);
    const [cross , setCross] = useState(false);
    return (
        <>
        
            <div className='ProfileChatMaindiv'>
                <div className='ProfileimageAndemail  p-2 d-flex'>
                    <span>
                        <img src={profimageem} className='imageofuser' alt="profile_img"/>
                    </span>
                    <span className='m-1'>
                        <span className='useremail fw-bold'>hamzafarooq925@gmail.com</span>
                        <p className='useraddname p-0 m-0' onClick={()=>{setShow(true)}}>Add Name</p>

                        <div className='d-flex justify-content-between addressofuser '>
                            <span>Kasur,Pakistan</span>
                            <span><FaUserAlt /></span>
                        </div>
                    </span>
                </div>
                <div className='profmainicondiv'>
                    <div className=' profileicon'>
                        <span style={{ cursor: "pointer" }}>Profile</span>
                        <span style={{ cursor: "pointer" }}> <BsThreeDotsVertical /> </span>
                    </div>
                    <div className='profBoxdta2'>
                        <div className='profBoxdta'>
                       
                            <span className='p-2'><MdForwardToInbox /></span>
                            <span className='te'>hamzakhan@gmail.com</span>
                            <IoMdClose className='crossdata' onClick={() =>{ setCross(true)}}/>
                           
                             
                            <div className='subscribetext '>
                                <span className=' text-center  text-success' style={{ cursor: "pointer", padding: "2px", fontSize: "12px" }} onClick={() => setToggleDiv(!toggleDiv)}>Subscribe <IoMdArrowDropdown />  </span>
                                {
                                    toggleDiv === true ? (<div className='border subinnerdiv'>
                                        <div className='subdetial  d-flex justify-content-between'>
                                            <div>
                                                <p className='p-0 m-0 fw-bold'>Visitor consent</p>
                                                <p className='p-0 m-0'>(IP: 121-232-2312)</p>
                                            </div>
                                            <p className=''>Oct/11/2022</p>
                                        </div>
                                        <p className='p-2 m-0 bg-light'>Set as unsubscribe</p>
                                    </div>) : null
                                }

                            </div>
                        </div>
                        <div className='profBoxdta'>
                            <span className='p-2'><BsFillTelephoneFill /></span>
                            <span className='te'>Phone Number</span>
                            <span><IoMdClose className='crossdataphon' onClick={() =>{setCross(true)}}/></span>
                        </div>
                        <div className='profBoxdta'>
                            <span className='p-2'><MdLaptopChromebook /></span>
                            <span className='te'>Window chrome</span>

                        </div>
                        <div className='profBoxdta'>
                            <span className='p-2'><BiCurrentLocation /></span>
                            <span className='te'>Location</span>

                        </div>
                    </div>
                    <div className='profBoxdta3'>
                        <div className='lastvieweddiv'>
                            <BsPersonLinesFill className='personlineicon' />
                            <span className='lastviw'>Last viewed page</span>
                            <span className='see'>See all</span>
                        </div>
                        <h6>Today</h6>
                        <span className='d-flex'>
                            <RiUserShared2Line className='personlinkshareicon' />
                            <p className=' listviewlnk'>https://react-icons.github.io/react-icons/search?q=share</p>
                        </span>
                    </div>
                </div>
                <ProfileModal setShow={setShow} show={show}/>
                <CrossModal  setCross={setCross} cross={cross} />
            </div>

        </>
    )
}

export default ProfileChatInfo
