import React, { useEffect } from 'react'
import "../chatCard/ChatCard.css"
import chatcardimg from '../../../../../images/horse.jpg'
import { MdWavingHand } from 'react-icons/md'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoMdSend } from 'react-icons/io'
import { AiOutlineSmile } from 'react-icons/ai'
import { createChat } from '../../../../../apis/Chat-api'
const ChatCard = () => {

var createdby="634543ff090124ecb0c39a6b"
var _id="635a3355fc74227ac06ddd5a"
   
const handleCreateChat=()=>{
        const paylaod={createdby,_id}
        createChat(paylaod).then(result=>{
            console.log("result :",result)
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(() => {
        handleCreateChat()
    }, [])
    


    return (
        <>
            <div className='chatcardmaindiv'>
                <div className='cardheader d-flex'>
                    <div className=' d-flex align-items-center'>
                        <img src={chatcardimg} className='cardchatimg p-1' />
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
                <div className='messagestext '>
                    <div className=''>
                        <p className=' textparadiv m-2'>this is the text of a user component this is only dummy text you can read it only</p>
                    </div>
                    <div className='spanreplymain'>
                        <span className='spanreply '>Yeah Sure</span>
                    </div>
                </div>
                <div className='d-flex'>
                    <input type="text" placeholder='Enter Your message here...' className='textyourmessage' />
                    <IoMdSend style={{cursor:"pointer"}} className='sendmessageicon'/>
                </div>
                <div>
                    <AiOutlineSmile className='smileicon' />
                </div>

            </div>
        </>
    )
}

export default ChatCard
