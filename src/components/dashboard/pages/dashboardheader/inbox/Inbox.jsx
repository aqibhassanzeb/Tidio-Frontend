import React from 'react'
import { BsSearch } from 'react-icons/bs'
import "../inbox/Inbox.css"
import useimage from "../../../../../images/horse.jpg"
const Inbox = () => {
    return (
        <>
            <div className='inbox-maindiv'>
                <div className='uppersearch'>
                    <input type="search" placeholder='Search here' className='inputsearch' />
                    <BsSearch className='searchiocon' />
                </div>
                <div className='inboxUserdetail d-flex '>
                    <div>
                        <img src={useimage} className='userimage' />
                    </div>
                    <div className='usercardinfo'>
                        <span className=' text-white usernametext'>Jhony Liver</span>
                        <span className='text-center text-white userpara'>Jhonyliver23@gmail.com</span>
                    </div>
                </div>
                <div className='inboxUserdetail d-flex '>
                    <div>
                        <img src={useimage} className='userimage' />
                    </div>
                    <div className='usercardinfo'>
                        <span className=' text-white usernametext'>Jhony Liver</span>
                        <span className='text-center text-white userpara'>Jhonyliver23@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inbox
