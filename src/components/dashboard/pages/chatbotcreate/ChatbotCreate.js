import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Chatbotfetch, newChatbotCreate } from '../../../../apis/Chat-api';
import Table from 'react-bootstrap/Table';
import "../chatbotcreate/ChatbotCreate.css"
function ChatbotCreate() {

    const loginUser = useSelector(state => state.User.activeUser)
    const [show, setShow] = useState(false);
    const [Error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    const handleClose = () => {
        setError("") 
         setShow(false)
        }
    const handleShow = () => setShow(true);
    const [name, setName] = useState("")

    const handleCreate=()=>{
        if(!name){
            return setError(true)
        }
        const payload={name,createdby:loginUser?._id}
        setLoader(true)
        newChatbotCreate(payload).then(result=>{
            toast.success(result.data.message)
            setLoader(false)
            setName("")
            handleClose()
        }).catch(err=>{
            setLoader(false)
            console.log(err)})
    }
    const handlefetch=()=>{
        Chatbotfetch().then(res=>{
        console.log("result :",res)
        }).catch(err=>console.log(err))
    }
    useEffect(() => {
        handlefetch()
    }, [])
    

    return (
        <>
        <ToastContainer />
            <div className='container-fluid'>
                <div className='row text-end mt-2'>
                    <div className='col-sm-12'>
                        <button className='btn btn-primary' onClick={handleShow}>Create ChatBot</button>
                    </div>
                   
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create ChatBot</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input className="form-control" placeholder="enter your chatbotname"
                            onChange={(e)=>{setName(e.target.value);setError(false)}}
                            ></input>
                       {Error &&   <p style={{color:"red"}}>please fill the name</p>}
                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn btn-danger' onClick={handleClose}>
                                Close
                            </button>
                            <button className='btn btn-primary' onClick={handleCreate}>
                                Save Changes
                            </button>
                        </Modal.Footer>
                    </Modal>
                
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
            
        </>
    )
}

export default ChatbotCreate