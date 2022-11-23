import React, { useEffect, useRef, useState } from 'react'
import "../chatCard/ChatCard.css"
import chatcardimg from '../../../../../images/horse.jpg'
import { MdWavingHand } from 'react-icons/md'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoMdSend } from 'react-icons/io'
import { AiOutlineSmile } from 'react-icons/ai'
import { createChat, fetchMessages2, sendMessage2 } from '../../../../../apis/Chat-api'
const ChatCard = () => {

    const [Error, setError] = useState(false)
    const [contentError, setContentError] = useState(false)
    const [emailInp, setEmailInp] = useState("")
    const [chatId, setChatId] = useState(localStorage.getItem("tidiochat"));
    const [content, setContent] = useState("")
    const [data, setData] = useState([])
    const [fetchemail, setFetchemail] = useState("")
    const fetchControl = useRef(false);

    //    static data for temp

    var createdby = "634543ff090124ecb0c39a6b"
    var email = "alikhan@gmail.com"
    var _id = localStorage.getItem("tidiochat")


    const handlefetchChat = () => {
        if (_id && _id != undefined) {
            const paylaod = { createdby, _id }
            createChat(paylaod).then(result => {
                localStorage.setItem("tidiochat", result?.data.FullChat._id)
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
    const handleSendMessages=()=>{
        if(!content){
          return  setContentError(true)
        }
        const paylaod ={chatId,sender:"subUser",content}
        sendMessage2(paylaod).then(result=>{
            console.log("result of send messages :",result)
            setContent("")
        }).catch(err=>console.log(err))
    }

    // fetch messages

    const handleFetchMessages=()=>{
        fetchMessages2(chatId).then(res=>{
            setData(res?.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
        if (fetchControl.current) return
        fetchControl.current = true
        handlefetchChat()
        chatId && handleFetchMessages()
    }, [])



    return (
        <>
            <div className='chatcardmaindiv'>
                <div className='cardheader d-flex'>
                    <div className=' d-flex align-items-center'>
                        <img src={chatcardimg} className='cardchatimg p-1' alt='chatcard' />
                    </div>
                    <div className='  maintextchathead '>
                        <div className=' iconchathead'>
                            <span className='ml-2'> Hi There</span>
                            <MdWavingHand className='mr-2 greetinghand' />
                        </div>

                        <div className=' iconchathead2'>
                            <BiDotsVerticalRounded />
                            <RiArrowDropDownLine />
                        </div>


                    </div>
                </div>
                <div className='weareon'>
                    <div className='d-flex align-items-center '>
                        <div className='dotonline'></div>
                        <span className='online'>we reply immediately</span>
                    </div>
                </div>
                {chatId && chatId != undefined ? <div className='messagestext '>
                    {
                        data && data.map((elm)=>{
                            return(
                                <div key={elm?._id}>
                                
                 { elm.sender != "subUser"?
                 
                 <div className=''>
                        <p className=' textparadiv m-2'>{elm?.content}</p>
                    </div> :
                    <div  className='spanreplymain'>
                        <span className='spanreply '>{elm?.content}</span>
                    </div>}
                                </div>
                            )
                        })
                    }
                </div> :
                    <>
                        <p>Please Enter Email</p>
                        <input style={{ border: Error ? "red solid" : "none" }} type="text" className='form-input'
                            placeholder='Enter Your email here...'
                            onChange={(e) => { setEmailInp(e.target.value); setError(false) }} value={emailInp} />
                        <button className='btn btn-primary' onClick={() => handleCreateChat()}>submit</button>
                    </>
                }
                <div className='d-flex'>
                    {chatId && chatId != undefined && <input type="text" placeholder='Enter Your message here...'
                    style={{ border: contentError ? "red solid" : "none" }}
                    onChange={(e)=>{setContent(e.target.value); setContentError(false)}}  value={content} className='textyourmessage' />}
                    {chatId && chatId != undefined && <IoMdSend style={{ cursor: "pointer" }} className='sendmessageicon' 
                    onClick={()=>handleSendMessages()}
                    />}
                </div>
                <div>
                    <AiOutlineSmile className='smileicon' />
                </div>

            </div>
        </>
    )
}

export default ChatCard
