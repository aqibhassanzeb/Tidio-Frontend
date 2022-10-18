import React from 'react'
import '../account/Account.css'
import { FaUserAlt } from 'react-icons/fa'
import acountimage from '../../../../../images/horse.jpg'
const Account = () => {
    return (
        <>
            <div className=''>
                <div className='accountmaindiv'>
                    <div className='d-flex  p-2 border-bottom'>
                        <FaUserAlt className='userAccounticon' />
                        <h4>Account</h4>
                    </div>
                    <div className='row '>
                        
                    <div className='d-flex  mt-2 align-items-center'>
                    <div className='col-2 '>
                        <label >Name:</label>
                        </div>
                        
                        <input type="text" className='inputtextfield' placeholder='Enter your name' />
                        
                    </div>
                    <div className='d-flex  mt-2 align-items-center'>
                    <div className='col-2 '>
                    <label >Your Picture:</label>
                    </div>
                        <img src={acountimage} className='inputtextimg' />
                        <input type="file" className='inputtextfield3' />
                    </div>
                    <div className='d-flex  mt-2 align-items-center'>
                    <div className='col-2 '>
                    <label >Email:</label>
                    </div>
                        <input type="Email" className='inputtextfield' placeholder='Enter your email' />
                    </div>
                    <div className='d-flex  mt-2 align-items-center'>
                    <div className='col-2 '>
                    <label >Password:</label>
                    </div>
                        <a href='' className='inputtextfield3 text-decoration-none'>Change Password</a>
                    </div>
                    <div className='d-flex  mt-2 align-items-center'>
                    <div className='col-2 '>
                    <label >Region:</label>
                    </div>
                    <select name="cars" className="inputtextfield mt-2" >
                    <option value="volvo" className="Regiontext">Website</option>
                    <option value="saab" className="Regiontext">Saab</option>
                    <option value="opel" className="Regiontext">Opel</option>
                    <option value="audi" className="Regiontext">Audi</option>
                </select>
                </div>
                <div className='d-flex  mt-2 align-items-center'>
                <div className='col-2 '>
                    <label >Language:</label>
                    </div>
                <select name="cars" className="inputtextfield mt-2" >
                <option value="volvo" className="languagetext">Language</option>
                <option value="saab" className="languagetext">Saab</option>
                <option value="opel" className="languagetext">Opel</option>
                <option value="audi" className="languagetext">Audi</option>
            </select>
            </div>
            </div>
                </div>
            </div>
        </>
    )
}

export default Account
