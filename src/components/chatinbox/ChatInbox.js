import React, { useEffect, useState } from 'react'
import "../chatinbox/ChatInbox.css"
import melissa from '../../images/melissa-j.webp'
import backimagess from '../../images/mesagesicon.png'
import { fetchMessages, sendMessage, sendMessage2 } from '../../apis/Chat-api'
import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'
import { setNotification } from '../../redux/features/ChatSlice'
import { useRef } from 'react'
import Peer from "simple-peer"
import { Button, Modal } from 'react-bootstrap'
import CopyToClipboard from 'react-copy-to-clipboard'
import { IoMdCall } from 'react-icons/io'
import { TbPhoneCall } from 'react-icons/tb'
import EmojiPicker from 'emoji-picker-react'
import { BsCameraVideoOffFill, BsCameraVideoFill, BsFillMicMuteFill, BsFillMicFill, BsWifi, BsDot } from 'react-icons/bs'
import { AiFillCaretRight } from 'react-icons/ai'
import { GrAttachment } from 'react-icons/gr'
import { BiWifi, BiWifi0 } from 'react-icons/bi'
import boopSfx2 from "../../images/phoneringtone.mp3"
import useSound from 'use-sound'
import ImagModal from './../modals/ImageModal/ImagModal';


var ENDPOINT = process.env.REACT_APP_SOCKET_LINK
var socket = io()
var selectedChatCompare


function ChatInbox({ senderUser, showProfInfo, setShowProfInfo, setHide }) {
    const [messages, setMessages] = useState([])
    const [newmessage, setNewmessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [socketConnected, setSocketConnected] = useState(false)
    const [typing, setTyping] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [notficationControl, setNotficationControl] = useState(null)
    const [myFile, setFileAttachment] = useState('')
    const [showFile, setShowFile] = useState('')

    const [play2,{ stop, isPlaying }] = useSound(boopSfx2);
    const selectedUser = useSelector(state => state.SelectedUser.selectedUser)
    const loginUser = useSelector(state => state.User.activeUser)
    const notification = useSelector(state => state.SelectedUser.notification)
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
    const [forceUpdate, setForceUpdate] = useState(false)
    const [callloading, setCallloading] = useState(false)
    const [videoMuted, setVideoMuted] = useState(true)
    const [audioMuted, setAudioMuted] = useState(true)
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()
    // video modal 
    const [show, setShow] = useState(false);
    const [imgd, setImgd] = useState(false);
    const [sendi, setSendi] = useState();

    const handleClose = () => {
        leaveCall()
        setShow(false)
    }
    const handleShow = () => setShow(true);

    // file onchange 
    const handleChangefile = (e) => {
        setFileAttachment(e.target.files[0])
        const objectUrl = URL.createObjectURL(e.target.files[0])
        setShowFile(objectUrl)
    }

    const handleCanclePic = () => {
        setFileAttachment("")
        setShowFile("")
    }

    const sendMessageHandle = (e) => {
        const content = newmessage
        // socket.emit("stop typing", selectedUser._id)
        const chatId = selectedUser._id
        // const payload = { content, chatId, senderId: loginUser._id }
        const formdata = new FormData()
        formdata.append("myFile", myFile)
        formdata.append("content", content)
        formdata.append("chatId", chatId)
        formdata.append("senderId", loginUser._id)
        setLoading(true)
        sendMessage2(formdata).then((res) => {
            const data = res.data
            setMessages([...messages, data])
            setFileAttachment("")
            setShowFile("")
            setNewmessage("")
            setLoading(false)
            socket.emit("new message", data && data)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        })
    }

    // console.log("selected chat id",selectedUser)
    const fetchMessageshandle = () => {
        const chatId = selectedUser._id
        fetchMessages(chatId).then((res) => {
            setMessages(res.data)
            socket.emit("join chat", chatId && chatId)
        }).catch(err => { console.log(err); })
    }
    useEffect(() => {
        loginUser && setName(loginUser.name)
    }, [loginUser])

    useEffect(() => {
        socket = io(ENDPOINT)
        socket.emit("setup", loginUser !== null && loginUser);
        socket.on("connected", () => setSocketConnected(true))
        // socket.on("typing", () => setIsTyping(true))
        // socket.on("stop typing", () => setIsTyping(false))

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
    }, [loginUser])

    const handleCall = () => {
        setShow(true);
        navigator.mediaDevices.getUserMedia({ video: true, audio:{
            echoCancellation: true,
            echoCancellationType: { ideal: " system " },
            channelCount: 1,
            noiseSuppression: false,
            autoGainControl: true,
            googEchoCancellation: true,
            googAutoGainControl: true,
            googExperimentalAutoGainControl: true,
            googNoiseSuppression: true,
            googExperimentalNoiseSuppression: true,
            googHighpassFilter: true,
            googTypingNoiseDetection: true,
            googBeamforming: false,
            googArrayGeometry: false,
            googAudioMirroring: true,
            googNoiseReduction: true,
            mozNoiseSuppression: true,
            mozAutoGainControl: false,
            latency: 0.01,} }).then((stream) => {
            setStream(stream)
            // let cur = myVideo.current;
            // myVideo.current?.srcObject = stream;
            myVideo.current.srcObject = stream;
            // myVideo.current['srcObject'] = stream;
            // myVideo.current = { ...myVideo.current, srcObject: stream };
            // myVideo = { ...myVideo, current: {...myVideo.current, } };
            setForceUpdate(!forceUpdate)

        })

    }




    // const handleChange = () => {
    //     socket.emit("typing", selectedUser && selectedUser._id)
    //     if (!socketConnected) return;
    //     if (!typing) {
    //         setTyping(true)
    //     }
    //     let lastTypingTime = new Date().getTime();
    //     var timerlength = 3000;
    //     setTimeout(() => {
    //         var timeNow = new Date().getTime();
    //         var timeDiff = timeNow - lastTypingTime
    //         if (timeDiff >= timerlength && typing) {
    //             socket.emit("stop typing", selectedUser && selectedUser._id)
    //             setTyping(false)
    //         }
    //     }, timerlength);
    // }


    useEffect(() => {
        selectedUser != null && fetchMessageshandle();
        selectedChatCompare = selectedUser ? selectedUser : null
    }, [selectedUser])

    const handlenoficationmessage = () => {
        if (notficationControl != null) {
            dispatch(setNotification(notficationControl))
        }
    }


    useEffect(() => {
        handlenoficationmessage()
    }, [notficationControl])


    useEffect(() => {
        socket.on("messagerecieved", (newMessageRecieved) => {

            if (!selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.chat._id) {
                if (!notification.includes(newMessageRecieved)) {
                    setNotficationControl(newMessageRecieved)
                }
            } else {
                setMessages([...messages, newMessageRecieved])
            }
        })
    })

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
            socket.emit("answerCall", { signal: data, to: selectedUser ? selectedUser.subUser._id : caller })
        })
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream

        })
        setForceUpdate(!forceUpdate)

        peer.signal(callerSignal)

        connectionRef.current = peer
    }

    const leaveCall = () => {
        socket.emit("endCall", { to: caller ? caller : selectedUser.subUser._id });
        window.location.reload();
        setCallAccepted(false)
        setCallEnded(true)
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
        connectionRef.current && connectionRef.current.destroy()
        setForceUpdate(!forceUpdate)
    }

    const muteMic = () => {
        stream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
        setAudioMuted(!audioMuted)
    }

    const muteCam = () => {
        stream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
        setVideoMuted(!videoMuted)
    }
    const Ringing=()=>{
        if( receivingCall && !callAccepted ){
            play2()   
        }else{
         stop()
        }
     }
    
     useEffect(() => {
     Ringing()
     }, [receivingCall,callAccepted])
