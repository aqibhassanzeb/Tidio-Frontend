import React from 'react'
import './ProjectModal.css'
import { Button, Modal } from 'react-bootstrap';

const ProjectModal = ({project , setProject}) => {

    const handleClose = () => setProject(false);
    const handleShow = () => setProject(true);
  return (
    <>
    <Modal className='' show={project} onHide={handleClose}>
      
    <Modal.Body className=''>
        <div className=''>
            <h3>New Project</h3>
            <input type="url" className='proinpt' placeholder='Enter your website url...' />
            <p className='p-0 m-0'> eg. mywebsite.com </p>
        </div>
        <button className='btn btn-primary'>Add</button>
    </Modal.Body>
   
</Modal>
    </>
  )
}

export default ProjectModal
