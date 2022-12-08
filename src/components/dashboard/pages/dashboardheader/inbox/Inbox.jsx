import React, { useState, useEffect, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import "../inbox/Inbox.css"
import useimage from "../../../../../images/horse.jpg"
import { fetchChat2, getAllUser, selectUser, selectUser2 } from '../../../../../apis/Chat-api'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification, setNotificationClear, setNotifSelectChat, setSelectUser, setsubUserNotifClear } from '../../../../../redux/features/ChatSlice'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import ChatInbox from '../../../../chatinbox/ChatInbox'
import { getSender, getSenderFull } from '../../../../../apisfun/separateUser'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import NotificationBadge from 'react-notification-badge/lib/components/NotificationBadge';
import { Effect } from 'react-notification-badge';
import ProfileChatInfo from '../../../profileChatInfo/ProfileChatInfo'
import { AiFillCaretLeft } from 'react-icons/ai'
import DashboardHeader from './../DashboardHeader';
const Inbox = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [selectloading, setSelectLoading] = useState(false)
    const [searchUsers, setSearchUsers] = useState([])
    const [chatUser, setChatUser] = useState([])
    const [senderUser, setSenderUser] = useState('')
    const [totalnotifi, setTotalnotifi] = useState([])

    // for modal control 
    const [show, setShow] = useState(false);
    const [showProfInfo, setShowProfInfo] = useState(false);
    const [hide, setHide] = useState(true);
    const [chatMail, setChatMail] = useState();
    const handleClose = () => setShow(false);
    
    // const handleShow = () => setShow(true);
    const handleShow = () => setHide(false);
    const handleShowforward = () => setHide(true)
    
    // another hooks 
    const fetchControl = useRef(false);
    const selectedUser = useSelector(state => state.SelectedUser.selectedUser)
    const activeUser = useSelector(state => state.User.activeUser)
    const notification = useSelector(state => state.SelectedUser.notification)
    var user = JSON.parse(localStorage.getItem("user"))
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

    //  fetch chat user

    const fetchChatUser = () => {
        const _id = user && user._id
       if(_id){ setLoading(true)
        fetchChat2(_id).then((res) => {
            setChatUser(res.data)
            setLoading(false)
        }
        ).catch(err => {
            setLoading(false)
            console.log(err)
        })}


    }

    const handleTog = (value) => {
        setChatMail(value)
    }

    // Select User for Chat func

    const handleSelect = (value) => {
        const _id = value
        setSelectLoading(true)
        selectUser2({ _id }).then(res => {
            dispatch(setSelectUser(res.data.FullChat))
            // var result = getSenderFull(activeUser, res.data.FullChat.subUser)
            // setSenderUser(res.data.FullChat.subUser)
            const newnofication = notification.filter(elm=>elm.chat?._id != value)
            if(newnofication.length > 0)
            {
                dispatch(setNotifSelectChat(newnofication))
            }else{
                dispatch(setNotificationClear())
            }
        setSelectLoading(false)
        }).catch(err => {

            setSelectLoading(false)
            console.log(err)
        })
    }

    useEffect(() => {
        if (fetchControl.current) return
        fetchControl.current = true
        fetchChatUser()
    }, [activeUser])


    useEffect(() => {
        // notication control 
        var output=[]
        notification && notification.forEach(element => {
            output.push(element.chat._id)
        }); 
        var output2=[]
        output && output.forEach((element,index,arr)=>{
            if(arr.indexOf(element) == index ){
                output2.push(element)
            }
        })

        let result=[]
        output2 && output2.map((elm,index)=>{
          let  lengthValue =output.filter((el)=>elm==el)
           result[index]=lengthValue       
   
      })
          result && setTotalnotifi(result)
    }, [notification,hide])

    return (
        <>
            <div className='row chatdivin p-0'>
                {
                    hide && (<div className='inbox-maindiv col-3' style={{overflowY:"scroll", padding: 0}}  >
                        <div className='uppersearch  d-flex justify-content-between '>
                            {/* <input type="search" placeholder='Search here min 2 word..' className='inputsearch' value={search} onChange={(e)=>searchHandle(e)} />
               <BsSearch className='searchiocon ' onClick={handleShow} /> */}
               <div className='d-flex justify-content-between w-100 '>
                   <div className='conver'>Conversation</div>
                   <div className='conver2' onClick={()=> setHide(false)}><AiFillCaretLeft /></div>
               </div>
                            
                        </div>
                        {
                            chatUser &&
                            chatUser.map((elm, index) => {
                            const notfi=  totalnotifi && totalnotifi.filter((elem)=>elem[0]==elm._id)
                            const result = elm?.subUser.email.split('@')[0];
                                return (
                                    <>
                                        <div key={elm._id} className={ chatMail == index ? "inboxUserdetail2" :  'inboxUserdetail  '} onClick={() => { handleSelect(elm._id); handleTog(index) }} style={{ cursor: "pointer" }}>
                                        
                                        <NotificationBadge count={notfi[0]?.length}
                                             effect={Effect.SCALE}
                                             />
                                            <div className="p-1" >
                                            <h6 style={{color: "rgba(255, 255, 255, 0.678)"}} className='p-0 m-0 '>{elm.subUser.name ? elm.subUser.name : result}</h6>
                                                <p  className='p-0 m-0 emailofinbos'>{elm?.subUser.email}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>) 
                }


                {/* Chat portion  */}
                <div className='col-sm-12 col-md-9 inboxCahtsys '>
                <DashboardHeader />

                    <ChatInbox
                    setHide={setHide}
                    senderUser={senderUser}
                    showProfInfo = {showProfInfo}
                    setShowProfInfo = {setShowProfInfo} />
                    {
                        showProfInfo &&
                        <ProfileChatInfo 
                       
                        />
                    }
                </div>
            </div>
            {/* Modal for user search  */}

            {/* <Modal show={show} onHide={handleClose}>
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
            </Modal> */}


        </>
    )
}

export default Inbox
