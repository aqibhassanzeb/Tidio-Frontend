import React, { useState } from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Accordion } from "react-bootstrap";
import { AiFillHome, AiFillEye, AiOutlineDelete } from 'react-icons/ai';
import { BsFillQuestionCircleFill, BsThreeDotsVertical } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSend } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import EmojiPicker from 'emoji-picker-react';
import { FiMessageSquare } from 'react-icons/fi';
import "../widget/Widget.css"
import EmojiIcon from "../../../../images/icon.jpg"
import Chatbackground from '../../../../images/chat_back.jpg';
import User_png from '../../../../images/user.png'
export default function Widget() {
    const [showChatbot, setshowChatbot] = useState(false);
    const [getStarted, setgetStarted] = useState({
    });
    console.log(getStarted)
    const inputEvent = (event, name) => {
        setgetStarted({ ...getStarted, [name]: event.target.value })
    }

    return (
        <div className='container d-flex widget_div mt-4'>
            <div className='col-sm-7'>
                <div className="accordion mt-5">
                    <Accordion style={{ border: "none" }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='text-dark border_acc'>
                                <AiFillEye className='text-dark' /> &nbsp;  &nbsp; <h5 className='widget_header'>Widget Visibility</h5>
                            </Accordion.Header>
                            <hr className='margin_hr' />
                            <Accordion.Body>
                                <div className='row'>
                                    <div className='col-sm-12 d-flex p-3'>
                                        <label className='display_widget'>Display Widget</label>
                                        <div class="form-check form-switch check_custom">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 d-flex p-3 pb-0'>
                                        <label className='display_widget'>Devices</label>
                                        <Form.Select aria-label="Default select example" className="select_device px-2 py-1">
                                            <option>Both on desktop and mobile devices</option>
                                            <option value="1">Only on desktop devices</option>
                                            <option value="2">Only on mobile devices</option>
                                        </Form.Select>
                                    </div>
                                    <div className='col-sm-12'>
                                        <label className='hide_screen'>Hide on specific</label>
                                    </div>
                                    <div className='col-sm-12 d-flex p-3'>
                                        <label className='display_chat'>Display the Chat<br /> When You're Offline</label>
                                        <div class="form-check form-switch check_chat">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 d-flex p-3'>
                                        <label className='display_chat'>Display the Chat<br /><small className='color_small'>(adjust online hour)</small></label>
                                        <div class="form-check form-switch ">
                                            <input class="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 d-flex p-3'>
                                        <label className='display_chat'>Offline message</label>
                                        <div class="form-check form-switch ">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <AiFillHome className='text-dark' /> &nbsp;  &nbsp; <h5 className='widget_header'>Get Started</h5>
                            </Accordion.Header>
                            <hr className='margin_hr' />
                            <Accordion.Body>
                                <div className='row'>
                                    <div className='col-sm-2'>
                                        <label className='status_p'>Status:</label> <br />
                                        <label className='status_p mt-5'>message:</label><br />
                                        <label className='status_p_label'>Background:</label> <br />
                                    </div>
                                    <div className='col-sm-10'>
                                        <div className="form-check ">
                                            <textarea className="form-control" name='status' rows="2" placeholder='Enter your status here' onChange={(e) => { inputEvent(e, "status") }}></textarea> <img className='img_icon' src={EmojiIcon} /> <br />
                                            <textarea className="form-control custom_form_control" name='message' rows="2" placeholder='enter Your message here' onChange={(e) => { inputEvent(e, "message") }} ></textarea> <br />
                                            <div className="form-check form-switch check_background">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <AiFillHome className='text-dark' /> &nbsp;  &nbsp; <h5 className='widget_header'>Mobile Widget</h5>
                            </Accordion.Header>
                            <hr className='margin_hr' />
                            <Accordion.Body>
                                <div className='row'>
                                    <div className='col-sm-12 display_buttons'>
                                        <div className='col-sm-3'>
                                            <label className='btn_position_size'>Button Position:</label>
                                        </div>
                                        <div className='col-sm-8 offset-1 groupbtndata'>
                                            <div className="btn-group " role="group" aria-label="...">
                                                <button type="button" className="btn btn-lg left_btn_size ">Left</button>
                                                <button type="button" className="btn btn-lg left_btn_size ">Right</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12 display_buttons'>
                                        <div className='col-sm-3 mt-3'>
                                            <label className='btn_position_size'>Button Size:</label>
                                        </div>
                                        <div className='col-sm-8 offset-1 mt-3'>
                                            <input type="range" className="form-range" id="customRange1" /> <br />
                                            <div className='range_area px-2'>
                                                <label className='btn_position_size'>small</label><label className=' btn_position_size'>Medium</label><label className=' btn_position_size large'>Large</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <AiFillHome className='text-dark' /> &nbsp;  &nbsp; <h5 className='widget_header'>Free-chat Survey</h5>
                            </Accordion.Header>
                            <hr className='margin_hr' />
                            <Accordion.Body>
                                <div className='row'>
                                    <div className='col-sm-12 display_display'>
                                        <div className='col-sm-2'>
                                            <label className='btn_position_size'>Display :</label>
                                        </div>
                                        <div className='col-sm-10 mt-2'>
                                            <div class="form-check form-switch ">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" /> <BsFillQuestionCircleFill className='question_mark' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12 display_display'>
                                        <div className='col-sm-2'>
                                            <label className='btn_position_size'>Message :</label>
                                        </div>
                                        <div className='col-sm-10 mt-4'>
                                            <textarea className="form-control custom_form_control" id="exampleFormControlTextarea1" rows="2" placeholder='enter Your email...'></textarea> <br />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 display_display bg_email'>
                                        <div>
                                            <label className='btn_position_size'>Survey Fields:</label>
                                        </div>
                                        <div className='col-sm-10 d-flex'>
                                            <div className='row'>
                                                <div className=' display_display'>
                                                    <div className='col-sm-2 text-center '>
                                                        <p className='email  px-2'>Email</p>
                                                    </div>
                                                    <div className='col-sm-8  px-2 email_control d-flex '>
                                                        <div className=''>
                                                            <span className='d-flex'>
                                                                <textarea ></textarea>
                                                                <p className=' deleteiconwiget'><AiOutlineDelete /></p>
                                                            </span>
                                                            <div className="form-check mt-2">
                                                                <input className="form-check-input checkbox_icon" type="checkbox" id="flexCheckDefault" />
                                                                <label className="form-check-label permission" for="flexCheckDefault">
                                                                    Ask your visitor for newsletter permission
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12 width_add d-flex mt-3'>
                                        <div className='col-sm-8 offset-3 custom_width'>
                                            <Form.Select aria-label="Default select example" className=" px-2 py-1">
                                                <option>select</option>
                                                <option value="1">Email</option>
                                                <option value="2">Name</option>
                                                <option value="3">Phone Number</option>
                                            </Form.Select>
                                        </div>
                                        <div className='col-sm-1'>
                                            <button className='btn btn-primary custom_add'>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='col-sm-3 offset-1 '>
                <div className='row mt-4'>
                    <div className='col-sm-12 text-center'>
                        <h3>Preview</h3>
                    </div>
                </div>
               
                    
                       <div className=' background_img'>
                     
                       <div className='img_color'>
                       <div className='hitheretext p-4 pt-5 mt-4'>
                                <h2>{getStarted.status}</h2>
                                <p className='text-light'>{getStarted.message}</p>
                            </div>
                            <div className='Create_right'>
                            <div className='iconmainduv  pt-5 mt-4'>
                                <span className='threedoticoon'> <BsThreeDotsVertical/> </span> &nbsp;
                                <span className='threedoticoon'> <RiArrowDropDownLine/> </span> <br/>
                            </div>
                            <div className='user_png'>
                                <img src={User_png} className="user_width" />
                            </div>
                            </div>
                       </div>
                    </div>
                </div>
         
        </div>
    )
}