const handleImag = (elm) => {
    setImgd(true)
    setSendi(`${process.env.REACT_APP_API_URL_IMG}${elm.myFile}`)
}
    return (
        <>
            {/* <EmojiPicker/> */}
            <div className='container-fluid custom_fluid'>
                <div className='row chatib'>
                    <div className='col-sm-12 header_chat'>
                        <div className='display_header'>
                            <div className='conver2' onClick={() => setHide(true)}><AiFillCaretRight /></div>
                            {selectedUser &&
                                <img className='chat_icon' src={senderUser ? senderUser.imageUrl : melissa} />
                            }
                            <p className='online'>{selectedUser && selectedUser.subUser?.email.split('@')[0]}</p>
                        </div>
                        <div className='d-flex'>
                            <div>
                                {selectedUser && <div className='callicon' onClick={() => { handleCall() }}><IoMdCall /></div>}
                            </div>
                            {/* <div className={showProfInfo ? 'openprofinfo' : 'openprofinfo2'} onClick={() => setShowProfInfo(!showProfInfo)}>{
                                showProfInfo ? "Close" : "Open profile detail "
                            }</div> */}
                        </div>
                    </div>
                </div>
                {selectedUser ? <div className={`${messages.length < 6 ? "chat-area2" : "chat-area"} row `} >
                    {
                        messages && messages.map((elm, index) => {
                            var setDate = new Date(elm.createdAt)

                            return (

                                elm.sender == "subUser" ?
                                    elm?.offlineMsg == false ?
                                        elm.myFile ?
                                            <>
                                                <div>
                                                    <img src={`${process.env.REACT_APP_API_URL_IMG}${elm.myFile}`} style={{ width: "100px", height: "100px" }} onClick={() => handleImag(elm)}/>
                                                    <time className='chat_time'>{setDate ? setDate.toLocaleTimeString('en-US') : "N/A"}</time>
                                                </div>
                                            </>
                                            :
                                            <div className={`col-sm-12  bcakhover }`}>

                                                <div className='icondivchat'>
                                                    <p>{selectedUser.subUser?.email.charAt(0)}</p>
                                                </div>
                                                <div>
                                                    <div className='chat_row'>
                                                        <p className='p-0 m-0 boldemail'>{selectedUser.subUser?.email}</p>
                                                        <time className='chat_time'>{setDate ? setDate.toLocaleTimeString('en-US') : "N/A"}</time>

                                                    </div>
                                                    <div>
                                                        <div className='chat_text '>
                                                            <p className='mesagecontext'>{elm.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        :

                                        <div className={`col-sm-12  bcakhover }`}>
                                            
                                            <div className='icondivchat'>
                                                <p>{selectedUser.subUser?.email.charAt(0)}</p>
                                            </div>
                                            <div>
                                                <div className='chat_row'>
                                                    <p className='p-0 m-0 boldemail'>{selectedUser.subUser?.email}</p>
                                                    <time className='chat_time'>{setDate ? setDate.toLocaleTimeString('en-US') : "N/A"}</time>

                                                </div>
                                                <div>
                                                    <div className='chat_text '>
                                                        <p className='mesagecontext'>{elm.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="maindottttedicon">
                                            <p className="dottttedicon ">Offline Mode 😴</p>
                                        </div>
                                        <div className="smalldottttedicon">
                                            <p className="dottttedicon2 ">Offline Mode 😴</p>
                                        </div>
                                        </div>
                                    :
                                    elm.myFile ?
                                        <>
                                            <div>
                                                <img src={`${process.env.REACT_APP_API_URL_IMG}${elm.myFile}`} className="imageuserfullsrc" onClick={() => handleImag(elm)} />
                                                <time className='chat_time'>{setDate ? setDate.toLocaleTimeString('en-US') : "N/A"}</time>
                                            </div>
                                        </>
                                        :
                                        <div className='col-sm-12 bcakhover2'>

                                            <div className='d-flex justify-content-start '>

                                                <div className='icondivchat'>
                                                    <p>Y</p>
                                                </div>
                                                <div>
                                                    <div className="d-flex">
                                                        <p className='p-0 m-0 boldemail'>You</p>
                                                        <div className='chat_end_text'>
                                                            <time className='chat_end_time  '>{setDate ? setDate.toLocaleTimeString('en-US') : "N/A"}</time>

                                                        </div>
                                                    </div>
                                                    <div className='chat_end_row '>
                                                        <p className='mesagecontext p-0 m-0'>{elm.content}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            )
                        })
                    }
                </div>
                    :
                    <>
                        <div className='d-flex'>
                            <div className='backgorundmessdage'>
                                <div className='sendandreceice'>Send and Receive Messages Here...</div>
                            </div>
                            <div className='backgorundmessdage2'>
                                <img src={backimagess} className='backimagesnoimg' alt='' />
                            </div>

                        </div>
                    </>
                }
                {selectedUser &&

                    <div className='row  '>
                        <div className='replymaindic '>
                            {/* <input type='file' /> */}
                            {selectedUser && myFile ?
                                <>
                                    <div className="imagetopcrossdiv">
                                        <img src={showFile} />
                                        <button className='btn btn-success btncrostop' onClick={() => handleCanclePic()}>X</button>
                                    </div>
                                </>
                                :
                                <div className=' text_area_padding'>
                                    <input type="text" placeholder='Type your message here...' className=' custom_text_area' value={newmessage} onChange={(e) => { setNewmessage(e.target.value) }} onKeyDown={(e) => {if(e.key === "Enter"){ sendMessageHandle()}}}>
                                    </input>
                                </div>}

                                
                            {/* {isTyping ?<p>Typing...</p>:""} */}
                            <div className='replyandatach'>
                                {selectedUser &&
                                    <>
                                        <div className=' d-flex align-items-center attacth'>
                                            <GrAttachment className='' />
                                            <input type="file" className='filetype' onChange={(e) => handleChangefile(e)} />
                                        </div>
                                    </>
                                }


                                <div className='replybtn '>
                                    {loading ? <p>Sending..</p> : selectedUser && <button className='btn btn-primary' onClick={() => { sendMessageHandle() }} >Reply</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <Modal show={show} onHide={handleClose} className="modalcall">
                <Modal.Header closeButton className="headback">
                    <Modal.Title>Video Call</Modal.Title>
                </Modal.Header>
                <Modal.Body className="headback">
                    <div className='row  videofulldiv'>

                        <div className='col-12 videodivforcall'>
                            {<video ref={myVideo} src={myVideo.current} autoPlay className="videocalldiv" />}
                        </div>
                        <div className='col-12 videodivforcall'>
                            {
                                callAccepted && !callEnded ? <video ref={userVideo} src={userVideo.current} autoPlay className="videocalldiv" /> : <></>
                            }
                        </div>
                    </div>
                    <div className="">
                        {callAccepted && !callEnded ? (
                            <Button variant="danger" onClick={() => handleClose()}>
                                End Call
                            </Button>
                        ) : (
                            !receivingCall &&
                            <button className="callbtn" onClick={() => callUser(selectedUser.subUser._id)}>
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

            </Modal>
                            <ImagModal
                            imgd={imgd}
                            setImgd={setImgd}
                            sendi={sendi}
                            />
        </>
    )
}

export default ChatInbox;