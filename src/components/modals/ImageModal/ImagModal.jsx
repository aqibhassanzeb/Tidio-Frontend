import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { IoIosClose } from 'react-icons/io';
import './ImagModal.css'


const ImagModal = ({imgd , setImgd, sendi}) => {

    const handleClose = () => setImgd(false);
    const handleShow = () => setImgd(true);

  return (
    <>
        
        <Modal className='imageModalbackgrd' show={imgd} onHide={handleClose}>
      
        <Modal.Body className='mod'>
            <div className=''>
            <div className='clsoebtn'> <IoIosClose className='ioclsoe' onClick={() => setImgd(false)}/> </div>
             <img src={sendi} className='img-fluid' ></img>
            </div>
        </Modal.Body>
       
    </Modal>
      
    </>
  )
}

export default ImagModal
