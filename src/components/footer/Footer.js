import React from 'react'
import '../footer/Footer.css'
export default function Footer() {
  return (
    <>
      <div className='container-fluid p-4 bg-light'>
        <div className='row '>
          <div className='col-md-4 col-sm-12 text-center'>
            <div className='footerinfo'>
              <h4>Tidio</h4>
              <p>Tidio 2022. All rights reserved.</p>
            </div>
            <p className='mt-2'>support@tidio.net</p>
          </div>
          <div className='col-md-2  col-sm-12 text-center'>
            <h4>Tidio</h4>
            <p>Affiliate Program</p>
            <p>Contact</p>
            <p>Jobs – We're hiring!</p>
            <p>Privacy Policy</p>
          </div>
          <div className='col-md-2  col-sm-12 text-center'>
            <h4>Product</h4>
            <p>Live Chat</p>
            <p>Chatbots</p>
            <p>Pricing</p>
          </div>
          <div className='col-md-2  col-sm-12 text-center'>
            <h4>Integration</h4>
            <p>Shopify</p>
            <p>WordPress</p>
            <p>Wix</p>
          </div>
          <div className='col-md-2  col-sm-12 text-center'>
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Case Studies</p>
            <p>Authors</p>

          </div>
        </div>
      </div>
    </>
  )
}
