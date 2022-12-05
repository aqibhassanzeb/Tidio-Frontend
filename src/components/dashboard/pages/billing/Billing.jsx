import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MdSubtitles } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Billing.css'

const Billing = () => {

    const [lgShow, setLgShow] = useState(false);
  return (
    <>
        <div className='container-fluid' >
            <div className='row billing-div'>
                <div className='subbil'>
                <h5> <MdSubtitles style={{fontSize: "30px" , color: "gray"}} /> Subscription & Billing</h5>
                </div>
                <div className='col-2'>
                        <p>Subscription:</p>
                </div>
                <div className='col-10'>
                        <p>You're on the Basic free plan. <Link to="">Upgrade now.</Link> </p>
                </div>
                <div className='col-2'>
                        <p>Billing details:</p>
                </div>
                <div className='col-10'>
                        <Link to='' onClick={() => setLgShow(true)}>Change invoice details</Link>
                </div>
            </div>
        </div> 
        <Modal
        size="md"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center  w-100'>
          <h3 className='text-center'> Edit billing details </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='fielddata'>
            <fieldset>
                <input type="text" className='modalinputt' placeholder='Company Name'   />
                <input type="text" className='modalinputt' placeholder='Street'   />
                <input type="text" className='modalinputt2 ' placeholder='Postcode'   />
                <input type="text" className='modalinputt2 ' placeholder='City'   />
                <input type="text" className='modalinputt' placeholder='Country'   />
                <input type="text" className='modalinputt2' placeholder='Tax Number (Optional)'   />
                <input type="text" className='modalinputt2' placeholder='Invoicing Email'   />
               <div className='d-flex justify-content-center'> <button className='btn btn-primary mt-2'>Save</button></div>
            </fieldset>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Billing
