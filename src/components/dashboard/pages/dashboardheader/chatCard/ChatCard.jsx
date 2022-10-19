import React from 'react'
import "../chatCard/ChatCard.css"
import chatcardimg from '../../../../../images/horse.jpg'
import { MdWavingHand } from 'react-icons/md'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IoMdSend } from 'react-icons/io'
import { AiOutlineSmile } from 'react-icons/ai'
const ChatCard = () => {
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
                    <IoMdSend className='sendmessageicon'/>
                </div>
                <div>
                    <AiOutlineSmile className='smileicon' />
                </div>

            </div>
        </>
    )
}

export default ChatCard
