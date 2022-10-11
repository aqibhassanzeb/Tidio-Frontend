import React from 'react'
import '../register/Register.css'
const Register = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>

                    </div>
                    <div className='col-6 border maindivofregister d-flex justify-content-center'>
                        <div className='mainregisterdiv'>
                            <div className=''>
                                <h3 >Create Free Account</h3>
                                <p>Register using your email address:</p>
                                <div className='inputdiv'>
                                    <input type="email" className='inputfielddata' placeholder='Email' />
                                    <input type="password" className='inputfielddata' placeholder='Password' />
                                    <input type="text" className='inputfielddata' placeholder='Website' />
                                    <div className='maincheckbox'>
                                        <input type="checkbox" className='agreetext' id="agree" name="agree" value="" />
                                        <label for="agree" className='agreetext2'> I agree to Tidio's <a href=''>Terms & Conditions</a> and <a href=''>Privacy Policy</a></label>
                                    </div>
                                    <button className='btn btn-primary mt-4 btnreg'>Get Started</button>
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
