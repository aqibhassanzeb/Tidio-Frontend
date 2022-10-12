import React, { useState } from 'react'
import '../register/Register.css'
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { FaWix } from "react-icons/fa"
import customerimg from '../../images/horse.jpg'
import { userRegister } from '../../apis/Auth-api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
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
   

    
    
    // Register function 

    const handleRegister=()=>{
        if(!email && !password){
            return toast.error("please fill the fields");
        }
        setLoader(true)
        const payload = { name, surName, email, password, websiteName }
        userRegister(payload).then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            navigate('/')
           
        }).catch(err=>{
            if(err.response.data.message){
               toast.error(err.response.data.message);
            }
            console.log(err)
        }
        )
        setLoader(false)
    }

    return (
        <>
            <div className='container-fluid'>
                <ToastContainer />
                <div className='row'>
                    <div className='col-7 backgroundmain'>
                    <div className=' registersidebartext'>
                        <div className='registersidediv d-flex'>
                            <img src={customerimg} className=' horseimg img-fluid' />
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
                    <div className='col-5  maindivofregister d-flex justify-content-center'>
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
                                        <input type="checkbox" className='agreetext' id="agree" name="agree" value="" />
                                        <label for="agree" className='agreetext2'> I agree to Tidio's <a href=''>Terms & Conditions</a> and <a href=''>Privacy Policy</a></label>
                                    </div>
                                </div>
                                <div className='signupalso mt-2'>
                                    <p className='mt-2'>You can also sign up with: </p>
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
                                    </div>
                                    <SocailLogin/>
                                    
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
