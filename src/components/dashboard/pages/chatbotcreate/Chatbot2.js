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
    const [notficationControl, setNotficationControl] = useState(null)
    const dispatch = useDispatch()

    console.log("showChatbot :", showChatbot)

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
    }, [subUserData])

    // 6360ffa27c91f7b5f10b7a3c
    // 6368a80a8841f2a317a1b37a

    const handlefetchChat = () => {
        if (_id && _id != undefined) {
            const paylaod = { createdby, _id }
            createChat(paylaod).then(result => {
                console.log("result fetch chat :", result)
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
        console.log(subUserData, "subUserData")
        const paylaod = { chatId, senderId: subUserData._id, sender: "subUser", content }
        sendMessage2(paylaod).then(result => {
            const messagedata = result.data
            setData([...data, messagedata])
            setContent("")
            socket.emit("new message", result?.data)
        }).catch(err => console.log(err))
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
            play()

        }
    }

    console.log("notify subuser :", subUserNotify)

    useEffect(() => {
        handlenoficationmessage()
    }, [notficationControl])

    useEffect(() => {
        socket.on("messagerecieved", (newMessageRecieved) => {
            console.log("show chat bot 2", chatbotControl);
            if (!chatbotControl) {
                console.log("call notification function ", chatbotControl);
                setNotficationControl(newMessageRecieved);
            } else {
                setData([...data, newMessageRecieved])
            }
        })
    })

    useEffect(() => {
        chatbotControl = showChatbot
    }, [showChatbot])

    return (
        <>
            {showChatbot &&
                <div className='container-fluid' style={{ position: "fixed" }}>
                    <div className='row mt-3'>
                        <div className='col-sm-3 offset-9 '>
                            <div className='col-sm-12 text-center chatbot_header'>
                                <p className='pt-2 text-light'>Chatbot</p>
                            </div>


                            {chatId && chatId != undefined ?
                                <div style={{ overflowY: "scroll", height: "60vh" }}>
                                    {
                                        data && data.map((elm) => {
                                            var setDate = new Date(elm.createdAt)
                                            return (
                                                <>
                                                    {elm.sender != "subUser" ?

                                                        <div className='col-sm-12 p-2 bg-light' key={elm?._id}>
                                                            <div className='d-flex'>
                                                                <div className='col-sm-1'>
                                                                    <img src={Profilepic} className="img img-fluid img_profile" />
                                                                </div>
                                                                <div className='col-sm-11 border border-top-0 p-3 custom_rebot_chat space_box'>
                                                                    <p>{elm?.content}</p>
                                                                    <time className=''>{setDate ? setDate.toLocaleTimeString('en-US') : "N/A"}</time>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className='col-sm-12  bg-light'>
                                                            <div className='d-flex custom_rtl'>
                                                                <div className='col-sm-1'>
                                                                    <img src={Profilepic} className="img img-fluid img_profile" />
                                                                </div>
                                                                <div className='col-sm-11 border border-top-0 p-3 custom_rebot_chat space_box_user '>
                                                                    <p>{elm?.content}</p>
                                                                    <time className=''>{setDate ? setDate.toLocaleTimeString('en-US') : "N/A"}</time>
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
                                    <input style={{ border: Error ? "red solid" : "none" }} type="text" className='form-input'
                                        placeholder='Enter Your email here...'
                                        onChange={(e) => { setEmailInp(e.target.value); setError(false) }} value={emailInp} />
                                    <button className='btn btn-primary' onClick={() => handleCreateChat()}>submit</button>
                                </>
                            }
                            <div className='col-sm-12'>
                                <div className="input-group">
                                    <textarea className="form-control message_area" style={{ border: contentError ? "1px red solid" : "1px solid #962180" }}
                                        onChange={(e) => { setContent(e.target.value); setContentError(false) }} value={content}
                                        aria-label="With textarea"></textarea>
                                    {chatId && chatId != undefined && <div className="input-group-prepend">
                                        <span className="input-group-text text_send" ><button className='custom_send' onClick={() => handleSendMessages()}>
                                            <AiOutlineSend className='snd_icon' />
                                        </button></span>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='row'>
                <div className='sticky_bton'><button className='btn custom_position' onClick={() => { setshowChatbot(!showChatbot); dispatch(setsubUserNotifClear()) }}>
                    <NotificationBadge count={subUserNotify.length}
                        effect={Effect.SCALE}
                    />
                    <FiMessageSquare className='fi_message' /></button></div>
            </div>
        </>
    )
}

export default Chatbot2