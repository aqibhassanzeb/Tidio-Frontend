import React from 'react'
import { useState } from 'react';
import "./ChatbotCreate.css"
import Profilepic from '../../../../images/profile.jpg'
import { AiOutlineSend } from 'react-icons/ai';
import { FiMessageSquare, FiArrowDownRight } from 'react-icons/fi';
import { chatbotSettingfetch, createChat, fetchMessages2, sendMessage2 } from '../../../../apis/Chat-api';
import { useEffect } from 'react';
import io from 'socket.io-client'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setsubUserNotif, setsubUserNotifClear } from '../../../../redux/features/ChatSlice';
import NotificationBadge from 'react-notification-badge/lib/components/NotificationBadge';
import { Effect } from 'react-notification-badge';
import useSound from 'use-sound';
import boopSfx from "../../../../images/message.mp3"
import boopSfx2 from "../../../../images/phoneringtone.mp3"
import { RiArrowDropDownLine } from 'react-icons/ri';
import Peer from "simple-peer"
import { Button, Modal } from 'react-bootstrap'
import CopyToClipboard from 'react-copy-to-clipboard'
import { IoMdCall } from 'react-icons/io';
import { TbPhoneCall } from 'react-icons/tb';
import { GrAttachment } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';
import { MdOutlineAddReaction } from 'react-icons/md';
import { BsCameraVideoOffFill, BsCameraVideoFill, BsFillMicMuteFill, BsFillMicFill, BsThreeDotsVertical, BsDot } from 'react-icons/bs'
import Picker from 'emoji-picker-react';
import WidgetOffline from '../widget/WidgetOffline';
import ImagModal from '../../../modals/ImageModal/ImagModal';
var ENDPOINT = process.env.REACT_APP_SOCKET_LINK
var socket = io()
var chatbotControl
const Chatbot2 = () => {
    const [play] = useSound(boopSfx);
    const [play2, { stop, isPlaying }] = useSound(boopSfx2);
    const [showEmoji, setshowEmoji] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState("");
    const [showChatbot, setshowChatbot] = useState(false);
    const [forceUpdate, setForceUpdate] = useState(false);
    const [Error, setError] = useState(false)
    const [contentError, setContentError] = useState(false)
    const [emailInp, setEmailInp] = useState("")
    const [nameInp, setNameInp] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [chatId, setChatId] = useState(localStorage.getItem("tidiochat"));
    const [tidiochatUser, setTidiochatUser] = useState(localStorage.getItem("tidiochatuser"))
    const [subUserData2, setSubUserData2] = useState("")
    const [content, setContent] = useState("")
    const [data, setData] = useState([])
    const [fetchemail, setFetchemail] = useState(false)
    const fetchControl = useRef(false);
    const [socketConnected, setSocketConnected] = useState(false)
    const [chatbotTiming, setChatbotTiming] = useState([])
    const [today, setToday] = useState("")
    const [OnlineTime, setOnlineTime] = useState("")
    const [offlineMsg, setOfflineMsg] = useState(false)
    const [sendMsg, setSendMsg] = useState(false)

    // const [subUserData, setSubUserData] = useState("")
    const subUserData = subUserData2 ? subUserData2 : JSON.parse(tidiochatUser)
    const [sendloading, setSendloading] = useState(false);
    const [notficationControl, setNotficationControl] = useState(null)
    const [myFile, setFileAttachment] = useState('')
    const [showFile, setShowFile] = useState('')
    const [getStarted, setgetStarted] = useState({});
    const [firstChatApp, setfirstChatApp] = useState(true)
    const [handlefetchChatCreate, setHandlefetchChatCreate] = useState(false)


    // resolve message control state 

    const [issueResolved, setIssueResolved] = useState(false);
    const [askIssueVisbile, setAskIssueVisible] = useState(false);
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
    const [imgd, setImgd] = useState(false);
    const [sendi, setSendi] = useState();
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
    const handleChangefile = (e) => {
        setFileAttachment(e.target.files[0])
        const objectUrl = URL.createObjectURL(e.target.files[0])
        setShowFile(objectUrl)
    }

    const handleCanclePic = () => {
        setFileAttachment("")
        setShowFile("")
    }

    const subUserNotify = useSelector(state => state.SelectedUser.subUsernotif)

    //    static data for temp

    var createdby = "634543ff090124ecb0c39a6b"
    var email = "alikhan@gmail.com"
    var _id = chatId ? chatId : localStorage.getItem("tidiochat")
    var currentdate = new Date();
    var currentTime = currentdate.toLocaleString('en-GB').slice(12)

    // pre chat message time 
    var setDateForPremessages = new Date(subUserData.createdAt)

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

    }, [subUserData2])
    const Ringing = () => {
        if (receivingCall && !callAccepted) {
            play2()
        } else {
            stop()
        }
    }

    useEffect(() => {
        Ringing()
    }, [receivingCall, callAccepted])
    // useEffect(() => {
    //     console.log("useEffect render ")
    //     let result = abcNo + 1
    //     setAbcNo(result)
    //     // console.log("abc No ",abcNo)
    //    if(abcNo > 0){
    //     console.log("abc No ",abcNo)
    //        resetTimeOut();
    //    } 
    //     console.log("abc ", abcNo)
    // }, [abc, showChatbot])

    var toExactMinute = 60000 - (new Date().getTime() % 60000);

    const resetTimeOut = () => {
        setTimeout(() => {
            setAskIssueVisible(true)
        }, toExactMinute)
    }


    // const updateState= resetTimeOut()

    // 6360ffa27c91f7b5f10b7a3c
    // 6368a80a8841f2a317a1b37a

    const handlefetchChat = () => {
        if (chatId && chatId != undefined) {
            const paylaod = { createdby, _id: chatId }
            createChat(paylaod).then(result => {
                localStorage.setItem("tidiochat", result?.data.FullChat._id)
                localStorage.setItem("tidiochatuser", JSON.stringify(result.data?.FullChat.subUser))
                setSubUserData2(result.data?.FullChat.subUser)
            }).catch(err => {
                console.log(err);
            })
        }
    }

    const handleCreateChat = () => {
        if (!emailInp || !nameInp || !phoneNo) {
            return setError(true)
        }
        const paylaod = { createdby, email: emailInp, name: nameInp, phoneNo }
        createChat(paylaod).then(result => {
            localStorage.setItem("tidiochat", result.data.FullChat._id);
            setChatId(result.data.FullChat._id)
            setHandlefetchChatCreate(!handlefetchChatCreate)
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
        const formdata = new FormData()
        formdata.append("myFile", myFile)
        formdata.append("content", content)
        formdata.append("chatId", chatId)
        formdata.append("senderId", subUserData._id)
        formdata.append("sender", "subUser")
        formdata.append("offlineMsg", offlineMsg)
        // const paylaod = { chatId, senderId: subUserData._id, sender: "subUser", content }
        setSendloading(true)
        sendMessage2(formdata).then(result => {
            const messagedata = result.data
            setSendMsg(true)
            setData([...data, messagedata])
            setFileAttachment("")
            setShowFile("")
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
        // if (fetchControl.current) return
        // fetchControl.current = true
        handlefetchChat()
        chatId && handleFetchMessages()
    }, [handlefetchChatCreate])


    const handlenoficationmessage = () => {
        if (notficationControl != null) {
            dispatch(setsubUserNotif(notficationControl))
            play()

        }
    }
    // auto scroller 
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    } 
    useEffect(scrollToBottom, [data]);

    const handleCall = () => {
        setShow(true);
        navigator.mediaDevices.getUserMedia({
            video: true, audio: {
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
                latency: 0.01,
            }
        }).then((stream) => {
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

    // chatbot id updating
    // useEffect(() => {
    //     // setChatId(localStorage.getItem("tidiochat"))
    //     // setTidiochatUser(localStorage.getItem("tidiochatuser"))
    //     setSubUserData(JSON.parse(localStorage.getItem("tidiochatuser")))
    //     console.log("use Effect function :")
    // }, [handlefetchChatCreate])


    // chatbot setting data fetch 

    useEffect(() => {
        chatbotSettingfetch(createdby).then((res) => {
            setgetStarted(res?.data[0])
            setChatbotTiming(res?.data[0]?.timeonline)
        }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        switch (new Date().getDay()) {
            case 0:
                setToday("Sunday")
                break;
            case 1:
                setToday("Monday")
                break;
            case 2:
                setToday("Tuesday")
                break;
            case 3:
                setToday("Wednesday")
                break;
            case 4:
                setToday("Thursday")
                break;
            case 5:
                setToday("Friday")
                break;
            case 6:
                setToday("Saturday")
            default:
                setToday("")
        }
    }, [])
    useEffect(() => {
        let chatbotTiming2 = getStarted && chatbotTiming[0]
        let gettingDay = chatbotTiming2 && Object.entries(chatbotTiming2).map((item) => {
            let res1 = item[0].charAt(0) + item[0].charAt(1)
            let res2 = today.charAt(0) + today.charAt(1)
            if (res1 === res2) {
                return item[1]
            }
        })
        let gettingDay2 = gettingDay && gettingDay.filter(item => {
            return item !== undefined
        })

        gettingDay && setOnlineTime(gettingDay2)
    }, [getStarted])

    const handleImag = (elm) => {
        setImgd(true)
        setSendi(`${process.env.REACT_APP_API_URL_IMG}${elm.myFile}`)
    }
    
    
    // console.log("get Started :",getStarted)
    return (
        <>
            {showChatbot ?



                <div className='container-fluid' style={{ position: "absolute", bottom: "80px" }}>
                    <div className='row mt-3'>
                        <div className='col-sm-3 offset-9 '>

                            <div className='col-sm-12  chatbot_header'>
                                <div className='pt-2 chatbottexthead text-light'>Chatbot</div>
                                {chatId && chatId != undefined && OnlineTime[0] <= currentTime && OnlineTime[1] >= currentTime &&
                                    <div className='pt-2 chatbottexthead2 text-light' style={{ cursor: "pointer" }} onClick={() => { handleCall() }}><IoMdCall /></div>}
                                <div className='clsoeicon' onClick={() => { setshowChatbot(false) }} ><RiArrowDropDownLine /></div>
                            </div>


                            {chatId && chatId != undefined ?
                                OnlineTime[0] <= currentTime && OnlineTime[1] >= currentTime ?
                                    <div className=' chatbotmessagediv' style={{ height: "350px" }}>
                                        
                                        {/* pre chat messages  */}
                                    
                                          <div className='col-sm-12 p-2 ' >
                                            <div className='d-flex'>
                                                <div className='col-sm-1'>
                                                    <img src={Profilepic} className="img img-fluid img_profile" alt="profile" />
                                                </div>
                                                <div className='col-sm-11 border border-top-0  custom_rebot_chat space_box'>
                                                    <p className="mesegtetxher">{getStarted?.status}</p>
                                                    <time style={{ fontSize: "10px" }} className='p-0 m-0'>{setDateForPremessages ?
                                                setDateForPremessages.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "N/A"}</time>
                                                </div>
                                            </div>
                                        </div>

                                          <div className='col-sm-12 p-2 ' >
                                            <div className='d-flex'>
                                                <div className='col-sm-1'>
                                                    <img src={Profilepic} className="img img-fluid img_profile" alt="profile" />
                                                </div>
                                                <div className='col-sm-11 border border-top-0  custom_rebot_chat space_box'>
                                                    <p className="mesegtetxher">{getStarted?.message}</p>
                                                    <time style={{ fontSize: "10px" }} className='p-0 m-0'>{setDateForPremessages ?
                                                setDateForPremessages.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "N/A"}    
                                                </time>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            data && data.map((elm) => {
                                                var setDate = new Date(elm.createdAt)
                                                return (
                                                    <div key={elm._id}>
                                                        {elm.sender != "subUser" ?
                                                            elm.myFile ?
                                                                <div className='px-2'>
                                                                    <img src={`${process.env.REACT_APP_API_URL_IMG}${elm.myFile}`} style={{ width: "100px", height: "100px", cursor: "pointer" }} onClick={() => handleImag(elm)} />
                                                                </div>
                                                                :
                                                                <div className='col-sm-12 p-2 ' key={elm?._id}>
                                                                    <div className='d-flex'>
                                                                        <div className='col-sm-1'>
                                                                            <img src={Profilepic} className="img img-fluid img_profile" alt="profile" />
                                                                        </div>
                                                                        <div className='col-sm-11 border border-top-0  custom_rebot_chat space_box'>
                                                                            <p className="mesegtetxher">{elm?.content}</p>
                                                                            <time style={{ fontSize: "10px" }} className='p-0 m-0'>{setDate ? setDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "N/A"}</time>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            :

                                                            elm?.offlineMsg == false ? elm.myFile ?
                                                                <>
                                                                    <div className="px-2">
                                                                        <div>
                                                                            <img src={`${process.env.REACT_APP_API_URL_IMG}${elm.myFile}`} style={{ width: "100px", height: "100px", cursor: "pointer" }} onClick={() => handleImag(elm)} />
                                                                        </div>
                                                                        <div>
                                                                            <time style={{ fontSize: "10px" }} className='p-0 m-0'>{setDate ? setDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "N/A"}</time>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                                :
                                                                <div className='col-sm-12 '>
                                                                    <div className='d-flex custom_rtl'>
                                                                        <div className='col-sm-1'>
                                                                            <img src={Profilepic} className="img img-fluid img_profile" alt="profile" />
                                                                        </div>
                                                                        <div className='col-sm-11 border border-top-0 p-2 custom_rebot_chat space_box_user '>

                                                                            <p className="mesegtetxher">{elm?.content}</p>
                                                                            <time style={{ fontSize: "10px" }} className=''>{setDate ? setDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "N/A"}</time>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                : <></>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                        {askIssueVisbile && data.length > 1 &&
                                            <>
                                                <div className='col-sm-12 '>
                                                    <div className='d-flex custom_rtl'>
                                                        <div className='col-sm-11 border border-top-0 p-2 custom_rebot_chat space_box_user '>
                                                            {issueResolved ?
                                                                <p className="mesegtetxher">{"Thanks"}</p>
                                                                :
                                                                <p className="mesegtetxher">{"? Is your issue resolved "}</p>
                                                            }
                                                            {!issueResolved &&
                                                                <>
                                                                    <div className='d-flex'>
                                                                        <div className='m-1' style={{ cursor: "pointer", color: "blue" }} onClick={() => { resetTimeOut(); setAskIssueVisible(false) }}>No</div>
                                                                        <div className='m-1' style={{ cursor: "pointer", color: "blue" }} onClick={() => { clearTimeout(); setIssueResolved(true) }}>Yes</div>
                                                                    </div>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                            //     :
                                            //    { updateState}
                                        }
                                        <div ref={messagesEndRef} />
                                    </ div>
                                    :
                                    <div className="secondwidgeetoffline">
                                        <WidgetOffline getStarted={getStarted} setshowChatbot={setshowChatbot} chatBot={true}
                                            setContent={setContent} setOfflineMsg={setOfflineMsg} handleSendMessages={handleSendMessages}
                                            contentError={contentError} setContentError={setContentError} sendloading={sendloading} sendMsg={sendMsg}
                                            content={content}
                                        />
                                    </div>
                                :

                                firstChatApp ?
                                    <>
                                        {/* make chatbot for first appereacne  */}
                                        <div className='border'>
                                            <div className='backgroundcolorcahtbot'>
                                                <div className=' d-flex' style={{ borderBottom: "1px solid lightgray" }}>
                                                    <span className=' w-100'>
                                                        <h4 className='text-white'>Hello</h4>
                                                        <p className='text-white'>This is the text Here</p>
                                                    </span>
                                                    <span className=' d-flex align-items-center'>
                                                        <BsThreeDotsVertical className='treedoticon text-white' />
                                                        <RiArrowDropDownLine className='treedoticon text-white' />
                                                    </span>
                                                </div>
                                                <div className='d-flex  mt-1'>
                                                    <BsDot className='treedoticon2 ' />
                                                    <span className='text-white'>We reply immediately</span>
                                                </div>
                                            </div>

                                            <div className='messageareachatbot' style={{ height: "30vh" }}></div>
                                            <div className='d-flex justify-content-end '>
                                                <div className='divfornext' onClick={() => setfirstChatApp(false)}><AiOutlineSend className='treedoticon' /></div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div style={{ borderLeft: "1px solid lightgray", borderRight: "1px solid lightgray" }}>
                                            <div className="backforemailsub ">
                                                <div className="text-center text-white"><BiUser className="userbiicon" /></div>
                                                <h4 className="text-white text-center">{getStarted?.user_message}</h4>
                                                <div className=' divforcreatecahtbot'>
                                                    <div className='indiviconarow  mt-3'>
                                                        <span className=' bg-light p-1 border d-flex align-items-center'><FiArrowDownRight className='fiarrowicon' /></span>
                                                        <span><input style={{ border: Error ? "1px red solid" : "0px gray solid" }} type="text" placeholder={getStarted?.enter_name} className='inputemailchatbot  '
                                                            onChange={(e) => { setNameInp(e.target.value); setError(false) }} value={nameInp}
                                                        /></span>
                                                    </div>
                                                    <div className='indiviconarow  mt-3'>
                                                        <span className=' bg-light border p-1 d-flex align-items-center'><FiArrowDownRight className='fiarrowicon' /></span>
                                                        <span><input style={{ border: Error ? "1px red solid" : "0px gray solid" }} type="number" placeholder={getStarted?.enter_phone} className='inputemailchatbot'
                                                            onChange={(e) => { setPhoneNo(e.target.value); setError(false) }} value={phoneNo}
                                                        />
                                                        </span>
                                                    </div>
                                                    <div className='indiviconarow  mt-3'>
                                                        <span className=' bg-light border p-1 d-flex align-items-center'><FiArrowDownRight className='fiarrowicon' /></span>
                                                        <span> <input style={{ border: Error ? "1px red solid" : "0px gray solid" }} type="text" className='form-input  inputemailchatbot'
                                                            placeholder={getStarted?.enter_email}
                                                            onChange={(e) => { setEmailInp(e.target.value); setError(false) }} value={emailInp} />
                                                        </span>
                                                    </div>

                                                    <button className='subbtndata mt-3' onClick={() => handleCreateChat()}>Submit</button>
                                                </div>

                                            </div>
                                        </div>


                                    </>
                            }
                            {OnlineTime[0] <= currentTime && OnlineTime[1] >= currentTime &&
                                <div className='col-sm-12 border'>
                                    <div className="input-group">
                                        {myFile ?
                                            <>
                                                <div className="imagetopcrossdiv2">
                                                    <img src={showFile} className='' />
                                                    <button className='btn btn-success btncrostop2' onClick={() => handleCanclePic()}>X</button>
                                                </div>
                                            </>
                                            :
                                            <input type="text" className={`form-control ${contentError ? "borderred " : " messagechatbot"}`}
                                                onChange={(e) => { setContent(e.target.value); setContentError(false) }} value={content}
                                                onKeyDown={(e) => { if (e.key === "Enter") { handleSendMessages() } }}
                                            ></input>}
                                        {showEmoji ?
                                            <Picker onEmojiClick={onEmojiClick} />
                                            : null
                                        }
                                        {
                                            firstChatApp &&
                                            <>

                                                <div className=' d-flex align-items-center attacth'>

                                                    <GrAttachment className='' />
                                                    <input type="file" className='filetype' style={{ cursor: "pointer" }} onChange={(e) => handleChangefile(e)} />
                                                </div>
                                                {/* <div className='d-flex align-items-center'><MdOutlineAddReaction className='emojiicon' onClick={() => setshowEmoji(!showEmoji)} /></div> */}
                                            </>
                                        }
                                        {chatId && chatId != undefined &&
                                            <div className="input-group-prepend">
                                                <span className="input-group-text text_send" ><button className='custom_send' onClick={() => handleSendMessages()}>
                                                    {sendloading ? <p>Sending...</p> : <AiOutlineSend className='snd_icon' />}
                                                </button></span>
                                            </div>

                                        }
                                    </div>
                                </div>}
                        </div>


                    </div>
                </div>


                :
                <div className='row'>
                    <div className='sticky_bton'><button className='btn custom_position' onClick={() => { setshowChatbot(!showChatbot); resetTimeOut(); dispatch(setsubUserNotifClear()) }}>
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

                        {receivingCall && !callAccepted ?

                            (
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
            <ImagModal
                imgd={imgd}
                setImgd={setImgd}
                sendi={sendi}
            />
        </>
    )
}

export default Chatbot2