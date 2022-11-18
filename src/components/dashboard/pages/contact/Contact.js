import React from 'react'
import Table from 'react-bootstrap/Table';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import '../contact/Contact.css'
import { AiFillDelete } from 'react-icons/ai';
import { fetchChat2, subUserchatDelete } from '../../../../apis/Chat-api';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
const [loading, setLoading] = useState(false)
const [chatUser, setChatUser] = useState([])
const [fetchControl, setfetchControl] = useState(false)

var user = JSON.parse(localStorage.getItem("user"))  
var serialNo=0

  const fetchChatUser = () => {
    const _id = user && user._id
   if(_id){ setLoading(true)
    fetchChat2(_id).then((res) => {
        setChatUser(res.data)
        setLoading(false)
    }
    ).catch(err => {
        setLoading(false)
        console.log(err)
    })}
}

const handleDeleteChat=(_id)=>{
  subUserchatDelete(_id).then(result => {
    setfetchControl(!fetchControl)
    toast.success(result.data.message)

}).catch(err => {
    console.log(err)
})

}

useEffect(() => {
  fetchChatUser()
}, [fetchControl])


  return (
    <div>
       <ToastContainer />
      <div className='container'>
        <h1 className='col contatchead'>Acquired Contact List</h1>
        <div className='row'>
          <div className='col'>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            chatUser.map((elm)=>{
              return(
                <>
                <tbody key={elm._id}>
            <tr>
              <td>{serialNo=serialNo+1}</td>
              <td>{elm.subUser?.email.split('@')[0]}</td>
              <td>{elm.subUser.email}</td>
             <td><MdDelete className='delebtnrow' onClick={()=>{window.confirm('Are you sure to delete') && handleDeleteChat(elm._id)}}/></td>
            </tr>
          </tbody>
                </>
                )
              })
            }
        </Table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact