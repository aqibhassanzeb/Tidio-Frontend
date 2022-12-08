import React, { useState } from 'react'
import "../profile/Profile.css"
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import userimag from '../../../../../images/horse.jpg'
import { BsPlus } from 'react-icons/bs';
import { MdLogout, MdSupport } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = ({setToggle,setValue,value}) => {

    const loginUser = useSelector(state => state.User.activeUser)
    const navigate=useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate('/userlogin')
      }

    return (
        <>
            <div className='profile-maindiv'>
                <div className=' p-2 d-flex justify-content-end'>
                    <AiOutlineClose className=' crossicon'  onClick={()=>setToggle(false)}/>
                </div>
                <div className='my-4'>
                <div className='profileimagediv'>
                    <img src={loginUser?.imageUrl ? process.env.REACT_APP_API_URL_IMG+loginUser?.imageUrl : userimag} alt="image_card" className=' profileimage' onClick={()=>navigate("/acount")}  style={{cursor:"pointer"}}/>
                    <h5 className='textdata text-center mt-2'  onClick={()=>navigate("/acount")} style={{cursor:"pointer"}}>{loginUser?.name}</h5>
                    <p className='textdata text-center'  onClick={()=>navigate("/acount")} style={{cursor:"pointer"}}>Trial Account (10 days left)</p>
                </div>
                </div>
                <div>
                    <select name="cars" value={value} onChange={(e)=>setValue(e.target.value)}  className="selectedata">
                        <option value="ONLINE" className="selectedata2">Online</option>
                        <option value="OFFLINE"  className="selectedata2">Offline</option>
                    </select>
                    <select name="cars" className="selectedata mt-2" >
                        <option value="volvo" className="selectedata2">Website</option>
                        <option value="saab" className="selectedata2">Saab</option>
                        <option value="opel" className="selectedata2">Opel</option>
                        <option value="audi" className="selectedata2">Audi</option>
                    </select>
                </div>
                <div className='my-4'>
                    <div className='usericonTExt'>
                        <AiOutlineUser className='usericon' />
                        <p href='' className='text-white text-decoration-none'>{loginUser?.email}</p>
                    </div>
                    {/* <div className='usericonTExt mt-1'>
                        <BsPlus className='usericon' />
                        <p href='' className='text-white text-decoration-none'>Add an operator</p>
                    </div> */}
                </div>
                <div className='logprosupbtn d-flex justify-content-around '>
                    <div className='userProfiletext'  onClick={()=>navigate("/acount")}>
                        <AiOutlineUser className='usericon2' />
                        <p href='' className='text-white text-center'  >Profile</p>
                    </div>
                    <div className='userProfiletext'>
                        <MdLogout className='usericon2' style={{cursor:"pointer"}} onClick={() =>handleLogout()} />
                        <p href='' className='text-white  text-center' style={{cursor:"pointer"}} onClick={() =>handleLogout()}>Logout</p>
                    </div>
                    <div className='userProfiletext'>
                        <MdSupport className='usericon2' />
                        <p href='' className='text-white text-center'>Support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
