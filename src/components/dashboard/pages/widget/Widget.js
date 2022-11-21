import React, { useState } from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Accordion } from "react-bootstrap";
import { AiFillHome, AiFillEye, AiOutlineDelete } from 'react-icons/ai';
import { BsFillQuestionCircleFill, BsThreeDotsVertical } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { BiMobile } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import { FiArrowDownRight } from 'react-icons/fi';

import { AiOutlineSend } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import EmojiPicker from 'emoji-picker-react';
import { FiMessageSquare } from 'react-icons/fi';
import "../widget/Widget.css"
import EmojiIcon from "../../../../images/icon.jpg"
import Chatbackground from '../../../../images/chat_back.jpg';
import User_png from '../../../../images/user.png'
import { useEffect } from 'react';
export default function Widget() {
    const [showChatbot, setshowChatbot] = useState(false);
    const [chatToggle, setChatToggle] = useState(true);
    const [getStarted, setgetStarted] = useState({});
    const [Images, setImages] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);
    useEffect(() => {
        if (Images.length < 1) return;
        const newImageUrl = [];
        Images.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
        setImagesUrl(newImageUrl);

    }, [Images]);
    const imageUpload = (e) => {
        setImages([...e.target.files]);
    }
    const inputEvent = (event, name) => {
        setgetStarted({ ...getStarted, [name]: event.target.value })
    }

    return (
        <>
        <div className='container d-flex widget_div mt-4'>
            <div className='col-sm-7'>
                <div className="accordion mt-5">
                    <Accordion style={{ border: "none" }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='text-dark border_acc'>
                                <AiFillEye className='iconofwidget' /> &nbsp;  &nbsp; <h5 className='widget_header'>Widget Visibility</h5>
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
                        <Accordion.Item eventKey="1" onClick={() => setChatToggle(true)}>
                            <Accordion.Header>
                                <AiFillHome className='iconofwidget' /> &nbsp;  &nbsp; <h5 className='widget_header'>Get Started</h5>
                            </Accordion.Header>
                            <hr className='margin_hr' />
                            <Accordion.Body>
                                <div className='row'>
                                    <div className='col-md-2 col-sm-12'>
                                        <label className='status_p'>Status:</label> <br />
                                    </div>
                                    <div className='col-md-10 col-sm-12'>
                                       
                                            <textarea className="form-control" name='status' rows="2" placeholder='Enter your status here' onChange={(e) => { inputEvent(e, "status") }}></textarea> <br />
                                      
                                        </div>
                                    </div>
                                    <div className='row'>
                                    <div className='col-md-2 col-sm-12'>
                                        <label className='status_p '>message:</label><br />
                                    </div>
                                    <div className='col-md-10 col-sm-12'>
                                        
                                            <textarea className="form-control custom_form_control" name='message' rows="2" placeholder='enter Your message here' onChange={(e) => { inputEvent(e, "message") }} ></textarea> <br />
                                     
                                    </div>
                                    </div>
                                    <div className='row'>
                                    <div className='col-md-2 col-sm-12'>
                                        <label className='status_p_label'>Background:</label> <br />
                                    </div>

                                    <div className='col-md-10 col-sm-12'>
                                        
                                            <div className="form-check form-switch check_background">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                {imagesUrl.map(imageSrc => <img src={imageSrc} className='back_image' />)}
                                                <input type="file" style={{ width: 200 , fontSize: 14 }} onChange={imageUpload}></input>

                                           
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <BiMobile className='iconofwidget' /> &nbsp;  &nbsp; <h5 className='widget_header'>Mobile Widget</h5>
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
                        <Accordion.Item eventKey="3" onClick={() => setChatToggle(false)}>
                            <Accordion.Header>
                                <FaRegCalendarCheck className='iconofwidget' /> &nbsp;  &nbsp; <h5 className='widget_header'>Pre-chat Survey</h5>
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
                                    <div className='col-sm-12 display_display mt-2'>
                                        <div className='col-sm-2'>
                                            <label className='btn_position_size'>Message :</label>
                                        </div>
                                        <div className='col-sm-7  messgaein'>
                                            <input type="text" className='inputsurvey1 w-100' name='user_message' placeholder='Enter your text...' onChange={(e) => { inputEvent(e, "user_message") }} />
                                        </div>
                                    </div>
                                    <div className='display_display mt-3 '>
                                        <div className='d-flex col-sm-2'>
                                            <label className='btn_position_size'>Survey Fields:</label>
                                        </div>
                                        <div className='bg_email '>
                                            <div className='emailinputandtext'>
                                                <div className='emailtext '>Email</div>
                                                <div className='p-2 '>
                                                     <input type="email" className='inputsurvey ' name='enter_email' placeholder='Enter your email' onChange={(e) => { inputEvent(e, "enter_phone") }} /><br />
                                                    <span><input type="checkbox" placeholder='Enter your text' /></span>
                                                    <span className='p-2 askvisitor'>Ask your visitor for newsletter permission</span>

                                                </div>
                                                <div className='d-flex align-items-center p-3'> <AiFillDelete className='deleicon' /> </div>
                                            </div>
                                            <div className='emailinputandtext'>
                                                <div className='emailtext '>Phone No.</div>
                                                <div className='p-2 inpdivforwit'>
                                                    <input type="number" className='inputsurvey' name='enter_phone' placeholder='Enter your phone' onChange={(e) => { inputEvent(e, "enter_phone") }} /><br />

                                                </div>
                                                <div className='d-flex align-items-center p-3'> <AiFillDelete className='deleicon' /> </div>
                                            </div>
                                            <div className='emailinputandtext'>
                                                <div className='emailtext '>Name</div>
                                                <div className='p-2 inpdivforwit '>
                                                    <input type="text" className='inputsurvey ' name='enter_name' placeholder='Enter your name' onChange={(e) => { inputEvent(e, "enter_phone") }} /><br />

                                                </div>
                                                <div className='d-flex align-items-center p-3'> <AiFillDelete className='deleicon' /> </div>
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
            <div className='col-sm-3 offset-2 '>
               
                <div className='row mt-4'>
                    <div className='col-sm-12 text-center'>
                        <h3>Preview</h3>
                    </div>
                </div>
                <div className='backdivofacard'>
                {chatToggle ? (
                    <>
                    <div className=' background_img'>
                    <div className='img_color'>
                        <div className='d-flex justify-content-between'>
                            <div className='hitheretext p-4 mt-4'>
                                <h2>{getStarted.status}</h2>
                                <p className='text-light messagetextcard'>{getStarted.message}</p>
                            </div>
                            <div className='iconmainduv'>
                                <span className='threedoticoon'> <BsThreeDotsVertical /> </span> &nbsp;
                                <span className='threedoticoon'> <RiArrowDropDownLine /> </span>
                            </div>
                        </div>
                        <div className=' maindivofaimme   align-items-center'>
                            <div className='d-flex align-items-center p-2'>
                                <div className='doticononline'></div>
                                <div className='weimmediatex'>We reply immediately</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sometextmessages'></div>
                <div className='indiv d-flex'>
                    <input type="text" placeholder='Enter your message... ' className='' />

                    <span className="input-group-text text_send"><button className=' custom_send'><AiOutlineSend className='snd_icon' /></button></span>
                </div>
                </>
                ) : 
<>
{/* free Chat servy */}
                    <div className='bg-light '>
                        <div className='row '>
                            <div className='col-sm-12 text-end'>
                                <GrFormClose />
                            </div>
                            <div className='col-sm-12 text-center mt-5'>
                                <img className='chat_setting_profile' src={User_png} />
                                <h4 className='mt-2'>{getStarted.user_message}</h4>
                                <div className='p-4'>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text arrow"><FiArrowDownRight /></div>
                                        </div>
                                        <input type="text" class="form-control custom_control" placeholder={getStarted.enter_email} aria-label="Input group example" />
                                    </div>
                                    <div className="input-group mt-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text arrow"><FiArrowDownRight /></div>
                                        </div>
                                        <input type="text" className="form-control custom_control" placeholder={getStarted.enter_phone} aria-label="Input group example" />
                                    </div>
                                    <div className="mt-2 mb-5">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label check_label" for="flexCheckDefault">
                                            <small>{getStarted.privacy}</small>
                                        </label>
                                    </div>
                                    <button type="button" class="btn btn-primary btn-lg btn-block block_btn">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
</>
                 }
                   




                    
                </div>
            </div>
        </div>
        </>
    )
}
