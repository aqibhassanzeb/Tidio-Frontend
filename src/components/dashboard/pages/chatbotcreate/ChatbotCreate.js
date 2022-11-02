import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Chatbotdelete, Chatbotfetch, newChatbotCreate } from '../../../../apis/Chat-api';
import Table from 'react-bootstrap/Table';
import { useLocation } from 'react-router-dom';
import Chatbot from "../../../chatbot/Chatbot"
import "../chatbotcreate/ChatbotCreate.css"
function ChatbotCreate() {

    const loginUser = JSON.parse(localStorage.getItem("user"))
    const [show, setShow] = useState(false);
    const [Error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    const [fetchControl, setfetchControl] = useState(false)
    const [ChatbotData, setChatbotData] = useState([])
    const handleShow = () => setShow(true);
    const [name, setName] = useState("")
    const handleClose = () => {
        setError("") 
        setShow(false)
    }
    var serialNo=0;

    // new chat bot create 

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
            setfetchControl(!fetchControl)
            handleClose()
        }).catch(err=>{
            setLoader(false)
            console.log(err)})
    }

    // fetch created chat bot 

    const handlefetch=()=>{
        const _id=loginUser._id
        Chatbotfetch(_id).then(res=>{
            setChatbotData(res?.data?.saveUser)
        }).catch(err=>{
            console.log(err)})
    }

    // Delete chatbot function 

    const handleDelete=(_id)=>{
        Chatbotdelete(_id).then(result=>{
            setfetchControl(!fetchControl)
            toast.success(result.data.message)

        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
          handlefetch()
    }, [fetchControl])    
    var framlink=`<iframe src=${window.location.href} ></iframe>`
    return (
        <>
        <ToastContainer />
            <div className='container-fluid'>
                <div className='row text-end mt-2'>
                    <div className='col-sm-12'>
                        <button className='btn btn-primary' onClick={handleShow}>Create ChatBot</button>
                        {/* <p>{window.location.href}</p> */}
                        <p>{framlink}</p>
                        {/* <button onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button> */}
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
                                        <th>S/No</th>
                                        <th>Name</th>
                                        <th>Embeded Link</th>
                                        <th>Embeded Link</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {ChatbotData && ChatbotData.map(elm=>{
                                    return(
                                        <>
                                        <tr key={elm._id}>
                                        <td>{serialNo = serialNo + 1}</td>
                                        <td>{elm.name}</td>
                                        <td>{elm._id}</td>
                                        <td> <button className="btn btn-danger" onClick={()=>handleDelete(elm._id)}>
                                            Delete
                                            </button></td>
                                    </tr>
                                        </>
                                        )
                                    })  
                                 }  
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default ChatbotCreate