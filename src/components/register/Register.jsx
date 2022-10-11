import React from 'react'
import '../register/Register.css'
import  {BsFacebook, BsInstagram} from "react-icons/bs"
import  {FaWix} from "react-icons/fa"



const Register = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>

                    </div>
                    <div className='col-6 border maindivofregister d-flex justify-content-center'>
                        <div className='mainregisterdiv'>
                            <div className=' inerdivreg'>
                                <h2 className='createtext'>Create a free account</h2>
                                <p className=''>Register using your email address:</p>
                                <div className='inputdiv'>
                                    <input type="text" className='inputfielddata' placeholder='Name' />
                                    <input type="text" className='inputfielddata' placeholder='Surname' />
                                    <input type="email" className='inputfielddata' placeholder='Email' />
                                    <input type="password" className='inputfielddata' placeholder='Password' />
                                    <input type="text" className='inputfielddata' placeholder='Website' />
                                    <div className='maincheckbox'>
                                        <input type="checkbox" className='agreetext' id="agree" name="agree" value="" />
                                        <label for="agree" className='agreetext2'> I agree to Tidio's <a href=''>Terms & Conditions</a> and <a href=''>Privacy Policy</a></label>
                                    </div>
                                    <button className='btn btn-primary fs-5 mt-4 btnreg'>Get Started</button>
                                </div>
                                <div className='signupalso'>
                                <p>You can also sign up with: </p>
                                <div className='d-flex justify-content-between '>
                                <div className='w-50 p-2 m-2 border d-flex icondiv justify-content-center'>
                               <BsFacebook className='icon'/>
                                </div>
                                <div className='w-50 p-2 m-2 border d-flex icondiv justify-content-center'>
                                <BsInstagram className='icon'/>
                                </div>
                                <div className='w-50 p-2 m-2 border d-flex icondiv justify-content-center'>
                                <FaWix className='icon'/>
                                </div>
                                </div>
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
