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
import { useSelector } from 'react-redux';
import { chatbotSetting, chatbotSettingfetch } from '../../../../apis/Chat-api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WidgetOffline from './WidgetOffline';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Widget() {
    const [showChatbot, setshowChatbot] = useState(false);
    const [chatToggle, setChatToggle] = useState(true);
    const [display, setDisplay] = useState(false);
    const [getStarted, setgetStarted] = useState({});
    const [Images, setImages] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);
    const [fetchControl, setFetchControl] = useState(false)
    const [newlettertoggle, setNewlettertoggle] = useState(false)
    const [displayWidget, setDisplayWidget] = useState(false)
    const [displayWidget2, setDisplayWidget2] = useState(false)
    const [preChatDisplay, setPreChatDisplay] = useState(false)
    const [cardDisplay, setCardDisplay] = useState("0")


    const navigate = useNavigate();
    useEffect(() => {
        if (Images.length < 1) return;
        const newImageUrl = [];
        Images.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
        setImagesUrl(newImageUrl);

    }, [Images]);

    // login user data 
    const loginUser = useSelector(state => state.User.activeUser)

    // update state with user id 
    useEffect(() => {
        setgetStarted({ ...getStarted, "createdBy": loginUser?._id })
    }, [loginUser])


    const imageUpload = (e) => {
        setImages([...e.target.files]);
    }


    const inputEvent = (event, name) => {
        setgetStarted({ ...getStarted, [name]: event.target.value })
    }


    // create or update chatbot setting 

    const handleSubmit = () => {
        if (!getStarted?.status || !getStarted?.message) {
            toast.error("Please fill the field")
            return
        }
        chatbotSetting(getStarted).then(res => {
            setFetchControl(!fetchControl)
            toast.success(res.data.message)
        }).catch(err => console.log(err))
    }

    // fetch save setting data 

    useEffect(() => {
        chatbotSettingfetch(loginUser?._id).then((res) => {
            setgetStarted(res?.data[0])
        }).catch(err => console.log(err))
    }, [loginUser, fetchControl])

    console.log("get Started :", getStarted)

    return (
        <>
            <ToastContainer />
                <div className='d-flex justify-content-end mt-3' >
                    <Form.Select aria-label="Default select example" value={cardDisplay} style={{ width: "300px"}}
                        onChange={(e) => setCardDisplay(e.target.value)} className="select_device px-2 py-1">
                        <option value="2">Widget Visibility</option>
                        <option value="0">Get Started</option>
                        <option value="1">Pre-chat Survey</option>
                    </Form.Select>
                </div>
            <div className='container d-flex widget_div mt-4'>
                <div className='col-sm-7'>
                    <div className="accordion mt-5">
                        <Accordion style={{ border: "none" }}>
                            <Accordion.Item eventKey="0" onClick={() => setCardDisplay("2")}>
                                <Accordion.Header className='text-dark border_acc'>
                                    <AiFillEye className='iconofwidget' /> &nbsp;  &nbsp; <h5 className='widget_header'>Widget Visibility</h5>
                                </Accordion.Header>
                                <hr className='margin_hr' />
                                <Accordion.Body>
                                    <div className='row'>
                                        <div className='col-sm-12 d-flex p-3'>
                                            <label className='display_widget'>Display Widget</label>
                                            <div className="form-check form-switch check_custom">
                                                <input className="form-check-input" type="checkbox" value={displayWidget} id="flexSwitchCheckChecked" onClick={() => setDisplayWidget(!displayWidget)} />
                                            </div>
                                        </div>
                                        {displayWidget && <div className='col-sm-12 d-flex p-3 pb-0'>
                                            <label className='display_widget'>Devices</label>
                                            <Form.Select aria-label="Default select example" value={getStarted?.devices}
                                                onChange={(e) => { inputEvent(e, "devices") }} className="select_device px-2 py-1">
                                                <option value="Both on desktop and mobile devices">Both on desktop and mobile devices</option>
                                                <option value="Only on desktop devices">Only on desktop devices</option>
                                                <option value="Only on mobile devices">Only on mobile devices</option>
                                            </Form.Select>
                                        </div>}
                                        {/* <div className='col-sm-12'>
                                        <label className='hide_screen'>Hide on specific</label>
                                    </div> */}
                                        <div className='col-sm-12 d-flex p-3'>
                                            <label className='display_chat'>Display the Chat<br /> When You're Offline</label>
                                            <div className="form-check form-switch check_chat">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" value={displayWidget2} onChange={() => setDisplayWidget2(!displayWidget2)} />
                                            </div>
                                        </div>
                                        {displayWidget2 &&
                                            <>
                                            <div className='col-sm-12 d-flex p-3'>
                                            <label className='display_chat'>Display the Chat<br />
                                            <small className='color_small' onClick={()=> navigate("/offtime")}>(adjust online hour)</small>
                                            </label>
                                            <div className="form-check form-switch ">
                                                <input className="form-control" />
                                            </div>
                                        </div>
                                        <div className='col-sm-12 d-flex p-3'>
                                            <label className='display_chat'>Offline message</label>
                                            <div className="form-check form-switch ">
                                                <textarea className="form-control" id="exampleFormControlTextarea1" value={getStarted?.offlineMessage} onChange={(e) => { inputEvent(e, "offlineMessage") }} rows="2"></textarea>
                                            </div>
                                        </div>
                                            </>}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" onClick={() => setCardDisplay("0")}>
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
                                            <textarea className="form-control" value={getStarted?.status} name='status' rows="2" placeholder='Enter your status here' onChange={(e) => { inputEvent(e, "status") }}></textarea> <br />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-2 col-sm-12'>
                                            <label className='status_p '>message:</label><br />
                                        </div>
                                        <div className='col-md-10 col-sm-12'>

                                            <textarea className="form-control custom_form_control" value={getStarted?.message} name='message' rows="2" placeholder='enter Your message here' onChange={(e) => { inputEvent(e, "message") }} ></textarea> <br />

                                        </div>
                                    </div>
                                    {/* <div className='row'>
                                        <div className='col-md-2 col-sm-12'>
                                            <label className='status_p_label'>Background:</label> <br />
                                        </div>

                                        <div className='col-md-10 col-sm-12'>

                                            <div className="form-check form-switch check_background">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                {imagesUrl.map(imageSrc => <img src={imageSrc} className='back_image' alt='imagesrc' />)}
                                                <input type="file" style={{ width: 200, fontSize: 14 }} onChange={imageUpload}></input>
                                            </div>
                                        </div>
                                    </div> */}
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* <Accordion.Item eventKey="2">
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
                            </Accordion.Item> */}
                            <Accordion.Item eventKey="3" onClick={() => setCardDisplay("1")}>
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
                                                <div className="form-check form-switch ">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" value={preChatDisplay} onChange={() => setPreChatDisplay(!preChatDisplay)} /> <BsFillQuestionCircleFill className='question_mark' />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            preChatDisplay &&
                                            <>
                                                <div className='col-sm-12 display_display mt-2'>
                                                    <div className='col-sm-2'>
                                                        <label className='btn_position_size'>Message :</label>
                                                    </div>
                                                    <div className='col-sm-7  messgaein'>
                                                        <input type="text" className='inputsurvey1 w-100' value={getStarted?.user_message} name='user_message' placeholder='Enter your text...' onChange={(e) => { inputEvent(e, "user_message") }} />
                                                    </div>
                                                </div>
                                                <div className='display_display mt-3 '>
                                                    <div className='d-flex col-sm-2'>
                                                        <label className='btn_position_size'>Survey Fields:</label>
                                                    </div>
                                                    <div className='bg_email '>
                                                        <div className='emailinputandtext'>
                                                            <div className='emailtext '>Name</div>
                                                            <div className='p-2 inpdivforwit'>
                                                                <input type="text" className='inputsurvey' value={getStarted?.enter_phone} name='enter_phone' placeholder='Enter your name' onChange={(e) => { inputEvent(e, "enter_phone") }} /><br />

                                                            </div>
                                                            {/* <div className='d-flex align-items-center p-3'> <AiFillDelete className='deleicon' /> </div> */}
                                                        </div>
                                                        <div className='emailinputandtext'>
                                                            <div className='emailtext '>Email</div>
                                                            <div className='p-2 '>
                                                                <input type="email" className='inputsurvey ' value={getStarted?.enter_email} name='enter_email' placeholder='Enter your email' onChange={(e) => { inputEvent(e, "enter_email") }} /><br />
                                                                <span><input type="checkbox" onClick={() => setNewlettertoggle(!newlettertoggle)} placeholder='Enter your text' /></span>
                                                                <span className='p-2 askvisitor'>Ask your visitor for newsletter permission</span>

                                                            </div>
                                                            {/* <div className='d-flex align-items-center p-3'> <AiFillDelete className='deleicon' /> </div> */}
                                                        </div>
                                                        <div className='emailinputandtext'>
                                                            <div className='emailtext '>GDPR</div>
                                                            <div className='p-2 inpdivforwit '>
                                                                <input type="text" className='inputsurvey ' value={getStarted?.gdpr} name='gdpr' placeholder='GDPR' onChange={(e) => { inputEvent(e, "gdpr") }} /><br />

                                                            </div>
                                                            {/* <div className='d-flex align-items-center p-3'> <AiFillDelete className='deleicon' /> </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {/* <div className='col-sm-12 width_add d-flex mt-3'>
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
                                        </div> */}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <button className='btn btn-primary' onClick={handleSubmit} >Save</button>
                </div>
                <div className='col-sm-3 offset-2 '>

                    <div className='row mt-4'>
                        <div className='col-sm-12 text-center'>
                            <h3>Preview</h3>
                        </div>
                    </div>
                    <div className='backdivofacard'>
                        {cardDisplay == "0" &&
                            <>
                                <div className=' background_img'>
                                    <div className='img_color'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='hitheretext p-4 mt-4'>
                                                <h2>{getStarted?.status}</h2>
                                                <p className='text-light messagetextcard'>{getStarted?.message}</p>
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
                        }
                        {
                            cardDisplay == "1" &&
                            <>
                                {/* free Chat servy */}
                                <div className='bg-light '>
                                    <div className='row '>
                                        {/* <div className='col-sm-12 text-end'>
                                            <GrFormClose />
                                        </div> */}
                                        <div className='col-sm-12 text-center mt-5'>
                                            <img className='chat_setting_profile' src={User_png} alt="user" />
                                            <h4 className='mt-2'>{getStarted.user_message}</h4>
                                            <div className='p-4'>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text arrow"><FiArrowDownRight /></div>
                                                    </div>

                                                    <input type="text" className="form-control custom_control" placeholder={getStarted.enter_phone} aria-label="Input group example" />

                                                </div>
                                                <div className="input-group mt-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text arrow"><FiArrowDownRight /></div>
                                                    </div>

                                                    <input type="text" className="form-control custom_control" placeholder={getStarted.enter_email} aria-label="Input group example" />

                                                </div>
                                                <div className="mt-2 mb-5">
                                                    {newlettertoggle &&
                                                        <>
                                                            <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault" />
                                                            <label className="form-check-label check_label" for="flexCheckDefault">
                                                                <small>signup for our newsletter</small>
                                                            </label>
                                                        </>
                                                    }
                                                </div>
                                                <button type="button" className="btn btn-primary btn-lg btn-block block_btn">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            cardDisplay == "2" &&
                             <WidgetOffline  getStarted={getStarted}/>
                        }






                    </div>
                </div>
            </div>
        </>
    )
}
