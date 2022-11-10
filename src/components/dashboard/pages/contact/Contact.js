import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import '../contact/Contact.css'
function Contact() {
  return (
    <div>
      <div className='container'>
        <h1 className='col contatchead'>Contact Us</h1>
        <div className='row'>
          <div className='col-md-6 mt-4'>
            <div>
              <h2 className='text-center text-primary'>Send Us a Message</h2>
              <p className='text-center'>To learn more about being featured, get in touch - we'd love to hear from you!</p>
            </div>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
              </div>
              <div className="form-group mt-3">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group mt-3">
                <label for="exampleInputEmail1">Phone Number</label>
                <input type="number" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter Phone No" />
              </div>
              <div className="form-group mt-3">
                <label for="exampleInputPassword1">Subject</label>
                <textarea  className="form-control" id="exampleInputPassword3" placeholder="Subject" />
              </div>
              <div className=' d-flex justify-content-center'>
              <button type="submit" className="btn btn-primary mt-2">Submit</button>
              </div>
            </form>
          </div>
          <div className='col-md-6 mt-4'>
            <div>
              <h2 className='text-center text-primary'>Email US</h2>
              <p className='text-center'>Info@tidio.com</p>
            </div>
            <div>
              <h2 className='text-center text-primary'>Contact With US</h2>
              <div className='text-center'>
                <span> <FaFacebook  className='socialicon'/> </span>
                <span > <FaInstagram className='socialicon'/> </span>
                <span > <FaLinkedinIn className='socialicon'/> </span>
              </div>
              <div className='tidiologohere'>
                <h1 className=''>Antartical Corps Logo</h1>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact