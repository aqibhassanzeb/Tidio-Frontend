import React from 'react'
import { useState } from 'react';
import "./ChatbotCreate.css"
import Profilepic from '../../../../images/profile.jpg'
import { AiOutlineSend } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { createChat, fetchMessages2, sendMessage2 } from '../../../../apis/Chat-api';
import { useEffect } from 'react';
import io from 'socket.io-client'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setsubUserNotif, setsubUserNotifClear } from '../../../../redux/features/ChatSlice';
import NotificationBadge from 'react-notification-badge/lib/components/NotificationBadge';
import { Effect } from 'react-notification-badge';
import useSound from 'use-sound';
import boopSfx from "../../../../images/message.mp3"
import { RiArrowDropDownLine } from 'react-icons/ri';
import Peer from "simple-peer"
import { Button, Modal } from 'react-bootstrap'
import CopyToClipboard from 'react-copy-to-clipboard'
import { IoMdCall } from 'react-icons/io';
import { TbPhoneCall } from 'react-icons/tb';

var ENDPOINT = process.env.REACT_APP_SOCKET_LINK
var socket = io()
var chatbotControl
const Chatbot2 = () => {
    const [play] = useSound(boopSfx)
    const [showChatbot, setshowChatbot] = useState(false);
    const [forceUpdate, setForceUpdate] = useState(false);
    const [Error, setError] = useState(false)
    const [contentError, setContentError] = useState(false)
    const [emailInp, setEmailInp] = useState("")
    const [chatId, setChatId] = useState(localStorage.getItem("tidiochat"));
    const [tidiochatUser, setTidiochatUser] = useState(localStorage.getItem("tidiochatuser"))
    const [content, setContent] = useState("")
    const [data, setData] = useState([])
    const [fetchemail, setFetchemail] = useState("")
    const fetchControl = useRef(false);
    const [socketConnected, setSocketConnected] = useState(false)
    const subUserData = JSON.parse(tidiochatUser)
    const [sendloading, setSendloading] = useState(false)
    const [notficationControl, setNotficationControl] = useState(null)
    const dispatch = useDispatch()

    // calling state portion 
    const [me, setMe] = useState("")
    const [stream, setStream] = useState('')
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState("")
    const [callerSignal, setCallerSignal] = useState('')
    const [callAccepted, setCallAccepted] = useState(false)
    const [idToCall, setIdToCall] = useState("")
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState('')
    const [callloading, setCallloading] = useState(false)
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()

    // video modal 
    const [show, setShow] = useState(false);

    const handleClose = () => {
        leaveCall()
        setShow(false)
    }
    const handleShow = () => setShow(true);

    const subUserNotify = useSelector(state => state.SelectedUser.subUsernotif)

    //    static data for temp

    var createdby = "634543ff090124ecb0c39a6b"
    var email = "alikhan@gmail.com"
    var _id = localStorage.getItem("tidiochat")

    // socket connection for chat 
    useEffect(() => {
        // socket.on("connected", () => setSocketConnected(true))
        socket = io(ENDPOINT)
        socket.emit("setup", subUserData !== null && subUserData);
        socket.on("connected", () => setSocketConnected(true))
        // socket.on("typing", () => setIsTyping(true))
        // socket.on("stop typing", () => setIsTyping(false))

        // webrtc portion 

        socket.on("me", (id) => {
            setMe(id)
        })

        socket.on("callUser", (data) => {
            handleCall()
            setReceivingCall(true)
            setCaller(data.from)
            setName(data.name)
            setCallerSignal(data.signal)
        })
        socket.on("end",()=>{
             setCallEnded(true)
          connectionRef.current && connectionRef.current.destroy()
          window.location.reload();
        })

    }, [])

    // 6360ffa27c91f7b5f10b7a3c
    // 6368a80a8841f2a317a1b37a

    const handlefetchChat = () => {
        if (_id && _id != undefined) {
            const paylaod = { createdby, _id }
            createChat(paylaod).then(result => {
                localStorage.setItem("tidiochat", result?.data.FullChat._id)
                localStorage.setItem("tidiochatuser", JSON.stringify(result.data?.FullChat.subUser))
                setFetchemail()
            }).catch(err => {
                console.log(err);
            })
        }
    }

    const handleCreateChat = () => {
        if (!emailInp) {
            return setError(true)
        }
        const paylaod = { createdby, email: emailInp }
        createChat(paylaod).then(result => {
            localStorage.setItem("tidiochat", result.data.FullChat._id);
            setChatId(result.data.FullChat._id)
        }).catch(err => {
            console.log(err);
        })
    }

    // send message 
    const handleSendMessages = () => {
        if (!content) {
            return setContentError(true)
        }
        const paylaod = { chatId, senderId: subUserData._id, sender: "subUser", content }
        setSendloading(true)
        sendMessage2(paylaod).then(result => {
            const messagedata = result.data
            setData([...data, messagedata])
            setContent("")
            socket.emit("new message", result?.data)
            setSendloading(false)
        }).catch(err => {

            setSendloading(false)
            console.log(err)
        })
    }

    // fetch messages

    const handleFetchMessages = () => {
        fetchMessages2(chatId).then(res => {
            setData(res?.data)
            socket.emit("join chat", chatId && chatId)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        if (fetchControl.current) return
        fetchControl.current = true
        handlefetchChat()
        chatId && handleFetchMessages()
    }, [])


    const handlenoficationmessage = () => {
        if (notficationControl != null) {
            dispatch(setsubUserNotif(notficationControl))
            // play()

        }
    }

    const handleCall = () => {
        setShow(true);
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream)
            myVideo.current.srcObject = stream;
            setForceUpdate(!forceUpdate)
        })

    }

  

    useEffect(() => {
        handlenoficationmessage()
    }, [notficationControl])

    useEffect(() => {
        socket.on("messagerecieved", (newMessageRecieved) => {
            if (!chatbotControl) {
                setNotficationControl(newMessageRecieved);
                setData([...data, newMessageRecieved])
            } else {
                setData([...data, newMessageRecieved])
            }
        })
    })

    useEffect(() => {
        chatbotControl = showChatbot
    }, [showChatbot])

  
    // calling portion 

    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            setCallloading(true)
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            })
        })
        peer.on("stream", (stream) => {

            userVideo.current.srcObject = stream

        })

        socket.on("callAccepted", (signal) => {
            setCallloading(false)
            setCallAccepted(true)
            setForceUpdate(!forceUpdate)
            peer.signal(signal)
        })
        connectionRef.current = peer
    }


    const answerCall = () => {
        setCallAccepted(true)
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: caller })
        })
        peer.on("stream", (stream) => {
            // console.log("my video :",stream)
            userVideo.current.srcObject = stream

        })
        setForceUpdate(!forceUpdate)

        peer.signal(callerSignal)

        connectionRef.current = peer
    }

    const leaveCall = () => {
        socket.emit("endCall",createdby && createdby );
        setCallEnded(true)
        stream.getTracks().forEach(function(track) {
            track.stop();
          });
          connectionRef.current && connectionRef.current.destroy()
    }

    return (
        <>
            {showChatbot ?
                <div className='container-fluid' style={{ position: "fixed" }}>
                    <div className='row mt-3'>
                        <div className='col-sm-3 offset-9 '>
                            <div className='col-sm-12  chatbot_header'>
                                <div className='pt-2 chatbottexthead text-light'>Chatbot</div>
                                <div className='pt-2 chatbottexthead2 text-light'style={{cursor:"pointer"}} onClick={() => { handleCall() }}><IoMdCall /></div>
                                <div className='clsoeicon' onClick={() => { setshowChatbot(false) }} ><RiArrowDropDownLine /></div>
                            </div>


                            {chatId && chatId != undefined ?
                                <div className=' chatbotmessagediv'>
                                    {
                                        data && data.map((elm) => {
                                            var setDate = new Date(elm.createdAt)
                                            return (
                                                <>
                                                    {elm.sender != "subUser" ?

                                                        <div className='col-sm-12 p-2 ' key={elm?._id}>
                                                            <div className='d-flex'>
                                                                <div className='col-sm-1'>
                                                                    <img src={Profilepic} className="img img-fluid img_profile" />
                                                                </div>
                                                                <div className='col-sm-11 border border-top-0 p-2 custom_rebot_chat space_box'>
                                                                    <p className="mesegtetxher">{elm?.content}</p>
                                                                    <time style={{fontSize:"10px"}} className=''>{setDate ? setDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}): "N/A"}</time>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className='col-sm-12 '>
                                                            <div className='d-flex custom_rtl'>
                                                                <div className='col-sm-1'>
                                                                    <img src={Profilepic} className="img img-fluid img_profile" />
                                                                </div>
                                                                <div className='col-sm-11 border border-top-0 p-2 custom_rebot_chat space_box_user '>
                                                                    <p className="mesegtetxher">{elm?.content}</p>
                                                                    <time style={{fontSize:"10px"}} className=''>{setDate ? setDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}): "N/A"}</time>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </ div>
                                :
                                <>
                                    <p>Please Enter Email</p>
                                    <input style={{ border: Error ? "1px red solid" : "1px gray solid" }} type="text" className='form-input'
                                        placeholder='Enter Your email here...'
                                        onChange={(e) => { setEmailInp(e.target.value); setError(false) }} value={emailInp} />
                                    <button className='btn btn-primary' onClick={() => handleCreateChat()}>submit</button>
                                </>
                            }
                            <div className='col-sm-12'>
                                <div className="input-group">
                                    <input type="text" className="form-control message_area" style={{ border: contentError ? "1px red solid" : "1px solid #0b1277" }}
                                        onChange={(e) => { setContent(e.target.value); setContentError(false) }} value={content}
                                        aria-label="With textarea"></input>
                                    {chatId && chatId != undefined && <div className="input-group-prepend">
                                        <span className="input-group-text text_send" ><button className='custom_send' onClick={() => handleSendMessages()}>
                                            {sendloading ? <p>Sending...</p> : <AiOutlineSend className='snd_icon' />}
                                        </button></span>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='row'>
                    <div className='sticky_bton'><button className='btn custom_position' onClick={() => { setshowChatbot(!showChatbot); dispatch(setsubUserNotifClear()) }}>
                        {subUserNotify.length > 0 &&
                            <>
                                <div className='d-flex justify-content-center' style={{ zIndex: '10px' }}>
                                    <div style={{ height: "10px", width: "10px", borderRadius: "50%", backgroundColor: "red" }}></div>
                                </div>
                            </>
                        }
                        {/* <NotificationBadge 
                            count={subUserNotify.length/2}
                        effect={Effect.SCALE}
                    /> */}

                        <FiMessageSquare className='fi_message' /></button></div>
                </div>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="headback">
                    <Modal.Title className="">Video Call</Modal.Title>
                </Modal.Header>
                <Modal.Body className="headback">
                    <div className='row'>

                        <div className='col-3 '>
                            {<video ref={myVideo} src={myVideo.current} autoPlay  className="videodivforcall" />}
                        </div>
                        <div className='col-3 '>
                            {
                                callAccepted && !callEnded ? <video className="videodivforcall"  ref={userVideo} src={userVideo.current} autoPlay /> : <></>
                            }
                        </div>
                    </div>
                    {callAccepted && !callEnded ? (
                        <Button variant="danger" onClick={() => handleClose()}>
                            End Call
                        </Button>
                    ) : (
                        <button className="callbtn" onClick={() => callUser(createdby)}>
                      {callloading ? "Calling":<TbPhoneCall />} 
                        </button>
                    )}

                    {receivingCall && !callAccepted ? (
                        <div className="caller">
                            <h1 >{name} is calling...</h1>
                            <Button variant="primary" onClick={answerCall}>
                                Answer
                            </Button>
                        </div>
                    ) : null}
                </Modal.Body>
                <Modal.Footer className="headback">
                    <button className='btn btn-danger' onClick={() => { handleClose() }}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Chatbot2