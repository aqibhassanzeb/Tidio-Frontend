import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';
import { BsArrowDownRight } from 'react-icons/bs';
import userim from "../../../../images/horse.jpg"

const WidgetOffline = ({getStarted,setshowChatbot,chatBot,setOfflineMsg,
    setContent,handleSendMessages,contentError,
    setContentError,sendloading,sendMsg,content}) => {

    const handleSubmit=()=>{
        console.log("handle submit")
        
        handleSendMessages()
    }

    return (
        <>
            <div className=' bg-light'>
              {chatBot &&  <div className='d-flex justify-content-end'>
                    <button className='btn btn-danger' onClick={()=>{setshowChatbot(false)}}>close</button>
                </div>}
            <div className='d-flex justify-content-end'> </div>
                <div className='d-flex justify-content-center'>
                    <img src={userim} className=' hrim' alt='' />
                   
                </div> 
                { sendMsg && <div>
                    <p>Your email has been sended</p>
                </div>}
                <div>
                    <p className='apraforofline'>
                     {getStarted?.offlineMessage}
                     </p>
                     
                </div>
                <div className='transdata '>
             
                <input type="text" value={content} style={{border:contentError ?"2px solid red":""}} onChange={(e)=>{setContent(e.target.value);setOfflineMsg(true);setContentError(false)}} placeholder='Enter your email...' />
              
                  {chatBot ?   
                   sendloading ? <h3>Loading...</h3> : <button className='btn btn-primary'onClick={()=>{handleSubmit()}} >Send</button>
                      :
                      <button className='btn btn-primary'>Send</button>
                  } 
                </div>
            </div>
           
        </>
    )
}

export default WidgetOffline
