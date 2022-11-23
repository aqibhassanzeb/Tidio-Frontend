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
import { GrAttachment } from 'react-icons/gr';
import { MdOutlineAddReaction } from 'react-icons/md';
import { BsCameraVideoOffFill, BsCameraVideoFill, BsFillMicMuteFill, BsFillMicFill } from 'react-icons/bs'
import Picker from 'emoji-picker-react';
var ENDPOINT = process.env.REACT_APP_SOCKET_LINK
var socket = io()
var chatbotControl
const Chatbot2 = () => {
    const [play] = useSound(boopSfx);
    const [showEmoji, setshowEmoji] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState("");
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
    const [sendloading, setSendloading] = useState(false);
    const [issueResolved, setIssueResolved] = useState(false);
    const [askIssueVisbile, setAskIssueVisible] = useState(false);
    const [notficationControl, setNotficationControl] = useState(null)
    const [myFile, setFileAttachment] = useState('')
    const [showFile, setShowFile] = useState('')

    const [abc, setAbc] = useState(false)
    const [abcNo, setAbcNo] = useState(0)

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
    const [videoMuted, setVideoMuted] = useState(true)
    const [audioMuted, setAudioMuted] = useState(true)
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
 
    // file onchange 
    const handleChangefile=(e)=>{
        setFileAttachment(e.target.files[0])
        const objectUrl = URL.createObjectURL(e.target.files[0])
        setShowFile(objectUrl)
    }
    
    const handleCanclePic=()=>{
        setFileAttachment("")
        setShowFile("")
    }

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
        socket.on("end", () => {
            setCallEnded(true)
            connectionRef.current && connectionRef.current.destroy()
            window.location.reload();
        })

    }, [])
    useEffect(() => {
        let result=abcNo+1
        setAbcNo(result)
        abcNo > 0 && resetTimeOut();
        console.log("abc ",abcNo)
    }, [abc,showChatbot])
    

    const resetTimeOut = () => {
        
        setTimeout(() =>{
             setAskIssueVisible(true)
            console.log("clicked ")
            },5000 )

    
    }

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
        if (!content && !myFile) {
            return setContentError(true)
        }
        // const content = newmessage
        // socket.emit("stop typing", selectedUser._id)
        // const chatId = selectedUser._id
        // const payload = { content, chatId, senderId: loginUser._id }
        const formdata=new FormData()
        formdata.append("myFile",myFile)
        formdata.append("content",content)
        formdata.append("chatId",chatId)
        formdata.append("senderId",subUserData._id)
        formdata.append("sender","subUser")
        const paylaod = { chatId, senderId: subUserData._id, sender: "subUser", content }
        setSendloading(true)
        sendMessage2(formdata).then(result => {
            const messagedata = result.data
            setContent("")
            setFileAttachment("")
            setShowFile("")
            setData([...data, messagedata])
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
                name: subUserData.email
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
            socket.emit("answerCall", { signal: data, to: createdby })
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
        socket.emit("endCall", { to: createdby });
        window.location.reload();
        setCallEnded(true)
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
        connectionRef.current && connectionRef.current.destroy()
    }

    const muteMic = () => {
        stream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
        setAudioMuted(!audioMuted)
    }

    const muteCam = () => {
        stream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
        setVideoMuted(!videoMuted)
    }

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log("your emoji is ", emojiObject.target.src);
      };

    return (
        <>
            {showChatbot ?
                <div className='container-fluid' style={{ position: "absolute", top: "300px" }}>
                    <div className='row mt-3'>
                        <div className='col-sm-3 offset-9 '>
                            <div className='col-sm-12  chatbot_header'>
                                <div className='pt-2 chatbottexthead text-light'>Chatbot</div>
                                {chatId && chatId != undefined && <div className='pt-2 chatbottexthead2 text-light' style={{ cursor: "pointer" }} onClick={() => { handleCall() }}><IoMdCall /></div>}
                                <div className='clsoeicon' onClick={() => { setshowChatbot(false) }} ><RiArrowDropDownLine /></div>
                            </div>


                            {chatId && chatId != undefined ?
                                <div className=' chatbotmessagediv' style={{ height: "350px" }}>
                                    {
                                        data && data.map((elm) => {
                                            var setDate = new Date(elm.createdAt)
                                            return (
                                                <>
                                                    {elm.sender != "subUser" ?
                                                     elm.myFile ?
                                                     <img src={`${process.env.REACT_APP_API_URL_IMG}${elm.myFile}`} style={{width:"100px",height:"100px"}} />
                                                     :
                                                        <div className='col-sm-12 p-2 ' key={elm?._id}>
                                                            <div className='d-flex'>
                                                                <div className='col-sm-1'>
                                                                    <img src={Profilepic} className="img img-fluid img_profile" />
                                                                </div>
                                                                <div className='col-sm-11 border border-top-0 p-2 custom_rebot_chat space_box'>
                                                                    <p className="mesegtetxher">{elm?.content}</p>
                                                                    <time style={{ fontSize: "10px" }} className=''>{setDate ? setDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "N/A"}</time>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        elm.myFile ?
                                                        <img src={`${process.env.REACT_APP_API_URL_IMG}${elm.myFile}`}  style={{width:"100px",height:"100px"}} />
                                                        :
                                                        <div className='col-sm-12 '>
                                                            <div className='d-flex custom_rtl'>
                                                                <div className='col-sm-1'>
                                                                    <img src={Profilepic} className="img img-fluid img_profile" />
                                                                </div>
                                                                <div className='col-sm-11 border border-top-0 p-2 custom_rebot_chat space_box_user '>
                                                            
                                                                    <p className="mesegtetxher">{elm?.content}</p>
                                                                    <time style={{ fontSize: "10px" }} className=''>{setDate ? setDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "N/A"}</time>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    { askIssueVisbile &&
                                    <>
                                     <div className='col-sm-12 '>
                                            <div className='d-flex custom_rtl'>
                                                <div className='col-sm-11 border border-top-0 p-2 custom_rebot_chat space_box_user '>
                                                    {issueResolved ?
                                                    <p className="mesegtetxher">{"Thanks"}</p>
                                                    :
                                                    <p className="mesegtetxher">{"Is your issue resolved ?"}</p>  
                                                    }
                                                    {!issueResolved &&
                                                      <>
                                                    <button onClick={()=>{setAbc(!abc);setAskIssueVisible(false)}}>No</button>
                                                    <button onClick={()=>{clearTimeout();setIssueResolved(true)}}>Yes</button>
                                                      </>
                                                    }
                                                        </div>
                                            </div>
                                        </div>
                                        </>
                                        }
                                </ div>
                                :
                                <>
                                    <p>Please Enter Email</p>
                                    <input style={{ border: Error ? "1px red solid" : "1px gray solid" }} type="text" className='form-input inputemailchatbot'
                                        placeholder='Enter Your email here...'
                                        onChange={(e) => { setEmailInp(e.target.value); setError(false) }} value={emailInp} />
                                    <button className='btn btn-primary' onClick={() => handleCreateChat()}>submit</button>
                                </>
                            }
                            <div className='col-sm-12 border'>
                                <div className="input-group">
                                  { myFile ? <><button className='btn btn-success' onClick={()=>handleCanclePic()}>X</button> <img src={showFile} style={{width:"200px",height:"200px"}} /> </> :  <input type="text" className={`form-control ${contentError ? "borderred " : " messagechatbot"}`}
                                        onChange={(e) => { setContent(e.target.value); setContentError(false) }} value={content}
                                        ></input>}
                                         {showEmoji ?
        <Picker onEmojiClick={onEmojiClick} />
        : null
      }
      <div className=' d-flex align-items-center attacth'>
      <GrAttachment className='' />
      <input type="file" className='filetype' style={{cursor:"pointer"}} onChange={(e)=>handleChangefile(e)} />
  </div>
                                        <div className='d-flex align-items-center'><MdOutlineAddReaction className='emojiicon'  onClick={() => setshowEmoji(!showEmoji)}/></div>
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
                    <div className='row videofulldiv'>

                        <div className='col-12 videodivforcall'>
                            {<video ref={myVideo} src={myVideo.current} autoPlay className="videodivforcall" />}
                        </div>
                        <div className='col-12 videodivforcall'>
                            {
                                callAccepted && !callEnded ? <video className="videodivforcall" ref={userVideo} src={userVideo.current} autoPlay /> : <></>
                            }
                        </div>
                    </div>
                    <div className="d-flex">
                        {callAccepted && !callEnded ? (
                            <>
                                <Button variant="danger" onClick={() => handleClose()}>
                                    End Call
                                </Button>

                            </>
                        ) : (
                            !receivingCall &&
                            <button className="callbtn" onClick={() => callUser(createdby)}>
                                {callloading ? "Calling" : <TbPhoneCall />}
                            </button>
                        )}

                        {receivingCall && !callAccepted ? (
                            <div className="caller">
                                <h3 >{name} is calling...</h3>
                                <div className="d-flex"> 
                                <div className="answerbtn" onClick={answerCall}>
                                    Answer
                                </div>
                                
                                </div>
                            </div>
                        ) : null}
                      
                    </div>
                    <div className='d-flex'>
                    {videoMuted ? (
                        <div className="mutedbtn" onClick={() => muteCam()}>
                            <BsCameraVideoFill />

                        </div>

                    ) : (
                        <div className="mutedbtn" onClick={() => muteCam()}>

                            <BsCameraVideoOffFill />
                        </div>

                    )}
                    {audioMuted ? (
                        <div className="mutedbtn" onClick={() => muteMic()}>
                            <BsFillMicFill />
                        </div>

                    ) : (
                        <div className="mutedbtn" onClick={() => muteMic()}>
                            <BsFillMicMuteFill />
                        </div>

                    )}
                    </div>
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