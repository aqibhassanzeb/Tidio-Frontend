import React from 'react'
import "../chatCard/ChatCard.css"
import chatcardimg from '../../../../../images/horse.jpg'
import { MdWavingHand } from 'react-icons/md'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
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
            </div>
        </>
    )
}

export default ChatCard
