import React, { useEffect, useState } from 'react'
import "../chatinbox/ChatInbox.css"
import melissa from '../../images/melissa-j.webp'
import { fetchMessages, sendMessage } from '../../apis/Chat-api'
import { useDispatch, useSelector } from 'react-redux'

import { io } from 'socket.io-client'
import { setNotification } from '../../redux/features/ChatSlice'

var ENDPOINT =process.env.REACT_APP_SOCKET_LINK
var socket
var selectedChatCompare


function ChatInbox({senderUser}) {
    const [messages, setMessages] = useState([])
    const [newmessage, setNewmessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [socketConnected, setSocketConnected] = useState(false)
    const [typing, setTyping] = useState(false)
    const [isTyping, setIsTyping] = useState(false)

    console.log("procesdkljfsldfj",process.env.REACT_APP_SOCKET_LINK)

    const selectedUser=useSelector(state=> state.SelectedUser.selectedUser)
    const loginUser=useSelector(state=> state.User.activeUser)
    const notification=useSelector(state=> state.SelectedUser.notification)
   const dispatch= useDispatch()

    // console.log("messages :",messages);

    const sendMessageHandle=(e)=>{
        const content=newmessage
        socket.emit("stop typing", selectedUser._id)
        const chatId=selectedUser._id
        const payload={content,chatId}
        setLoading(true)
        sendMessage(payload).then((res)=>{
            console.log(res.data)
            const data=res.data
            setMessages([...messages,data])
            setNewmessage("")
            setLoading(false)
            socket.emit("new message",data && data)
        }).catch((err)=>{
            setLoading(false)
            console.log(err)})
    }

    const fetchMessageshandle=()=>{
        const chatId=selectedUser._id
        fetchMessages(chatId).then((res)=>{

            console.log(res.data);
            setMessages(res.data)
            socket.emit("join chat",chatId && chatId)
        }).catch(err=>{console.log(err);})
    }


    useEffect(() => {
        socket=io(ENDPOINT)
        socket.emit("setup",loginUser !== null && loginUser);
        socket.on("connected",()=>setSocketConnected(true))
        socket.on("typing",()=>setTyping(true))
        socket.on("stop typing",()=>setIsTyping(false))
      }, [])

    const handleChange=()=>{
        if(!socketConnected) return;
        if(!typing){
            setTyping(true)
            socket.emit("typing",selectedUser && selectedUser._id)
        }
        let lastTypingTime= new Date().getTime();
        var timerlength=3000;
        setTimeout(() => {
            var timeNow =new Date().getTime();
            var timeDiff=timeNow-lastTypingTime
            if(timeDiff>= timerlength && typing){
                socket.emit("stop typing",selectedUser && selectedUser._id)
                setTyping(false)
            }
        }, timerlength);
    }

    

useEffect(() => {
 selectedUser && fetchMessageshandle()
  selectedChatCompare = selectedUser ? selectedUser : null

}, [selectedUser])


    useEffect(() => {
     socket.on("message recieved",(newMessageRecieved)=>{
        if(!selectedChatCompare || selectedChatCompare._id !== newMessageRecieved.chat._id){
            console.log("if portion ,;;")
            // if(!notification.includes(newMessageRecieved)){

            //     dispatch(setNotification(newMessageRecieved))
            // }
        }else{
            setMessages([...messages,newMessageRecieved])
        }
     })
    })
    

    return (
        <>
            <div className='container-fluid custom_fluid'>
                <div className='row mt-4'>
                    <div className='col-sm-12 header_chat'>
                   <div className='display_header'>
                   <img className='chat_icon' src={senderUser ? senderUser.imageUrl:melissa} /> 
                    <p className='online'>{senderUser.name}</p>
                   </div>
                    </div>
                </div>
               { selectedUser ? <div className='row chat-area' >
                   {
               messages &&    messages.map((elm,index)=>{
                    var setDate = new Date(elm.createdAt) 

                return(

                      elm.sender._id !== loginUser._id?   <div className='col-sm-12 text-left p-2'>
                        <div className='chat_row'>
                            <img className='chat_icon' src={elm.imageUrl} /> 
                            <h5 className='chat_name'>{elm.name}</h5> 
                            <time className='chat_time'>{ setDate ? setDate.toLocaleTimeString('en-US'):"N/A"}</time>
                                                
                        </div>
                        <div className='chat_text'>
                            <p>{elm.content}</p>
                        </div>
                    </div>:
                    <div className='col-sm-12 text-end  p-2'>
                        <div className='chat_end_row'>
                            <time className='chat_end_time'>{ setDate ? setDate.toLocaleTimeString('en-US'):"N/A"}</time>
                            <h5 className='chat_end_name'>{elm.name}</h5>
                            <img className='chat_end_icon'src={elm.imageUrl} />
                        </div>
                        <div className='chat_end_text'>
                            <p>{elm.content}</p>
                        </div>
                    </div>
                        )
                    })
                }
                </div>:<h2>Empty</h2> }
                <div className='row pb-4  position_textarea'>
                        
                {/* {isTyping ?<p>Typing...</p>:""} */}
                    <div className='col-sm-12 text-end'>
                        {/* <input type='file' /> */}
                  { loading ? <p>loading..</p> : selectedUser  &&  <button className='btn btn-primary' onClick={sendMessageHandle} >Reply</button>}
                    </div>
                    <div className='col-sm-12 text_area_padding'>
                        <textarea className='form-control custom_text_area' value={newmessage} onChange={(e)=>{setNewmessage(e.target.value);handleChange()}}>
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatInbox;