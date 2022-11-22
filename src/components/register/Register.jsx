import React, { useState } from 'react'
import '../register/Register.css'
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { FaWix } from "react-icons/fa"
import customerimg from '../../images/horse.jpg'
import { userRegister } from '../../apis/Auth-api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import SocailLogin from './SocailLogin'


const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [surName, setSurName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [websiteName, setWebsiteName] = useState("")
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [termCond, setTermCond] = useState(false)


    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    // Register function 
    const handleRegister = () => {
        if (!name) {
            return toast.error("please fill the name");
        }
        if (!email) {
            return toast.error("please fill the email");
        }
        if (!password) {
            return toast.error("please fill the password");
        }
        if(!regex.test(email)){
        return toast.error("please valid email");
       }
        if (!termCond) {
            return toast.error("please click term and condition");
        }
        setLoader(true)
        const payload = { name, surName, email, password, websiteName }
        userRegister(payload).then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            navigate('/userlogin')

        }).catch(err => {
            if (err.response.data.message) {
                toast.error(err.response.data.message);
            }
            console.log(err)
            setLoader(false)
        }
        )
    }

    return (
        <>
            <div className='container-fluid'>
                <ToastContainer />
                <div className='row'>
                    <div className='col-md-6 backgroundmain'>
                        <div className='tidiologinheader'>
                            <Link to={"/"} className='text-decoration-none backlink fw-bold'>Antartical CorSps</Link>
                        </div>
                        <div className=' registersidebartext'>
                            <div className='registersidediv d-flex'>
                                <img src={customerimg} className=' horseimg img-fluid' alt="customer"/>
                                <div className=' mx-2'>
                                    <span>Farzan A</span>
                                    <p>Website Designer</p>
                                </div>
                            </div>
                            <div className=' w-50 mt-2'>
                                <h4 className='my-3'>One of the best chatbot development platforms</h4>
                                <p>Tidio has a user-friendly UI/UX. It is very easy to
                                    understand and use. The design and animation of the
                                    chat widget are also very good. It also has a good
                                    chatbot flow builder. The analytics part of the
                                    dashboard is very useful. It helps to generate insights
                                    into the chatbot.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6  maindivofregister d-flex justify-content-center'>
                        <div className='mainregisterdiv'>
                            <div className=' inerdivreg'>
                                <h2 className='createtext'>Create a free account</h2>
                                <p className=''>Register using your email address:</p>
                                <div className='inputdiv'>
                                    <input type="text" className='inputfielddata' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
                                    <input type="text" className='inputfielddata' placeholder='Surname' onChange={(e) => setSurName(e.target.value)} value={surName} />
                                    <input type="email" className='inputfielddata' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                    <input type="password" className='inputfielddata' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                                    <input type="text" className='inputfielddata' placeholder='Website' onChange={(e) => setWebsiteName(e.target.value)} value={websiteName} />
                                    <div className='maincheckbox'>
                                        <input type="checkbox" className='agreetext' value={termCond} onClick={()=>setTermCond(!termCond)} />
                                        <label for="agree" className='agreetext2'> I agree to Tidio's <a href=''>Terms & Conditions</a> and <a href=''>Privacy Policy</a></label>
                                    </div>
                                    <div className='registerbtn '>
                                        {loader ? <button className='btn btn-primary w-75 my-2'>Loading..</button> : <button className='btn btn-primary w-75 my-2' onClick={() => handleRegister()}>Register</button>}
                                    </div>
                                </div>
                                <div className='signupalso mt-2'>
                                    {/* <p className='mt-2'>You can also sign up with: </p>
                                     <div className='d-flex justify-content-between '>
                                        <div className='w-50 p-2  border d-flex icondiv justify-content-center'>
                                            <BsFacebook className='icon' />
                                        </div>
                                        <div className='w-50 p-2 border d-flex icondiv justify-content-center'>
                                            <BsInstagram className='icon' />
                                        </div>
                                        <div className='w-50 p-2  border d-flex icondiv justify-content-center'>
                                            <FaWix className='icon' />
                                        </div>
                                    </div> */}
                                    {/* <SocailLogin/> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
