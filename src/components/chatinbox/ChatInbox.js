import React, { useEffect, useState } from 'react'
import "../chatinbox/ChatInbox.css"
import melissa from '../../images/melissa-j.webp'
import { fetchMessages, sendMessage, sendMessage2 } from '../../apis/Chat-api'
import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'
import { setNotification } from '../../redux/features/ChatSlice'
import { useRef } from 'react'
import Peer from "simple-peer"
import { Modal } from 'bootstrap'


var ENDPOINT = process.env.REACT_APP_SOCKET_LINK
var socket = io()
var selectedChatCompare


function ChatInbox({ senderUser }) {
    const [messages, setMessages] = useState([])
    const [newmessage, setNewmessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [socketConnected, setSocketConnected] = useState(false)
    const [typing, setTyping] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [notficationControl, setNotficationControl] = useState(null)

    const selectedUser = useSelector(state => state.SelectedUser.selectedUser)
    const loginUser = useSelector(state => state.User.activeUser)
    const notification = useSelector(state => state.SelectedUser.notification)
    const dispatch = useDispatch()
    
    // calling state portion 
    const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()
    
    // video modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendMessageHandle = (e) => {
        const content = newmessage
        // socket.emit("stop typing", selectedUser._id)
        const chatId = selectedUser._id
        const payload = { content, chatId, senderId: loginUser._id }
        setLoading(true)
        sendMessage2(payload).then((res) => {
            const data = res.data
            setMessages([...messages, data])
            setNewmessage("")
            setLoading(false)
            socket.emit("new message", data && data)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
        })
    }

    const fetchMessageshandle = () => {
        const chatId = selectedUser._id
        fetchMessages(chatId).then((res) => {
            setMessages(res.data)
            socket.emit("join chat", chatId && chatId)
        }).catch(err => { console.log(err); })
    }


    useEffect(() => {
        socket = io(ENDPOINT)
        socket.emit("setup", loginUser !== null && loginUser);
        socket.on("connected", () => setSocketConnected(true))
        // socket.on("typing", () => setIsTyping(true))
        // socket.on("stop typing", () => setIsTyping(false))

        // call portion 
        
        navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream
		})
        socket.on("me", (id) => {
			setMe(id)
		})

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
    
    }, [loginUser])


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
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall =() =>  {
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
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}



    return (
        <>
            <div className='container-fluid custom_fluid'>
                <div className='row '>
                    <div className='col-sm-12 header_chat'>
                        <div className='display_header'>
                            <img className='chat_icon' src={senderUser ? senderUser.imageUrl : melissa} />
                            <p className='online'>{selectedUser && selectedUser.subUser?.email}</p>
                        </div>
                    </div>
                </div>
                {selectedUser ? <div className='row chat-area' >
                    {
                        messages && messages.map((elm, index) => {
                            var setDate = new Date(elm.createdAt)

                            return (

                                elm.sender == "subUser" ? <div className='col-sm-12 text-left p-2'>
                                    <div className='chat_row'>
                                        <h5 className='chat_name'>{elm.name}</h5>
                                        <time className='chat_time'>{setDate ? setDate.toLocaleTimeString('en-US') : "N/A"}</time>

                                    </div>
                                    <div className='chat_text'>
                                        <p>{elm.content}</p>
                                    </div>
                                </div> :
                                    <div className='col-sm-12 text-end  p-2'>
                                        <div className='chat_end_row'>
                                            <time className='chat_end_time'>{setDate ? setDate.toLocaleTimeString('en-US') : "N/A"}</time>
                                            <h5 className='chat_end_name'>{elm.name}</h5>
                                        </div>
                                        <div className='chat_end_text'>
                                            <p>{elm.content}</p>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div> : <h2>Empty</h2>}
                <div className='row pb-4  position_textarea'>

                    {/* {isTyping ?<p>Typing...</p>:""} */}
                    <div className='col-sm-12 text-end'>
                        {/* <input type='file' /> */}
                        {loading ? <p>loading..</p> : selectedUser && <button className='btn btn-primary' onClick={() => { sendMessageHandle() }} >Reply</button>}
                    </div>
                    <div className='col-sm-12 text_area_padding'>
                        <textarea className='form-control custom_text_area' value={newmessage} onChange={(e) => { setNewmessage(e.target.value) }}>
                        </textarea>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create ChatBot</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-danger' onClick={handleClose}>
                        Close
                    </button>
                    <button className='btn btn-primary' onClick={handleShow}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChatInbox;