import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import "../chat/Chat.css"
import { useSelector } from 'react-redux';

function Chat() {
    const userData = useSelector(state => state.User.activeUser)
  return (
    <div className='chat_page'>
        <h1>Chat Page</h1>
        <h3>well come</h3>
        <h2>{userData?.name}</h2>
    </div>
  )
}

export default Chat