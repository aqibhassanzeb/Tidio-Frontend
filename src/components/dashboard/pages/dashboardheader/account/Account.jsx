import React, { useState } from 'react'
import '../account/Account.css'
import { FaUserAlt } from 'react-icons/fa'
import acountimage from '../../../../../images/horse.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
const Account = () => {
    const loginUser = useSelector(state => state.User.activeUser);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

                            <input type="text" value={loginUser?.name} className='inputtextfield' placeholder='Enter your name' />

                        </div>
                        <div className='d-flex  mt-2 align-items-center'>
                            <div className='col-2 '>
                                <label >Your Picture:</label>
                            </div>
                            <div>
                                <div>
                                    <img src={loginUser?.imageUrl} className='inputtextimg' alt="user" />
                                </div>
                                <div>
                                    <input type="file" className='inputtextfield3' />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex  mt-2 align-items-center'>
                            <div className='col-2 '>
                                <label >Email:</label>
                            </div>
                            <input type="Email" value={loginUser?.email} className='inputtextfield' placeholder='Enter your email' />
                        </div>
                        <div className='d-flex  mt-2 align-items-center'>
                            <div className='col-2 '>
                                <label >Password:</label>
                            </div>
                            <a className='inputtextfield3 text-decoration-none' onClick={handleShow}>Change Password</a>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-sm-12 mt-3'>
                            <input type="password" className='form-control' placeholder='Current password'></input>
                            <div className='small_change'>
                                <small>If you forgot your current password please use <Link to='/reset-pass' className='forgot_pass'>Forget Password</Link> option on the login page.
                                </small>
                            </div>
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <input type="password" className='form-control' placeholder='New password'></input>
                        </div>
                        <div className='col-sm-12 mt-3'>
                            <input type="password" className='form-control' placeholder='Repat New password'></input>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Account
