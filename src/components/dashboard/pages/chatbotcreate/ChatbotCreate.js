import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import "../chatbotcreate/ChatbotCreate.css"
function ChatbotCreate() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='container-fluid'>
                <div className='row text-end mt-2'>
                    <div className='col-sm-12'>
                        <button className='btn btn-primary' onClick={handleShow}>Create ChatBot</button>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create your own Chatbot</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input className="form-control" placeholder="enter your chatbotname"></input>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn btn-danger' onClick={handleClose}>
                                Close
                            </button>
                            <button className='btn btn-primary' onClick={handleClose}>
                                Save Changes
                            </button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className='row'>
                <div className='text-center'>
                    <h1>Your list</h1>
                </div>
                    <div className='col-sm-12 mt-3'>
                        <div className='col-sm-8 border  offset-2 d-flex background p-4'>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatbotCreate