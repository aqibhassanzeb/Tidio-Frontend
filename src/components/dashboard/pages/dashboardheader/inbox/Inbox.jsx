import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import "../inbox/Inbox.css"
import useimage from "../../../../../images/horse.jpg"
import { getAllUser, selectUser } from '../../../../../apis/Chat-api'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectUser } from '../../../../../redux/features/ChatSlice'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import ChatInbox from '../../../../chatinbox/ChatInbox'
import { getSender, getSenderFull } from '../../../../../apisfun/separateUser'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
const Inbox = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [selectloading, setSelectLoading] = useState(false)
    const [searchUsers, setSearchUsers] = useState([])
    const [senderUser, setSenderUser] = useState('')
    // for modal control 
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(true);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleShow = () => setHide(false);
    const handleShowforward = () => setHide(true)
    // another hooks 

    const selectedUser = useSelector(state => state.SelectedUser.selectedUser)
    const activeUser = useSelector(state => state.User.activeUser)
    const notification = useSelector(state => state.SelectedUser.notification)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    // Search function 
    const searchHandle = (e) => {
        setSearch(e.target.value)
        if (search.length > 2) {
            setLoading(true)
            getAllUser(search).then((res) => {
                setSearchUsers(res.data)
                setLoading(false)
            }
            ).catch(err => {
                setLoading(false)
                console.log(err)
            })

        }
    }

    // Select User for Chat func

    const handleSelect = (value) => {
        const userId = value
        setSelectLoading(true)
        selectUser({ userId }).then(res => {
            dispatch(setSelectUser(res.data))
            var result = getSenderFull(activeUser, res.data.users)
            setSenderUser(result)
            setSelectLoading(false)
        }).catch(err => {

            setSelectLoading(false)
            console.log(err)
        })
    }



    return (
        <>
            <div className='row '>
                {
                    hide ? (<div className='inbox-maindiv col-sm-12 col-md-3'  >
                        <div className='uppersearch  d-flex justify-content-end pt-1'>
                            {/* <input type="search" placeholder='Search here min 2 word..' className='inputsearch' value={search} onChange={(e)=>searchHandle(e)} /> */}
                            {/* <BsSearch className='searchiocon ' onClick={handleShow} /> */}
                            <IoMdArrowBack className='searchiocon ' onClick={handleShow} />
                        </div>
                        <div className='inboxprofdiv'>

                        </div>
                    </div>) : (
                        <div className='inbox-maindivforwarddiv col-sm-12 col-md-3'  >

                            <IoMdArrowForward className='searchioconforward ' onClick={handleShowforward} />
                        </div>

                    )
                }


                {/* Chat portion  */}
                <div className='col-sm-12 col-md-9 inboxCahtsys '>

                    <ChatInbox senderUser={senderUser} />

                </div>
            </div>
            {/* Modal for user search  */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search user for chat</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: "40vh", overflow: 'scroll' }}>
                    <input className='searchinput' placeholder='Search here min 2 word..' c value={search} onChange={(e) => searchHandle(e)} />
                    {
                        loading || selectloading ?
                            <p>loading..</p> :

                            searchUsers &&
                            searchUsers.map((elm, index) => {
                                return (
                                    <>
                                        <div key={index} className='inboxUserdetail d-flex mt-2' onClick={() => { handleSelect(elm._id); handleClose() }} style={{ cursor: "pointer" }}>
                                            <div>
                                                <img src={elm?.imageUrl} className='userimage' />
                                            </div>
                                            <div className='usercardinfo'>
                                                <span className=' text-white usernametext'>{elm?.name}</span>
                                                <span className='text-center text-white userpara'>{elm?.email}</span>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Inbox
