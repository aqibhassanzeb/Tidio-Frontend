import React from 'react'
import "../components/Inbox.css"
import melissa from '../images/melissa-j.webp'
function ChatInbox() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 text-left p-2'>
                        <div className='chat_row'>
                            <img className='chat_icon' src={melissa} /> 
                            <h5 className='chat_name'>Jhon</h5>                     
                            <time className='chat_time'>8:22 am</time>
                        </div>
                        <div className='chat_text'>
                            <p>hello jhon</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 text-end  p-2'>
                        <div className='chat_end_row'>
                            <time className='chat_end_time'>8:22 am</time>
                            <h5 className='chat_end_name'>You</h5>
                            <img className='chat_end_icon' src={melissa} />
                        </div>
                        <div className='chat_end_text'>
                            <p>hey jhon hows you</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatInbox;