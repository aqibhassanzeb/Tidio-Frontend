import React from 'react'
import { Table } from 'react-bootstrap'
import './OfflineTime.css'
import { useEffect,useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OfflineTime = ({ getStarted, setgetStarted,handleClose,handleSubmit }) => {
    const [toggleTime, setToggleTime] = useState(false)
    
    const [timeonline, settimeonline] = useState(getStarted.timeonline[0] ? getStarted.timeonline[0]:getStarted.timeonline)
    const handleChange = (e, name) => {
        settimeonline({ ...timeonline, [name]: e.target.value })
    }

    useEffect(() => {
        setgetStarted({ ...getStarted,timeonline})
    }, [timeonline])
    const handlesubmitTime=()=>{
    if(timeonline?.Sunday$start > timeonline?.Sunday$end){
      return  toast.error("End time is invalid for Sunday")
    }
    if(timeonline?.Monday$start > timeonline?.Monday$end){
        return   toast.error("End time is invalid for Monday")
    }
    if(timeonline?.Tuesday$start > timeonline?.Tuesday$end){
        return  toast.error("End time is invalid for Tuesday")
    }
    if(timeonline?.Wednesday$start > timeonline?.Wednesday$end){
        return   toast.error("End time is invalid for Wednesday")
    }
    if(timeonline?.Thursday$start > timeonline?.Thursday$end){
        return  toast.error("End time is invalid for Thursday")
    }
    if(timeonline?.Friday$start > timeonline?.Friday$end){
        return toast.error("End time is invalid for Friday")
    }
    if(timeonline?.Saturday$start > timeonline?.Saturday$end){
        return  toast.error("End time is invalid for Saturday")
    }
    handleSubmit()
    handleClose()
    }

    return (
        <>
            <div className='container'>
            <ToastContainer />
                <div className='row'>
                    <div>
                        <p>Set a schedule when you are available to receive new messages, so it will automatically change your online/offline status.</p>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" onChange={() => setToggleTime(!toggleTime)} id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault" >Toggle Time</label>
                        </div>
                        {toggleTime &&
                            <>
                                <div className=''>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Days</th>
                                                <th scope="col">Start Time</th>
                                                <th scope="col">End Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Sunday</th>
                                                <td><input type="time" value={timeonline?.Sunday$start} onChange={(e) => { handleChange(e, "Sunday$start") }} /></td>
                                                <td><input type="time" value={timeonline?.Sunday$end} onChange={(e) => { handleChange(e, "Sunday$end") }} /></td>
                                            </tr>
                                            <tr>
                                                <th>Monday</th>
                                                <td><input type="time" value={timeonline?.Monday$start} onChange={(e) => { handleChange(e, "Monday$start") }} /></td>
                                                <td><input type="time" value={timeonline?.Monday$end} onChange={(e) => { handleChange(e, "Monday$end") }} /></td>
                                            </tr>
                                            <tr>
                                                <th>Tuesday</th>
                                                <td><input type="time" value={timeonline?.Tuesday$start} onChange={(e) => { handleChange(e, "Tuesday$start") }} /></td>
                                                <td><input type="time" value={timeonline?.Tuesday$end} onChange={(e) => { handleChange(e, "Tuesday$end") }} /></td>
                                            </tr>
                                            <tr>
                                                <th>Wednesday</th>
                                                <td><input type="time" value={timeonline?.Wednesday$start} onChange={(e) => { handleChange(e, "Wednesday$start") }} /></td>
                                                <td><input type="time" value={timeonline?.Wednesday$end} onChange={(e) => { handleChange(e, "Wednesday$end") }} /></td>
                                            </tr>
                                            <tr>
                                                <th>Thursday</th>
                                                <td><input type="time" value={timeonline?.Thursday$start} onChange={(e) => { handleChange(e, "Thursday$start") }} /></td>
                                                <td><input type="time" value={timeonline?.Thursday$end} onChange={(e) => { handleChange(e, "Thursday$end") }} /></td>
                                            </tr>
                                            <tr>
                                                <th>Friday</th>
                                                <td><input type="time" value={timeonline?.Friday$start} onChange={(e) => { handleChange(e, "Friday$start") }} /></td>
                                                <td><input type="time" value={timeonline?.Friday$end} onChange={(e) => { handleChange(e, "Friday$end") }} /></td>
                                            </tr>
                                            <tr>
                                                <th>Saturday</th>
                                                <td><input type="time" value={timeonline?.Saturday$start} onChange={(e) => { handleChange(e, "Saturday$start") }} /></td>
                                                <td><input type="time" value={timeonline?.Saturday$end} onChange={(e) => { handleChange(e, "Saturday$end") }} /></td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </>}
                            <div className='d-flex justify-content-center'>
                            <div className='btncloose' onClick={handleClose}>Close</div>
                            <div className='btnsaave' onClick={handlesubmitTime}>Save</div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfflineTime
