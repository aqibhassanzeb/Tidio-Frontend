import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';
import { BsArrowDownRight } from 'react-icons/bs';
import userim from "../../../../images/horse.jpg"
const WidgetOffline = ({getStarted,setshowChatbot,chatBot}) => {
    return (
        <>
            <div className=' bg-light'>
              {chatBot &&  <div className='d-flex justify-content-end'>
                    <div className='' onClick={()=>{setshowChatbot(false)}}><IoIosClose style={{fontSize: 25}}/></div>
                </div>}
            <div className='d-flex justify-content-end'> </div>
                <div className='d-flex justify-content-center'>
                    <img src={userim} className=' hrim' alt='' />
                   
                </div>
                <div>
                    <p className='apraforofline'>
                        {/* We’re currently unavailable. We’ll get back to you when one of our operators is able to respond.
                     Please provide your email address so we can get in touch with you. */}
                     {getStarted?.offlineMessage}
                     </p>
                     
                </div>
                <div className='transdata '>
             
                <input type="text" placeholder='Enter your email...' />
              
                    <button className='btn btn-primary'>Send</button>
                </div>
            </div>
           
        </>
    )
}

export default WidgetOffline
