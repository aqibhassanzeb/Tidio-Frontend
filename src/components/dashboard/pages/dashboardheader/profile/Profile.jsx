import React from 'react'
import "../profile/Profile.css"
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import userimag from '../../../../../images/horse.jpg'
import { BsPlus } from 'react-icons/bs';
import { MdLogout, MdSupport } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Profile = ({setToggle}) => {
    const navigate=useNavigate()
    return (
        <>
            <div className='profile-maindiv'>
                <div className=' p-2 d-flex justify-content-end'>
                    <AiOutlineClose className=' crossicon'  onClick={()=>setToggle(false)}/>
                </div>
                <div className='my-4'>
                <div className='profileimagediv'>
                    <img src={userimag} className=' profileimage' onClick={()=>navigate("/acount")}  style={{cursor:"pointer"}}/>
                    <h5 className='textdata text-center mt-2'>UserName</h5>
                    <p className='textdata text-center'>Trial Account (0 days left)</p>
                </div>
                </div>
                <div>
                    <select name="cars" className="selectedata">
                        <option value="volvo" className="selectedata2">Online</option>
                        <option value="saab" className="selectedata2">Saab</option>
                        <option value="opel" className="selectedata2">Opel</option>
                        <option value="audi" className="selectedata2">Audi</option>
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
                        <p href='' className='text-white text-decoration-none'>Hamzafarooq925</p>
                    </div>
                    <div className='usericonTExt mt-1'>
                        <BsPlus className='usericon' />
                        <p href='' className='text-white text-decoration-none'>Add an operator</p>
                    </div>
                </div>
                <div className='logprosupbtn d-flex justify-content-around '>
                    <div className='userProfiletext'>
                        <AiOutlineUser className='usericon2' />
                        <p href='' className='text-white text-center'>Profile</p>
                    </div>
                    <div className='userProfiletext'>
                        <MdLogout className='usericon2' />
                        <p href='' className='text-white  text-center'>Logout</p>
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
