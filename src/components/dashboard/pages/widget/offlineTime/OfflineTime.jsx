import React from 'react'
import { Table } from 'react-bootstrap'
import './OfflineTime.css'
import { useState } from 'react';


const OfflineTime = () => {
    const [toggleTime, setToggleTime] = useState(false)
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div>
                    <p>Set a schedule when you are available to receive new messages, so it will automatically change your online/offline status.</p>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" onChange={()=> setToggleTime(!toggleTime)} id="flexSwitchCheckDefault" />
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
                                        <td><input type="time" /></td>
                                        <td><input type="time" /></td>
                                    </tr>
                                    <tr>
                                        <th>Monday</th>
                                        <td><input type="time" /></td>
                                        <td><input type="time" /></td>
                                    </tr>
                                    <tr>
                                        <th>Tuesday</th>
                                        <td><input type="time" /></td>
                                        <td><input type="time" /></td>
                                    </tr>
                                    <tr>
                                        <th>Wednesday</th>
                                        <td><input type="time" /></td>
                                        <td><input type="time" /></td>
                                    </tr>
                                    <tr>
                                        <th>Thursday</th>
                                        <td><input type="time" /></td>
                                        <td><input type="time" /></td>
                                    </tr>
                                    <tr>
                                        <th>Friday</th>
                                        <td><input type="time" /></td>
                                        <td><input type="time" /></td>
                                    </tr>
                                    <tr>
                                        <th>Saturday</th>
                                        <td><input type="time" /></td>
                                        <td><input type="time" /></td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                            </>}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfflineTime
