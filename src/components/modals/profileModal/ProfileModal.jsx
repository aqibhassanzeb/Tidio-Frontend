import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ProfileModal = ({setShow, show}) => {
  

    const handleClose = () => setShow(false);
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body>
        <div className='firstnamemodal'>
        <label>FirstName :</label>
        <input type="text" placeholder='Enter your Firstname' className='p-2 ' /><br/>
        </div>
        <div className='secondnamemodal'>
        <label>LastName :</label>
            <input type="text" placeholder='Enter your Lastname' className='p-2 '/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className='text-center' onClick={handleClose}>
            Done
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProfileModal;
