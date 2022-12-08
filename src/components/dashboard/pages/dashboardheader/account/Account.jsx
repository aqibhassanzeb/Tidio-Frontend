import React, { useState,useEffect } from 'react'
import '../account/Account.css'
import { FaUserAlt } from 'react-icons/fa'
import acountimage from '../../../../../images/horse.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userUpdate } from '../../../../../apis/Auth-api';
import { setActiveUser } from '../../../../../redux/features/UserSlice';

const Account = () => {

    const dispatch = useDispatch()
    const loginUser = useSelector(state => state.User.activeUser);
    const [show, setShow] = useState(false);
    const [region, setRegion] = useState("")
    const [language, setLanguage] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [imageshow, setImageshow] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    setName(loginUser?.name)
    setRegion(loginUser?.region)
    setLanguage(loginUser?.language)
    setPicture(loginUser?.imageUrl)
    }, [loginUser])
    
    // picture select 
    const handleChangePic=(pic)=>{
        let picUrl=window.URL.createObjectURL(pic)
        setImageshow(picUrl)
        setPicture(pic)
    }
    
    // update user detail 
    const handleUpdate=()=>{
        const formdata = new FormData();
        formdata.append("myFile", picture);
        formdata.append("name",name)
        formdata.append("region",region)
        formdata.append("language",language)
        // const paylaod={name,picture,region,language}
        let _id=loginUser._id
        setLoading(true)
        userUpdate(formdata,_id).then(res=>{
        if(res.data.user){
            localStorage.setItem("user", JSON.stringify(res.data.user))
            dispatch(setActiveUser(res.data.user))
            toast.success(res.data.message)
        }
        setLoading(false)
        }).catch(err=>{
            console.log(err)
            setLoading(false)
        })
    }
    return (
        <>
            <div className=''>
                <ToastContainer/>
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

                            <input type="text" value={name} className='inputtextfield' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />

                        </div>
                        <div className='d-flex  mt-2 align-items-center'>
                            <div className='col-2 '>
                                <label >Your Picture:</label>
                            </div>
                            <div>
                                <div>
                                    <img src={imageshow ?imageshow: process.env.REACT_APP_API_URL_IMG+loginUser?.imageUrl} className='inputtextimg' alt="user" />
                                </div>
                                <div>
                                    <input type="file" className='inputtextfield3' onChange={(e)=>handleChangePic(e.target.files[0])} />
                                </div>
                            </div>
                        </div>
                        {/* <div className='d-flex  mt-2 align-items-center'>
                            <div className='col-2 '>
                                <label >Email:</label>
                            </div>
                            <input type="Email" value={loginUser?.email} className='inputtextfield' placeholder='Enter your email' />
                        </div> */}
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
                            <select name="cars" value={region} className="inputtextfield mt-2" onChange={(e)=>setRegion(e.target.value)} >
                                <option value="volvo" className="Regiontext">Volvo</option>
                                <option value="saab" className="Regiontext">Saab</option>
                                <option value="opel" className="Regiontext">Opel</option>
                                <option value="audi" className="Regiontext">Audi</option>
                            </select>
                        </div>
                        <div className='d-flex  mt-2 align-items-center'>
                            <div className='col-2 '>
                                <label >Language:</label>
                            </div>
                            <select name="cars" value={language} className="inputtextfield mt-2" onChange={(e)=>setLanguage(e.target.value)} >
                                <option value="english" className="languagetext">English</option>
                                <option value="saab" className="languagetext">Saab</option>
                                <option value="opel" className="languagetext">Opel</option>
                                <option value="audi" className="languagetext">Audi</option>
                            </select>
                        </div>
                    <div className='d-flex justify-content-end col-4 mt-4'>
                        <button className="btn btn-primary " onClick={handleUpdate} disabled={loading}>
                            Save
                        </button>
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
