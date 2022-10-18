import React from 'react'
import "../profile/Profile.css"
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import userimag from '../../../../../images/horse.jpg'
import { BsPlus } from 'react-icons/bs';
import { MdLogout, MdSupport } from 'react-icons/md';
const Profile = ({setToggle}) => {
    return (
        <>
            <div className='profile-maindiv'>
                <div className=' p-2 d-flex justify-content-end'>
                    <AiOutlineClose className=' crossicon'  onClick={()=>setToggle(false)}/>
                </div>
                <div className='my-4'>
                <div className='profileimagediv'>
                    <img src={userimag} className=' profileimage' />
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
                        <a href='' className='text-white text-decoration-none'>Hamzafarooq925</a>
                    </div>
                    <div className='usericonTExt mt-1'>
                        <BsPlus className='usericon' />
                        <a href='' className='text-white text-decoration-none'>Add an operator</a>
                    </div>
                </div>
                <div className='logprosupbtn d-flex justify-content-around '>
                    <div className='userProfiletext'>
                        <AiOutlineUser className='usericon2' />
                        <a href='' className='text-white text-center'>Profile</a>
                    </div>
                    <div className='userProfiletext'>
                        <MdLogout className='usericon2' />
                        <a href='' className='text-white  text-center'>Logout</a>
                    </div>
                    <div className='userProfiletext'>
                        <MdSupport className='usericon2' />
                        <a href='' className='text-white text-center'>Support</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
