import React, { useEffect, useState } from 'react'
import "../profile/Profile.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineClose, AiOutlineGlobal, AiOutlineUser } from 'react-icons/ai';
import userimag from '../../../../../images/horse.jpg'
import { BsPlus } from 'react-icons/bs';
import { MdLogout, MdSupport } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProjectModal from './../../../../modals/ProjectModal/ProjectModal';
import { projectAdd, projectShow } from '../../../../../apis/Auth-api';

const Profile = ({setToggle,setValue,value,toggle}) => {
    const [project , setProject] = useState(false)
    const [projectName, setProjectName] = useState("")
    const [handleFetch, setHandleFetch] = useState(false)
    const [projectData, setProjectData] = useState([])
    const [loading, setLoading] = useState(false)
    
    const loginUser = useSelector(state => state.User.activeUser)
    const navigate=useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate('/userlogin')
      }
    //   handle show modal 
      const handleProj = (e) =>{
        console.log("handle click :",e.target.value)
          const value = e.target.value
          if(value === "audi"){
              setProject(true)
          }
      }
    //   handle add website 
    const handleSumbit=()=>{
        let createdBy=loginUser._id
        let paylaod={createdBy,name:projectName}
        setLoading(true)
        projectAdd(paylaod).then(res=>{
            setHandleFetch(!handleFetch)
            toast.success(res.data?.message)
            setProject(false)
            setLoading(false)
        }).catch(err=>{
            setLoading(false)
            console.log(err)
        })
    }
    
    // handle show project 
    const handleShow=()=>{
        projectShow().then(res=>{
            setProjectData(res?.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
        handleShow()
    }, [handleFetch])
    return (
        <>
        <ToastContainer />
            <div  className={toggle ? "profile-maindiv" : "profile-maindiv2"}>
                <div className=' p-2 d-flex justify-content-end'>
                {/* <div className="dataslectdiv">
            <AiOutlineGlobal />
            <select className="selectlangua">
              <option value="0" className="slecttetx">
                English
              </option>
              <option value="1" className="slecttetx">
                Urdu
              </option>
              <option value="2" className="slecttetx">
                Pashto
              </option>
            </select>
          </div> */}
                    <AiOutlineClose className=' crossicon'  onClick={()=>setToggle(false)}/>
                </div>
                <div className='my-4'>
                <div className='profileimagediv'>
                    <img src={loginUser?.imageUrl ? process.env.REACT_APP_API_URL_IMG+loginUser?.imageUrl : userimag} alt="image_card" className=' profileimage' onClick={()=>navigate("/acount")}  style={{cursor:"pointer"}}/>
                    <h5 className='textdata text-center mt-2'  onClick={()=>navigate("/acount")} style={{cursor:"pointer"}}>{loginUser?.name}</h5>
                    <p className='textdata text-center'  onClick={()=>navigate("/acount")} style={{cursor:"pointer"}}>Trial Account (10 days left)</p>
                </div>
                </div>
                <div>
                    <select name="cars" value={value} onChange={(e)=>setValue(e.target.value)}  className="selectedata">
                        <option value="ONLINE" className="selectedata2">Online</option>
                        <option value="OFFLINE"  className="selectedata2">Offline</option>
                    </select>
                    <select name="cars" className="selectedata mt-2"  onChange={handleProj} >
                       {projectData && projectData.map(element => {
                        return(
                            <>
                            <option value={element._id} className="selectedata2">{element.name}</option>
                            </>
                        )
                       })
                       }
                        <option value="audi" className="selectedata2" >
                            
                            Add Project
                            </option>
                        
                        {/* <option value="saab" className="selectedata2">Brainspk.com</option>
                        <option value="opel" className="selectedata2">AntarticalCorps.com</option> */}
                    </select>
                </div>
                <div className='my-4'>
                    <div className='usericonTExt'>
                        <AiOutlineUser className='usericon' />
                        <p href='' className='text-white text-decoration-none'>{loginUser?.email}</p>
                    </div>
                    {/* <div className='usericonTExt mt-1'>
                        <BsPlus className='usericon' />
                        <p href='' className='text-white text-decoration-none'>Add an operator</p>
                    </div> */}
                </div>
                <div className='logprosupbtn d-flex justify-content-around '>
                    <div className='userProfiletext'  onClick={()=>navigate("/acount")}>
                        <AiOutlineUser className='usericon2' />
                        <p href='' className='text-white text-center'  >Profile</p>
                    </div>
                    <div className='userProfiletext'>
                        <MdLogout className='usericon2' style={{cursor:"pointer"}} onClick={() =>handleLogout()} />
                        <p href='' className='text-white  text-center' style={{cursor:"pointer"}} onClick={() =>handleLogout()}>Logout</p>
                    </div>
                    <div className='userProfiletext'>
                        <MdSupport className='usericon2' />
                        <p href='' className='text-white text-center'>Support</p>
                    </div>
                </div>
            </div>
          
                    <ProjectModal 
                    loading={loading}
                    setProjectName={setProjectName}
                    projectName={projectName}
                    handleSumbit={handleSumbit}
                    project={project}
                    setProject={setProject} /> 
        </>
    )
}

export default Profile;
