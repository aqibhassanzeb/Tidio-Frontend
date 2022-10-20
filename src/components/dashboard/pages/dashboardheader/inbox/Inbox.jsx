import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import "../inbox/Inbox.css"
import useimage from "../../../../../images/horse.jpg"
import { getAllUser, selectUser } from '../../../../../apis/Chat-api'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectUser } from '../../../../../redux/features/ChatSlice'
const Inbox = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [selectloading, setSelectLoading] = useState(false)
    const [searchUsers, setSearchUsers] = useState([])
    
    const selectedUser=useSelector(state=> state.SelectedUser.selectedUser)
    const dispatch=useDispatch()

    console.log("selected User :",selectedUser)

    // Search function 
    const searchHandle=(e)=>{
        setSearch(e.target.value)
        if(search.length>2){
            setLoading(true)
            getAllUser(search).then((res)=>
            {
            setSearchUsers(res.data)
            setLoading(false)
        }
        ).catch(err=>{
            setLoading(false)
            console.log(err)})

    }
    }

    // Select User for Chat func

    const handleSelect=(value)=>{
        const  userId=value
        setSelectLoading(true)
        selectUser({userId}).then(res=>{
            dispatch(setSelectUser(res.data))
            console.log("responce :",res.data)
            setSelectLoading(false)
        }).catch(err=>{
            
            setSelectLoading(false)
            console.log(err)})
    }


    return (
        <>
            <div className='inbox-maindiv'  >
                <div className='uppersearch'>
                    <input type="search" placeholder='Search here min 2 word..' className='inputsearch' value={search} onChange={(e)=>searchHandle(e)} />
                    <BsSearch className='searchiocon' />
                </div>
              <div  style={{height:"90vh",overflow:'scroll'}}>

               { 
               loading || selectloading ?
               <p>loading..</p>:

               searchUsers &&
               searchUsers.map((elm,index)=>{
                   return (
                       <>
                        <div key={index} className='inboxUserdetail d-flex mt-2' onClick={()=>handleSelect(elm._id)} style={{cursor:"pointer"}}>
                    <div>
                        <img src={elm?.imageUrl} className='userimage' />
                    </div>
                    <div className='usercardinfo'>
                        <span className=' text-white usernametext'>{elm?.name}</span>
                        <span className='text-center text-white userpara'>{elm?.email}</span>
                    </div>
                </div>
                        </>
                       )
                })
            }
            </div>
            </div>
        </>
    )
}

export default Inbox
