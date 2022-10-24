import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsQuestionOctagon } from 'react-icons/bs';

const CrossModal = ({cross, setCross}) => {
  
    

    const handleClose = () => setCross(false);
    const handleShow = () => setCross(true);
    return (
        <div>
            

            <Modal show={cross} onHide={handleClose}>
                <Modal.Header closeButton>
                   
                </Modal.Header>
                <Modal.Body>
                    <div className='maindivofcrossmodal'>
                        <BsQuestionOctagon className="questionicon" />
                        <h5 className='m-2'>Are you sure?</h5>
                        <p>This action cannot be undone.</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <div className='d-flex justify-content-evenly  w-50'>
                    <Button variant="danger" onClick={handleClose}>
                        Yes, Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CrossModal

